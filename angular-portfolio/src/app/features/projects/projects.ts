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
      github: 'https://github.com/kanishr11/leave-management-uixu',
      live: '#'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Feature-complete e-commerce platform with product management, shopping cart, admin dashboard, and simulated payment flow. Integrated Angular frontend with Spring Boot backend APIs.',
      tech: ['Angular', 'Spring Boot', 'MySQL', 'REST APIs'],
      github: 'https://github.com/kanishr11/ClassyGlow_pb',
      live: 'https://classy-front-end.vercel.app/'
    },
    {
      title: 'Angular Portfolio',
      description: 'Modern, responsive personal portfolio website built with Angular 21 and Tailwind CSS. Features smooth animations, mobile-first design, reactive contact form, and clean component architecture.',
      tech: ['Angular', 'Tailwind CSS', 'TypeScript', 'Reactive Forms'],
      github: 'https://github.com/kanishr11/Protfolio',
      live: 'https://protfolio-rho-lovat.vercel.app/'
    },
    {
      title: 'Gallery Application',
      description:'Responsive gallery application developed using Angular and Tailwind CSS with clean UI components, image management features, and modern frontend architecture.',
      tech: ['Angular', 'Tailwind CSS', 'TypeScript'],
      github: 'https://github.com/kanishr11/gallery-applaction',
      live: 'https://gallery-applaction.vercel.app/'
      },
      {
      title: 'Movie Booking System',
      description:'Full-stack movie booking application developed during college using React, Node.js, Express.js, and MongoDB with user authentication and booking functionality.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      github: 'https://github.com/kanishr11/movie_booking_app',
      live: 'https://movie-booking-wine.vercel.app/'
      },
      {
      title: 'Temperature Converter',
      description:'Simple temperature converter web application built using HTML, CSS, and JavaScript with responsive UI and real-time unit conversion functionality.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/kanishr11/temperature_task_3',
      live: 'https://temperature-task-3.vercel.app/'
    }
  ];
}
