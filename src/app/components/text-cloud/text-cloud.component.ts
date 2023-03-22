import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-cloud',
  templateUrl: './text-cloud.component.html',
  styleUrls: ['./text-cloud.component.scss']
})
export class TextCloudComponent implements OnInit{
  firstLine = "Welcome to my portfolio.";
  secondLine = "Keep scrolling.";

  firstLineWidth?: string;
  secondLineWidth? : string;

  constructor(){}

  ngOnInit(): void {
    this.firstLineWidth = this.firstLine.length + 'ch';
    this.secondLineWidth = this.secondLine.length + 'ch';
  }
  
}
