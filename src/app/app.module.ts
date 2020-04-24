import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RentalListComponent } from './rental/rental-list/rental-list.component';
import { RentalItemComponent } from './rental/rental-item/rental-item.component';
import { RentalComponent } from './rental/rental/rental.component';
import { RentalService } from './services/rental.service';
import { RentalDetailComponent } from './rental/rental-detail/rental-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RentalListComponent,
    RentalItemComponent,
    RentalComponent,
    RentalDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    AppRoutingModule
  ],
  providers: [RentalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
