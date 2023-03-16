import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AlertService } from './services/alert.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { BasicComponent } from './pages/layouts/basic/basic.component';
import { AdminComponent } from './pages/layouts/admin/admin.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminService } from './services/admin.service';
import { CustomerLayoutComponent } from './pages/layouts/customer-layout/customer-layout.component';
import { AdminRegisterComponent } from './pages/admin-register/admin-register.component';
import { AdminAddBookComponent } from './pages/admin/admin-add-book/admin-add-book.component';
import { AdmimViewBookComponent } from './pages/admin/admim-view-book/admim-view-book.component';
import { AdmimViewOrdersComponent } from './pages/admin/admim-view-orders/admim-view-orders.component';
import { AdmimViewPaymentsComponent } from './pages/admin/admim-view-payments/admim-view-payments.component';
import { UserViewBooksComponent } from './pages/user/user-view-books/user-view-books.component';
import { UserBookCartComponent } from './pages/user/user-book-cart/user-book-cart.component';
import { UserMyOrdersComponent } from './pages/user/user-my-orders/user-my-orders.component';
import { UserService } from './services/user.service';
import { CreateCategoryComponent } from './pages/admin/create-category/create-category.component';
import { AdminChangePasswordComponent } from './pages/admin/admin-change-password/admin-change-password.component';
import { UserChangePasswordComponent } from './pages/user/user-change-password/user-change-password.component';
import { UserCategoryListComponent } from './pages/user/user-category-list/user-category-list.component';
import { AdminViewCategoriesComponent } from './pages/admin/admin-view-categories/admin-view-categories.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BasicComponent,
    AdminComponent,
    AdminLoginComponent,
    CustomerLayoutComponent,
    AdminRegisterComponent,
    AdminAddBookComponent,
    AdmimViewBookComponent,
    AdmimViewOrdersComponent,
    AdmimViewPaymentsComponent,
    UserViewBooksComponent,
    UserBookCartComponent,
    UserMyOrdersComponent,
    CreateCategoryComponent,
    AdminChangePasswordComponent,
    UserChangePasswordComponent,
    UserCategoryListComponent,
    AdminViewCategoriesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    AlertService,
    ApiService,
    AuthService,
    AdminService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
