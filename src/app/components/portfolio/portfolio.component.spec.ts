import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioComponent } from './portfolio.component';
import { TerminalComponent } from '../terminal/terminal.component';
import { PortfolioFaceComponent } from './portfolio-face/portfolio-face.component';
import { FormsModule } from '@angular/forms';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        PortfolioComponent,
        TerminalComponent,
        PortfolioFaceComponent
      ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
