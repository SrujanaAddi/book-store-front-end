import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewCategoriesComponent } from './admin-view-categories.component';

describe('AdminViewCategoriesComponent', () => {
  let component: AdminViewCategoriesComponent;
  let fixture: ComponentFixture<AdminViewCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
