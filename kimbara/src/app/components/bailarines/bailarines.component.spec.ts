import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BailarinesComponent } from './bailarines.component';

describe('BailarinesComponent', () => {
  let component: BailarinesComponent;
  let fixture: ComponentFixture<BailarinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BailarinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BailarinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
