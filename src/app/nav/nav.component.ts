import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isAuthenticated:boolean = false;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.userLoggedInObs.
    subscribe(m=> this.isAuthenticated = m);
  }


}
