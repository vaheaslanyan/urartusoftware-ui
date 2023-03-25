import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
})
export class TerminalComponent implements OnInit {

  // Emmiter to send the the selected view option to parent which will show appropriate component
  @Output() newViewOptionEvent = new EventEmitter<number>();

  path = '';
  typedText = '';
  charCount = 0;
  isResettingAnimation = false;
  isInNavMenu = true;
  isLs = true;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {}

  lsOptionClicked(option: number) {
    this.resetPath();
    this.navToOption(option);
  }

  handleComponentChange(option: number) {
    this.newViewOptionEvent.emit(option);
  }

  // Navigation animations
  navBack() {
    this.resetPath();
    setTimeout(() => {
      this.typedText = 'cd ..';
      this.charCount = this.typedText.length;
      this.isResettingAnimation = false;
      setTimeout(() => {
        this.path = '';
        this.isInNavMenu = true;
        this.typedText = '';
        this.charCount = 0;
        this.handleComponentChange(0);
        setTimeout(() => {
          this.typedText = 'ls';
          this.charCount = this.typedText.length;
          this.isResettingAnimation = false;
          setTimeout(() => {
            this.isLs = true;
            this.typedText = '';
            this.charCount = 0;
          }, 2000);
        }, 1);
      }, 2000);
    }, 1);
  }

  resetPath() {
    this.isResettingAnimation = true;
    this.charCount = 0;
    this.typedText = '';
  }

  navToOption(option: number) {

    var optionTag = '';

    switch(option) {
      case 1:
        optionTag = 'bio';
        break;
      case 2:
        optionTag = 'tech-stack';
        break;
      case 3:
        optionTag = 'portfolio';
        break;
      default:
        optionTag = 'error';
    }

    setTimeout(() => {
      this.typedText = 'cd ' + optionTag;
      this.charCount = this.typedText.length;
      this.isResettingAnimation = false;
      setTimeout(() => {
        this.path = '/' + optionTag;
        this.isInNavMenu = false;
        this.isLs = false;
        this.typedText = '';
        this.charCount = 0;
        this.handleComponentChange(option);
      }, 2000);
    }, 1);
  }
}
