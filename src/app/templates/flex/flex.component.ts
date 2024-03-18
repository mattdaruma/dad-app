import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FlexPage } from './flex-page.interface';
import { Subject, combineLatest, concatAll, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DadWidgetComponent } from '../../widgets/dad-widget/dad-widget.component';

@Component({
  selector: 'app-flex',
  standalone: true,
  imports: [CommonModule, DadWidgetComponent],
  templateUrl: './flex.component.html',
  styleUrl: './flex.component.scss'
})
export class FlexComponent {
  PageData = this.route.data.pipe(
    map(data => this.http.get<FlexPage>(data['DataUrl'])),
    concatAll()
  )
  constructor(public http: HttpClient, private route: ActivatedRoute) { }
}
