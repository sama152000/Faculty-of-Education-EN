import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Program } from '../model/program.model';

@Injectable({
  providedIn: 'root'
})
export class UnifiedProgramsService {
  private programs: Program[] = [
    // ============================
    // 🎓 Academic Programs (Old)
    // ============================
    {
      id: 'arabic',
      name: 'Arabic Language ',
      shortDescription: 'Prepares future teachers specialized in Arabic language and literature using modern educational methods.',
      fullDescription: 'This program aims to prepare teachers with strong command of Arabic language and literature, qualified to teach effectively through modern educational methods and tools.',
      images: ['https://images.pexels.com/photos/19884485/pexels-photo-19884485.jpeg'],
      category: 'Languages',
      duration: '4 Years',
      degree: 'Bachelor of Education',
      isNew: false
    },
    {
      id: 'english',
      name: 'English Language ',
      shortDescription: 'Develops English teachers with strong linguistic, literary, and pedagogical skills.',
      fullDescription: 'This program focuses on equipping students with advanced English language skills, cultural awareness, and teaching methodologies to prepare them as qualified English teachers.',
      images: ['https://images.pexels.com/photos/4143792/pexels-photo-4143792.jpeg?auto=compress&cs=tinysrgb&w=1200'],
      category: 'Languages',
      duration: '4 Years',
      degree: 'Bachelor of Education',
      isNew: false
    },
    {
      id: 'french',
      name: 'French Language',
      shortDescription: 'Prepares professional French language teachers following global education standards.',
      fullDescription: 'A program designed to prepare teachers who can teach French efficiently and creatively, incorporating communication skills and modern teaching approaches.',
      images: ['https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1200'],
      category: 'Languages',
      duration: '4 Years',
      degree: 'Bachelor of Education',
      isNew: false
    },
    {
      id: 'german',
      name: 'German Language ',
      shortDescription: 'Specialized program for preparing German language teachers with modern teaching skills.',
      fullDescription: 'This program provides in-depth study of the German language and literature, combined with teaching practice and modern pedagogical training.',
      images: ['https://images.pexels.com/photos/3184425/pexels-photo-3184425.jpeg?auto=compress&cs=tinysrgb&w=1200'],
      category: 'Languages',
      duration: '4 Years',
      degree: 'Bachelor of Education',
      isNew: false
    },
    {
      id: 'math',
      name: 'Mathematics ',
      shortDescription: 'Equips future teachers with strong math and problem-solving skills.',
      fullDescription: 'This program focuses on preparing mathematics teachers with deep subject knowledge and innovative teaching methods to develop analytical and logical thinking in students.',
      images: ['https://images.pexels.com/photos/4145197/pexels-photo-4145197.jpeg?auto=compress&cs=tinysrgb&w=1200'],
      category: 'Sciences',
      duration: '4 Years',
      degree: 'Bachelor of Education',
      isNew: false
    },
    {
      id: 'chemistry',
      name: 'Chemistry ',
      shortDescription: 'Provides specialized training for future chemistry teachers with hands-on lab experience.',
      fullDescription: 'A program designed to prepare chemistry teachers who can explain scientific concepts effectively through practical experiments and modern teaching techniques.',
      images: ['https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=1200'],
      category: 'Sciences',
      duration: '4 Years',
      degree: 'Bachelor of Education',
      isNew: false
    },
    {
      id: 'biology',
      name: 'Biological Sciences ',
      shortDescription: 'Trains future biology teachers with modern teaching and research skills.',
      fullDescription: 'The program aims to produce teachers specialized in biological sciences capable of teaching and applying modern biological concepts and technologies in education.',
      images: ['https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1200'],
      category: 'Sciences',
      duration: '4 Years',
      degree: 'Bachelor of Education',
      isNew: false
    },

    // ============================
    // 🌟 New Programs (English)
    // ============================
    {
      id: 'math-english',
      name: 'Mathematics (English)',
      shortDescription: 'Advanced math program in English focusing on modern analytical teaching skills.',
      fullDescription: 'This program aims to prepare specialized mathematics teachers who teach in English, integrating analytical thinking and global educational standards.',
      images: ['https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=1200'],
      category: 'Sciences',
      duration: '4 Years',
      degree: 'Bachelor of Education',
      icon: 'pi pi-calculator',
      isNew: true
    },
    {
      id: 'biology-english',
      name: 'Biological Sciences (English)',
      shortDescription: 'Focuses on training biology teachers to teach scientific concepts in English.',
      fullDescription: 'This program graduates qualified biology teachers capable of teaching in English using innovative methods and advanced scientific understanding.',
      images: ['https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1200'],
      category: 'Sciences',
      duration: '4 Years',
      degree: 'Bachelor of Education',
      icon: 'pi pi-globe',
      isNew: true
    },
    {
      id: 'physics-english',
      name: 'Physics (English)',
      shortDescription: 'Prepares physics teachers to deliver lessons in English with hands-on lab training.',
      fullDescription: 'This program trains students to master physics concepts and effectively teach them in English, supported by lab-based applications and research integration.',
      images: ['https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1200'],
      category: 'Sciences',
      duration: '4 Years',
      degree: 'Bachelor of Education',
      icon: 'pi pi-atom',
      isNew: true
    },
    {
      id: 'chemistry-english',
      name: 'Chemistry (English)',
      shortDescription: 'Develops chemistry teachers to teach in English through experiments and scientific inquiry.',
      fullDescription: 'This program prepares teachers with strong English communication and scientific skills to teach chemistry using experiments and global teaching practices.',
      images: ['https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=1200'],
      category: 'Sciences',
      duration: '4 Years',
      degree: 'Bachelor of Education',
      icon: 'pi pi-flask',
      isNew: true
    }
  ];

  // ============================
  // ✅ Service Methods
  // ============================
  getAllPrograms(): Observable<Program[]> {
    return of(this.programs);
  }

  getProgramById(id: string): Observable<Program | undefined> {
    const program = this.programs.find(p => p.id === id);
    return of(program);
  }

  getNewPrograms(): Observable<Program[]> {
    return of(this.programs.filter(p => p.isNew));
  }

  searchPrograms(searchTerm: string): Observable<Program[]> {
    if (!searchTerm.trim()) return of(this.programs);
    const filtered = this.programs.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (p.shortDescription?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false)
    );
    return of(filtered);
  }

  getNextProgram(currentId: string): Program | undefined {
    const currentIndex = this.programs.findIndex(p => p.id === currentId);
    if (currentIndex === -1 || currentIndex === this.programs.length - 1) {
      return this.programs[0];
    }
    return this.programs[currentIndex + 1];
  }

  getPreviousProgram(currentId: string): Program | undefined {
    const currentIndex = this.programs.findIndex(p => p.id === currentId);
    if (currentIndex === -1 || currentIndex === 0) {
      return this.programs[this.programs.length - 1];
    }
    return this.programs[currentIndex - 1];
  }
}
