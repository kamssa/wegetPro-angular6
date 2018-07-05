import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagereseauComponent } from './pagereseau.component';

describe('PagereseauComponent', () => {
  let component: PagereseauComponent;
  let fixture: ComponentFixture<PagereseauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagereseauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagereseauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
