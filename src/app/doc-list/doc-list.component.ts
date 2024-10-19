import { Component, OnInit } from '@angular/core';
import {Doctor} from '../doctor'
import {DocService} from '../doc.service'

@Component({
  selector: 'app-doc-list',
  templateUrl: './doc-list.component.html',
  styleUrl: './doc-list.component.css'
})
export class DocListComponent implements OnInit{

  doctors:Doctor[];

  constructor(private doctorService: DocService) {

  }

  ngOnInit(): void {
    this.getDoctors();
      
  }

  private getDoctors(){
    this.doctorService.getDoctorList().subscribe(data => {
      this.doctors = data;
      console.log(data);
    });
    
  }

}
