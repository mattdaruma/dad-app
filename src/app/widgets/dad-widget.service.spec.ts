import { TestBed } from '@angular/core/testing';

import { DadWidgetService } from './dad-widget.service';

describe('DadWidgetService', () => {
  let service: DadWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
