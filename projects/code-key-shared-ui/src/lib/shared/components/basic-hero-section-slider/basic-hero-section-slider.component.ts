import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface HeroSlide {
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl: string;   
  ctaText?: string;
  ctaLink?: string;
}

@Component({
  selector: 'app-basic-hero-section-slider',
    imports: [CommonModule, RouterModule],

  templateUrl: './basic-hero-section-slider.component.html',
  styleUrls: ['./basic-hero-section-slider.component.css']
})
export class BasicHeroSectionSliderComponent implements OnInit {

   @Input() slides: HeroSlide[] = [];
  @Input() autoPlay: boolean = true;
  @Input() slideDuration: number = 5000;

  currentSlideIndex = 0;
  private slideInterval: any;

  ngOnInit(): void {
    if (!this.slides.length) {
      // fallback slide لو مفيش داتا
    this.slides = [{
  title: 'عنوان افتراضي',
  subtitle: 'وصف فرعي',
  description: 'وصف نصي للـ Hero Section.',
  imageUrl: '/assets/fallback-hero.jpg',
  ctaText: 'اعرف المزيد',
  ctaLink: '/about'
}];

    }

    if (this.autoPlay) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    this.slideInterval = setInterval(() => this.nextSlide(), this.slideDuration);
  }

  stopAutoSlide(): void {
    if (this.slideInterval) clearInterval(this.slideInterval);
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
    this.stopAutoSlide();
    setTimeout(() => {
      if (this.autoPlay) this.startAutoSlide();
    }, 1000);
  }

  getCurrentSlide(): HeroSlide {
  return this.slides[this.currentSlideIndex];
}


}
