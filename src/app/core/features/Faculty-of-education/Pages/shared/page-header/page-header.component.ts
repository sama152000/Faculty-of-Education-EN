import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent {
  @Input() title: string = '';
  @Input() currentPage: string = '';
  @Input() breadcrumbs: Array<{ label: string, url?: string }> = [];
  @Input() tabs: Array<{ label: string, route: string }> = [];
  @Input() activeTab: string = '';
}