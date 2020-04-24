import { Injectable } from '@angular/core';
import { Rental } from '../model/rental.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  rentalss: any[] = [
    {
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
  }
  ];
  
  constructor() { }

 public getRentalsById(rentalId: String): Observable<Rental>{
   return new Observable<Rental>((observer)=>{
      setTimeout(()=>{
        const foundRental = this.rentalss.find((rental)=>{
          return rental.id == rentalId;
        });
        observer.next(foundRental);
      }, 500)
   });
}

  
 public getRentals(): any[]{
   return this.rentalss;
  }
}
