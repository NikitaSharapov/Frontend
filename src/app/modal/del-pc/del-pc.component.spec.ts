import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelPcComponent } from './del-pc.component';

describe('DelPcComponent', () => {
  let component: DelPcComponent;
  let fixture: ComponentFixture<DelPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelPcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
