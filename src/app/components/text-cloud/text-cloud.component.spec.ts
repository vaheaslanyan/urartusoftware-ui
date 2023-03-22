import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCloudComponent } from './text-cloud.component';

describe('TextCloudComponent', () => {
  let component: TextCloudComponent;
  let fixture: ComponentFixture<TextCloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextCloudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
