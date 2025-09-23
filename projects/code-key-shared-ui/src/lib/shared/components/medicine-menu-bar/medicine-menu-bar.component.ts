import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface MenuTab {
  id?: string;
  title: string;
  target: string;
  order: number;
  menuTypeId: string;
  parentId?: string | null;
  childs?: MenuTab[];
  fragment?: string;
  icon?: string;
  isActive?: boolean;
}

@Component({
  selector: 'ck-medicine-menu-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './medicine-menu-bar.component.html',
  styleUrls: ['./medicine-menu-bar.component.css']
})
export class MedicineMenuBarComponent {
  @Input() menuTabs: MenuTab[] = [
    {
      id: '1',
      title: 'Home',
      target: '/home',
      order: 1,
      menuTypeId: 'main',
      isActive: true
    },
    {
      id: '2',
      title: 'Pages',
      target: '/pages',
      order: 2,
      menuTypeId: 'main',
      childs: [
        { title: 'About', target: '/about', order: 1, menuTypeId: 'sub' },
        { title: 'Services', target: '/services', order: 2, menuTypeId: 'sub' },
        { title: 'Contact', target: '/contact', order: 3, menuTypeId: 'sub' }
      ]
    },
    {
      id: '3',
      title: 'Components',
      target: '/components',
      order: 3,
      menuTypeId: 'main'
    },
    {
      id: '4',
      title: 'Utilities',
      target: '/utilities',
      order: 4,
      menuTypeId: 'main',
      childs: [
        { title: 'Tools', target: '/tools', order: 1, menuTypeId: 'sub' },
        { title: 'Helpers', target: '/helpers', order: 2, menuTypeId: 'sub' }
      ]
    },
    {
      id: '5',
      title: 'Plugins',
      target: '/plugins',
      order: 5,
      menuTypeId: 'main'
    },
    {
      id: '6',
      title: 'Documentation',
      target: '/documentation',
      order: 6,
      menuTypeId: 'main',
      childs: [
        { title: 'API Docs', target: '/api-docs', order: 1, menuTypeId: 'sub' },
        { title: 'Guides', target: '/guides', order: 2, menuTypeId: 'sub' },
        { title: 'Examples', target: '/examples', order: 3, menuTypeId: 'sub' }
      ]
    }
  ];

  @Input() isCollapsed = false;
  @Output() tabSelected = new EventEmitter<MenuTab>();

  activeDropdown: string | null = null;

  constructor() { }

  onTabClick(tab: MenuTab, event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    // Handle dropdown toggle
    if (tab.childs && tab.childs.length > 0) {
      this.activeDropdown = this.activeDropdown === tab.id ? null : tab.id!;
      return;
    }

    // Handle regular tab selection
    this.selectTab(tab);
  }

  selectTab(tab: MenuTab): void {
    // Update active states
    this.menuTabs.forEach(t => {
      t.isActive = false;
      if (t.childs) {
        t.childs.forEach(child => child.isActive = false);
      }
    });

    tab.isActive = true;
    this.activeDropdown = null;

    // Emit selection event
    this.tabSelected.emit(tab);
  }

  onSubTabClick(subTab: MenuTab, parentTab: MenuTab, event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    // Update active states
    this.menuTabs.forEach(t => {
      t.isActive = false;
      if (t.childs) {
        t.childs.forEach(child => child.isActive = false);
      }
    });

    subTab.isActive = true;
    parentTab.isActive = true;
    this.activeDropdown = null;

    // Emit selection event
    this.tabSelected.emit(subTab);
  }

  toggleMobileMenu(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  closeDropdown(): void {
    this.activeDropdown = null;
  }

  trackByFn(index: number, item: MenuTab): string {
    return item.id || item.title;
  }
}
