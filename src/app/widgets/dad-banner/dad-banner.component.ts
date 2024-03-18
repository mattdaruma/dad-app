import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DadBanner } from './dad-banner.interface';

@Component({
  selector: 'app-dad-banner',
  standalone: true,
  imports: [],
  templateUrl: './dad-banner.component.html',
  styleUrl: './dad-banner.component.scss'
})
export class DadBannerComponent {
  @ViewChild('BannerImage') set BannerImage(banner: ElementRef){
      banner.nativeElement.style.backgroundImage = `url(${this.Banner?.Image?.URL})`
      banner.nativeElement.style.height = this.Banner?.Height
  }
  @Input() Banner: DadBanner | undefined = undefined
}
