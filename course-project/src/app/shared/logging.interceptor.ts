import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  // This will let the request continue its journey
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).do(
      event => {
        console.log('Logging interceptor', event);
      }
    )
  }
}
