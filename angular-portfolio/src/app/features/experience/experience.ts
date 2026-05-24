import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html'
})
export class ExperienceComponent {

  experiences: Experience[] = [
    {
      role: 'Associate Software Engineer',
      company: 'TekFilo Innovation Pvt Ltd',
      duration: 'May 2024 – Present | Coimbatore, India',
      description: [
        'Completed a 3-month internship in 2 months and was offered a full-time role ahead of schedule due to high performance.',
        'Serve as the sole production deployment developer — independently managing all live releases and ensuring application uptime and stability.',
        'Delivered 15+ enterprise-grade modules using Angular 14+ and Spring Boot within the first year.',
        'Designed and implemented a dynamic Role-Based Access Control (RBAC) system, enabling fine-grained access management across the platform.',
        'Integrated RESTful backend APIs with reactive Angular UIs, enabling real-time data handling for enterprise users.',
        'Worked with PostgreSQL, MySQL, and MongoDB for database design and optimization.',
        'Leveraged AI tools and prompt engineering to accelerate development cycles and improve code quality.'
      ]
    },
    {
      role: 'B.Tech — Information Technology',
      company: 'Karpagam College of Engineering',
      duration: '2021 – 2025 | CGPA: 7.6',
      description: [
        'Graduated with a B.Tech in Information Technology.',
        'Built full-stack projects including a Leave Management System and an E-Commerce Platform.',
        'Gained hands-on experience in Java, Angular, Spring Boot, and database systems.'
      ]
    }
  ];
}
