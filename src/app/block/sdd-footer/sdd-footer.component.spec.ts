import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SddFooterComponent } from './sdd-footer.component';

describe('SddFooterComponent', () => {
  let component: SddFooterComponent;
  let fixture: ComponentFixture<SddFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SddFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SddFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
