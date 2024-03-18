import { DadWidget } from "../dad-widget/dad-widget.interface"

export type DadCardSection = DadCardImage | DadCardHeader | DadCardActions | DadCardFooter | DadCardContent

export interface DadCard{
    Type: 'card'
    Sections?: DadCardSection[]
}

export interface DadCardImage{
    Type: 'card-image'
    URL?: string
    Title?: string
}

export interface DadCardHeader{
    Type: 'card-header'
    Title?: string
    Subtitle?: string
    Avatar?: DadCardImage
}

export interface DadCardActions {
    Type: 'card-actions'
    JustifyContent?: string
    Actions?: DadCardAction[]
}

export interface DadCardAction{
    Type: 'card-action'
    Icon?: string
    Display?: string
    Color?: string
    RouterLink?: string[]
    HREF?: string
    Function?: string
}

export interface DadCardContent{
    Type: 'card-content'
    Widget?: DadWidget
}

export interface DadCardFooter{
    Type: 'card-footer'
    Text?: string
}