import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  // This will let the request continue its journey
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', req);
    const copiedReq = req.clone({
      //headers: req.headers.append('', '') // This adds additional headers
      params: req.params.set('auth', this.authService.getToken())
    });
    return next.handle(copiedReq);
  }


}
