import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/layouts/admin/admin.component';
import { BasicComponent } from './pages/layouts/basic/basic.component';
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from './pages/register/register.component';


import { AuthGuard } from './gurds/auth.guard';
import { AdminGuard } from './gurds/admin.guard';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { CustomerLayoutComponent } from './pages/layouts/customer-layout/customer-layout.component';
import { AdminRegisterComponent } from './pages/admin-register/admin-register.component';
import { AdminAddBookComponent } from './pages/admin/admin-add-book/admin-add-book.component';
import { AdmimViewBookComponent } from './pages/admin/admim-view-book/admim-view-book.component';
import { AdmimViewPaymentsComponent } from './pages/admin/admim-view-payments/admim-view-payments.component';
import { AdmimViewOrdersComponent } from './pages/admin/admim-view-orders/admim-view-orders.component';
import { UserViewBooksComponent } from './pages/user/user-view-books/user-view-books.component';
import { UserBookCartComponent } from './pages/user/user-book-cart/user-book-cart.component';
import { UserMyOrdersComponent } from './pages/user/user-my-orders/user-my-orders.component';
import { CreateCategoryComponent } from './pages/admin/create-category/create-category.component';
import { AdminChangePasswordComponent } from './pages/admin/admin-change-password/admin-change-password.component';
import { UserChangePasswordComponent } from './pages/user/user-change-password/user-change-password.component';
import { UserCategoryListComponent } from './pages/user/user-category-list/user-category-list.component';
import { AdminViewCategoriesComponent } from './pages/admin/admin-view-categories/admin-view-categories.component';



const routes: Routes = [

  {
    path: '',
    component: BasicComponent,
    // pathMatch: 'full',
    children: [
      {
        path: '',
        component: HomeComponent
      },

      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'admin-login',
        component: AdminLoginComponent
      },


    ]
  },
  {
    path: 'user',
    component: CustomerLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'books-view',
        component: UserViewBooksComponent
      },
      {
        path: 'book-cart',
        component: UserBookCartComponent
      },
      {
        path: 'orders-view',
        component: UserMyOrdersComponent
      },
      {
        path: 'change-password',
        component: UserChangePasswordComponent
      }, {
        path: 'view-category',
        component: UserCategoryListComponent
      },


    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'book-add',
        component: AdminAddBookComponent
      },
      {
        path: 'books-view',
        component: AdmimViewBookComponent
      },
      {
        path: 'orders-view',
        component: AdmimViewOrdersComponent
      },
      {
        path: 'payments-view',
        component: AdmimViewPaymentsComponent
      },
      {
        path: 'register',
        component: AdminRegisterComponent
      },
      {
        path: 'category-add',
        component: CreateCategoryComponent
      },
      {
        path: 'category-view',
        component: AdminViewCategoriesComponent
      },
      {
        path: 'change-password',
        component: AdminChangePasswordComponent
      }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
