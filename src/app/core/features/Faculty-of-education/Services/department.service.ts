import { Injectable } from '@angular/core';
import { Department } from '../model/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departments: Department[] = [
    {
      id: 'curricula-teaching',
      name: 'Curricula and Teaching Methods',
      description: 'Specializes in preparing future teachers and developing modern teaching methods and their applications across various academic subjects.',
      icon: 'pi pi-book',
      order: 1,
      viceDean: 'Prof. Dr. Ahmed Hassan Mohamed',
      subjects: [
        'Teaching Methods in Arabic Language',
        'Teaching Methods in Mathematics',
        'Teaching Methods in Science',
        'Curriculum Development and Design',
        'Educational Technology',
        'Assessment and Evaluation Methods',
        'Special Education Teaching Methods',
        'Teaching Methods in Social Studies'
      ],
      objectives: [
        'Prepare qualified teachers capable of using modern teaching methods',
        'Develop innovative curricula that meet contemporary educational needs',
        'Enhance the use of educational technology in teaching processes',
        'Improve assessment and evaluation methods in education',
        'Conduct research in curriculum development and teaching methods',
        'Provide training programs for in-service teachers',
        'Foster critical thinking and creativity in educational practices'
      ],
      services: [
        'Teacher preparation and training programs',
        'Curriculum development consultancy',
        'Educational technology integration support',
        'Assessment design and implementation',
        'Research supervision and guidance',
        'Professional development workshops',
        'Educational material development',
        'Teaching practice supervision'
      ]
    },
    {
      id: 'foundations-education',
      name: 'Foundations of Education',
      description: 'Focuses on studying the philosophies and fundamental principles of education, its relationship with society, and the development of educational policies.',
      icon: 'pi pi-building',
      order: 2,
      viceDean: 'Prof. Dr. Fatma Ali Ibrahim',
      subjects: [
        'Philosophy of Education',
        'History of Education',
        'Sociology of Education',
        'Economics of Education',
        'Comparative Education',
        'Educational Policy and Planning',
        'Educational Research Methods',
        'Ethics in Education'
      ],
      objectives: [
        'Understand the philosophical foundations of educational systems',
        'Analyze the historical development of educational thought',
        'Examine the relationship between education and society',
        'Develop educational policies based on sound principles',
        'Conduct comparative studies of educational systems',
        'Promote ethical practices in educational settings',
        'Foster critical analysis of educational issues'
      ],
      services: [
        'Educational policy consultation',
        'Historical education research',
        'Philosophical education analysis',
        'Comparative education studies',
        'Educational planning support',
        'Research methodology training',
        'Ethics in education workshops',
        'Educational reform guidance'
      ]
    },
    {
      id: 'mental-health',
      name: 'Mental Health',
      description: 'Dedicated to studying the mental health of students and teachers, providing support programs and psychological counseling services.',
      icon: 'pi pi-heart',
      order: 3,
      viceDean: 'Prof. Dr. Mohamed Saeed Abdel Rahman',
      subjects: [
        'Mental Health Principles',
        'Psychological Counseling',
        'Crisis Intervention',
        'Group Therapy Techniques',
        'Child and Adolescent Mental Health',
        'Stress Management',
        'Behavioral Disorders',
        'Therapeutic Communication'
      ],
      objectives: [
        'Promote mental health awareness in educational settings',
        'Provide effective psychological counseling services',
        'Develop intervention programs for mental health issues',
        'Train professionals in mental health support',
        'Conduct research on educational mental health',
        'Create supportive environments for students and staff',
        'Implement prevention programs for psychological disorders'
      ],
      services: [
        'Individual psychological counseling',
        'Group therapy sessions',
        'Crisis intervention support',
        'Mental health assessment',
        'Stress management programs',
        'Professional training workshops',
        'Research and evaluation services',
        'Community outreach programs'
      ]
    },
    {
      id: 'psychology',
      name: 'Psychology',
      description: 'Explores human behavior and learning processes, with an emphasis on the applications of educational psychology.',
      icon: 'pi pi-users',
      order: 4,
      viceDean: 'Prof. Dr. Nadia Mahmoud Hassan',
      subjects: [
        'Educational Psychology',
        'Developmental Psychology',
        'Cognitive Psychology',
        'Learning Theories',
        'Psychological Testing and Measurement',
        'Behavioral Psychology',
        'Social Psychology',
        'Research Methods in Psychology'
      ],
      objectives: [
        'Understand psychological principles in educational contexts',
        'Apply learning theories to improve educational outcomes',
        'Develop psychological assessment tools',
        'Conduct research on human behavior and learning',
        'Train educators in psychological principles',
        'Promote evidence-based educational practices',
        'Support individual differences in learning'
      ],
      services: [
        'Psychological assessment and testing',
        'Educational psychology consultation',
        'Learning disability evaluation',
        'Behavioral intervention programs',
        'Research design and analysis',
        'Professional development training',
        'Psychological research supervision',
        'Educational program evaluation'
      ]
    },
    {
      id: 'comparative-education',
      name: 'Comparative Education and Educational Administration',
      description: 'Concerned with the study of educational systems worldwide and the management of educational institutions using modern and effective approaches.',
      icon: 'pi pi-globe',
      order: 5,
      viceDean: 'Prof. Dr. Omar Abdel Aziz Mohamed',
      subjects: [
        'Comparative Education Systems',
        'Educational Administration',
        'Educational Leadership',
        'School Management',
        'Educational Finance',
        'Human Resources in Education',
        'Educational Quality Assurance',
        'International Education Policies'
      ],
      objectives: [
        'Compare educational systems across different countries',
        'Develop effective educational administration practices',
        'Train educational leaders and administrators',
        'Improve school management systems',
        'Enhance educational quality assurance',
        'Promote international educational cooperation',
        'Conduct research on educational governance'
      ],
      services: [
        'Educational system analysis',
        'Administrative training programs',
        'Leadership development workshops',
        'School management consultation',
        'Quality assurance evaluation',
        'Policy development support',
        'International education partnerships',
        'Research and comparative studies'
      ]
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

  getDepartmentNavigation(currentId: string) {
    const departments = this.getDepartments();
    const currentIndex = departments.findIndex(dept => dept.id === currentId);
    
    if (currentIndex === -1) {
      return null;
    }

    return {
      currentIndex,
      totalDepartments: departments.length,
      previousDepartment: currentIndex > 0 ? departments[currentIndex - 1] : undefined,
      nextDepartment: currentIndex < departments.length - 1 ? departments[currentIndex + 1] : undefined
    };
  }
}