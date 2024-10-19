import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DocService } from '../doc.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-doc',
  templateUrl: './edit-doc.component.html',
  styleUrl: './edit-doc.component.css'
})
export class EditDocComponent implements OnInit{

  doctor: Doctor = new Doctor();

  id:number;
  constructor(private doctorService: DocService, private route: ActivatedRoute,private router: Router){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.doctorService.getDoctorById(this.id).subscribe(data => {
      this.doctor=data;
    },
    error => console.log(error));
      
  }

  onSubmit(): void {
    console.log(this.doctor);
    this.doctorService.updateDoctor(this.id,this.doctor).subscribe(data =>{
      this.gotoDocList();
    },error => console.log(error));
  }

  gotoDocList(){
    this.router.navigate(['/doc-list']);
  }

}
