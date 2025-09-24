import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';


export interface HeroData {
  title: string;
  subtitle?: string;
}
@Component({
  selector: 'app-basic-solid-hero-section',
    imports: [CommonModule],
  templateUrl: './basic-solid-hero-section.component.html',
  styleUrls: ['./basic-solid-hero-section.component.css']
})
export class BasicSolidHeroSectionComponent implements OnInit {
  @Input() data: HeroData = { title: 'عنوان افتراضي', subtitle: 'وصف افتراضي' };

  constructor() { }

  ngOnInit() {
  }

}
