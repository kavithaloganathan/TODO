import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';


@Injectable({
  providedIn: 'root'
})
export class RouteGaurdService implements CanActivate{

  constructor(private hService:HardcodedAuthenticationService,public router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
  if(this.hService.isUserLoggedIn())
      return true;
  this.router.navigate(['login']);
  return false;

}
}
