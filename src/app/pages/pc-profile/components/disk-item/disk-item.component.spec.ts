import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiskItemComponent } from './disk-item.component';

describe('DiskItemComponent', () => {
  let component: DiskItemComponent;
  let fixture: ComponentFixture<DiskItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiskItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiskItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
