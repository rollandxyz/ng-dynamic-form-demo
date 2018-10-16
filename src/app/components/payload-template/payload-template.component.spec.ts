import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayloadTemplateComponent } from './payload-template.component';

describe('PayloadTemplateComponent', () => {
  let component: PayloadTemplateComponent;
  let fixture: ComponentFixture<PayloadTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayloadTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayloadTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
