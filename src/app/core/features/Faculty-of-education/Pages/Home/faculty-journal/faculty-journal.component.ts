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
}