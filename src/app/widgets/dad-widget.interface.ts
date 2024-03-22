import { Subject } from "rxjs";
import { DadStyle } from "./dad-style.interface";

export interface DadWidget {
  Type: string
  Loaded?: Subject<string>
  Style?: DadStyle
  Children?: DadWidget[]
}
