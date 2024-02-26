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
        if(route.Template == 'banner') newRoute.loadComponent = () => import('./home/home.component').then(m => m.HomeComponent)
        else newRoute.loadComponent = () => import('./listings/listings.component').then(m => m.ListingsComponent)
        newRoute.data = route
        appRoutes.push(newRoute)
      }
      appRoutes.push({
        path: '**',
        redirectTo: '/'
      })
      this.router.resetConfig(appRoutes)
      return true
    })
  }
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