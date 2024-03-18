import { DadNav } from "../../settings/config.service"
import { DadImage } from "../../widgets/dad-image.interface"

export interface BannerData {
    Banner: string
    Image: DadImage
    Avatar: string
    Title: string
    Subtitle: string
    Content: string
    Actions: DadNav[]
    Footer: string
}