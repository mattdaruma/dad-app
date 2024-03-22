import { FormControl } from "@angular/forms";
import { DadWidget } from "../dad-widget.interface";

export interface DadField extends DadWidget {
   Control?: FormControl
   Key: string
   Value?: string
}
