import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './settings/config.service';

export interface DadRoute {
  Route: string,
  Template: string,
  Data: string
}

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter([]),
    provideAnimationsAsync(),
    {
      provide: APP_INITIALIZER,
      useFactory: (config: ConfigService) => {
        return () => config.load()
      },
      multi: true,
      deps: [ConfigService]
    }
  ]
};
