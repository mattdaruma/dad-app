import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTablecomponent } from './list-table.component';

describe('ListTablecomponent', () => {
  let component: ListTablecomponent;
  let fixture: ComponentFixture<ListTablecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTablecomponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListTablecomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
