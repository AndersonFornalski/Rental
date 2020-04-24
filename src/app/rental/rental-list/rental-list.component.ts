import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {

  rentals: any[] = [
   /* {
    id: 1,
    title:"House ",
    city:"Boston",
    street:"Place Rides ",
    category:"House",
    image:"",
    bedrooms: 4,
    description:"Good House",
    dailyRate: 20,
    shared: false,
    createdAt:"20/04/2020"
  },
  {
  id: 2,
  title:"Central Apartment",
  city:"New York",
  street:"Times Square",
  category:"Apartment",
  image:"",
  bedrooms: 3,
  description:"Very Nice Apartment",
  dailyRate: 34,
  shared: false,
  createdAt:"24/12/2017"
},
{
id: 3,
title:"Central Apartment",
city:"New York",
street:"Times Square",
category:"Apartment",
image:"",
bedrooms: 3,
description:"Place front to mar",
dailyRate: 34,
shared: false,
createdAt:"04/03/2018"
},
{
id: 4,
title:"Apartment",
city:"Toronto",
street:"Tires Rooms bad",
category:"Apartment",
image:"",
bedrooms: 2,
description:"Have a place more or less",
dailyRate: 24,
shared: false,
createdAt:"19/05/2019"  
}*/

];

  constructor(private rentalService: RentalService) { }

  ngOnInit() {
    this.rentals = this.rentalService.getRentals();
     
  }

}
