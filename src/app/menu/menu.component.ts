import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLoggedIn:boolean=false;
  constructor(private hService:HardcodedAuthenticationService) { }

  ngOnInit() {
    console.log(this.hService.isUserLoggedIn());
    this.isLoggedIn=this.hService.isUserLoggedIn();
  }

}
