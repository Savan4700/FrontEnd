import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LokSabhaCreateComponent } from './lok-sabha-create.component';

describe('LokSabhaCreateComponent', () => {
  let component: LokSabhaCreateComponent;
  let fixture: ComponentFixture<LokSabhaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LokSabhaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LokSabhaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
