import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTemplateComponent } from './no-template.component';

describe('NoTemplateComponent', () => {
  let component: NoTemplateComponent;
  let fixture: ComponentFixture<NoTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
