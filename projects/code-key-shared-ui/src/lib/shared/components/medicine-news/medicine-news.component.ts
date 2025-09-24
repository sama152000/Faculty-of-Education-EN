import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  specialty: string;
  date: string;
  imageUrl: string;
  readMoreUrl?: string;
}

@Component({
  selector: 'ck-medicine-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medicine-news.component.html',
  styleUrls: ['./medicine-news.component.css']
})
export class MedicineNewsComponent implements OnInit, OnDestroy {
  @Input() newsItems: NewsItem[] = [];
  @Input() sectionTitle: string = 'Featured News and Insights';
  @Input() sectionSubtitle: string = 'Read the latest news about medicross as well as medical news around the world.';
  @Input() showTitle: boolean = true;
  @Input() itemsPerView: number = 3;
  @Input() autoPlay: boolean = false;
  @Input() autoPlayInterval: number = 5000;

  currentIndex = 0;
  private autoPlayTimer?: any;

  ngOnInit() {
    if (this.autoPlay && this.newsItems.length > this.itemsPerView) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  get visibleItems(): NewsItem[] {
    if (this.newsItems.length === 0) return [];

    const endIndex = Math.min(this.currentIndex + this.itemsPerView, this.newsItems.length);
    return this.newsItems.slice(this.currentIndex, endIndex);
  }

  get hasNext(): boolean {
    return this.currentIndex + this.itemsPerView < this.newsItems.length;
  }

  get hasPrev(): boolean {
    return this.currentIndex > 0;
  }

  nextSlide() {
    if (this.hasNext) {
      this.currentIndex += this.itemsPerView;
    }
  }

  prevSlide() {
    if (this.hasPrev) {
      this.currentIndex = Math.max(0, this.currentIndex - this.itemsPerView);
    }
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  onMouseEnter() {
    this.stopAutoPlay();
  }

  onMouseLeave() {
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  private startAutoPlay() {
    if (this.newsItems.length > this.itemsPerView) {
      this.autoPlayTimer = setInterval(() => {
        if (this.hasNext) {
          this.nextSlide();
        } else {
          this.currentIndex = 0; // Loop back to beginning
        }
      }, this.autoPlayInterval);
    }
  }

  private stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = undefined;
    }
  }

  getDateParts(dateString: string): { day: string; month: string } {
    const date = new Date(dateString);
    return {
      day: date.getDate().toString(),
      month: date.toLocaleDateString('en-US', { month: 'short' })
    };
  }

  trackByFn(index: number, item: NewsItem): number {
    return item.id;
  }
}
