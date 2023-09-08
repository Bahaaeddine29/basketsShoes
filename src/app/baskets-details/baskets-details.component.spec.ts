import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketsDetailsComponent } from './baskets-details.component';

describe('BasketsDetailsComponent', () => {
  let component: BasketsDetailsComponent;
  let fixture: ComponentFixture<BasketsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasketsDetailsComponent]
    });
    fixture = TestBed.createComponent(BasketsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
