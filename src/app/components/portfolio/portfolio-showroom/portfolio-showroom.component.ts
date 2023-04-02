import { Component, OnInit } from '@angular/core';
import { AlertLevelEnum } from 'src/app/models/AlertLevelEnum';
import { PortfolioProjectItem } from 'src/app/models/PortfolioProjectItem';
import { AlertService } from 'src/app/services/alert.service';
import PortfolioService from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio-showroom',
  templateUrl: './portfolio-showroom.component.html',
  styleUrls: ['./portfolio-showroom.component.scss']
})
export class PortfolioShowroomComponent implements OnInit{

  projectItemsArr?: PortfolioProjectItem[];

  constructor(private portfolioService: PortfolioService, private alertService: AlertService) {}
  
  ngOnInit(): void {this.getItems()}

  getItems() {
    this.projectItemsArr = this.portfolioService.getAllProjectItems();
  }

}
