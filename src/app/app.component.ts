import { AfterViewInit, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ActivationStart, Router, RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu'; 
import { CommonModule } from '@angular/common';
import { ConfigService } from './settings/config.service';
import { filter, map } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  CurrentRoute = this.router.events.pipe(
    filter(event => event instanceof ActivationStart),
    map(event => (event as ActivationStart).snapshot)
    )
  constructor(public config: ConfigService, public router: Router){}
  ngAfterViewInit(): void {
  }
}
