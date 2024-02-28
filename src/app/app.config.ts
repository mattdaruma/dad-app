import { APP_INITIALIZER, ApplicationConfig, Injectable, InjectionToken, importProvidersFrom } from '@angular/core';
import { Router, RouterModule, provideRouter } from '@angular/router';

import { baseRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config.service';


export interface DadRoute {
  Route: string,
  Template: string,
  Data: string
}
let DadRoutes: DadRoute[] = []


export function loadDadConfig(config: ConfigService) {
  return () => config.load()
}

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule), 
    provideRouter(baseRoutes), 
    provideAnimationsAsync(),
    {
      provide: APP_INITIALIZER,
      useFactory: loadDadConfig,
      multi: true,
      deps: [ConfigService]
    }
  ]
};
