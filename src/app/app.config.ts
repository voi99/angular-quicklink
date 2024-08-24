import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withPreloading } from '@angular/router';
import { quicklinkProviders, QuicklinkStrategy } from 'ngx-quicklink';
import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    quicklinkProviders,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withPreloading(QuicklinkStrategy)),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
  ],
};
