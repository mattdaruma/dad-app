import { Component, HostBinding, OnDestroy } from '@angular/core';
import { DadPage } from './dad-page.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map, concatAll, Subject, catchError, BehaviorSubject, tap, debounceTime, finalize, take, shareReplay, share, delay } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DadWidgetComponent } from '../../widgets/dad-widget.component';
import { DadWidget } from '../../widgets/dad-widget.interface';
import { DadField } from '../../widgets/dad-field/dad-field.interface';
import { FormControl } from '@angular/forms';
import { DadForm, DadFormGroup } from '../../widgets/dad-form/dad-form.interface';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TestOuterComponent } from '../../widgets/test-outer/test-outer.component';
import { transition, style, animate, trigger } from '@angular/animations';
import { DadPageService } from './dad-page.service';

@Component({
  selector: 'app-dad-page',
  standalone: true,
  imports: [CommonModule, RouterModule, MatProgressBarModule, DadWidgetComponent, TestOuterComponent],
  templateUrl: './dad-page.component.html',
  styleUrl: './dad-page.component.scss',
  animations: [
    trigger("fadeInOut", [
      transition(":enter", [style({ opacity: 0 }), animate(300, style({ opacity: 1 }))]),
      transition(":leave", [style({ position: 'absolute', width: '100%', zIndex: '-1' }), animate(300, style({ opacity: 0 }))])
    ])]
})
export class DadPageComponent {
  @HostBinding('@fadeInOut') public fadeInOut = true;
  JSON = JSON
  public widgetCount: number = 0
  public widgetLoadCount: number = 0
  private widgetLoaded = new Subject<string>()
  public PageLoad = this.widgetLoaded.pipe(
    map(l => {
      this.page.WidgetLoaded.next(l)
      this.widgetLoadCount++
      return Math.floor((this.widgetLoadCount / this.widgetCount) * 100)
    }),
    debounceTime(0),
    shareReplay(1))
  NoData = false
  Error: string | undefined = undefined
  PageData = this.route.data.pipe(
    delay(300),
    tap(x => {this.NoData = false; this.page.WidgetLoaded.next(undefined)}),
    map(data => this.http.get<DadWidget[]>(data['DataUrl'])),
    concatAll(),
    catchError((err: HttpErrorResponse) => { this.Error = JSON.stringify(err, null, 4); return []}),
    map(data => {
      this.page.DataLoaded.next(true)
      this.widgetCount = 0
      this.widgetLoadCount = 0
      let initializedWidgets = this.initializeWidgets(data)
      this.page.WidgetCount.next(this.widgetCount)
      return initializedWidgets
    }),
    finalize(() => {
      if (this.widgetCount === 0) this.NoData = true
    })
  )
  private initializeWidgets(inputs: DadWidget[], formGroup: DadFormGroup | undefined = undefined): DadWidget[] {
    for (let input of inputs) {
      this.widgetCount++
      input.Loaded = this.widgetLoaded
      if (input.Type === 'form') {
        let form = input as DadForm
        formGroup = {} as DadFormGroup
        form.FormGroup = formGroup
      }
      if (input?.Type.startsWith('field-')) {
        let field = input as DadField
        field.Control = new FormControl(field.Value ?? '')
        if (formGroup) formGroup[field.Key] = field.Control
      }
      if (input.Children) input.Children = this.initializeWidgets(input.Children, formGroup)
    }
    return inputs
  }
  constructor(public http: HttpClient, private route: ActivatedRoute, private page: DadPageService) {
    this.page.DataLoaded.next(false)
  }
}

