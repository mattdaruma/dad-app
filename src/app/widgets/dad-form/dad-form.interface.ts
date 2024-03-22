import { FormControl } from "@angular/forms"
import { DadWidget } from "../dad-widget.interface"

export interface DadForm extends DadWidget{
    Type: 'form'
    FormGroup: DadFormGroup
}

export interface DadFormGroup {
    [prop: string]: FormControl
}