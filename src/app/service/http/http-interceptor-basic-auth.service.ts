import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(private basicAuthService:BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
   
        let basicAuthHeaderString= this.basicAuthService.getAuthenticatedToken();
        let user=this.basicAuthService.getAuthenticatedUser();
        if(basicAuthHeaderString && user){
      request=request.clone({setHeaders:{Authorization:basicAuthHeaderString}});
        }
return next.handle(request);
        
  }
}
