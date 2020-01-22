import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username=''
  password=''
  errorMessage='Invalid Credentials'
  invalidLogin=false

  constructor(private router:Router,private hService:HardcodedAuthenticationService,
    private basicAuthService:BasicAuthenticationService) { }

  ngOnInit() {
  }
  handleLogin(){
    
    if(this.hService.authenticate(this.username,this.password)){
      this.invalidLogin=false
      this.router.navigate(['welcome',this.username]);
    }
    else{
      this.invalidLogin=true
    }
   
  }

  handleBasicLogin(){
    this.basicAuthService.executeBasicAuthService(this.username,this.password).subscribe(
      date=>{
        this.invalidLogin=false
        this.router.navigate(['welcome',this.username])
      },
      error=>{
        this.invalidLogin=true
      }
    )
    
   
  }
}
