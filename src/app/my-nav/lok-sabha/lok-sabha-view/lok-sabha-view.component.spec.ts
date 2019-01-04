import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LokSabhaViewComponent } from './lok-sabha-view.component';

describe('LokSabhaViewComponent', () => {
  let component: LokSabhaViewComponent;
  let fixture: ComponentFixture<LokSabhaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LokSabhaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LokSabhaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
