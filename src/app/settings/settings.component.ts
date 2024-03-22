import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatIconModule} from '@angular/material/icon'; 

import { SettingsColorsComponent } from './settings-colors/settings-colors.component';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatIconModule, SettingsColorsComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  animations: [
    trigger("fadeInOut", [
      transition(":enter", [style({ opacity: 0 }), animate(300, style({ opacity: 1 }))]),
      transition(":leave", [style({ position: 'absolute', width: '100%' }), animate(300, style({ opacity: 0 }))])
    ])]
})
export class SettingsComponent {
  @HostBinding('@fadeInOut') public fadeInOut = true;
}
