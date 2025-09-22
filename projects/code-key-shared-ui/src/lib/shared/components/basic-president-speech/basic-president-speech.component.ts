import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

export interface President {
  name: string;
  title: string;
  image: { src: string; alt: string };
  credentials?: string[];
}

export interface PresidentMessageData {
  subtitle: string;
  title: string;
  president: President;
  message: {
    title: string;
    paragraphs: string[];
  };
}
@Component({
  selector: 'app-basic-president-speech',
    imports: [CommonModule],
  templateUrl: './basic-president-speech.component.html',
  styleUrls: ['./basic-president-speech.component.css']
})
export class BasicPresidentSpeechComponent implements OnInit {
@Input() data!: PresidentMessageData;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data?.message?.paragraphs) {
      this.data.message.paragraphs = this.data.message.paragraphs.filter(p => !!p.trim());
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
