import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmimViewPaymentsComponent } from './admim-view-payments.component';

describe('AdmimViewPaymentsComponent', () => {
  let component: AdmimViewPaymentsComponent;
  let fixture: ComponentFixture<AdmimViewPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmimViewPaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmimViewPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
