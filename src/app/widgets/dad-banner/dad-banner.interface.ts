import { DadImage } from "../dad-image/dad-image.interface";
import { DadWidget } from "../dad-widget.interface";

export interface DadBanner extends DadWidget {
    Type: 'banner',
    Image: DadImage
}