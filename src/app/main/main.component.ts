import { NgFor, NgIf, NgStyle, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SharedService } from '../services/shared.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FadeInOnScrollDirective } from '../fade-in-on-scroll.directive';



@Component({
  selector: 'app-main',
  imports: [
    NgFor,
    MatIconModule,
    NgIf,
    FadeInOnScrollDirective

  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {

  dropdownOpen: boolean = false
  dropdownNxt: boolean = false

  projects: any = []
  constructor(private _shared: SharedService, private sanitizer: DomSanitizer) {
    this.projects = [
      {
        title: 'Admin Web Application',
        description: this.sanitizer.bypassSecurityTrustHtml(`
          <p>Developed a dynamic, scalable admin web application implementing granular role-based access control defining precise permissions for support, marketing, and operations teams—ensuring secure, role-specific feature access and streamlined internal workflows.</p>
           <h3 class="text-xl text-[#fff] font-semibold mt-3 underline">Key Features</h3>
          <ul  class="list-disc font-light pl-5 space-y-2 animated-list text-[#fff] md:text-[15px] text-[13px] text-justify mt-3">
            <li>Implemented conditional rendering and dynamic UI updates based on user type to enhance user experience and security.</li>
            <li>Used Firebase to add real-time messaging and notifications, helping teams communicate faster and respond quickly.</li>
            <li>Built bulk import functionality to efficiently handle and process large data sets, significantly reducing manual data entry time.</li>
            <li>Designed and maintained reusable, modular components to promote code reusability, maintainability, and faster development cycles.</li>
            <li>Applied debounce techniques in input fields and API calls to optimize performance and reduce unnecessary server requests.</li>
            <li>Established global API error and success handling mechanisms to provide consistent feedback and improve application stability.</li>
            <li>Utilized Reactive Forms in Angular to implement complex form workflows, such as adding new plans and managing features dynamically within the Flip Health user app.</li>
            <li>Collaborated with cross-functional teams to gather requirements and deliver scalable solutions that improve operational efficiency.</li>
            <li>used single service to structure filterpais like use can apply many filteres to fetch data</li>
            <li>Enabled support team to efficiently manage user tickets and implemented a real-time chat system for direct communication between customers and support agents.</li>
            <li>Developed functionality allowing customer support members to raise orders on behalf of patients (users), streamlining the ordering process and improving customer service.</li>
            <li>Developed a reusable notes component within the admin panel, enabling internal teams to attach and review order-specific messages directly from the order view. This feature improved communication between departments, ensured that important updates were not lost in external channels, and created a centralised history of interactions for each order, enhancing traceability and operational efficiency</li>
          </ul>
           <h3  class="text-xl text-[#fff] font-semibold mt-3 underline">Challenges & Solutions</h3>
  <ul  class="list-disc font-light pl-5 space-y-2 animated-list text-[#fff] text-[13px] md:text-[15px] text-justify mt-3">
    <li>In our admin panel, each module had its own filter system, which caused inconsistent UI, duplicated code, and made maintenance difficult. I addressed this by designing a single, reusable filter component backed by a centralized service. This component accepts configuration parameters from any module, automatically adapts its UI, and constructs the required API query parameters. This approach not only ensured consistency across the application but also reduced development time for new features.</li>
    <li>Previously, snackbars were implemented separately in every component, leading to repetitive code and inconsistent user feedback. To avoid this, I created a global error and success handling system in the admin panel. Using Angular HTTP interceptors, I centrally caught API responses and, through a service with a BehaviorSubject, broadcasted success or error events. A dedicated notification component listens to these events and displays snackbars automatically based on API status codes. This solution ensured consistent, clean, and maintainable feedback handling across the entire application.</li>
    <li> The Flip Health application offers flexible health plans that require complex nested data structures to represent various plan features, pricing tiers, and coverage options. To align with the backend’s expectations for these nested objects during plan creation and management, we enhanced the Angular Reactive Forms. This involved defining nested form groups and controls directly within the HTML template, allowing dynamic addition and validation of plan features and tiers. This approach ensured accurate data binding, streamlined user input, and facilitated seamless submission of complex plan data to the backend, improving the overall user experience and operational efficiency in managing health plans.</li>
    <li>Collaborated closely with cross-functional teams to gather requirements and deliver scalable solutions improving operational workflows.</li>
  </ul>
  <div class="bg-[#313131] rounded-sm pl-4 p-2 mt-2">
           <small>Technologies Used : </small> 
<small>Angular 13, TypeScript, RxJS, Bootstrap, Angular Material, ApexCharts, Jasmine, Karma, REST APIs, Firebase</small>

          </div>
        `),
      },
      {
        title: 'Client Admin Panel ',
        description: this.sanitizer.bypassSecurityTrustHtml(`
          <p>Developed a comprehensive client admin panel for Flip Health, enabling client organisations to manage their employees efficiently. This panel provides full control over billing, order management, consultations, and support tickets, empowering clients to oversee all aspects of their health service engagement through a single platform. The panel is designed for ease of use, with role-based access control ensuring that client admins have the right permissions to manage sensitive data securely.</p>
           <h3 class="text-xl text-[#fff] font-semibold mt-3 underline">Key Features</h3>
          <ul class="list-disc font-light pl-5 space-y-2 animated-list text-[#fff] md:text-[15px] text-[13px] text-justify mt-3">
            <li>Employee Management: Clients can add, update, or remove employee profiles, assign roles, and monitor activity.</li>
            <li>Billing & Payments: View invoices, payment statuses, and generate billing reports with ease.</li>
            <li>Order Management: Track and manage orders placed for health services and products.</li>
            <li>Consultation Scheduling: Manage employee consultations with health professionals, including booking and cancellations.</li>
            <li>Support Ticketing: Clients can raise and track support tickets related to services, with real-time status updates.</li>
            <li>Role-Based Access Control: Ensures different levels of access and control depending on the user’s role within the client organisation.</li>
          </ul>
           <h3 class="text-xl text-[#fff] font-semibold mt-3 underline">Challenges & Solutions</h3>
          <ul class="list-disc font-light pl-5 space-y-2 animated-list text-[#fff] text-[13px] md:text-[15px] text-justify mt-3">
            <li>Managing multiple client organizations with diverse employee structures and permissions created challenges in maintaining data consistency and secure access. To address this, I implemented a robust role-based authorization system tailored to client requirements, enabling dynamic permission assignment. This approach ensured strict data segregation, allowing clients to access only their own data, while providing a scalable framework to efficiently onboard new clients.</li>
            <li>As we added more features, the dashboard started taking longer to load, which slowed down the user experience. To find out why, I used browser developer tools to check what was happening behind the scenes. I found that many unnecessary API calls were being made and Angular’s change detection was running too often. To fix this, I added conditions to make sure API calls only happen when needed, used lazy loading to load parts of the app only when required, and switched to Angular’s OnPush change detection to reduce extra updates. These changes made the dashboard faster and much smoother to use.</li>
          </ul>
          <div class="bg-[#313131] rounded-sm pl-4 p-2 mt-2">
           <small>Technologies Used : </small> 
<small>Angular 14, TypeScript, RxJS, Tailwind CSS, Angular Material, ApexCharts, Jasmine, Karma, REST APIs, Firebase</small>

          </div>
        `),
      },
      {
        title: 'Enrollment Flow ',
        description: this.sanitizer.bypassSecurityTrustHtml(`
          <p>Developed a customer-facing platform that streamlines the entire onboarding process for healthcare services. It allows users to easily create accounts, explore plan options, make secure payments, and manage their subscriptions with flexibility to upgrade at any time. The system is designed to deliver a smooth, secure, and guided experience from registration to plan management.</p>
          <h3 class="text-xl text-[#fff] font-semibold mt-3 underline">Key Features</h3>
          <ul class="list-disc font-light pl-5 space-y-2 animated-list text-[#fff] md:text-[15px] text-[13px] text-justify mt-3">
            <li>Client Registration – Simple sign-up process with guided onboarding steps.</li>
             <li>Plan Browsing – View and compare available health plans.</li> 
             <li>Plan Purchase – Integrated Razorpay for smooth and secure payment processing.</li>
              <li>Plan Upgrades – Option to upgrade to higher-tier plans anytime.</li>
              <li>Subscription Management – Easy access to manage current plans and account details.</>
              <li>Implemented a dashboard displaying key metrics such as the number of employees onboarded, tickets raised, orders placed and canceled, and overall application usage statistics.</li>
              <li>Improved overall operational efficiency and user management.<li>
          </ul>
           <div class="bg-[#313131] rounded-sm pl-4 p-2 mt-2">
           <small>Technologies Used : </small> 
<small>Angular 17, TypeScript, RxJS, Tailwind CSS, Angular Material, Apex Charts, Jasmine, Karma, REST APIs, Razorpay, Firebase </small>

          </div>
          `),
        open: false,
      },
      {
        title: 'Flip Health Website',
        description: this.sanitizer.bypassSecurityTrustHtml(`
          <ul class="list-disc font-light pl-5 space-y-2 animated-list text-[#fff] md:text-[15px] text-[13px] text-justify mt-3">
            <li> I developed the Flip Health company website using Angular version 13 and Tailwind CSS, focusing on building a modern, responsive, and visually appealing interface. The site features clean navigation, fast load times, and a mobile-friendly design to ensure a seamless user experience across devices. Leveraging Angular’s powerful component architecture and Tailwind’s utility-first styling, I was able to create a scalable and maintainable codebase that effectively showcases Flip Health’s AI-driven healthcare services.</li>
          </ul>
           <div class="bg-[#313131] rounded-sm pl-4 p-2 mt-2">
           <small>Technologies Used : </small> 
<small>Angular 13, TypeScript, RxJS, Bootstrap, Angular Material, REST APIs</small>

          </div>
          `),
        open: false,
      },
      {
        title: 'AI-Powered Medical Analysis Web App',
        description: `
        <p>Developed an AI-powered healthcare platform that streamlines medical data analysis by automatically processing test results, summarizing complex medical reports, and detecting potential heart irregularities through ECG analysis. The system leverages Hugging Face-trained models to deliver accurate, fast, and easy-to-understand insights for doctors and patients, improving decision-making and reducing manual effort.</p>
          <ul class="list-disc font-light pl-5 space-y-2 animated-list text-[#fff] md:text-[15px] text-[13px] text-justify mt-3">
            <li>DTR Analysis – Automatically processes and interprets detailed test reports</li>
            <li>Report Analyzer – Reads and summarizes medical reports for easier understanding.</li>
            <li>ECG Analyzer – Evaluates heart activity and highlights potential irregularities.</li>
            <li>Trained and fine-tuned AI models from Hugging Face for medical report and ECG analysis.</li>
            
          </ul>
          <div class="bg-[#313131] rounded-sm pl-4 p-2 mt-2">
           <small>Technologies Used : </small> 
<small>Angular 17, TypeScript, RxJS, Tailwind CSS, Angular Material, REST APIs, Jasmine, Karma, Hugging face </small>

          </div>
        
        
        `,
        open: false,
      }
    ];
  }

  skillSet: any[] = [
    { name: 'Html5', img: 'html' },
    { name: 'Css', img: 'css-3' },
    { name: 'Javascript', img: 'java-script-logo' },
    { name: 'TypeScript', img: 'html' },
    { name: 'Angular', img: 'angularjs' },
    { name: 'React', img: 'atom' },
    { name: 'Bootstrap', img: 'bootstrap' },
    { name: 'Tailwind CSS', img: 'icons8-tailwind-css-50' },
    { name: 'Node Js', img: 'developer' },
    { name: 'Angular Material', img: 'icons8-angularjs-50' },
    { name: 'Express Js', img: 'icons8-express-js-48' },
    { name: 'Mysql', img: 'mysql' },
    { name: 'Squelize', img: 'sequelize' },
    { name: 'Terraform', img: 'terraform' },
    { name: 'AWS', img: 'file' },
    { name: 'Apache Tomcat', img: 'icons8-apache-24' },
    // { name: 'Jenkins' }
  ]



  backendSkills: string[] = [
    'express-js', 'mongo-db', 'mysql', 'nodejs', 'python'
  ]

  @ViewChild('journeySection') journeySection!: ElementRef;

  @ViewChild('contactInfo') contactInfo!: ElementRef




  ngOnInit(): void {
    this._shared.cuurrentVal.subscribe((res: any) => {
      if (res == 'Exp') {
        this.journeySection?.nativeElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        this.contactInfo?.nativeElement.scrollIntoView({ behavior: 'smooth' })
      }


    })

  }

  scrollToJourney(loc: string) {
    console.log('dfghjk');
    if (loc == 'Exp') {
      console.log('xejee');
      this.journeySection?.nativeElement.scrollIntoView({ behavior: 'smooth' })
    } else {
      this.contactInfo.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }

  }





}
