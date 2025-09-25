import { Injectable } from '@angular/core';
import { VisionMissionItem } from '../model/vision-mission.model';

@Injectable({
  providedIn: 'root'
})
export class VisionMissionService {
  private items: VisionMissionItem[] = [
    {
      id: 'vision',
      title: 'Vision',
      content: 'Preparing distinguished teachers who possess pedagogical and instructional skills with competence and effectiveness, in accordance with current and future trends in the field of education.',
      icon: 'pi pi-eye',
      gradient: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-hover) 100%)'
    },
    {
      id: 'mission',
      title: 'Mission',
      content: 'The college seeks to meet the needs of the educational labor market by preparing outstanding teachers capable of equipping a generation that can cope with current and future challenges, based on national standards and aligned with Egypt\'s Vision 2030.',
      icon: 'pi pi-flag',
      gradient: 'linear-gradient(135deg, var(--secondary-color) 0%, var(--secondary-hover) 100%)'
    },
    {
      id: 'objectives',
      title: 'Objectives',
      content: 'Enhancing effective communication skills with students and the external community. Providing opportunities for continuous learning and developing teachers\' skills. Promoting awareness of ethical and social values in the teaching profession. Qualifying researchers for teaching licenses at various educational levels. Strengthening understanding of successful teaching and learning principles. Equipping researchers with the knowledge and skills needed for effective learning.',
      icon: 'pi pi-bullseye',
      gradient: 'linear-gradient(135deg, var(--accent-color) 0%, var(--accent-hover) 100%)'
    }
  ];

  getVisionMissionItems(): VisionMissionItem[] {
    return this.items;
  }

  getItemById(id: string): VisionMissionItem | undefined {
    return this.items.find(item => item.id === id);
  }
}