import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisScopeComponent } from './analysis-scope.component';

describe('AnalysisScopeComponent', () => {
  let component: AnalysisScopeComponent;
  let fixture: ComponentFixture<AnalysisScopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisScopeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysisScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
