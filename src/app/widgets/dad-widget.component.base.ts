import { AfterViewInit, Component, Injectable, Input } from "@angular/core";
import { Subject, debounceTime, shareReplay, first, tap, forkJoin, map } from "rxjs";
import { DadWidget } from "./dad-widget.class";

@Component({
  template: '<div></div>'
})
export class WidgetComponentBase implements AfterViewInit {
  @Input() public set Input(input: DadWidget) {
    this.widgetInput.next(input)
  }
  public widgetInput = new Subject<DadWidget>()
  private viewReady = new Subject<boolean>()
  public Widget = this.widgetInput.pipe(debounceTime(0), shareReplay(1))
  public BaseReady = forkJoin([
    this.Widget.pipe(first()),
    this.viewReady.pipe(first())
  ]).pipe(shareReplay(1), map(([w, v]) => w))
  ngAfterViewInit(): void {
    this.viewReady.next(true)
  }
}