import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BannerData } from './banner-data.interface';
import { Subject, concatAll, first, map } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatListModule, MatButtonModule, RouterModule, MatCardModule, QuillModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  private ViewData = this.route.data.pipe(
    map(data => this.http.get<BannerData>(data['DataUrl'])),
    concatAll()
  )
  public Banner = this.ViewData.pipe(map(data => data.Banner))
  public Header = this.ViewData.pipe(map(data => data.Title || data.Subtitle || data.Avatar))
  public Title = this.ViewData.pipe(map(data => data.Title))
  public Subtitle = this.ViewData.pipe(map(data => data.Subtitle))
  public Avatar = this.ViewData.pipe(map(data => data.Avatar))
  public Image = this.ViewData.pipe(map(data => data.Image))
  public Content = this.ViewData.pipe(map(data => data.Content))
  public Actions = this.ViewData.pipe(map(data => data.Actions))
  public Footer = this.ViewData.pipe(map(data => data.Footer))
  @ViewChild('bannerImage') set BannerImage(banner: ElementRef){
    this.ViewData.pipe(first()).subscribe(view => {
      banner.nativeElement.style.backgroundImage = `url(${view?.Banner})`
    })
  }
  constructor(public http: HttpClient, private route: ActivatedRoute){
  }
}
