import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioShowroomComponent } from './portfolio-showroom.component';
import { HttpClientModule } from '@angular/common/http';

describe('PortfolioShowroomComponent', () => {
  let component: PortfolioShowroomComponent;
  let fixture: ComponentFixture<PortfolioShowroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioShowroomComponent ],
      imports: [ HttpClientModule ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioShowroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
