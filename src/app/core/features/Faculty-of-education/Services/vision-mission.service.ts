import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VisionMission, ObjectiveItem, VisionMissionItem } from '../model/vision-mission.model';

@Injectable({
  providedIn: 'root'
})
export class VisionMissionService {
  // Data for VisionMission (from the first service)
  private visionMission: VisionMission = {
    vision: 'Preparing distinguished teachers who possess pedagogical and instructional skills with competence and effectiveness, in accordance with current and future trends in the field of education.',
    mission: 'The college seeks to meet the needs of the educational labor market by preparing outstanding teachers capable of equipping a generation that can cope with current and future challenges, based on national standards and aligned with Egypt\'s Vision 2030.',
    objectives: [
      'Enhancing effective communication skills with students and the external community.',
      'Providing opportunities for continuous learning and developing the necessary skills for teachers.',
      'Promoting awareness of the ethical and social values associated with the teaching profession.',
      'Qualifying researchers to obtain teaching licenses for various educational stages.',
      'Strengthening deep understanding of the principles and foundations of successful teaching and learning.',
      'Equipping researchers with the knowledge and skills necessary to achieve effective learning.'
    ]
  };

  private objectiveItems: ObjectiveItem[] = [
    {
      id: 1,
      text: 'Enhancing effective communication skills with students and the external community.',
      icon: 'pi pi-comments'
    },
    {
      id: 2,
      text: 'Providing opportunities for continuous learning and developing the necessary skills for teachers.',
      icon: 'pi pi-book'
    },
    {
      id: 3,
      text: 'Promoting awareness of the ethical and social values associated with the teaching profession.',
      icon: 'pi pi-heart'
    },
    {
      id: 4,
      text: 'Qualifying researchers to obtain teaching licenses for various educational stages.',
      icon: 'pi pi-verified'
    },
    {
      id: 5,
      text: 'Strengthening deep understanding of the principles and foundations of successful teaching and learning.',
      icon: 'pi pi-lightbulb'
    },
    {
      id: 6,
      text: 'Equipping researchers with the knowledge and skills necessary to achieve effective learning.',
      icon: 'pi pi-cog'
    }
  ];

  // Data for VisionMissionItems (from the second service)
  private items: VisionMissionItem[] = [
    {
      id: 'vision',
      title: 'Vision',
      icon: 'pi pi-eye',
      gradient: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-hover) 100%)'
    },
    {
      id: 'mission',
      title: 'Mission',
      icon: 'pi pi-flag',
      gradient: 'linear-gradient(135deg, var(--secondary-color) 0%, var(--secondary-hover) 100%)'
    },
    {
      id: 'objectives',
      title: 'Objectives',
      icon: 'pi pi-bullseye',
      gradient: 'linear-gradient(135deg, var(--accent-color) 0%, var(--accent-hover) 100%)'
    }
  ];

  // Methods from the first service
  getVisionMission(): Observable<VisionMission> {
    return of(this.visionMission);
  }

  getObjectiveItems(): Observable<ObjectiveItem[]> {
    return of(this.objectiveItems);
  }

  // Methods from the second service
  getVisionMissionItems(): VisionMissionItem[] {
    return this.items;
  }

  getItemById(id: string): VisionMissionItem | undefined {
    return this.items.find(item => item.id === id);
  }
}