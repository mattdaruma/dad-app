import { DadStyle } from "./dad-style.interface";

export interface DadOption{
  Style?: DadStyle
  Display?: string
  Value: string
}
export interface DadImage{
  Style?: DadStyle
  Title?: string
  URL?: string
  SVG?: string
}
export interface DadAction{
  Route?: string[]
  Style?: DadStyle
  Icon?: string
  Color?: string
  Text?: string
}
export interface IDadWidget {
  Id: string
  Type: string
  Style: DadStyle
  Children?: IDadWidget[]
  Actions?: DadAction[]
  Avatar?: DadImage
  Color?: string
  Columns?: any[]
  Data?: any[]
  FormId?: string
  Footer?: string
  Form?: string[] //fieldIds
  Hint?: string
  HTML?: string
  Icon?: string
  Image?: DadImage
  Key?: string
  Options?: DadOption[]
  Route?: string[]
  Subtitle?: string
  Text?: string
  Title?: string
  URL?: string
  Value?: string
  FilterId?: string
  PaginatorId?: string
}
