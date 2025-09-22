import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

export interface TabItem {
  title: string;
  link: string;
  icon?: string; // أيقونة اختيارية
}
@Component({
  selector: 'app-basic-tab-menu',
    imports: [CommonModule, RouterModule],

  templateUrl: './basic-tab-menu.component.html',
  styleUrls: ['./basic-tab-menu.component.css']
})
export class BasicTabMenuComponent implements OnInit {

   constructor(private router: Router, private route: ActivatedRoute) {}

  @Input() tabs: TabItem[] = [];
  @Input() currentRoute: string = '';

  @Output() tabSelected = new EventEmitter<string>();

  ngOnInit(): void {
    this.currentRoute = this.router.url.split('/').pop() || '';
  }

  onTabClick(route: string) {
    this.currentRoute = route;
    this.tabSelected.emit(route);
    this.router.navigate([route], { relativeTo: this.route });
  }

}
