import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/rental.service';
import { Rental } from 'src/app/model/rental.model';

@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {

  rentals: Rental[];
  
  constructor(private rentalService: RentalService) { }

  ngOnInit() {
    this.rentalService.getRentals()
      .subscribe(data => {
        console.log(data);
        this.rentals = data;
      })
     
  }

}
