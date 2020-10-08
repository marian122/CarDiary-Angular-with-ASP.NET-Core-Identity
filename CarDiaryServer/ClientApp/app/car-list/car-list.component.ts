import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/dataService';

@Component({
  selector: 'car-list',
  templateUrl: 'car-list.component.html',
  styles: [
  ]
})
export class CarListComponent implements OnInit {

  

  constructor(private data: DataService) {
    
   }

  public cars = [];
  ngOnInit(): void {
    this.data.loadProducts()
    .subscribe(success => {
      if(success){
        this.cars = this.data.cars;
      }
    })
  }

}
