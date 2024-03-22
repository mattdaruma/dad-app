import { DadWidget } from "../dad-widget.interface"

export interface DadText extends DadWidget {
    Type: 'text'
    Text?: string
}