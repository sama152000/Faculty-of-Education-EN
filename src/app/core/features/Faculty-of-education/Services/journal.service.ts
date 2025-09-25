import { Injectable } from '@angular/core';
import { JournalInfo } from '../model/journal.model';

@Injectable({
  providedIn: 'root'
})
export class JournalService {
  private journalInfo: JournalInfo = {
    title: 'Educational Sciences Journal – Faculty of Education, Luxor University',
    description: 'The Educational Sciences Journal is a peer-reviewed scientific journal issued by the Faculty of Education – Luxor University. It aims to publish original educational research and studies that contribute to the development of educational thought and practice, while adhering to high academic quality standards and scientific integrity.',
    url: 'https://jedul.journals.ekb.eg/',
    icon: 'pi pi-file-pdf'
  };

  getJournalInfo(): JournalInfo {
    return this.journalInfo;
  }

  updateJournalInfo(info: Partial<JournalInfo>): void {
    this.journalInfo = { ...this.journalInfo, ...info };
  }

  openJournal(): void {
    window.open(this.journalInfo.url, '_blank');
  }
}