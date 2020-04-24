import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentalListComponent } from './rental/rental-list/rental-list.component';
import { RentalDetailComponent } from './rental/rental-detail/rental-detail.component';


const routes: Routes = [
 {path:"rental", component:RentalListComponent},
 {path:"rental/:id", component:RentalDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
