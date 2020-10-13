import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../shared/dataService';

@Component({
  selector: 'app-login',
  templateUrl: 'app-login.component.html',
  styles: [
  ]
})
export class LoginComponent {

    constructor(private dataService: DataService, private router: Router) { }

    errorMessage: string = "";

    public creds = {
        username: "",
        password: ""
    };

    onLogin() {
        alert(this.creds.username);
        this.dataService.login(this.creds)
            .subscribe(success => {
                if (success) {
                    this.router.navigate([""]);
                }
            }, err => this.errorMessage = "Failed to login")
    }
}
