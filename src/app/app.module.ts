import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { CustomButtonComponent } from './components/shared/custom-button/custom-button.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './components/shared/alert/alert.component';
import { ConfirmationPageComponent } from './components/confirmation-page/confirmation-page.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TextCloudComponent } from './components/text-cloud/text-cloud.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { BioComponent } from './components/portfolio/bio/bio.component';
import { TechStackComponent } from './components/portfolio/tech-stack/tech-stack.component';
import { PortfolioFaceComponent } from './components/portfolio/portfolio-face/portfolio-face.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioShowroomComponent } from './components/portfolio/portfolio-showroom/portfolio-showroom.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    CustomButtonComponent,
    ContactComponent,
    ContactFormComponent,
    AlertComponent,
    ConfirmationPageComponent,
    PortfolioComponent,
    TextCloudComponent,
    TerminalComponent,
    BioComponent,
    TechStackComponent,
    PortfolioFaceComponent,
    FooterComponent,
    PortfolioShowroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
