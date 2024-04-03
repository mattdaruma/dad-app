import { Component, HostBinding } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map, concatAll, catchError, tap, debounceTime, shareReplay, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DadWidgetComponent } from '../../widgets/dad-widget.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TestOuterComponent } from '../../widgets/test-outer/test-outer.component';
import { transition, style, animate, trigger } from '@angular/animations';
import { DadPageService } from '../dad-page.service';
import { DadWidget } from '../../widgets/dad-widget.class';
import { IDadWidget } from '../../widgets/dad-widget.interface';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dad-page',
  standalone: true,
  imports: [CommonModule, RouterModule, MatProgressBarModule, DadWidgetComponent, TestOuterComponent, MatIconModule],
  templateUrl: './dad-page.component.html',
  styleUrl: './dad-page.component.scss',
  animations: [
    trigger("fadeInOut", [
      transition(":enter", [style({ opacity: 0 }), animate(300, style({ opacity: 1 }))]),
      transition(":leave", [style({ position: 'absolute', width: '100%', zIndex: '-1' }), animate(300, style({ opacity: 0 }))])
    ])]
})
export class DadPageComponent {
  JSON = JSON
  @HostBinding('@fadeInOut') public fadeInOut = true
  Error: string | undefined = undefined
  WidgetCount = 0
  ReadyCount = 0
  LastDownload: number | undefined = undefined
  Widget = this.route.data.pipe(
    map(d => {
      let rawCache: any = localStorage.getItem(d['DataUrl'])
      let cache = rawCache !== null ? JSON.parse(rawCache) as DadPageCache : null
      let cacheTimeout = 1000 * 60 * 60 * 24
      if (cache === null || (new Date()).getTime() - cache.LastDownload > cacheTimeout)
        return this.http.get<IDadWidget>(d['DataUrl'])
          .pipe(
            tap(data => {
              this.LastDownload = (new Date()).getTime()
              localStorage.setItem(d['DataUrl'], JSON.stringify({
                LastDownload: this.LastDownload,
                Data: data
              }))
            }),
            catchError((err: HttpErrorResponse) => {
              this.Error = JSON.stringify(err, null, 4)
                .replace(/\<\/*pre\>/, ' ')
                .replace(/\n+/g, '\n')
                .replace(/(\\n)+/g, '');
              throw (err)
            })
          )
      this.LastDownload = cache.LastDownload
      return of(cache!.Data)
    }),
    debounceTime(0),
    concatAll(),
    map(data => new DadWidget(data)),
    tap(w => {
      this.WidgetCount = 0
      this.ReadyCount = 0
      if (w) for (let fieldId in w.Dictionary) {
        this.WidgetCount++
        w.Dictionary[fieldId].Ready.subscribe(() => {
          this.ReadyCount++
        })
      }
    }),
    shareReplay(1)
  )
  constructor(public http: HttpClient, private route: ActivatedRoute, private page: DadPageService) {  }
}

export interface DadPageCache {
  LastDownload: number
  Data: IDadWidget
}