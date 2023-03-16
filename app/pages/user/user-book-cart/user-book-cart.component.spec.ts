import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookCartComponent } from './user-book-cart.component';

describe('UserBookCartComponent', () => {
  let component: UserBookCartComponent;
  let fixture: ComponentFixture<UserBookCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBookCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBookCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
