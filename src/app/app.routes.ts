import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'users', component: UserComponent },
      { path: 'products', component: ProductsComponent },
       { path: 'products/:id', component: ProductDetailComponent },
      { path: '', redirectTo: 'users', pathMatch: 'full' }
    ]
  }
];
