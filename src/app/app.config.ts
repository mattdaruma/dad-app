import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config.service';


export interface DadRoute {
  Route: string,
  Template: string,
  Data: string
}

export function loadDadConfig(config: ConfigService) {
  return () => config.load()
}

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule), 
    provideRouter([]), 
    provideAnimationsAsync(),
    {
      provide: APP_INITIALIZER,
      useFactory: loadDadConfig,
      multi: true,
      deps: [ConfigService]
    }
  ]
};
