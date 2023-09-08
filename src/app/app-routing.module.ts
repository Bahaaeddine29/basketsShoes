import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasketsListComponent } from './baskets-list/baskets-list.component';
import { Error404Component } from './error404/error404.component';
import { BasketsDetailsComponent } from './baskets-details/baskets-details.component';

const routes: Routes = [
  {path: "", component:HomeComponent}, 
  {path: "baskets", component:BasketsListComponent}, 
  {path: "baskets/:id", component:BasketsDetailsComponent}, 
  {path: "**", component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
