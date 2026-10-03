import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  status: string;
  type: string;
  summary: string;
  details: string[];
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
      title: 'Enterprise HRMS & Leave Management Platform',
      status: 'Currently In Progress',
      type: 'Independent Product',
      summary: 'A tenant-aware enterprise HRMS focused on employee lifecycle management, multi-role access, and leave workflows.',
      details: [
        'Authentication and authorization using Spring Security and JWT.',
        'Company and employee management with RBAC-based access control.',
        'Leave workflows, permissions, and dashboard-driven insight surfaces.',
        'Multi-tenant architecture with modular system design.'
      ],
      tech: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'JWT', 'RBAC', 'Spring Security'],
      github: 'https://github.com/kanishr11',
      live: '#'
    },
    {
      title: 'MERN Stack E-Commerce Application',
      status: 'Personal Project',
      type: 'Full Stack Project',
      summary: 'A full-stack shopping application built with React, Node.js, Express.js, and MongoDB to model product browsing and purchase flows.',
      details: [
        'Product listing, cart, and checkout flows for end-user shopping journeys.',
        'Authentication and user-focused storefront experiences.',
        'Admin-related product and order workflows.',
        'Payment integration for a complete purchase flow.'
      ],
      tech: ['React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Payment Integration'],
      github: 'https://github.com/kanishr11',
      live: '#'
    }
  ];
}
