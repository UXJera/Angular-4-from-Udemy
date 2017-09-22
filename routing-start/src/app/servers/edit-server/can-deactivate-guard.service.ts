import { Observable } from 'rxjs/Observable';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface CanComponentDeactivate {
  // interface is a contract that can be imported by another class which forces the class to provide some logic
  canDeactivate: () => Observable<boolean> | Promise<boolean> |  boolean;

}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> |  boolean {
      return component.canDeactivate();
    }
}
