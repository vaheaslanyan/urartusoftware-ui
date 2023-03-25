import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
})
export class TerminalComponent implements OnInit {
  path = 'about';
  typedText = ' ';
  charCount = 0;
  isResettingAnimation = false;
  isInNavMenu = true;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {}

  navBack() {
    this.resetPath();
    setTimeout(() => {
      this.typedText = 'cd .. && ls';
      this.charCount = this.typedText.length;
      this.isResettingAnimation = false;
      setTimeout(() => {
        this.path = 'about';
        this.isInNavMenu = true;
        this.typedText = '';
        this.charCount = 0;
      }, 2000);
    }, 1);
  }

  lsOptionClicked(option: string) {
    this.resetPath();
    this.navToOption(option);
  }

  resetPath() {
    this.isResettingAnimation = true;
    this.charCount = 0;
    this.typedText = '';
  }

  navToOption(option: string) {
    setTimeout(() => {
      this.charCount = option.length;
      this.typedText = option;
      this.isResettingAnimation = false;
      setTimeout(() => {
        this.path = option;
        this.isInNavMenu = false;
        this.typedText = '';
        this.charCount = 0;
      }, 2000);
    }, 1);
  }
}
