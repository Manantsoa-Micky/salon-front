import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpRequestInterceptor } from './_helpers/http.interceptor';
import { provideStore } from '@ngrx/store';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([httpRequestInterceptor])),
    provideStore(),
    provideAnimationsAsync(),
  ],
};
