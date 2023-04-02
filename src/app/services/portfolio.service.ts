import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { HttpClient} from '@angular/common/http';
import pojectItems from '../data/StaticProjects.json'
import { PortfolioProjectItem } from '../models/PortfolioProjectItem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class PortfolioService {

  projectItemsData: PortfolioProjectItem[] = pojectItems;

  constructor(private httpClient: HttpClient, private alertService: AlertService) {}

  getAllProjectItems(): PortfolioProjectItem[] {
    // return this.projectItemsData;
    return this.projectItemsData;
  }
}
