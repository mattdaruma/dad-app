import { DadStyle } from "../../widgets/dad-style.interface"
import { FlexItem } from "./flex-item.interface"

export interface FlexPage{
    Style?: DadStyle
    Items: FlexItem[]
}