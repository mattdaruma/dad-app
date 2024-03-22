import { AfterViewInit, Component, Input } from '@angular/core';
import { DadCard } from './dad-card/dad-card.interface';
import { DadBanner } from './dad-banner/dad-banner.interface';
import { DadChart } from './dad-chart/dad-chart.interface';
import { DadEditor } from './dad-editor/dad-editor.interface';
import { DadForm } from './dad-form/dad-form.interface';
import { DadTable } from './dad-table/dad-table.interface';
import { DadView } from './dad-view/dad-view.interface';
import { DadBannerComponent } from './dad-banner/dad-banner.component';
import { DadCardComponent } from './dad-card/dad-card.component';
import { DadChartComponent } from './dad-chart/dad-chart.component';
import { DadEditorComponent } from './dad-editor/dad-editor.component';
import { DadFormComponent } from './dad-form/dad-form.component';
import { DadTableComponent } from './dad-table/dad-table.component';
import { DadViewComponent } from './dad-view/dad-view.component';
import { DadText } from './dad-text/dad-text.type';
import { CommonModule } from '@angular/common';
import { DadWidget } from './dad-widget.interface';
import { DadContainer } from './dad-container/dad-container.interface';
import { DadContainerComponent } from './dad-container/dad-container.component';
import { DadFieldComponent } from './dad-field/dad-field.component';
import { DadField } from './dad-field/dad-field.interface';

@Component({
  selector: 'app-dad-widget',
  standalone: true,
  imports: [CommonModule, DadContainerComponent, DadBannerComponent, DadCardComponent, DadChartComponent,
    DadEditorComponent, DadFormComponent, DadFieldComponent, DadTableComponent, DadViewComponent],
  templateUrl: './dad-widget.component.html',
  styleUrl: './dad-widget.component.scss'
})
export class DadWidgetComponent implements AfterViewInit {
  JSON = JSON
  @Input() Widget: DadWidget | undefined = undefined
  public AsContainer = () => this.Widget as DadContainer
  public AsCard = () => this.Widget as DadCard
  public AsBanner = () => this.Widget as DadBanner
  public AsChart = () => this.Widget as DadChart
  public AsEdtior = () => this.Widget as DadEditor
  public AsForm = () => this.Widget as DadForm
  public AsField = () => this.Widget as DadField
  public AsTable = () => this.Widget as DadTable
  public AsView = () => this.Widget as DadView
  public AsText = () => this.Widget as DadText
  ngAfterViewInit(): void {
    this.Widget?.Loaded?.next(this.Widget.Type)
  }
}
