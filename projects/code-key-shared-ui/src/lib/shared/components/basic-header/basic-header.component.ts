import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { LanguageOption, LogoDto, NavTab } from '../../interfaces/layout/layout';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-basic-header',
    imports: [CommonModule, RouterLink, RouterLinkActive],

  templateUrl: './basic-header.component.html',
  styleUrls: ['./basic-header.component.css']
})
export class BasicHeaderComponent implements OnInit {
  

  @Input() logo!: LogoDto | null;
  @Input() menus: NavTab[] = [];
  @Input() SiteName: string = '';
    @Input() languages: LanguageOption[] = []; 
  @Input() direction: 'rtl' | 'ltr' = 'rtl';

isMobileMenuOpen = false;
  isMobileSearchOpen = false;
  searchQuery = '';

  private destroy$ = new Subject<void>();

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.initScrollEffect();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    window.removeEventListener('scroll', this.initScrollEffect);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  toggleMobileSearch(): void {
    this.isMobileSearchOpen = !this.isMobileSearchOpen;
    if (!this.isMobileSearchOpen) this.searchQuery = '';
  }

  performSearch(): void {
    console.log('Searching for:', this.searchQuery);
  }

  private initScrollEffect = () => {
    const header = this.elementRef.nativeElement.querySelector('.header-container');
    let isScrolled = false;

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 50 && !isScrolled) {
        header?.classList.add('scrolled');
        isScrolled = true;
      } else if (scrollTop <= 50 && isScrolled) {
        header?.classList.remove('scrolled');
        isScrolled = false;
      }
    });
  };
}

