import {
  HttpEvent,
  HttpHandler,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export function httpRequestInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  // req = req.clone({ withCredentials: true });
  req = req.clone();
  return next(req);
}
