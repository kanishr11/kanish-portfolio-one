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
      company: 'TekFilo Innovation Pvt. Ltd.',
      duration: 'May 2025 – Present | Coimbatore, Tamil Nadu',
      description: [
        'Contributing to production ERP application development across frontend, backend, API integration, and database layers.',
        'Working with Angular, TypeScript, Java, Spring Boot, and REST APIs to build and improve enterprise workflows.',
        'Handling production debugging, root cause analysis, API troubleshooting, database investigation, and performance optimization.',
        'Supporting 20+ ERP modules across trading, manufacturing, inventory, accounts, and reports.',
        'Working with PostgreSQL to analyze data issues and support production stability in business-critical workflows.',
        'Operating within GitHub-based development practices while maintaining and improving existing source code in real production environments.'
      ]
    }
  ];
}
