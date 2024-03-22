import { DadStyle } from "../dad-style.interface"
import { DadWidget } from "../dad-widget.interface"

export interface DadView extends DadWidget{
    Type: 'view'
    HTML: string
}