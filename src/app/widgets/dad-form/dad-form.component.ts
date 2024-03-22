import { Component, Input, forwardRef } from '@angular/core';
import { DadForm } from './dad-form.interface';
import { FormGroup, ReactiveFormsModule, FormArray, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DadWidget } from '../dad-widget.interface';
import { DadWidgetComponent } from '../dad-widget.component';
import { DadField } from '../dad-field/dad-field.interface';

@Component({
  selector: 'app-dad-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, forwardRef(()=> DadWidgetComponent)],
  templateUrl: './dad-form.component.html',
  styleUrl: './dad-form.component.scss'
})
export class DadFormComponent {
  private tests: any = null
  private _formData: DadForm | undefined = undefined
  @Input() set Form(input: DadForm) {
    this.DadForm = {}
    this.FormGroup = undefined
    this.recursiveFields(input.Children ?? [])
    this.FormGroup = new FormGroup(this.DadForm)
    this._formData = input
    if(this.tests) this.tests.unsubscribe()
    this.tests = this.FormGroup.valueChanges.subscribe(val => {
    })
  }
  get Form(): DadForm | undefined{
    return this._formData
  }
  DadForm = {} as {[prop: string]: FormControl}
  FormGroup: FormGroup | undefined = undefined
  private recursiveFields(inputs: DadWidget[]): void {
    for (let input of inputs) {
      if (input?.Type.startsWith('field-')) {
        let field = input as DadField
        field.Control = new FormControl(field.Value ?? '')
        this.DadForm[field.Key] = field.Control
      }
      if (input.Children) this.recursiveFields(input.Children)
    }
  }
}