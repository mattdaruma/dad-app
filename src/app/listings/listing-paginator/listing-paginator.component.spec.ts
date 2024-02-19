import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingPaginatorComponent } from './listing-paginator.component';

describe('ListingPaginatorComponent', () => {
  let component: ListingPaginatorComponent;
  let fixture: ComponentFixture<ListingPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingPaginatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListingPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
