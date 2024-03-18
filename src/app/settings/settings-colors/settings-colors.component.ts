import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ColorPickerModule } from 'ngx-color-picker';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-settings-colors',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatIconModule, MatFormFieldModule, MatInputModule, ColorPickerModule],
  templateUrl: './settings-colors.component.html',
  styleUrl: './settings-colors.component.scss'
})
export class SettingsColorsComponent {
  color: any
  SeedColorSelect(rgba: string){
     this.config.StopRave()
     this.config.SeedColor(rgba)
  }
  constructor(private config: ConfigService){}
}


