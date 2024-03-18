import { DadChart } from "../../widgets/dad-chart/dad-chart.interface"
import { DadEditor } from "../../widgets/dad-editor/dad-editor.interface"
import { DadTable } from "../../widgets/dad-table/dad-table.interface"
import { DadView } from "../../widgets/dad-view/dad-view.interface"
import { DadCard } from "../../widgets/dad-card/dad-card.interface"

export interface Grid{
    Type: 'grid'
    Columns?: number
    RowHeight?: string
    GutterSize?: string
    Tiles?: GridTile[]
}

export interface GridTile{
    Type: 'grid-tile'
    RowSpan?: number
    ColSpan?: number
    Header?: string
    Footer?: string
    Content?: DadCard | DadChart | DadEditor | DadTable | DadView
}