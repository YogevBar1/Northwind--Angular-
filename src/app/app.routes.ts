import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-area/home/home.component';
import { ProductListComponent } from './components/products-area/product-list/product-list.component';
import { AboutComponent } from './components/about-area/about/about.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { ProductsDetailsComponent } from './components/products-area/products-details/products-details.component';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';

export const routes: Routes = [

    {path: "home", component:HomeComponent},
    {path: "products", component:ProductListComponent},
    {path: "product-details/:id", component:ProductsDetailsComponent},
    {path: "products/new", component:AddProductComponent},
    {path: "about", component:AboutComponent},
    {path: "", redirectTo:"/home", pathMatch:"full"}  ,  //full= exact empty string
    {path: "**", component: PageNotFoundComponent}
];
