import { Component, OnInit } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { VisionMissionComponent } from "./vision-mission/vision-mission.component";
import { DepartmentsComponent } from "./departments/departments.component";
import { NewProgramsComponent } from "./new-programs/new-programs.component";
import { FacultyJournalComponent } from "./faculty-journal/faculty-journal.component";

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css'],
  imports: [HeroComponent, FooterComponent, VisionMissionComponent, DepartmentsComponent, NewProgramsComponent, FacultyJournalComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
