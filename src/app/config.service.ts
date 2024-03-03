import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Route, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { colord } from "colord";

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
      for (let route of routes) {
        let newRoute: Route = { path: route.Path }
        if (newRoute.path == '') newRoute.pathMatch = 'full'
        if (route.Template == 'settings') {
          newRoute.loadComponent = () => import('./settings/settings.component').then(m => m.SettingsComponent)
        } else if (route.Template == 'banner') {
          newRoute.loadComponent = () => import('./templates/banner/banner.component').then(m => m.BannerComponent)
        } else if (route.Template == 'list') {
          newRoute.loadComponent = () => import('./templates/list/list.component').then(m => m.ListComponent)
        } else {
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
      this.StartRave()
      return true
    })
  }

  private lightPrimaryText = 'rgba(255, 255, 255, 1)'
  private darkPrimaryText = 'rgba(0, 0, 0, .87)'
  autoColor: string = 'rgba(200, 0, 0, 1)'
  private rotateColor: any;
  StartRave() {
    this.rotateColor = setInterval(() => {
      let currentColor = colord(this.autoColor).rgba
      if ((currentColor.r > 0 && currentColor.g > 0) || currentColor.r == 200) {
        currentColor.r -= 5
        currentColor.g += 5
      } else if ((currentColor.g > 0 && currentColor.b > 0) || currentColor.g == 200) {
        currentColor.r = 0
        currentColor.g -= 5
        currentColor.b += 5
      } else if ((currentColor.b > 0 && currentColor.r > 0) || currentColor.b == 200) {
        currentColor.g = 0
        currentColor.b -= 5
        currentColor.r += 5
      }
      this.autoColor = `rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, 1)`
      this.SeedColor(this.autoColor)
    }, 30)
  }
  StopRave(){
    clearInterval(this.rotateColor)
  }
  SeedColor(rgba: string) {
    this.autoColor = rgba
    let isDark = colord(rgba).isLight()
    let primary = colord(rgba)
    let primaryHues = this.ComputeHues(primary.toRgbString())
    for (let hue of primaryHues) {
      document.documentElement.style.setProperty(`--theme-primary-${hue.hue}`, hue.color.toRgbString())
      if (hue.color.isLight()) {
        document.documentElement.style.setProperty(`--theme-primary-contrast-${hue.hue}`, this.darkPrimaryText)
      } else {
        document.documentElement.style.setProperty(`--theme-primary-contrast-${hue.hue}`, this.lightPrimaryText)
      }
    }
    let accent = colord(`rgba(${primary.rgba.b},${primary.rgba.r},${primary.rgba.g},1)`)
    let accentHues = this.ComputeHues(accent.toRgbString())
    for (let hue of accentHues) {
      document.documentElement.style.setProperty(`--theme-accent-${hue.hue}`, hue.color.toRgbString())
      if (hue.color.isLight()) {
        document.documentElement.style.setProperty(`--theme-accent-contrast-${hue.hue}`, this.darkPrimaryText)
      } else {
        document.documentElement.style.setProperty(`--theme-accent-contrast-${hue.hue}`, this.lightPrimaryText)
      }
    }
    let warn = colord('f44336')
    let warnHues = this.ComputeHues(warn.toRgbString())
    for (let hue of warnHues) {
      document.documentElement.style.setProperty(`--theme-warn-${hue.hue}`, hue.color.toRgbString())
      if (hue.color.isLight()) {
        document.documentElement.style.setProperty(`--theme-warn-contrast-${hue.hue}`, this.darkPrimaryText)
      } else {
        document.documentElement.style.setProperty(`--theme-warn-contrast-${hue.hue}`, this.lightPrimaryText)
      }
    }

    var body = document.getElementsByClassName('mat-app-background')![0]
    if (isDark) {
      if (!body.classList.contains('theme-dark')) {
        body.classList.add("theme-dark")
      }
    } else {
      if (body.classList.contains('theme-dark')) {
        body.classList.remove("theme-dark")
      }
    }
  }
  ComputeHues(rgba: string) {
    return [
      { hue: '50', color: colord(rgba).lighten(52) },
      { hue: '100', color: colord(rgba).lighten(37) },
      { hue: '200', color: colord(rgba).lighten(26) },
      { hue: '300', color: colord(rgba).lighten(12) },
      { hue: '400', color: colord(rgba).lighten(6) },
      { hue: '500', color: colord(rgba) },
      { hue: '600', color: colord(rgba).darken(6) },
      { hue: '700', color: colord(rgba).darken(12) },
      { hue: '800', color: colord(rgba).darken(18) },
      { hue: '900', color: colord(rgba).darken(24) },
      { hue: 'A100', color: colord(rgba).lighten(50).saturate(30) },
      { hue: 'A200', color: colord(rgba).lighten(30).saturate(30) },
      { hue: 'A300', color: colord(rgba).lighten(10).saturate(15) },
      { hue: 'A400', color: colord(rgba).lighten(5).saturate(5) }
    ];
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

export interface DadRoute {
  Path: string
  Template: string
  DataUrl: string
}