import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { RecentProductsComponent} from './components/recent-products/recent-products.component';
import { FilterProductsComponent} from './components/filter-products/filter-products.component';
import { ManageProductsComponent} from './components/manage-products/manage-products.component';

const routes: Routes = [
  {path: "home", component: RecentProductsComponent, pathMatch: "full" },
  {path: "filterproduct", component: FilterProductsComponent },
  {path: "manageproduct", component: ManageProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
