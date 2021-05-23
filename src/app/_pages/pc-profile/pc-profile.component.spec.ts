import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcProfileComponent } from './pc-profile.component';

describe('PcProfileComponent', () => {
  let component: PcProfileComponent;
  let fixture: ComponentFixture<PcProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
