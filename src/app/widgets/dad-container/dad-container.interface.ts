import { DadWidget } from "../dad-widget.interface";

export interface DadContainer extends DadWidget{
    Type: 'container'
}

export interface DadContainerItem extends DadWidget{
    Type: 'container-item'
}