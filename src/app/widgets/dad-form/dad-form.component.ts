import { Component, Input, forwardRef } from '@angular/core';
import { DadForm } from './dad-form.interface';
import { FormGroup, ReactiveFormsModule, FormArray, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DadWidgetComponent } from '../dad-widget.component';
import { WidgetComponentBase } from '../dad-widget.component.base';
import { map } from 'rxjs';

@Component({
  selector: 'app-dad-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, forwardRef(()=> DadWidgetComponent)],
  templateUrl: './dad-form.component.html',
  styleUrl: './dad-form.component.scss'
})
export class DadFormComponent extends WidgetComponentBase {
}