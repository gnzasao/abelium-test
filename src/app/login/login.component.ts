import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(private router: Router) {}

  ngOnInit(): void {
  }

    loginUser(event: any) {
    event.preventDefault();
    let username = event.target.elements[0].value;
    let password = event.target.elements[1].value;
    return false;
  }

  goToHome() {
    this.router.navigate(['/home'])
  }
}
