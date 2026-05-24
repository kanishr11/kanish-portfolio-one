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
      category: 'Languages & Frameworks',
      items: ['Java (8/17)', 'Spring Boot', 'Angular 14+', 'TypeScript', 'JavaScript']
    },
    {
      category: 'Frontend',
      items: ['Angular Material', 'Reactive Forms', 'Tailwind CSS', 'HTML5', 'CSS3']
    },
    {
      category: 'Backend & APIs',
      items: ['REST APIs', 'Microservices', 'API Integration', 'RBAC Systems']
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'MongoDB']
    },
    {
      category: 'Tools & DevOps',
      items: ['Git', 'GitHub', 'Postman', 'PgAdmin', 'Production Deployment']
    },
    {
      category: 'AI & Productivity',
      items: ['Prompt Engineering', 'AI-assisted Development']
    }
  ];
}
