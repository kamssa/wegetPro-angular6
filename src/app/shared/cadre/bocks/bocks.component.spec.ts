import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BocksComponent } from './bocks.component';

describe('BocksComponent', () => {
  let component: BocksComponent;
  let fixture: ComponentFixture<BocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
