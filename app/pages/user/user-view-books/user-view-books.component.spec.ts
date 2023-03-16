import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewBooksComponent } from './user-view-books.component';

describe('UserViewBooksComponent', () => {
  let component: UserViewBooksComponent;
  let fixture: ComponentFixture<UserViewBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
