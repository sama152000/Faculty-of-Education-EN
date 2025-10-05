import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Program } from '../model/program-page.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {
  private programs: Program[] = [
    {
      id: 1,
      name: 'Arabic Language & Literature Teacher Preparation Program',
      shortDescription: 'Specialized program for preparing Arabic language and literature teachers with modern educational methods',
      fullDescription: 'This program aims to prepare specialized teachers in Arabic language and literature, capable of teaching various branches of the Arabic language including grammar, morphology, rhetoric, literature, and criticism. The program includes in-depth studies in classical and modern Arabic literature, grammar and morphology, rhetoric and literary criticism, in addition to educational courses that qualify graduates to work in the field of education. The program also focuses on developing students\' linguistic and research skills and equipping them with modern educational methods in teaching Arabic language.',
      images: ['https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1200'],
      category: 'Languages',
      duration: '4 Years',
      degree: 'Bachelor of Education'
    },
    {
      id: 2,
      name: 'French Language & Literature Teacher Preparation Program',
      shortDescription: 'Distinguished program for preparing French language and literature teachers according to international standards',
      fullDescription: 'This program seeks to graduate distinguished teachers in French language and literature, capable of teaching efficiently at various educational levels. The program includes a comprehensive study of French and Francophone literature, French grammar, translation, French civilization and culture, in addition to specialized educational courses. Focus is placed on developing the four language skills (listening, speaking, reading, writing) and mastering the use of modern technologies in teaching French as a foreign language.',
      images: ['https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1200'],
      category: 'Languages',
      duration: '4 Years',
      degree: 'Bachelor of Education'
    },
    {
      id: 3,
      name: 'English Language & Literature Teacher Preparation Program',
      shortDescription: 'Comprehensive program for preparing English language teachers with advanced teaching skills',
      fullDescription: 'The program aims to prepare competent teachers in English language and literature, equipped with the linguistic, literary, and pedagogical knowledge necessary for effective teaching. The program includes in-depth study of English and American literature, applied linguistics, methods of teaching English as a foreign language, translation, and literary criticism. The program focuses on developing students\' linguistic competence in all language skills, training them to use modern educational media and technology in teaching, in addition to developing their research and critical abilities.',
      images: ['https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=1200'],
      category: 'Languages',
      duration: '4 Years',
      degree: 'Bachelor of Education'
    },
    {
      id: 4,
      name: 'Mathematics Teacher Preparation Program',
      shortDescription: 'Advanced program for preparing mathematics teachers with high analytical and teaching skills',
      fullDescription: 'This program seeks to prepare distinguished mathematics teachers who possess a deep understanding of mathematical concepts and the ability to convey them to students in innovative and effective ways. The program includes comprehensive study in various branches of mathematics: algebra, geometry, calculus, statistics and probability, discrete mathematics, in addition to mathematics teaching methods and educational courses. The program focuses on developing logical and analytical thinking skills, problem-solving, and using modern technologies and mathematical software in education, with practical training in schools.',
      images: ['https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=1200'],
      category: 'Sciences',
      duration: '4 Years',
      degree: 'Bachelor of Education'
    },
    {
      id: 5,
      name: 'German Language & Literature Teacher Preparation Program',
      shortDescription: 'Specialized academic program for preparing German language and literature teachers',
      fullDescription: 'This program aims to prepare competent teachers in German language and literature, capable of teaching German as a foreign language with high efficiency. The program includes in-depth study of classical and contemporary German literature, German grammar, translation to and from German, German civilization and culture, in addition to specialized educational courses in teaching foreign languages. The program focuses on developing the four language skills, equipping students with communicative competence in German, and using modern teaching methods.',
      images: ['https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1200'],
      category: 'Languages',
      duration: '4 Years',
      degree: 'Bachelor of Education'
    },
    {
      id: 6,
      name: 'Chemistry Teacher Preparation Program',
      shortDescription: 'Advanced scientific program for preparing chemistry teachers with theoretical and practical skills',
      fullDescription: 'The program seeks to prepare distinguished chemistry teachers who combine deep scientific knowledge with effective teaching skills. The program includes comprehensive study of all branches of chemistry: general chemistry, organic chemistry, inorganic chemistry, physical chemistry, analytical chemistry, and biochemistry, in addition to chemistry teaching methods and educational courses. The program includes intensive laboratory training on practical experiments, developing scientific research skills, and using modern technologies in teaching chemistry, with emphasis on laboratory safety standards.',
      images: ['https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1200'],
      category: 'Sciences',
      duration: '4 Years',
      degree: 'Bachelor of Education'
    },
    {
      id: 7,
      name: 'Biological Sciences Teacher Preparation Program',
      shortDescription: 'Integrated program for preparing biological sciences teachers with high academic standards',
      fullDescription: 'The program aims to prepare specialized teachers in biological sciences, capable of teaching biology in its various branches efficiently and professionally. The program includes in-depth study of zoology, botany, microbiology, genetics, ecology, anatomy and physiology, molecular and cellular biology, in addition to biological sciences teaching methods and educational courses. The program focuses on practical training in laboratories and field trips, developing scientific research skills, and using modern technologies in teaching life sciences.',
      images: ['https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1200'],
      category: 'Sciences',
      duration: '4 Years',
      degree: 'Bachelor of Education'
    }
  ];

  constructor() { }

  getAllPrograms(): Observable<Program[]> {
    return of(this.programs);
  }

  getProgramById(id: number): Observable<Program | undefined> {
    const program = this.programs.find(p => p.id === id);
    return of(program);
  }

  searchPrograms(searchTerm: string): Observable<Program[]> {
    if (!searchTerm.trim()) {
      return of(this.programs);
    }

    const filtered = this.programs.filter(program =>
      program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return of(filtered);
  }

  getNextProgram(currentId: number): Program | undefined {
    const currentIndex = this.programs.findIndex(p => p.id === currentId);
    if (currentIndex === -1 || currentIndex === this.programs.length - 1) {
      return this.programs[0];
    }
    return this.programs[currentIndex + 1];
  }

  getPreviousProgram(currentId: number): Program | undefined {
    const currentIndex = this.programs.findIndex(p => p.id === currentId);
    if (currentIndex === -1 || currentIndex === 0) {
      return this.programs[this.programs.length - 1];
    }
    return this.programs[currentIndex - 1];
  }
}
