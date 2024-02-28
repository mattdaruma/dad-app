import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BannerData } from './banner-data.interface';
import { Subject, first } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatListModule, MatButtonModule, RouterModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  ViewData = new Subject<BannerData>()
  @ViewChild('bannerImage') set Banner(banner: ElementRef){
    this.ViewData.pipe(first()).subscribe(view => {
      if(view?.Banner){
        banner.nativeElement.style.backgroundImage = `url(${view?.Banner})`
      }else{
      }
    })
  }
  @ViewChild('bannerAvatar') set Avatar(banner: ElementRef){
    this.ViewData.pipe(first()).subscribe(view => {
      banner.nativeElement.style.backgroundImage = `url(${view.Avatar})`
    })
  }
  constructor(public http: HttpClient, private route: ActivatedRoute){
    route.data.subscribe(d => {
      http.get<BannerData>(d['DataUrl']).subscribe(view => {
        this.ViewData.next(view)
      })
    })
  }
}
