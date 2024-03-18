import { DadChart } from "../../widgets/dad-chart/dad-chart.interface"
import { DadEditor } from "../../widgets/dad-editor/dad-editor.interface"
import { DadTable } from "../../widgets/dad-table/dad-table.interface"
import { DadView } from "../../widgets/dad-view/dad-view.interface"
import { DadCard } from "../../widgets/dad-card/dad-card.interface"

export interface SmartGrid{
    Type: 'smart-grid'
    ColumnSize?: number
    RowSize?: string | number
    GutterSize?: string | number
    Tiles?: SmartGridTile[]
}

export interface SmartGridTile{
    Type: 'smart-grid-tile'
    Spans: SmartGridSpan[]
    Header?: string
    Footer?: string
    Content?: DadCard | DadChart | DadEditor | DadTable | DadView
}

export interface SmartGridSpan {
    GridSize?: number
    ColSpan?: number
    ColRatio?: string
    RowSpan?: number
}