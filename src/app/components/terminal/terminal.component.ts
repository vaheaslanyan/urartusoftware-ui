import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit{

  typedText = 'portfolio';
  charCount = 9;
  isResettingAnimation = false;

  constructor(private renderer: Renderer2, private el: ElementRef){}

  ngOnInit(): void {
  }

  lsOptionClicked(option: string) {
    this.isResettingAnimation = true;

    this.charCount = 0;
    this.typedText = "";

    setTimeout(() => {
      this.charCount = option.length;
    this.typedText = option;
    this.isResettingAnimation = false;
    }, 1);

  }
}
