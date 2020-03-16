import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LightPanelCalculatorComponent} from './light-panel-calculator.component';

describe('LightPanelCalculatorComponent', () => {
  let component: LightPanelCalculatorComponent;
  let fixture: ComponentFixture<LightPanelCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LightPanelCalculatorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightPanelCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
