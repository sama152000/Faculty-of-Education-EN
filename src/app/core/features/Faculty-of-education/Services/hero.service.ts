import { Injectable } from '@angular/core';
import { HeroContent, HeroSlide } from '../model/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroContent: HeroContent = {
    slides: [
      {
        id: '1',
        image: './assets/slide3.jpg',
        title: 'Preparing Outstanding Teachers for a Brighter Educational Future',
        description: 'Faculty of Education – Luxor University, a fully integrated academic environment for preparing future teachers in line with the latest quality standards.',
        buttonText: 'Learn More',
        buttonLink: '/about'
      },
      {
        id: '2',
        image: './assets/slide2.jpg',
        title: 'Excellence in Teacher Education',
        description: 'Discover our comprehensive programs designed to shape the next generation of educators with modern teaching methodologies.',
        buttonText: 'Explore Programs',
        buttonLink: '/programs'
      },
      {
        id: '3',
        image: './assets/slide1.jpg',
        title: 'Innovation in Educational Research',
        description: 'Join our research community dedicated to advancing educational practices through cutting-edge research and development.',
        buttonText: 'Research Hub',
        buttonLink: '/research'
      }
    ],
    autoSlideInterval: 5000
  };

  getHeroContent(): HeroContent {
    return this.heroContent;
  }

  getHeroSlides(): HeroSlide[] {
    return this.heroContent.slides;
  }
}