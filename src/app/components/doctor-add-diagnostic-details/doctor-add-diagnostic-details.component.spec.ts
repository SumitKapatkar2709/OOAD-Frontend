import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAddDiagnosticDetailsComponent } from './doctor-add-diagnostic-details.component';

describe('DoctorAddDiagnosticDetailsComponent', () => {
  let component: DoctorAddDiagnosticDetailsComponent;
  let fixture: ComponentFixture<DoctorAddDiagnosticDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorAddDiagnosticDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorAddDiagnosticDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
