import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadFieldAutocompleteComponent } from './dad-field-autocomplete/dad-field-autocomplete.component';
import { DadFieldCheckboxComponent } from './dad-field-checkbox/dad-field-checkbox.component';
import { DadFieldColorComponent } from './dad-field-color/dad-field-color.component';
import { DadFieldDateComponent } from './dad-field-date/dad-field-date.component';
import { DadFieldFileComponent } from './dad-field-file/dad-field-file.component';
import { DadFieldHiddenComponent } from './dad-field-hidden/dad-field-hidden.component';
import { DadFieldNumberComponent } from './dad-field-number/dad-field-number.component';
import { DadFieldPasswordComponent } from './dad-field-password/dad-field-password.component';
import { DadFieldRadioComponent } from './dad-field-radio/dad-field-radio.component';
import { DadFieldRangeComponent } from './dad-field-range/dad-field-range.component';
import { DadFieldSelectComponent } from './dad-field-select/dad-field-select.component';
import { DadFieldTextComponent } from './dad-field-text/dad-field-text.component';
import { WidgetComponentBase } from '../dad-widget.component.base';

@Component({
  selector: 'app-dad-field',
  standalone: true,
  imports: [CommonModule, DadFieldAutocompleteComponent, DadFieldCheckboxComponent, DadFieldColorComponent,
    DadFieldDateComponent, DadFieldFileComponent, DadFieldHiddenComponent, DadFieldNumberComponent,
    DadFieldPasswordComponent, DadFieldRadioComponent, DadFieldRangeComponent, DadFieldSelectComponent,
    DadFieldTextComponent],
  templateUrl: './dad-field.component.html',
  styleUrl: './dad-field.component.scss'
})
export class DadFieldComponent extends WidgetComponentBase {
}
