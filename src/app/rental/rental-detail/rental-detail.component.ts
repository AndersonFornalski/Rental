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
//        this.currentId = data["id"];
        console.log(data);
        this.getRental(data["id"]);
      }
    )
  }

  getRental(rentalId: String){
    this.rentalService.getRentalsById(rentalId)
      .subscribe((rents: Rental) =>{
        this.rents = rents 
      })
  }

}
