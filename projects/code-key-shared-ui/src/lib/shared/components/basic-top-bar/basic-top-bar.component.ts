import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { LanguageOption } from '../../interfaces/layout/layout';

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  color: string;
}
export interface ContactDto {
  id?: string;
  address: string;
  phone: string;
  email: string;
  facebook: string;
  twitter?: string;
  instagram?: string;
  linkedIn?: string;
  youTube: string;
  whatsApp?: string;
  mapLocation: string;
}

@Component({
  selector: 'ck-basic-top-bar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, InputTextModule, ButtonModule, SelectModule],
  templateUrl: './basic-top-bar.component.html',
  styleUrls: ['./basic-top-bar.component.scss']
})
export class BasicTopBarComponent {
  @Input() contact: ContactDto[] = [];
  @Input() socialLinks: SocialLink[] = [];
  @Input() languages: LanguageOption[] = [];
  @Input() locationLabel: string = 'موقع الجامعة';

  @Input() currentLanguage = 'ar';
  @Output() search = new EventEmitter<string>();
  isHidden = false;
  isSearchOpen = false;
  searchQuery: string = '';
  private lastScrollTop = 0;

  constructor(private elementRef: ElementRef) { }

  // 🔽 Events
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 100 && scrollTop > this.lastScrollTop) {
      this.isHidden = true;
    } else if (scrollTop < this.lastScrollTop) {
      this.isHidden = false;
    }
    this.lastScrollTop = scrollTop;
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.updateTopBarHeight();
  }

  private updateTopBarHeight(): void {
    const topBarElement = this.elementRef.nativeElement.querySelector('.top-bar');
    if (topBarElement) {
      const height = topBarElement.offsetHeight;
      // 🔑 بدلاً من استخدام service جوه الليبراري → اعملي Output Event
    }
  }

  openSocialLink(url: string): void {
    window.open(url, '_blank');
  }

  openLocation(url: string): void {
    window.open(url, '_blank');
  }

  toggleSearch(): void {
    this.isSearchOpen = !this.isSearchOpen;
    if (!this.isSearchOpen) this.searchQuery = '';
  }

  onSearchKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.search.emit(this.searchQuery); // 🔑 نبعث الإيفنت
    }
  }

  openLanguageSite(url: string) {
    window.open(url, '_self'); // يفتح في نفس الصفحة، أو _blank لتبويب جديد
  }

  performSearch(): void { }
}
