import { AfterViewInit, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu'; 
import { CommonModule } from '@angular/common';
import { ConfigService } from './config.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  constructor(public config: ConfigService){
    // document.documentElement.style.setProperty("--theme-primary-50", "#e8eaf6")
    // document.documentElement.style.setProperty("--theme-primary-100", "#c5cae9")
    // document.documentElement.style.setProperty("--theme-primary-200", "#9fa8da")
    // document.documentElement.style.setProperty("--theme-primary-300", "#7986cb")
    // document.documentElement.style.setProperty("--theme-primary-400", "#5c6bc0")
    // document.documentElement.style.setProperty("--theme-primary-500", "#3f51b5")
    // document.documentElement.style.setProperty("--theme-primary-600", "#3949ab")
    // document.documentElement.style.setProperty("--theme-primary-700", "#303f9f")
    // document.documentElement.style.setProperty("--theme-primary-800", "#283593")
    // document.documentElement.style.setProperty("--theme-primary-900", "#1a237e")
    // document.documentElement.style.setProperty("--theme-primary-A100", "#8c9eff")
    // document.documentElement.style.setProperty("--theme-primary-A200", "#536dfe")  
    // document.documentElement.style.setProperty("--theme-primary-A400", "#3d5afe")
    // document.documentElement.style.setProperty("--theme-primary-A700", "#304ffe")
    // document.documentElement.style.setProperty("--theme-primary-contrast-50", "rgba(black, 0.87)")
    // document.documentElement.style.setProperty("--theme-primary-contrast-100", "rgba(black, 0.87)")
    // document.documentElement.style.setProperty("--theme-primary-contrast-200", "rgba(black, 0.87)")
    // document.documentElement.style.setProperty("--theme-primary-contrast-300", "white")
    // document.documentElement.style.setProperty("--theme-primary-contrast-400", "white")
    // document.documentElement.style.setProperty("--theme-primary-contrast-500", "white")
    // document.documentElement.style.setProperty("--theme-primary-contrast-600", "white")
    // document.documentElement.style.setProperty("--theme-primary-contrast-700", "white")
    // document.documentElement.style.setProperty("--theme-primary-contrast-800", "white")
    // document.documentElement.style.setProperty("--theme-primary-contrast-900", "white")
    // document.documentElement.style.setProperty("--theme-primary-contrast-A100", "rgba(black, 0.87)")
    // document.documentElement.style.setProperty("--theme-primary-contrast-A200", "white")
    // document.documentElement.style.setProperty("--theme-primary-contrast-A400", "white")
    // document.documentElement.style.setProperty("--theme-primary-contrast-A700", "white")
    //document.documentElement.style.setProperty("--theme-background", "#F00")
  }
  ngAfterViewInit(): void {
    this.config.SeedColor()
  }
}
