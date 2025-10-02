import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsEvent, NewsEventFilter, NewsEventResponse } from '../model/news-event.model';

@Injectable({
  providedIn: 'root'
})
export class NewsEventService {
  private newsEvents: NewsEvent[] = [
    {
      id: '1',
      type: 'event',
      title: 'Welcome Ceremony for New Students – Academic Year 2024/2025',
      excerpt: 'The Faculty of Education organized the first orientation meeting for first-year students under the patronage of Prof. Dr. Sabrine Abdel-Galil.',
      content: `Under the patronage of **Prof. Dr. Sabrine Abdel-Galil**, President of Luxor University, and **Prof. Dr. Waleed Mohamed Abdallah**, Dean of the Faculty of Education, and as part of the preparations for the new academic year, the Faculty of Education – Luxor University organized the first orientation meeting for first-year students (General Education Program – Credit Hours System, Unified Regulations). The event took place on Sunday, September 29, in the Grand Hall of the Faculty.

The ceremony was attended by the Dean, Vice Deans, and faculty members. The program began with the national anthem, followed by a recitation from the Holy Qur'an. The Dean then delivered a welcoming speech, stressing the importance of discipline, academic achievement, and active participation in the Faculty's activities, while also affirming that his office is always open to the students.

The event included national artistic performances presented by the students, with the "Students for Egypt" team contributing to the organization of the reception activities. Introductory booklets about the Faculty's departments and programs were distributed, and students' inquiries regarding specialization, class schedules, and course registration procedures were addressed.

The ceremony was marked by an atmosphere of joy and enthusiasm, with strong positive interaction from attendees, reflecting the spirit of family and belonging within the Faculty.`,
      date: new Date('2024-09-29'),
      images: [
        'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
      ],
      featured: true,
      category: 'Student Affairs'
    },
    {
      id: '2',
      type: 'news',
      title: 'Faculty of Education Celebration of the 51st Anniversary of the Glorious October Victory',
      excerpt: 'The Faculty organized a celebration to mark the beginning of the new academic year and the 51st anniversary of the October Victory.',
      content: `Under the patronage of **Prof. Dr. Sabrine Abdel-Galil**, President of Luxor University, and the leadership of **Prof. Dr. Waleed Mohamed Abdallah**, Dean of the Faculty of Education, and with the participation and organization of the *Students for Egypt* group, the Faculty of Education organized a celebration to mark the beginning of the new academic year and the 51st anniversary of the October Victory.

The event was attended by several Deans and Vice Deans of faculties, faculty members, and Colonel Mohamed Gamal, Military Liaison Officer. The celebration began with the national anthem, followed by verses from the Holy Qur'an. Prof. Dr. Waleed Mohamed Abdallah, Dean of the Faculty, delivered a welcoming speech in which he congratulated the students and affirmed the Faculty's full support for them.

Prof. Dr. Sabrine also delivered a patriotic address, expressing her pride in this historic victory and encouraging students to maintain discipline and engage positively in academic and extracurricular activities.

The ceremony featured artistic performances, including a **Tanoura dance show**, national songs, and religious chanting by Munshid Mohamed Abbas. The event concluded with commemorative photos taken with the attendees.`,
      date: new Date('2024-10-09'),
      images: [
        'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
      ],
      featured: true,
      category: 'University Events'
    },
    {
      id: '3',
      type: 'news',
      title: 'New Research Initiative in Educational Technology',
      excerpt: 'The Faculty launches a comprehensive research program focusing on innovative educational technologies.',
      content: 'Detailed content about the research initiative...',
      date: new Date('2024-11-15'),
      images: [
        'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
      ],
      featured: false,
      category: 'Research'
    },
    {
      id: '4',
      type: 'event',
      title: 'Annual Faculty Conference 2024',
      excerpt: 'Join us for the annual conference featuring leading educators and researchers.',
      content: 'Detailed information about the annual conference...',
      date: new Date('2024-12-10'),
      images: [
        'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
      ],
      featured: false,
      category: 'Academic Events'
    }
  ];

  getNewsEvents(filter?: NewsEventFilter, page: number = 1, pageSize: number = 6): Observable<NewsEventResponse> {
    let filteredItems = [...this.newsEvents];

    if (filter) {
      if (filter.type && filter.type !== 'all') {
        filteredItems = filteredItems.filter(item => item.type === filter.type);
      }
      
      if (filter.dateFrom) {
        filteredItems = filteredItems.filter(item => item.date >= filter.dateFrom!);
      }
      
      if (filter.dateTo) {
        filteredItems = filteredItems.filter(item => item.date <= filter.dateTo!);
      }
      
      if (filter.category) {
        filteredItems = filteredItems.filter(item => item.category === filter.category);
      }
    }

    // Sort by date (newest first)
    filteredItems.sort((a, b) => b.date.getTime() - a.date.getTime());

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedItems = filteredItems.slice(startIndex, endIndex);

    return of({
      items: paginatedItems,
      total: filteredItems.length,
      page,
      pageSize
    });
  }

  getNewsEventById(id: string): Observable<NewsEvent | null> {
    const item = this.newsEvents.find(item => item.id === id);
    return of(item || null);
  }

  getRelatedItems(currentId: string, type: 'news' | 'event', limit: number = 5): Observable<NewsEvent[]> {
    const relatedItems = this.newsEvents
      .filter(item => item.id !== currentId && item.type === type)
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .slice(0, limit);
    
    return of(relatedItems);
  }

  getNextItem(currentId: string): Observable<NewsEvent | null> {
    const currentIndex = this.newsEvents.findIndex(item => item.id === currentId);
    if (currentIndex === -1 || currentIndex === this.newsEvents.length - 1) {
      return of(null);
    }
    return of(this.newsEvents[currentIndex + 1]);
  }

  getPreviousItem(currentId: string): Observable<NewsEvent | null> {
    const currentIndex = this.newsEvents.findIndex(item => item.id === currentId);
    if (currentIndex === -1 || currentIndex === 0) {
      return of(null);
    }
    return of(this.newsEvents[currentIndex - 1]);
  }

  getCategories(): Observable<string[]> {
    const categories = [...new Set(this.newsEvents.map(item => item.category).filter(Boolean))];
    return of(categories as string[]);
  }
}