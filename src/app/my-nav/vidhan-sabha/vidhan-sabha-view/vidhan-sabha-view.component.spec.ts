import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidhanSabhaViewComponent } from './vidhan-sabha-view.component';

describe('VidhanSabhaViewComponent', () => {
  let component: VidhanSabhaViewComponent;
  let fixture: ComponentFixture<VidhanSabhaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidhanSabhaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidhanSabhaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
