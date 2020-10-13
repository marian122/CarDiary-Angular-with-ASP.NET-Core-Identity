import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: 'add-car.component.html',
  styles: [
  ]
})
export class AddCarComponent implements OnInit {

    constructor(private router: Router) { }

  ngOnInit(): void {
  }

    goBack() {
        this.router.navigate([""]);
    }

}
