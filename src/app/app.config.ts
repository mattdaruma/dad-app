import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config.service';
import { provideQuillConfig } from 'ngx-quill';

const quillToolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        
  //['blockquote', 'code-block'],
  ['link', 'image', 'video'],//, 'formula'],

  //[{ 'header': 1 }, { 'header': 2 }],              
  //[{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
  //[{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  //[{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  //[{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  //[{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  //[{ 'align': [] }],

  ['clean']                                         // remove formatting button
];

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
    provideQuillConfig({
      theme: 'snow',
      modules: {
        toolbar: quillToolbarOptions
      }
    }),
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
