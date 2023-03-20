import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationPageComponent } from './components/confirmation-page/confirmation-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { LandingComponent } from './components/landing/landing.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  {
    path: 'home',
    component: LandingComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'confirmation',
    component: ConfirmationPageComponent
  },
  {
    path: 'about',
    component: PortfolioComponent
  },
  /* MAKE SURE THIS IS ALWAYS LAST*/
  {
    path: '**',
    redirectTo : 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
