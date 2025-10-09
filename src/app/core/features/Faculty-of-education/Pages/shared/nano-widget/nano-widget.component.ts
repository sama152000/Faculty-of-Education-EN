import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavItem {
  id: string;
  icon: string;
  label: string;
  route: string;
  color: string;
}

@Component({
  selector: 'app-nano-widget',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nano-widget.component.html',
  styleUrls: ['./nano-widget.component.css']
})
export class NanoWidgetComponent {
  navItems: NavItem[] = [
    {
      id: 'home',
      icon: 'pi pi-home',
      label: 'Home',
      route: '/home',
      color: 'var(--nano-color)'
    },
    {
      id: 'about',
      icon: 'pi pi-info-circle',
      label: 'About',
      route: '/about-us/vision-mission',
      color: 'var(--nano-color)'
    },
    {
      id: 'departments',
      icon: 'pi pi-building',
      label: 'prgrams',
      route: '/programs',
      color: 'var(--nano-color)'
    },
    {
      id: 'staff',
      icon: 'pi pi-users',
      label: 'Staff',
      route: '/about-us/staff-members',
      color: 'var(--nano-color)'
    },
    {
      id: 'news',
      icon: 'pi pi-calendar',
      label: 'News',
      route: '/news-events',
      color: 'var(--nano-color)'
    },
    {
      id: 'contact',
      icon: 'pi pi-phone',
      label: 'Contact Us',
      route: '/contact',
      color: 'var(--nano-color)'
    }
  ];

  hoveredItem: string | null = null;

  onItemHover(itemId: string): void {
    this.hoveredItem = itemId;
  }

  onItemLeave(): void {
    this.hoveredItem = null;
  }
}