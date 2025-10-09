import { Injectable } from '@angular/core';
import { NavItem, SocialLink, ContactInfo } from '../model/navigation.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private mainNavItems: NavItem[] = [
    {
      id: 'home',
      label: 'Home',
      route: '/home'
    },
    {
      id: 'About Us',
      label: 'About Us',
      children: [
        {
          id: 'dean-word',
          label: 'Dean Word',
          route: '/about-us/dean-word'
        },
         {
          id: 'Faculty-history',
          label: 'Faculty-history',
          route: '/about-us/Faculty-history'
        },
        {
          id: 'vision-mission',
          label: 'Vision-Mission & Objectives',
          route: '/about-us/vision-mission'
        },
        {
          id: 'staff-members',
          label: 'Staff Members',
          route: '/about-us/staff-members'
        }
      ]
    },
    {
      id: 'news-events',
      label: 'News & Events',
      route: '/news-events'
    },
    {
      id: 'units-labs',
      label: 'Units & Laboratories',
      children: [
        {
          id: 'laboratories',
          label: 'Laboratories',
          children: [
            {
              id: 'computer-lab',
              label: 'Computer Lab',
              route: '/labs/computer'
            },
            {
              id: 'mental-health-lab',
              label: 'Mental Health Lab',
              route: '/labs/mental-health'
            },
            {
              id: 'micro-teaching-lab',
              label: 'Micro-Teaching Lab',
              route: '/labs/micro-teaching'
            },
            {
              id: 'science-lab',
              label: 'Science Lab',
              route: '/labs/science'
            }
          ]
        },
        {
          id: 'units',
          label: 'Units',
          route: '/units'
        }
      ]
    },
   {
      id: 'programs',
      label: 'Programs',
      children: [
        {
          id: 'academic-programs',
          label: 'Academic Programs',
          children: [
            {
              id: 'arabic',
              label: 'Arabic Language & Literature Teacher Preparation',
              route: '/programs/arabic'
            },
            {
              id: 'english',
              label: 'English Language & Literature Teacher Preparation',
              route: '/programs/english'
            },
            {
              id: 'french',
              label: 'French Language & Literature Teacher Preparation',
              route: '/programs/french'
            },
            {
              id: 'german',
              label: 'German Language & Literature Teacher Preparation',
              route: '/programs/german'
            },
            {
              id: 'math',
              label: 'Mathematics Teacher Preparation',
              route: '/programs/math'
            },
            {
              id: 'chemistry',
              label: 'Chemistry Teacher Preparation',
              route: '/programs/chemistry'
            },
            {
              id: 'biology',
              label: 'Biological Sciences Teacher Preparation',
              route: '/programs/biology'
            }
          ]
        },
        {
          id: 'new-programs',
          label: 'New Programs',
          children: [
            {
              id: 'math-english',
              label: 'Mathematics Teacher Preparation (English)',
              route: '/new-programs/math-english'
            },
            {
              id: 'biology-english',
              label: 'Biological Sciences Teacher Preparation (English)',
              route: '/new-programs/biology-english'
            },
            {
              id: 'physics-english',
              label: 'Physics Teacher Preparation (English)',
              route: '/new-programs/physics-english'
            },
            {
              id: 'chemistry-english',
              label: 'Chemistry Teacher Preparation (English)',
              route: '/new-programs/chemistry-english'
            }
          ]
        }
      ]
    },
    {
      id: 'faculty-administrations',
      label: 'Faculty Administrations',
      children: [
        {
          id: 'student-affairs',
          label: 'Student Affairs Administration',
          route: '/administrations/student-affairs'
        },
        {
          id: 'postgraduate',
          label: 'Postgraduate Studies Administration',
          route: '/administrations/postgraduate'
        },
        {
          id: 'hr',
          label: 'Human Resources Administration',
          route: '/administrations/hr'
        },
        {
          id: 'youth-welfare',
          label: 'Youth Welfare Administration',
          route: '/administrations/youth-welfare'
        },
        {
          id: 'labs-admin',
          label: 'Laboratories Administration',
          route: '/administrations/labs'
        },
        {
          id: 'stores',
          label: 'Stores Administration',
          route: '/administrations/stores'
        }
      ]
    },
    {
      id: 'faculty-departments',
      label: 'Faculty Departments',
      route: '',
      children: [
        {
          id: 'curricula-teaching',
          label: 'Curricula & Teaching Methods',
          route: '/department-details/curricula-teaching'
        },
        {
          id: 'foundations-education',
          label: 'Foundations of Education',
          route: '/department-details/foundations-education'
        },
        {
          id: 'mental-health',
          label: 'Mental Health',
          route: '/department-details/mental-health'
        },
        {
          id: 'psychology',
          label: 'Psychology',
          route: '/department-details/psychology'
        },
        {
          id: 'comparative-education',
          label: 'Comparative Education & Educational Administration',
          route: '/department-details/comparative-education'
        }
      ]
    },
    {
      id: 'Sectors',
      label: 'Sectors',
      children: [
        {
          id: 'vice-dean-education',
          label: 'Education & Student Affairs',
          route: '/management/vice-dean-education'
        },
        {
          id: 'vice-dean-postgraduate',
          label: 'Postgraduate Studies & Research',
          route: '/management/vice-dean-postgraduate'
        },
        {
          id: 'vice-dean-community',
          label: 'Community Service & Environmental Development',
          route: '/management/vice-dean-community'
        }
      ]
    },
    {
      id: 'contact',
      label: 'Contact Us',
      route: '/contact'
    }
  ];

  private socialLinks: SocialLink[] = [
    {
      platform: 'Facebook',
      url: 'https://facebook.com/luxoreducation',
      icon: 'pi pi-facebook',
      color: '#1877f2'
    },
    {
      platform: 'YouTube',
      url: 'https://youtube.com/luxoruniversity',
      icon: 'pi pi-youtube',
      color: '#ff0000'
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/company/luxor-university',
      icon: 'pi pi-linkedin',
      color: '#0077b5'
    }
  ];

  private contactInfo: ContactInfo = {
    address: 'Faculty of Education – Luxor University – New Tiba City, next to the New Tiba City Authority',
    phone: '01010577677',
    emails: {
      dean: 'waleed2507@yahoo.co.uk',
      journal: 'Lueduscij@fedu.luxor.edu.eg'
    }
  };

  private footerQuickLinks = [
    {
      label: 'Parent University',
      url: 'http://www.luxor.edu.eg/#/',
      external: true
    },
    {
      label: 'Official Facebook Page',
      url: 'https://facebook.com/luxoreducation',
      external: true
    },
    {
      label: 'Educational Sciences Journal',
      url: 'https://jedul.journals.ekb.eg/',
      external: true
    },
    {
      label: 'Gateway 90',
      url: '#',
      external: true
    }
  ];

  getMainNavItems(): NavItem[] {
    return this.mainNavItems;
  }

  getSocialLinks(): SocialLink[] {
    return this.socialLinks;
  }

  getContactInfo(): ContactInfo {
    return this.contactInfo;
  }

  getFooterQuickLinks() {
    return this.footerQuickLinks;
  }

  getFooterNavItems(): NavItem[] {
    return [
      {
        id: 'about-faculty',
        label: 'About the Faculty',
        route: '/about-us/Faculty-history'
      },
      {
        id: 'top-management-footer',
        label: 'Dean Word',
        route: '/about-us/dean-word'
      },
      {
        id: 'faculty-departments-footer',
        label: 'Faculty Departments',
        route: '/department-details'
      },
      {
        id: 'faculty-administrations-footer',
        label: 'Faculty Administrations',
        route: '/'
      },
      {
        id: 'programs-footer',
        label: 'Programs',
        route: '/programs'
      },
      {
        id: 'units-labs-footer',
        label: 'Units & Laboratories',
        route: '/'
      },
      {
        id: 'news-events-footer',
        label: 'News & Events',
        route: '/news-events'
      },
      {
        id: 'contact-footer',
        label: 'Contact Us',
        route: '/contact'
      }
    ];
  }
}