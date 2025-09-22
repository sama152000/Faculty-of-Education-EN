import { Component, Input, OnInit } from '@angular/core';
import { NavTab } from '../../interfaces/layout/layout';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basic-footer',
    imports: [CommonModule, RouterLink],

  templateUrl: './basic-footer.component.html',
  styleUrls: ['./basic-footer.component.css']
})
export class BasicFooterComponent implements OnInit {
 @Input() siteName: string = '';
  @Input() siteDescription: string = '';
  @Input() quickLinks: NavTab[] = [];
  @Input() contactInfo: { icon: string, value: string }[] = [];
  @Input() direction: 'rtl' | 'ltr' = 'rtl';


  currentYear = new Date().getFullYear();
  constructor() { }

  ngOnInit() {
  }

}
