import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingSoonComponent } from './coming-soon.component';
import { CustomButtonComponent } from '../shared/custom-button/custom-button.component';

describe('ComingSoonComponent', () => {
  let component: ComingSoonComponent;
  let fixture: ComponentFixture<ComingSoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComingSoonComponent, CustomButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComingSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
