;
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-appointment-confirmation',
  templateUrl: './appointment-confirmation.component.html',
  styleUrl: './appointment-confirmation.component.scss'
})
export class AppointmentConfirmationComponent {
  @Input() appointment: any;
}
