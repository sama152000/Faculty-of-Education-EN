import { Injectable } from '@angular/core';
import { Department } from '../model/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departments: Department[] = [
    {
      id: 'curricula-teaching',
      name: 'Department of Curricula & Teaching Methods',
      description: 'Specializes in preparing future teachers and developing modern teaching methods and their applications across various academic subjects.',
      icon: 'pi pi-book',
      order: 1
    },
    {
      id: 'foundations-education',
      name: 'Department of Foundations of Education',
      description: 'Focuses on studying the philosophies and fundamental principles of education, its relationship with society, and the development of educational policies.',
      icon: 'pi pi-building',
      order: 2
    },
    {
      id: 'mental-health',
      name: 'Department of Mental Health',
      description: 'Dedicated to studying the mental health of students and teachers, providing support programs and psychological counseling services.',
      icon: 'pi pi-heart',
      order: 3
    },
    {
      id: 'psychology',
      name: 'Department of Psychology',
      description: 'Explores human behavior and learning processes, with an emphasis on the applications of educational psychology.',
      icon: 'pi pi-users',
      order: 4
    },
    {
      id: 'comparative-education',
      name: 'Department of Comparative Education & Educational Administration',
      description: 'Concerned with the study of educational systems worldwide and the management of educational institutions using modern and effective approaches.',
      icon: 'pi pi-globe',
      order: 5
    }
  ];

  getDepartments(): Department[] {
    return this.departments.sort((a, b) => a.order - b.order);
  }

  getDepartmentById(id: string): Department | undefined {
    return this.departments.find(dept => dept.id === id);
  }

  getDepartmentsByIds(ids: string[]): Department[] {
    return this.departments.filter(dept => ids.includes(dept.id));
  }
}