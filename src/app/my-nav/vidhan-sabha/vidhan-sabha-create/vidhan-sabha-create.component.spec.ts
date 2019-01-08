import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidhanSabhaCreateComponent } from './vidhan-sabha-create.component';

describe('VidhanSabhaCreateComponent', () => {
  let component: VidhanSabhaCreateComponent;
  let fixture: ComponentFixture<VidhanSabhaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidhanSabhaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidhanSabhaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
