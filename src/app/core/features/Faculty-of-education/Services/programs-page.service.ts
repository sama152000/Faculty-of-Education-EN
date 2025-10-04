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
      nameAr: 'برنامج إعداد معلم اللغة العربية وآدابها',
      nameEn: 'Arabic Language & Literature Teacher Preparation Program',
      shortDescriptionAr: 'برنامج متخصص لإعداد معلمي اللغة العربية وآدابها بأحدث الأساليب التربوية',
      shortDescriptionEn: 'Specialized program for preparing Arabic language and literature teachers with modern educational methods',
      fullDescriptionAr: 'يهدف هذا البرنامج إلى إعداد معلم متخصص في اللغة العربية وآدابها، قادر على تدريس مختلف فروع اللغة العربية من نحو وصرف وبلاغة وأدب ونقد. يتضمن البرنامج دراسات معمقة في الأدب العربي القديم والحديث، النحو والصرف، البلاغة والنقد الأدبي، بالإضافة إلى المقررات التربوية التي تؤهل الخريج للعمل في مجال التعليم. كما يركز البرنامج على تنمية المهارات اللغوية والبحثية لدى الطلاب، وتزويدهم بالأساليب التربوية الحديثة في تدريس اللغة العربية.',
      fullDescriptionEn: 'This program aims to prepare specialized teachers in Arabic language and literature, capable of teaching various branches of the Arabic language including grammar, morphology, rhetoric, literature, and criticism. The program includes in-depth studies in classical and modern Arabic literature, grammar and morphology, rhetoric and literary criticism, in addition to educational courses that qualify graduates to work in the field of education. The program also focuses on developing students\' linguistic and research skills and equipping them with modern educational methods in teaching Arabic language.',
      images: ['https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1200'],
      category: 'Languages',
      duration: '4 سنوات / 4 Years',
      degreeAr: 'بكالوريوس التربية',
      degreeEn: 'Bachelor of Education'
    },
    {
      id: 2,
      nameAr: 'برنامج إعداد معلم اللغة الفرنسية وآدابها',
      nameEn: 'French Language & Literature Teacher Preparation Program',
      shortDescriptionAr: 'برنامج متميز لإعداد معلمي اللغة الفرنسية وآدابها وفق المعايير الدولية',
      shortDescriptionEn: 'Distinguished program for preparing French language and literature teachers according to international standards',
      fullDescriptionAr: 'يسعى هذا البرنامج إلى تخريج معلمين متميزين في اللغة الفرنسية وآدابها، قادرين على التدريس بكفاءة عالية في مختلف المراحل التعليمية. يشمل البرنامج دراسة شاملة للأدب الفرنسي والفرنكوفوني، قواعد اللغة الفرنسية، الترجمة، الحضارة والثقافة الفرنسية، بالإضافة إلى المقررات التربوية المتخصصة. يتم التركيز على تطوير المهارات اللغوية الأربع (الاستماع، التحدث، القراءة، الكتابة) وإتقان استخدام التقنيات الحديثة في تعليم اللغة الفرنسية كلغة أجنبية.',
      fullDescriptionEn: 'This program seeks to graduate distinguished teachers in French language and literature, capable of teaching efficiently at various educational levels. The program includes a comprehensive study of French and Francophone literature, French grammar, translation, French civilization and culture, in addition to specialized educational courses. Focus is placed on developing the four language skills (listening, speaking, reading, writing) and mastering the use of modern technologies in teaching French as a foreign language.',
      images: ['https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1200'],
      category: 'Languages',
      duration: '4 سنوات / 4 Years',
      degreeAr: 'بكالوريوس التربية',
      degreeEn: 'Bachelor of Education'
    },
    {
      id: 3,
      nameAr: 'برنامج إعداد معلم اللغة الإنجليزية وآدابها',
      nameEn: 'English Language & Literature Teacher Preparation Program',
      shortDescriptionAr: 'برنامج شامل لإعداد معلمي اللغة الإنجليزية بمهارات تدريسية متقدمة',
      shortDescriptionEn: 'Comprehensive program for preparing English language teachers with advanced teaching skills',
      fullDescriptionAr: 'يهدف البرنامج إلى إعداد معلم كفء في اللغة الإنجليزية وآدابها، مزود بالمعارف اللغوية والأدبية والتربوية اللازمة للتدريس الفعال. يتضمن البرنامج دراسة معمقة في الأدب الإنجليزي والأمريكي، اللغويات التطبيقية، طرق تدريس اللغة الإنجليزية كلغة أجنبية، الترجمة، والنقد الأدبي. يركز البرنامج على تنمية الكفاءة اللغوية للطلاب في جميع المهارات اللغوية، وتدريبهم على استخدام الوسائل التعليمية الحديثة والتكنولوجيا في التدريس، بالإضافة إلى تطوير قدراتهم البحثية والنقدية.',
      fullDescriptionEn: 'The program aims to prepare competent teachers in English language and literature, equipped with the linguistic, literary, and pedagogical knowledge necessary for effective teaching. The program includes in-depth study of English and American literature, applied linguistics, methods of teaching English as a foreign language, translation, and literary criticism. The program focuses on developing students\' linguistic competence in all language skills, training them to use modern educational media and technology in teaching, in addition to developing their research and critical abilities.',
      images: ['https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=1200'],
      category: 'Languages',
      duration: '4 سنوات / 4 Years',
      degreeAr: 'بكالوريوس التربية',
      degreeEn: 'Bachelor of Education'
    },
    {
      id: 4,
      nameAr: 'برنامج إعداد معلم الرياضيات',
      nameEn: 'Mathematics Teacher Preparation Program',
      shortDescriptionAr: 'برنامج متطور لإعداد معلمي الرياضيات بمهارات تحليلية وتدريسية عالية',
      shortDescriptionEn: 'Advanced program for preparing mathematics teachers with high analytical and teaching skills',
      fullDescriptionAr: 'يسعى هذا البرنامج إلى إعداد معلم رياضيات متميز، يمتلك فهماً عميقاً للمفاهيم الرياضية والقدرة على نقلها للطلاب بطرق مبتكرة وفعالة. يشمل البرنامج دراسة شاملة في مختلف فروع الرياضيات: الجبر، الهندسة، التفاضل والتكامل، الإحصاء والاحتمالات، الرياضيات المتقطعة، بالإضافة إلى طرق تدريس الرياضيات والمقررات التربوية. يركز البرنامج على تنمية مهارات التفكير المنطقي والتحليلي، وحل المشكلات، واستخدام التقنيات الحديثة والبرمجيات الرياضية في التعليم، مع التدريب العملي في المدارس.',
      fullDescriptionEn: 'This program seeks to prepare distinguished mathematics teachers who possess a deep understanding of mathematical concepts and the ability to convey them to students in innovative and effective ways. The program includes comprehensive study in various branches of mathematics: algebra, geometry, calculus, statistics and probability, discrete mathematics, in addition to mathematics teaching methods and educational courses. The program focuses on developing logical and analytical thinking skills, problem-solving, and using modern technologies and mathematical software in education, with practical training in schools.',
      images: ['https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=1200'],
      category: 'Sciences',
      duration: '4 سنوات / 4 Years',
      degreeAr: 'بكالوريوس التربية',
      degreeEn: 'Bachelor of Education'
    },
    {
      id: 5,
      nameAr: 'برنامج إعداد معلم اللغة الألمانية وآدابها',
      nameEn: 'German Language & Literature Teacher Preparation Program',
      shortDescriptionAr: 'برنامج أكاديمي متخصص لإعداد معلمي اللغة الألمانية وآدابها',
      shortDescriptionEn: 'Specialized academic program for preparing German language and literature teachers',
      fullDescriptionAr: 'يهدف هذا البرنامج إلى إعداد معلمين أكفاء في اللغة الألمانية وآدابها، قادرين على تدريس اللغة الألمانية كلغة أجنبية بكفاءة عالية. يتضمن البرنامج دراسة معمقة في الأدب الألماني الكلاسيكي والمعاصر، قواعد اللغة الألمانية، الترجمة من وإلى الألمانية، الحضارة والثقافة الألمانية، بالإضافة إلى المقررات التربوية المتخصصة في تعليم اللغات الأجنبية. يركز البرنامج على تطوير المهارات اللغوية الأربع، وإكساب الطلاب الكفاءة التواصلية في اللغة الألمانية، واستخدام الأساليب الحديثة في التدريس.',
      fullDescriptionEn: 'This program aims to prepare competent teachers in German language and literature, capable of teaching German as a foreign language with high efficiency. The program includes in-depth study of classical and contemporary German literature, German grammar, translation to and from German, German civilization and culture, in addition to specialized educational courses in teaching foreign languages. The program focuses on developing the four language skills, equipping students with communicative competence in German, and using modern teaching methods.',
      images: ['https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1200'],
      category: 'Languages',
      duration: '4 سنوات / 4 Years',
      degreeAr: 'بكالوريوس التربية',
      degreeEn: 'Bachelor of Education'
    },
    {
      id: 6,
      nameAr: 'برنامج إعداد معلم الكيمياء',
      nameEn: 'Chemistry Teacher Preparation Program',
      shortDescriptionAr: 'برنامج علمي متقدم لإعداد معلمي الكيمياء بمهارات نظرية وعملية',
      shortDescriptionEn: 'Advanced scientific program for preparing chemistry teachers with theoretical and practical skills',
      fullDescriptionAr: 'يسعى البرنامج إلى إعداد معلم كيمياء متميز، يجمع بين المعرفة العلمية العميقة والمهارات التدريسية الفعالة. يشمل البرنامج دراسة شاملة لجميع فروع الكيمياء: الكيمياء العامة، الكيمياء العضوية، الكيمياء غير العضوية، الكيمياء الفيزيائية، الكيمياء التحليلية، والكيمياء الحيوية، بالإضافة إلى طرق تدريس الكيمياء والمقررات التربوية. يتضمن البرنامج تدريباً مكثفاً في المختبرات على التجارب العملية، وتطوير مهارات البحث العلمي، واستخدام التقنيات الحديثة في تعليم الكيمياء، مع التركيز على معايير السلامة المختبرية.',
      fullDescriptionEn: 'The program seeks to prepare distinguished chemistry teachers who combine deep scientific knowledge with effective teaching skills. The program includes comprehensive study of all branches of chemistry: general chemistry, organic chemistry, inorganic chemistry, physical chemistry, analytical chemistry, and biochemistry, in addition to chemistry teaching methods and educational courses. The program includes intensive laboratory training on practical experiments, developing scientific research skills, and using modern technologies in teaching chemistry, with emphasis on laboratory safety standards.',
      images: ['https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1200'],
      category: 'Sciences',
      duration: '4 سنوات / 4 Years',
      degreeAr: 'بكالوريوس التربية',
      degreeEn: 'Bachelor of Education'
    },
    {
      id: 7,
      nameAr: 'برنامج إعداد معلم العلوم البيولوجية',
      nameEn: 'Biological Sciences Teacher Preparation Program',
      shortDescriptionAr: 'برنامج متكامل لإعداد معلمي العلوم البيولوجية بمعايير أكاديمية عالية',
      shortDescriptionEn: 'Integrated program for preparing biological sciences teachers with high academic standards',
      fullDescriptionAr: 'يهدف البرنامج إلى إعداد معلم متخصص في العلوم البيولوجية، قادر على تدريس علم الأحياء بمختلف فروعه بكفاءة واحترافية. يتضمن البرنامج دراسة معمقة في علم الحيوان، علم النبات، علم الأحياء الدقيقة، علم الوراثة، علم البيئة، التشريح وعلم وظائف الأعضاء، البيولوجيا الجزيئية والخلوية، بالإضافة إلى طرق تدريس العلوم البيولوجية والمقررات التربوية. يركز البرنامج على التدريب العملي في المختبرات والرحلات الميدانية، وتنمية مهارات البحث العلمي، واستخدام التقنيات الحديثة في تعليم العلوم الحيوية.',
      fullDescriptionEn: 'The program aims to prepare specialized teachers in biological sciences, capable of teaching biology in its various branches efficiently and professionally. The program includes in-depth study of zoology, botany, microbiology, genetics, ecology, anatomy and physiology, molecular and cellular biology, in addition to biological sciences teaching methods and educational courses. The program focuses on practical training in laboratories and field trips, developing scientific research skills, and using modern technologies in teaching life sciences.',
      images: ['https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1200'],
      category: 'Sciences',
      duration: '4 سنوات / 4 Years',
      degreeAr: 'بكالوريوس التربية',
      degreeEn: 'Bachelor of Education'
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
      program.nameAr.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.shortDescriptionAr.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.shortDescriptionEn.toLowerCase().includes(searchTerm.toLowerCase())
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
