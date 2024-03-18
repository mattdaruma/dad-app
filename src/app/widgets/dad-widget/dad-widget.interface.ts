import { DadBanner } from "../dad-banner/dad-banner.interface";
import { DadCard } from "../dad-card/dad-card.interface";
import { DadChart } from "../dad-chart/dad-chart.interface";
import { DadEditor } from "../dad-editor/dad-editor.interface";
import { DadForm } from "../dad-form/dad-form.interface";
import { DadTable } from "../dad-table/dad-table.interface";
import { DadText } from "../dad-text.type";
import { DadView } from "../dad-view/dad-view.interface";

export type DadWidget = DadCard | DadBanner | DadChart | DadEditor | DadForm | DadTable | DadView | DadText | undefined