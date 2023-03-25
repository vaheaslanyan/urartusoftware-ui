import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFaceComponent } from './portfolio-face.component';

describe('PortfolioFaceComponent', () => {
  let component: PortfolioFaceComponent;
  let fixture: ComponentFixture<PortfolioFaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioFaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
