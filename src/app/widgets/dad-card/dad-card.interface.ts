import { DadWidget } from "../dad-widget.interface"

export interface DadCard extends DadWidget{
    Type: 'card'
}

export interface DadCardImage extends DadWidget{
    Type: 'card-image'
    URL?: string
    Title?: string
}

export interface DadCardHeader extends DadWidget{
    Type: 'card-header'
    Title?: string
    Subtitle?: string
    Avatar?: DadCardImage
}

export interface DadCardActions extends DadWidget {
    Type: 'card-actions'
    Children?: DadCardAction[]
}

export interface DadCardAction extends DadWidget {
    Type: 'card-action'
    Icon?: string
    Display?: string
    Color?: string
    RouterLink?: string[]
    HREF?: string
}

export interface DadCardContent extends DadWidget {
    Type: 'card-content'
}

export interface DadCardFooter extends DadWidget {
    Type: 'card-footer'
    Text?: string
}