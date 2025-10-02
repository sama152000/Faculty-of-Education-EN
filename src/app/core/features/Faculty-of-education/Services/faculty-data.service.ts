import { Injectable } from '@angular/core';
import { ServiceCategory, StatisticTab, StaffMember } from '../model/services.model';

@Injectable({
  providedIn: 'root'
})
export class FacultyDataService {

  getStudentServices(): ServiceCategory[] {
    return [
      {
        id: 'prospective',
        title: 'Prospective Students',
        description: 'Comprehensive support for students considering enrollment',
        icon: 'pi pi-users',
        services: [
          {
            id: 'guidance',
            title: 'Academic Guidance',
            description: 'Guidance and orientation about study systems and academic programs'
          },
          {
            id: 'technical-support',
            title: 'Technical Support',
            description: 'Technical support during online application process'
          },
          {
            id: 'inquiries',
            title: 'Admission Inquiries',
            description: 'Responding to inquiries about admission requirements'
          }
        ],
        deliveryMethods: [
          { id: 'booklets', method: 'Guidance Booklets', icon: 'pi pi-book' },
          { id: 'online', method: 'Online Platforms', icon: 'pi pi-desktop' },
          { id: 'reception', method: 'Reception & Information Desks', icon: 'pi pi-building' }
        ]
      },
      {
        id: 'current',
        title: 'Current Students',
        description: 'Essential services for undergraduate students',
        icon: 'pi pi-graduation-cap',
        services: [
          {
            id: 'registration',
            title: 'Course Registration',
            description: 'Course registration and class schedules management'
          },
          {
            id: 'counseling',
            title: 'Academic Counseling',
            description: 'Academic and psychological counseling services'
          },
          {
            id: 'health',
            title: 'Health Services',
            description: 'Health and medical services for students'
          },
          {
            id: 'activities',
            title: 'Student Activities',
            description: 'Cultural, sports, and social activities'
          },
          {
            id: 'financial',
            title: 'Financial Support',
            description: 'Solidarity fund and student aid programs'
          }
        ],
        deliveryMethods: [
          { id: 'portals', method: 'Online Portals', icon: 'pi pi-globe' },
          { id: 'workshops', method: 'Workshops', icon: 'pi pi-cog' },
          { id: 'apps', method: 'Smart Applications', icon: 'pi pi-mobile' }
        ]
      },
      {
        id: 'postgraduate',
        title: 'Postgraduate Students',
        description: 'Specialized support for graduate research students',
        icon: 'pi pi-star',
        services: [
          {
            id: 'research-registration',
            title: 'Research Registration',
            description: 'Registration and monitoring of research plans'
          },
          {
            id: 'supervision',
            title: 'Academic Supervision',
            description: 'Academic supervision and research support'
          },
          {
            id: 'publishing',
            title: 'Scientific Publishing',
            description: 'Facilitating scientific publishing and conference participation'
          },
          {
            id: 'training',
            title: 'Training Workshops',
            description: 'Providing training workshops and platforms'
          }
        ],
        deliveryMethods: [
          { id: 'seminars', method: 'Seminars', icon: 'pi pi-microphone' },
          { id: 'meetings', method: 'Meetings', icon: 'pi pi-users' },
          { id: 'communication', method: 'Online Communication', icon: 'pi pi-desktop' }
        ]
      }
    ];
  }

  getStatistics(): StatisticTab[] {
    return [
      {
        id: 'enrolled-students',
        title: 'Statistics of Enrolled Students – Academic Year 2024/2025',
        data: [
          { label: 'Arabic', value: 25 },
          { label: 'English', value: 26 },
          { label: 'Physics', value: 22 },
          { label: 'Chemistry', value: 37 },
          { label: 'Mathematics', value: 52 },
          { label: 'Biology', value: 36 }
        ]
      },
      {
        id: 'postgraduate-diploma',
        title: 'Postgraduate Diploma in Education (Credit Hours System) – 2024/2025',
        data: [
          {
            label: 'Classroom Teacher Track (Grades 1–3)',
            value: 89,
            subItems: [
              { label: 'Total Students', male: 14, female: 75, total: 89 }
            ]
          },
          {
            label: 'Upper Primary Teacher Track (Grades 4–6)',
            value: 0,
            subItems: []
          },
          {
            label: 'Subject Teacher Track (Grades 7–12)',
            value: 0,
            subItems: []
          },
          {
            label: 'Total Program Enrollment',
            value: 248,
            subItems: [
              { label: 'All Tracks Combined', male: 45, female: 203, total: 248 }
            ]
          }
        ]
      }
    ];
  }

  getStaffMembers(): StaffMember[] {
    return [
      {
        id: 1,
        name: 'Dr. Mohamed Atta Negdy',
        position: 'Senior Language Instructor',
        phone: '01095953313',
        department: 'Languages'
      },
      {
        id: 2,
        name: 'Mahmoud Mohamed Ibrahim',
        position: 'Faculty Secretary',
        phone: '01006820901',
        department: 'Administration'
      },
      {
        id: 3,
        name: 'Sameh Mohamed Ramadan',
        position: 'Postgraduate Affairs + Fingerprint Officer',
        phone: '01023425622',
        department: 'Postgraduate Studies'
      },
      {
        id: 4,
        name: 'Abdallah Abdel-Galil Ali',
        position: 'Library Officer + Clerk',
        phone: '01004212220',
        department: 'Library Services'
      },
      {
        id: 5,
        name: 'Hassan Youssef Hasb-Allah',
        position: 'Youth Welfare Officer',
        phone: '01069310171',
        department: 'Student Affairs'
      },
      {
        id: 6,
        name: 'Hamdy Mohamed Atta',
        position: 'Payment Representative',
        phone: '01091450814',
        department: 'Finance'
      },
      {
        id: 7,
        name: 'Karima Sayed Ali',
        position: 'Student Affairs Officer',
        phone: '01099164895',
        department: 'Student Affairs'
      },
      {
        id: 8,
        name: 'Fatma Othman Gaber',
        position: 'Human Resources Officer',
        phone: '01013638940',
        department: 'Human Resources'
      },
      {
        id: 9,
        name: 'Asmaa Abdel-Rahim Zaki',
        position: 'Stores Secretary',
        phone: '01010929621',
        department: 'Administration'
      },
      {
        id: 10,
        name: 'Naglaa Gamal Basheer',
        position: 'Student Affairs Employee',
        phone: '01273111375',
        department: 'Student Affairs'
      },
      {
        id: 11,
        name: 'Faiza Ahmed Hassani',
        position: 'Services Assistant',
        phone: '01005758697',
        department: 'General Services'
      }
    ];
  }
}