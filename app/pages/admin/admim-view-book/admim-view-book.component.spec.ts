import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmimViewBookComponent } from './admim-view-book.component';

describe('AdmimViewBookComponent', () => {
  let component: AdmimViewBookComponent;
  let fixture: ComponentFixture<AdmimViewBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmimViewBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmimViewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
