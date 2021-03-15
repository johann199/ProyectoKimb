import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BailarinesListComponent } from './bailarines-list.component';

describe('BailarinesListComponent', () => {
  let component: BailarinesListComponent;
  let fixture: ComponentFixture<BailarinesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BailarinesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BailarinesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
