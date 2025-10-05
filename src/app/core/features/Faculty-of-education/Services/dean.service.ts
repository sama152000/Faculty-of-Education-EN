import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DeanInfo, FacultyHistory } from '../model/dean.model';

@Injectable({
  providedIn: 'root'
})
export class DeanService {
  private deanInfo: DeanInfo = {
    name: 'Prof. Dr. Waleed Mohamed Abdullah',
    title: 'Dean of the Faculty of Education – Luxor University',
    photo: './assets/dean-photo.jpg',
    message: `It is both my honor and pleasure to welcome you to the official website of the Faculty of Education – Luxor University. As a newly established faculty, we stand at the heart of an ambitious university project, with a clear vision to excel in preparing future educators, advancing the teaching-learning process, and serving the community in light of modern educational and scientific developments.

Our faculty was born in a time that demands new approaches to education, forward-thinking teaching methods, and young leaders equipped with awareness, values, and 21st-century skills. That is why we embrace our mission with a deep sense of responsibility: to prepare teachers who are capable, creative, and ready to meet the challenges of the future.

Though young in years, we believe that excellence is not measured by age, but by clarity of vision, strength of will, and dedication to quality. We aim to build a vibrant educational environment where minds are nurtured, skills are sharpened, and values are upheld.

We believe that a strong beginning paves the way for excellence. That is why we place quality and academic accreditation at the forefront of our priorities. We strive to create a stimulating educational environment, provide specialized academic staff, and support scientific research that addresses educational and societal issues.

My dear students, you are the essence of our mission, the foundation of our future, and the hope of this nation. We are here to support you, to guide you, and to walk beside you on your educational journey. Strive to be the learners, change makers, and ambassadors of goodness we know you can be.

Wishing you every success and fulfillment.`
  };

  private facultyHistory: FacultyHistory = {
    establishmentDate: 'August 7, 2024',
    decree: 'Decree No. (1400)',
    academicYear: '2024/2025',
    programs: ['Undergraduate Programs', 'Postgraduate Programs (One-year Diploma)'],
    facilities: [
      'Fully air-conditioned classrooms with latest educational technology',
      'Projectors and smart boards in all classrooms',
      'Comprehensive libraries with books, references, and scientific journals',
      'Specialized laboratories in educational sciences, psychology, and computer studies',
      'Sports fields and green spaces for student activities',
      'Modern technological equipment and applications'
    ],
    description: 'The Faculty of Education at Luxor University was established by Decree No. (1400) dated August 7, 2024. The Faculty officially opened its doors to students at the beginning of the 2024/2025 academic year, offering both undergraduate and postgraduate (one-year diploma) programs.'
  };

  getDeanInfo(): Observable<DeanInfo> {
    return of(this.deanInfo);
  }

  getFacultyHistory(): Observable<FacultyHistory> {
    return of(this.facultyHistory);
  }
}