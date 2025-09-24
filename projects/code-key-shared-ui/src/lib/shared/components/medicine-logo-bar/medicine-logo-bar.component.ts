import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface LogoData {
  logoPath: string;
  logoAltText: string;
  title?: string;
}

export interface ContactInfo {
  address?: string;
  phone?: string;
  email?: string;
  phoneAppointment?: string;
}

@Component({
  selector: 'ck-medicine-logo-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medicine-logo-bar.component.html',
  styleUrls: ['./medicine-logo-bar.component.css']
})
export class MedicineLogoBarComponent {
  @Input() logoData: LogoData = {
    logoPath: 'assets/images/logo.png',
    logoAltText: 'Medicine Logo',
    title: 'Medicare'
  };

  @Input() contactInfo: ContactInfo = {
    address: '525 W Slauson Ave, LA, CA 90056, USA',
    phone: '(555) 555-1234',
    email: 'info@medicare.com',
    phoneAppointment: '(555) 555-5678'
  };

  constructor() { }

  openLocation(): void {
    if (this.contactInfo.address) {
      // This would typically open a map service
      window.open(`https://maps.google.com/?q=${encodeURIComponent(this.contactInfo.address)}`, '_blank');
    }
  }

  openPhone(phone: string): void {
    if (phone) {
      window.open(`tel:${phone}`, '_self');
    }
  }

  openEmail(): void {
    if (this.contactInfo.email) {
      window.open(`mailto:${this.contactInfo.email}`, '_self');
    }
  }
}
