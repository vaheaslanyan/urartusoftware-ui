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

  imageUrlsArray = [
    'https://res.cloudinary.com/dolmkfdxb/image/upload/v1680297300/project-screenshots/Screenshot_2023-03-28_at_7.17.39_PM_ida7zl.png',
    'https://res.cloudinary.com/dolmkfdxb/image/upload/v1680297299/project-screenshots/Screenshot_2023-03-28_at_7.17.48_PM_ubdmfc.png',
    'https://res.cloudinary.com/dolmkfdxb/image/upload/v1680297300/project-screenshots/Screenshot_2023-03-28_at_7.17.59_PM_rifjuf.png',
    'https://res.cloudinary.com/dolmkfdxb/image/upload/v1680297300/project-screenshots/Screenshot_2023-03-28_at_7.18.08_PM_m8ptju.png',
    'https://res.cloudinary.com/dolmkfdxb/image/upload/v1680297299/project-screenshots/Screenshot_2023-03-28_at_7.17.19_PM_btojl5.png',
    'https://res.cloudinary.com/dolmkfdxb/image/upload/v1680297332/project-screenshots/Screenshot_2022-12-12_at_2.45.22_PM_z3rkp3.png',
    'https://res.cloudinary.com/dolmkfdxb/image/upload/v1680297337/project-screenshots/Screenshot_2022-12-12_at_2.46.02_PM_octn02.png',
    'https://res.cloudinary.com/dolmkfdxb/image/upload/v1680297314/project-screenshots/Screenshot_2022-12-12_at_2.42.02_PM_zjkwgh.png',
    'https://res.cloudinary.com/dolmkfdxb/image/upload/v1680297355/project-screenshots/IMG_0846_onbnja.png',
    'https://res.cloudinary.com/dolmkfdxb/image/upload/v1680297370/project-screenshots/IMG_0848_kjurlx.png',
    'https://res.cloudinary.com/dolmkfdxb/image/upload/v1680297360/project-screenshots/IMG_0847_fuuf9o.png',
    'https://res.cloudinary.com/dolmkfdxb/image/upload/v1680297302/project-screenshots/Screenshot_2022-12-13_at_3.56.07_PM_wwwmxy.png',
    'https://res.cloudinary.com/dolmkfdxb/image/upload/v1680466299/project-screenshots/travlr_ylov0m.png',
    'https://res.cloudinary.com/dolmkfdxb/image/upload/v1680466521/project-screenshots/Screenshot_2023-04-02_at_3.13.08_PM_qbezyg.png',
    'https://res.cloudinary.com/dolmkfdxb/image/upload/v1680466521/project-screenshots/Screenshot_2023-04-02_at_3.15.00_PM_vbecyy.png',
    'https://res.cloudinary.com/dolmkfdxb/image/upload/v1680466521/project-screenshots/Screenshot_2023-04-02_at_3.14.24_PM_hfxnrf.png'
  ]

}
