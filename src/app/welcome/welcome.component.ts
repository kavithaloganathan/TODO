import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name='';
  message='';
  errorMessage='';
  constructor(private router:ActivatedRoute,private welcomeDataService:WelcomeDataService) { }

  ngOnInit() {
   this.name=this.router.snapshot.params['name'];
  }

  getWelcomeMessage(){
    this.welcomeDataService.executeHelloworldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getCustomWelcomeMessage(){
    this.welcomeDataService.executeHelloworldWithPathBeanService(this.name).subscribe(
      response => this.handleSuccessfulPathResponse(response)      
    );
  }

  handleSuccessfulPathResponse(response){
    this.message= response.message;
   }

  handleSuccessfulResponse(response){
   this.message= response.message;
  }
  handleErrorResponse(error){
    this.errorMessage=error.error.message;
  }

}
