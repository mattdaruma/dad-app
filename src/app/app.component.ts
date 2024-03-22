import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, HostListener, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ActivationEnd, ActivationStart, ChildActivationEnd, ChildActivationStart, GuardsCheckEnd, GuardsCheckStart, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, ResolveEnd, ResolveStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterModule, RoutesRecognized, Scroll } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { ConfigService } from './settings/config.service';
import { BehaviorSubject, Subject, combineLatestWith, debounceTime, delay, filter, map, of, shareReplay, startWith, tap } from 'rxjs';
import { ProgressService } from './system/progress.service';
import { DadAppService } from './dad-app.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatProgressBarModule, MatIconModule, MatButtonModule, MatMenuModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  @ViewChild('dadAppContainer') App: ElementRef | undefined = undefined
  delayer = 30
  PendingRequests = this.progress.PendingRequests.pipe(
    map(r => r > 0 ? true : false),
    debounceTime(0), 
    startWith(false)
    )
  constructor(public config: ConfigService, public router: Router, public progress: ProgressService) {
  }
  ngAfterViewInit(): void {
    let loader = document.getElementsByClassName('loader-container')![0]
    this.App?.nativeElement.classList.add('dad-fade-show')
    loader.classList.remove('dad-fade-show')
    setTimeout(()=>{
      loader.remove()
      this.App?.nativeElement.classList.add('dad-fade-show')
    }, 300)
  }
}
