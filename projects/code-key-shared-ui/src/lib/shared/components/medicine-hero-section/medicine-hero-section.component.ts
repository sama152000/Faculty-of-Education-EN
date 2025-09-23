import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface HeroSlide {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
  buttonText?: string;
  position: 'left' | 'center' | 'right';
}

@Component({
  selector: 'ck-medicine-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medicine-hero-section.component.html',
  styleUrls: ['./medicine-hero-section.component.css']
})
export class MedicineHeroSectionComponent implements OnInit, OnDestroy {
  @Input() slides: HeroSlide[] = [];
  @Input() buttonText: string = 'Our Services';
  @Input() autoPlayInterval: number = 5000; // 5 seconds

  currentSlideIndex = 0;
  isHovered = false;
  private autoPlayTimer?: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  get currentSlide(): HeroSlide | null {
    return this.slides[this.currentSlideIndex] || null;
  }

  get slidePositions(): { [key: number]: string } {
    return {
      0: 'right',
      1: 'left',
      2: 'center'
    };
  }

  nextSlide() {
    if (this.slides.length > 0) {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    }
  }

  prevSlide() {
    if (this.slides.length > 0) {
      this.currentSlideIndex = this.currentSlideIndex === 0
        ? this.slides.length - 1
        : this.currentSlideIndex - 1;
    }
  }

  goToSlide(index: number) {
    if (index >= 0 && index < this.slides.length) {
      this.currentSlideIndex = index;
    }
  }

  onMouseEnter() {
    this.isHovered = true;
    this.stopAutoPlay();
  }

  onMouseLeave() {
    this.isHovered = false;
    this.startAutoPlay();
  }

  private startAutoPlay() {
    if (this.slides.length > 1) {
      this.autoPlayTimer = setInterval(() => {
        this.nextSlide();
      }, this.autoPlayInterval);
    }
  }

  private stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = undefined;
    }
  }

  getPositionClass(position: string): string {
    return `caption-${position}`;
  }

  getAnimationClass(): string {
    return 'animated flipInX';
  }
}
