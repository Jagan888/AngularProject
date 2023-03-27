import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationSettingsComponent } from './calculation-settings.component';

describe('CalculationSettingsComponent', () => {
  let component: CalculationSettingsComponent;
  let fixture: ComponentFixture<CalculationSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculationSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculationSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
