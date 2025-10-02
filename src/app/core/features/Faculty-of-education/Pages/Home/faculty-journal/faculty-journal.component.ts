import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalService } from '../../../Services/journal.service';
import { JournalInfo } from '../../../model/journal.model';

@Component({
  selector: 'app-faculty-journal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faculty-journal.component.html',
  styleUrls: ['./faculty-journal.component.css']
})
export class FacultyJournalComponent implements OnInit {
  journalInfo!: JournalInfo;

  constructor(private journalService: JournalService) {}

  ngOnInit(): void {
    this.journalInfo = this.journalService.getJournalInfo();
  }

  openJournal(): void {
    this.journalService.openJournal();
  }
 
  journalFeatures = [
    {
      icon: 'pi pi-verified',
      title: 'Peer-Reviewed',
      description: 'Rigorous academic review process'
    },
    {
      icon: 'pi pi-shield',
      title: 'Scientific Integrity',
      description: 'Highest standards of research ethics'
    },
    {
      icon: 'pi pi-graduation-cap',
      title: 'Educational Research',
      description: 'Focus on educational innovation'
    },
    {
      icon: 'pi pi-star',
      title: 'Academic Excellence',
      description: 'Recognized scholarly contributions'
    }
  ];

}