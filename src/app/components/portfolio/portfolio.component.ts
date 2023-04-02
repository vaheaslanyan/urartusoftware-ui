import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate(300)
      ])
    ])
  ]
})
export class PortfolioComponent implements OnInit{
  selectedViewOption = 0;
  terminalNavigationNeverPressed = true;

  constructor(){}

  ngOnInit(): void {}

  changeViewOption(newViewOption: number) {
    this.selectedViewOption = newViewOption;
    this.terminalNavigationNeverPressed = false;
  }
}
