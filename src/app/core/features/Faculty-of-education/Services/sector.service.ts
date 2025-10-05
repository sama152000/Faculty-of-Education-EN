import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Sector, SectorNavigation } from '../model/sector.model';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  private sectors: Sector[] = [
    {
      id: 'education-student-affairs',
      title: 'Education and Student Affairs Sector',
      viceDean: 'Assoc. Prof. Dr. Ramadan El-Qalamawy',
      objectives: [
        'Organizing and developing the educational process at the undergraduate level.',
        'Providing a supportive and motivating learning environment for students.',
        'Enhancing students\' sense of belonging and developing their personal skills.',
        'Supporting student activities and building leadership and communication skills.'
      ],
      services: [
        'Registering new students and updating their records.',
        'Preparing academic and examination schedules.',
        'Issuing certificates, reports, and grade transcripts.',
        'Organizing student activities (cultural, sports, artistic, and social).',
        'Providing academic support and educational counseling.'
      ],
      route: 'management/vice-dean-education',
      order: 1
    },
    {
      id: 'postgraduate-research',
      title: 'Postgraduate Studies and Research Affairs Sector',
      viceDean: 'Assoc. Prof. Dr. Salah Shaaban Hassanien',
      objectives: [
        'Developing postgraduate programs in line with scientific advancements.',
        'Supporting scientific research and directing it to serve community needs.',
        'Providing a motivating and professional research environment.',
        'Encouraging scientific publication and participation in conferences.'
      ],
      services: [
        'Registration of diploma, master\'s, and doctoral students.',
        'Monitoring research plans and forming defense committees.',
        'Organizing specialized scientific conferences and seminars.',
        'Providing technical and administrative support to researchers.',
        'Supervising scientific journals and published research.'
      ],
      route: 'management/vice-dean-postgraduate',
      order: 2
    },
    {
      id: 'community-environmental',
      title: 'Community Service and Environmental Development Affairs Sector',
      viceDean: 'Assoc. Prof. Dr. Hani Abdel-Fattah Shoura',
      objectives: [
        'Strengthening the relationship between the Faculty and the local community.',
        'Contributing to the achievement of sustainable development.',
        'Providing scientific and practical solutions to community problems.',
        'Promoting educational, cultural, and environmental awareness.'
      ],
      services: [
        'Organizing educational, cultural, and awareness campaigns.',
        'Holding training courses and workshops for individuals and institutions.',
        'Implementing projects that serve the community and the environment.',
        'Cooperating with governmental and non-governmental organizations.',
        'Conducting field studies on environmental and community issues.'
      ],
      route: 'management/vice-dean-community',
      order: 3
    }
  ];

  getAllSectors(): Observable<Sector[]> {
    return of(this.sectors.sort((a, b) => a.order - b.order));
  }

  getSectorByRoute(route: string): Observable<Sector | null> {
    const sector = this.sectors.find(s => s.route === route);
    return of(sector || null);
  }

  getSectorById(id: string): Observable<Sector | null> {
    const sector = this.sectors.find(s => s.id === id);
    return of(sector || null);
  }

  getSectorNavigation(currentSectorId: string): Observable<SectorNavigation> {
    const sortedSectors = this.sectors.sort((a, b) => a.order - b.order);
    const currentIndex = sortedSectors.findIndex(s => s.id === currentSectorId);
    
    const navigation: SectorNavigation = {
      previous: currentIndex > 0 ? sortedSectors[currentIndex - 1] : null,
      next: currentIndex < sortedSectors.length - 1 ? sortedSectors[currentIndex + 1] : null
    };

    return of(navigation);
  }

  getNextSector(currentSectorId: string): Observable<Sector | null> {
    const sortedSectors = this.sectors.sort((a, b) => a.order - b.order);
    const currentIndex = sortedSectors.findIndex(s => s.id === currentSectorId);
    
    if (currentIndex !== -1 && currentIndex < sortedSectors.length - 1) {
      return of(sortedSectors[currentIndex + 1]);
    }
    
    return of(null);
  }

  getPreviousSector(currentSectorId: string): Observable<Sector | null> {
    const sortedSectors = this.sectors.sort((a, b) => a.order - b.order);
    const currentIndex = sortedSectors.findIndex(s => s.id === currentSectorId);
    
    if (currentIndex > 0) {
      return of(sortedSectors[currentIndex - 1]);
    }
    
    return of(null);
  }
}