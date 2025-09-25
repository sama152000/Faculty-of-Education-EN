import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../../../Services/navigation.service';
import { NavItem } from '../../../model/navigation.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navItems: NavItem[] = [];
  isMenuOpen = false;
  openDropdowns: Set<string> = new Set();
  mainIds: Set<string> = new Set();

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.navItems = this.navigationService.getMainNavItems();
    this.mainIds = new Set(this.navItems.map(item => item.id));
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown(itemId: string, event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (this.mainIds.has(itemId)) {
      this.openDropdowns.clear();
    }

    if (this.openDropdowns.has(itemId)) {
      this.openDropdowns.delete(itemId);
    } else {
      this.openDropdowns.add(itemId);
    }
  }

  isDropdownOpen(itemId: string): boolean {
    return this.openDropdowns.has(itemId);
  }

  closeAllDropdowns(): void {
    this.openDropdowns.clear();
  }

  navigateToUniversity(): void {
    window.open('http://www.luxor.edu.eg/#/', '_blank');
  }

  handleItemClick(item: NavItem): void {
    if (item.external && item.url) {
      window.open(item.url, '_blank');
    } else if (item.children && item.children.length > 0) {
      this.toggleDropdown(item.id);
    }
  }
}