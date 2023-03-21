import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SddAddEditComponent } from './sdd-add-edit.component';

describe('SddAddEditComponent', () => {
  let component: SddAddEditComponent;
  let fixture: ComponentFixture<SddAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SddAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SddAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
