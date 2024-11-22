import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorEditDiagnosticDetailsComponent } from './doctor-edit-diagnostic-details.component';

describe('DoctorEditDiagnosticDetailsComponent', () => {
  let component: DoctorEditDiagnosticDetailsComponent;
  let fixture: ComponentFixture<DoctorEditDiagnosticDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorEditDiagnosticDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorEditDiagnosticDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
