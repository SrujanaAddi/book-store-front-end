import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmimViewOrdersComponent } from './admim-view-orders.component';

describe('AdmimViewOrdersComponent', () => {
  let component: AdmimViewOrdersComponent;
  let fixture: ComponentFixture<AdmimViewOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmimViewOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmimViewOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
