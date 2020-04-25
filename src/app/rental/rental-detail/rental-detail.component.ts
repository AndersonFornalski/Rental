import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rental } from 'src/app/model/rental.model';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {

  currentId: String;

  rents: Rental;

  constructor(private route: ActivatedRoute, private rentalService: RentalService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (data)=>{
        console.log(data);
        this.getRentalss(data["id"])
      }
    )
  }

  getRentalss(rentalId: String){
    this.rentalService.getRentalsById(rentalId)
      .subscribe((rents: Rental) =>{
        this.rents = rents 
      })
  }

}
