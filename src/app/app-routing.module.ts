import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ShopComponent } from './shop/shop.component';

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
    path:'blog',
    component: BlogComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
