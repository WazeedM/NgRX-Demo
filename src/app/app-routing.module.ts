import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path:'counter', component: CounterComponent},
  {path:'products', component: ProductsComponent},
  {path:'', redirectTo: '/counter', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
