import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AbputComponent } from './abput/abput.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'shop',
    component: ShopComponent,
  },
  {
    path:'product-detail/:name/:id',
    component:ProductDetailsComponent,
  },
  {
    path:'blog',
    component: BlogComponent,
  },
  {
    path:'about',
    component: AbputComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
