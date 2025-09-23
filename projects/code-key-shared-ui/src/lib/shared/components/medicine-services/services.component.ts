import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface ServiceItem {
  id?: string;
  title: string;
  description: string;
  iconPath: string;
  iconAlt: string;
  readMoreUrl?: string;
}

@Component({
  selector: 'ck-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  @Input() services: ServiceItem[] = [
    {
      id: '1',
      title: 'Corneal transplant surgery',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget...',
      iconPath: 'images/icons_box/icon_4/icon-5.png',
      iconAlt: 'Corneal transplant surgery Icon',
      readMoreUrl: '#'
    },
    {
      id: '2',
      title: 'Cardiothoracic Surgery',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget...',
      iconPath: 'images/icons_box/icon_4/icon-4.png',
      iconAlt: 'Cardiothoracic Surgery Icon',
      readMoreUrl: '#'
    },
    {
      id: '3',
      title: 'General health check',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget...',
      iconPath: 'images/icons_box/icon_4/icon-3.png',
      iconAlt: 'General health check Icon',
      readMoreUrl: '#'
    },
    {
      id: '4',
      title: 'Diagnosis & treatment of cancer',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget...',
      iconPath: 'images/icons_box/icon_4/icon-2.png',
      iconAlt: 'Cancer treatment Icon',
      readMoreUrl: '#'
    },
    {
      id: '5',
      title: 'Treatment of pneumonia',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget...',
      iconPath: 'images/icons_box/icon_4/icon-1.png',
      iconAlt: 'Pneumonia treatment Icon',
      readMoreUrl: '#'
    },
    {
      id: '6',
      title: 'Treatment of dermatitis',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget...',
      iconPath: 'images/icons_box/icon_4/icon.png',
      iconAlt: 'Dermatitis treatment Icon',
      readMoreUrl: '#'
    }
  ];

  @Input() sectionTitle: string = 'Our Services';
  @Input() showTitle: boolean = true;
  @Input() showAllServicesButton: boolean = true;
  @Input() allServicesUrl: string = '#';
  @Input() allServicesText: string = 'All services +';

  @Output() serviceClick = new EventEmitter<ServiceItem>();
  @Output() readMoreClick = new EventEmitter<ServiceItem>();
  @Output() allServicesClick = new EventEmitter<void>();

  constructor() { }

  onServiceClick(service: ServiceItem): void {
    this.serviceClick.emit(service);
  }

  onReadMoreClick(service: ServiceItem, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.readMoreClick.emit(service);
  }

  onAllServicesClick(): void {
    this.allServicesClick.emit();
  }

  trackByFn(index: number, item: ServiceItem): string {
    return item.id || item.title;
  }
}
