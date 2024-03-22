import { FormControl } from "@angular/forms"
import { DadStyle } from "../../dad-style.interface"
import { DadField } from "../dad-field.interface"

export interface DadFieldText extends DadField{
    Type: 'field-text'
    Appearance?: 'fill' | 'outline'
    Label?: string
    DataList?: DataListItem[]
}
export interface DataListItem{
    Value?: string
    Display?: string
}