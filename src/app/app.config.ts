import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading, withViewTransitions, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(withFetch()),
    provideRouter(routes, withViewTransitions(), withPreloading(PreloadAllModules),
      withInMemoryScrolling({
      scrollPositionRestoration: 'enabled',
    }),
  ),    {provide:LocationStrategy, useClass: HashLocationStrategy}, provideAnimationsAsync()
]
};
