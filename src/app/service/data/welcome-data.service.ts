import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URI } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }
  executeHelloworldBeanService(){
return this.http.get(`${API_URI}/hello-world-bean`);
  }

  executeHelloworldWithPathBeanService(name:string){
    return this.http.get(`${API_URI}/hello-world-bean/path-variable/`+name);
      }
}
