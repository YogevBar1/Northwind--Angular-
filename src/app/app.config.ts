import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http"

// ProvidedHttpClient ()
// Create a singleton object

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient() ]
};


