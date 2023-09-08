import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketsListComponent } from './baskets-list.component';

describe('BasketsListComponent', () => {
  let component: BasketsListComponent;
  let fixture: ComponentFixture<BasketsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasketsListComponent]
    });
    fixture = TestBed.createComponent(BasketsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
