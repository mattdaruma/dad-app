import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, forkJoin, tap } from 'rxjs';
import { baseRoutes } from './app.routes';
import { Route, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  Icon: string = 'person'
  Title: string = 'DEFAULT TITLE'
  Nav: DadNav[] = []
  constructor(private http: HttpClient, private router: Router, private readonly title: Title) { }
  load() {
    return forkJoin([
      this.http.get<DadConfig>('/assets/dad-config.json'),
      this.http.get<DadRoute[]>('/assets/dad-routes.json')
    ], (configs, routes) => {
      this.Icon = configs.Icon
      this.Title = configs.Title
      this.Nav = configs.Nav
      this.title.setTitle(configs.Title)
      document.getElementById('dad-favicon')?.setAttribute('href', '/assets/dad-favicon.ico');
      let appRoutes: Route[] = []
      for(let route of routes){
        let newRoute: Route = {path: route.Path}
        if(newRoute.path == '') newRoute.pathMatch = 'full'
        if(route.Template == 'banner') {
          newRoute.loadComponent = () => import('./templates/banner/banner.component').then(m => m.BannerComponent)
        }else if(route.Template == 'list') { 
          newRoute.loadComponent = () => import('./templates/list/list.component').then(m => m.ListComponent)
        }else {
          newRoute.loadComponent = () => import('./errors/no-template/no-template.component').then(m => m.NoTemplateComponent)
          newRoute.data = route
        }
        newRoute.data = route
        appRoutes.push(newRoute)
      }
      appRoutes.push({
        path: '**',
        loadComponent: () => import('./errors/not-found/not-found.component').then(m => m.NotFoundComponent),
      })
      this.router.resetConfig(appRoutes)
      console.log('🤠 Routes Loaded.  Welcome to DAD-APP!')
      return true
    })
  }
}

export interface DadError {
  Title: string
  Message: string
  Timestamp: Date
  Error: any
}

export interface DadConfig {
  Icon: string,
  Title: string,
  Nav: DadNav[]
}

export interface DadNav {
  RouterLink: string
  Icon: string
  Display: string
}

export interface DadRoute{
  Path: string
  Template: string
  DataUrl: string
}