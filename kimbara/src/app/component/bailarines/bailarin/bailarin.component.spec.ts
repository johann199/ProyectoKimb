import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BailarinComponent } from './bailarin.component';

describe('BailarinComponent', () => {
  let component: BailarinComponent;
  let fixture: ComponentFixture<BailarinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BailarinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BailarinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
