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
      title: 'New Students Reception Ceremony – Academic Year 2024/2025',
      excerpt: 'The Faculty of Education organized the first orientation meeting for first-year students under the patronage of Prof. Sabreen Abdel-Galeel.',
      content: `Under the patronage of **Prof. Sabreen Abdel-Galeel**, President of Luxor University, and **Prof. Waleed Mohamed Abdullah**, Dean of the Faculty of Education, as part of the preparations for the new academic year, the Faculty of Education – Luxor University organized the first orientation meeting for first-year students (General Education Program – Credit Hour System, Unified Regulations). The event was held on Sunday, September 29, in the college’s main hall.

The ceremony was attended by the Dean, Vice Deans, and faculty members. The program began with the national anthem, followed by a blessed recitation from the Quran. The Dean then delivered a welcoming speech, emphasizing the importance of discipline, academic achievement, and active participation in college activities, while assuring students that his office is always open to them.

The event included artistic and national performances by students, with the "Students for Egypt" team contributing to the reception activities. Informative booklets about the college’s departments and programs were distributed, and student inquiries regarding majors, class schedules, and course registration procedures were addressed.

The ceremony was marked by an atmosphere of joy and enthusiasm, with strong positive interaction from attendees, reflecting the family spirit and sense of belonging within the college.`,
      date: new Date('2024-09-29'),
      images: [
        './assets/new1.png',

        './assets/new2.png',
        './assets/new3.png',
        './assets/new4.png',
      ],
      featured: true,
      category: 'Student Affairs'
    },
    {
      id: '2',
      type: 'news',
      title: 'Faculty of Education Celebrates the 51st Anniversary of the Glorious October Victory',
      excerpt: 'The Faculty organized a celebration honoring the start of the new academic year and the 51st anniversary of the October Victory.',
      content: `Under the patronage of **Prof. Sabreen Abdel-Galeel**, President of Luxor University, and led by **Prof. Waleed Mohamed Abdullah**, Dean of the Faculty of Education, with organization and participation from the *Students for Egypt* team, the Faculty of Education held a celebration honoring the start of the new academic year and the 51st anniversary of the October Victory.

The event was attended by several deans, vice deans, faculty members, and Colonel Mohamed Jamal, the military liaison officer. It began with the national anthem, followed by verses from the Quran. Prof. Waleed Mohamed Abdullah, Dean of the Faculty, delivered a welcoming speech congratulating the students and reaffirming the college’s full support for them.

Prof. Sabreen also delivered a patriotic speech expressing her pride in this historic victory, encouraging students to maintain discipline and actively participate in academic and extracurricular activities.

The event featured distinguished artistic performances, including a **Tanoura dance**, national songs, and religious recitations by reciter Mohamed Abbas. The ceremony concluded with the taking of commemorative photos with attendees.`,
      date: new Date('2024-10-09'),
      images: [
        './assets/october.jpg',
        './assets/october3.jpg',
        './assets/october2.jpg',
      ],
      featured: true,
      category: 'University Events'
    },
    {
      id: '5',
      type: 'event',
      title: 'Orientation Meeting for General Education Diploma Students (All Tracks) under the Credit Hour System',
      excerpt: 'An orientation meeting for General Education Diploma students under the credit hour system.',
      content: `Under the patronage of Prof. Dr. Sabreen Abdel-Galeel, President of the University, and led by Prof. Dr. Waleed Mohamed Abdullah, Dean of the Faculty, the Faculty of Education – Luxor University organized an orientation meeting for General Education Diploma students (all tracks) under the credit hour system on Wednesday, October 23, 2024. The meeting covered an introduction to the study system, lecture schedules, registration and academic advising procedures, the role of academic advisors in guidance and support, as well as an explanation of the assessment system, field training implementation, track selection and branching mechanisms, and how to calculate points per credit hour. It also clarified the steps for course registration within the registration form for each track. The meeting was attended by Prof. Waleed Mohamed Abdullah, Prof. Mamdouh Kamel Hassani, Dr. Shifaa Mohamed Hussein, Dr. Mohamed Atta Najdi, senior study officials at the college, and a group of diploma students.`,
      date: new Date('2024-10-23'),
      images: [
        './assets/newstu1.jpg',
        './assets/newstu2.jpg',
      ],
      featured: true,
      category: 'Student Affairs'
    },
    {
      id: '6',
      type: 'event',
      title: 'Participation of the Faculty of Education in the Orientation Seminar on Cultural Exchange Programs by the U.S. Embassy in Cairo',
      excerpt: 'A workshop on cultural exchange programs offered by the U.S. Embassy.',
      content: `Under the patronage of Prof. Dr. Sabreen Abdel-Galeel, President of Luxor University, and led by Prof. Dr. Waleed Abdullah, Dean of the Faculty of Education, the Faculty participated on Monday, October 28, 2024, in a workshop titled: "Cultural Exchange Programs Offered by the U.S. Embassy in Cairo," attended by representatives from both the American and Egyptian sides of the embassy. The workshop covered key available scholarships, such as SUSI and Global UGRAD, and the role of embassy programs in developing English language skills, teaching, and academic writing. It also introduced the services of the Cultural Office and the RELO office. The Faculty was represented by Dr. Shifaa Mohamed Hussein, Lecturer of Curriculum and Teaching Methods, alongside outstanding participation from first-year students: Ahmed Youssef (Physics), Hind Ibrahim (Chemistry), and Amal Makkawy (Mathematics). The workshop concluded with a presentation of a successful experience by a Luxor University student who had previously received an American scholarship, eliciting wide interaction from the audience.`,
      date: new Date('2024-10-28'),
      images: [
        './assets/calnew.jpg',
        './assets/calnew2.jpg',
      ],
      featured: true,
      category: 'University Events'
    },
    {
      id: '7',
      type: 'event',
      title: 'Faculty of Education Hosts Blood Donation Campaign in Collaboration with the Red Crescent Blood Bank, Luxor Branch',
      excerpt: 'A blood donation campaign in collaboration with the Red Crescent, Luxor Branch.',
      content: `As part of the Faculty of Education – Luxor University’s commitment to enhancing its community role, the Faculty hosted a blood donation campaign in collaboration with the Red Crescent Blood Bank, Luxor Branch, on Thursday, November 7, 2024. The campaign was held under the patronage of Prof. Sabreen Abdel-Galeel, President of the University, and led by Prof. Waleed Mohamed Abdullah, Dean of the Faculty, with supervision by Prof. Hassan Tahami Abdel-Lah, Vice Dean for Community Service and Environmental Development. A large number of students participated enthusiastically, donating blood to support patients and those in need, reflecting their awareness and volunteer spirit. The campaign was organized with full adherence to health and precautionary measures to ensure everyone’s safety. It received a warm welcome from the college administration and concluded at 2:00 PM in an atmosphere of cooperation and satisfaction, with a promise to repeat it in the future to support the Faculty’s role in community and environmental service.`,
      date: new Date('2024-11-07'),
      images: [
        './assets/blod1.jpg',
        './assets/blod2.jpg',
        './assets/blod3.jpg',
      ],
      featured: true,
      category: 'Community Service'
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