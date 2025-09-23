import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

export interface Statistic {
  id: number;
  title: string;
  count: number;
  icon: string; 
}
@Component({
  selector: 'app-basic-statistics-cards',
    imports: [CommonModule],
  templateUrl: './basic-statistics-cards.component.html',
  styleUrls: ['./basic-statistics-cards.component.css']
})
export class BasicStatisticsCardsComponent implements OnInit {

   @Input() statistics: Statistic[] = [];
  @Input() sectionTitle: string = 'إحصائيات';
  @Input() sectionSubtitle: string = 'أرقام تعكس التميز والإنجازات';

  displayedCounts: number[] = [];
  private animationStarted = false;

  ngOnInit(): void {
    this.displayedCounts = this.statistics.map(() => 0);

    if (this.statistics.length) {
      setTimeout(() => this.startCountAnimation(), 500);
    }
  }

  private startCountAnimation(): void {
    if (this.animationStarted) return;
    this.animationStarted = true;

    this.statistics.forEach((stat, index) => {
      this.animateCount(index, stat.count);
    });
  }

  private animateCount(index: number, targetCount: number): void {
    const duration = 2000;
    const steps = 60;
    const increment = targetCount / steps;
    let currentCount = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      currentCount = Math.min(Math.floor(increment * step), targetCount);
      this.displayedCounts[index] = currentCount;

      if (currentCount >= targetCount) {
        clearInterval(timer);
        this.displayedCounts[index] = targetCount;
      }
    }, duration / steps);
  }

  formatNumber(num: number): string {
    return num.toLocaleString();
  }

}
