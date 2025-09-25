import { Injectable } from '@angular/core';
import { Program } from '../model/program.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  private newPrograms: Program[] = [
    {
      id: 'math-english',
      name: 'Mathematics Teacher Preparation Program (English)',
      description: 'Aims to prepare specialized teachers in mathematics instruction in English, equipping them with modern teaching skills and analytical thinking methods.',
      icon: 'pi pi-calculator',
      isNew: true
    },
    {
      id: 'biology-english',
      name: 'Biological Sciences Teacher Preparation Program (English)',
      description: 'Focuses on graduating teachers capable of teaching biology in English using innovative teaching techniques and advanced scientific standards.',
      icon: 'pi pi-globe',
      isNew: true
    },
    {
      id: 'physics-english',
      name: 'Physics Teacher Preparation Program (English)',
      description: 'Prepares students to master teaching physics in English, with practical training in laboratories and study of the latest international curricula.',
      icon: 'pi pi-bolt',
      isNew: true
    },
    {
      id: 'chemistry-english',
      name: 'Chemistry Teacher Preparation Program (English)',
      description: 'Trains specialized teachers in chemistry instruction in English, emphasizing practical experiments and modern teaching applications.',
      icon: 'pi pi-circle',
      isNew: true
    }
  ];

  private academicPrograms: Program[] = [
    {
      id: 'arabic-program',
      name: 'Arabic Language & Literature Teacher Preparation Program',
      description: 'Comprehensive program for preparing Arabic language teachers with focus on literature and modern teaching methods.',
      icon: 'pi pi-book'
    },
    {
      id: 'english-program',
      name: 'English Language & Literature Teacher Preparation Program',
      description: 'Advanced program for English language teaching with emphasis on communication skills and literature.',
      icon: 'pi pi-globe'
    },
    {
      id: 'french-program',
      name: 'French Language & Literature Teacher Preparation Program',
      description: 'Specialized program for French language instruction and cultural studies.',
      icon: 'pi pi-flag'
    },
    {
      id: 'german-program',
      name: 'German Language & Literature Teacher Preparation Program',
      description: 'Comprehensive German language teaching program with modern pedagogical approaches.',
      icon: 'pi pi-flag'
    },
    {
      id: 'mathematics-program',
      name: 'Mathematics Teacher Preparation Program',
      description: 'Advanced mathematical education program with focus on problem-solving and analytical thinking.',
      icon: 'pi pi-calculator'
    },
    {
      id: 'chemistry-program',
      name: 'Chemistry Teacher Preparation Program',
      description: 'Scientific program emphasizing laboratory work and practical chemistry education.',
      icon: 'pi pi-circle'
    },
    {
      id: 'biology-program',
      name: 'Biological Sciences Teacher Preparation Program',
      description: 'Comprehensive biology education program with focus on life sciences and research.',
      icon: 'pi pi-globe'
    }
  ];

  getNewPrograms(): Program[] {
    return this.newPrograms;
  }

  getAcademicPrograms(): Program[] {
    return this.academicPrograms;
  }

  getAllPrograms(): Program[] {
    return [...this.newPrograms, ...this.academicPrograms];
  }

  getProgramById(id: string): Program | undefined {
    return this.getAllPrograms().find(program => program.id === id);
  }

  getProgramsByType(isNew: boolean): Program[] {
    return isNew ? this.newPrograms : this.academicPrograms;
  }
}