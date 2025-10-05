import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContactInfo, SocialMediaLink, ImportantLink } from '../model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactInfo: ContactInfo = {
    address: 'Faculty of Education – Luxor University – Luxor – New Tiba City, next to the New Tiba City Authority',
    email: 'waleed2507@yahoo.co.uk',
    phone: '01010577677',
    socialMedia: [
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/profile.php?id=61564395931625',
        icon: 'pi pi-facebook',
        color: '#1877F2'
      },
      {
        platform: 'University Facebook',
        url: 'https://www.facebook.com/LuxorUniversityOfficial/?locale=ar_AR',
        icon: 'pi pi-facebook',
        color: '#1877F2'
      }
    ],
    importantLinks: [
      {
        title: 'Luxor University Official Website',
        url: 'http://www.luxor.edu.eg/#/',
        description: 'Access the main university portal for comprehensive information',
        icon: 'pi pi-globe'
      },
      {
        title: 'Luxor University Facebook',
        url: 'https://www.facebook.com/LuxorUniversityOfficial/?locale=ar_AR',
        description: 'Follow university updates and announcements',
        icon: 'pi pi-facebook'
      },
      {
        title: 'Faculty of Education Facebook',
        url: 'https://www.facebook.com/profile.php?id=61564395931625',
        description: 'Connect with our faculty community',
        icon: 'pi pi-facebook'
      }
    ]
  };

  getContactInfo(): Observable<ContactInfo> {
    return of(this.contactInfo);
  }

  sendMessage(messageData: any): Observable<boolean> {
    // Simulate sending message
    console.log('Message sent:', messageData);
    return of(true);
  }
}