import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillGroup {
  category: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html'
})
export class SkillsComponent {
  skillGroups: SkillGroup[] = [
    {
      category: 'Frontend',
      items: ['Angular', 'TypeScript', 'RxJS', 'HTML', 'CSS', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      items: ['Java', 'Spring Boot', 'REST APIs', 'Spring Security']
    },
    {
      category: 'Database',
      items: ['PostgreSQL', 'SQL', 'pgAdmin']
    },
    {
      category: 'Security',
      items: ['JWT', 'RBAC', 'Authentication', 'Authorization']
    },
    {
      category: 'Engineering Tools',
      items: ['Git', 'GitHub', 'Postman', 'Maven']
    },
    {
      category: 'Production Engineering',
      items: ['Debugging', 'Root Cause Analysis', 'API Troubleshooting', 'Performance Optimization']
    },
    {
      category: 'Project Stack',
      items: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript']
    }
  ];
}
