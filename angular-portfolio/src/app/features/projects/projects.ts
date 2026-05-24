import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html'
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      title: 'Leave Management System',
      description: 'Full-stack enterprise system with role-based authentication and multi-level approval workflows. Built REST APIs and an Angular UI for managing employee leave requests with real-time status tracking.',
      tech: ['Angular', 'Spring Boot', 'PostgreSQL', 'RBAC', 'REST APIs'],
      github: 'https://github.com/kanishr110',
      live: '#'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Feature-complete e-commerce platform with product management, shopping cart, admin dashboard, and simulated payment flow. Integrated Angular frontend with Spring Boot backend APIs.',
      tech: ['Angular', 'Spring Boot', 'MySQL', 'REST APIs'],
      github: 'https://github.com/kanishr110',
      live: '#'
    },
    {
      title: 'Angular Portfolio',
      description: 'Modern, responsive personal portfolio website built with Angular 21 and Tailwind CSS. Features smooth animations, mobile-first design, reactive contact form, and clean component architecture.',
      tech: ['Angular', 'Tailwind CSS', 'TypeScript', 'Reactive Forms'],
      github: 'https://github.com/kanishr110',
      live: '#'
    }
  ];
}
