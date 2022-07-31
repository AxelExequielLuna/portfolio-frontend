import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion-service.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreEdu: string = '';
  descripcionEdu: string= '';
  fechaEdu: string = '';

  constructor(private sEducacion: EducacionService, private router: Router) {}

  ngOnInit(): void {
  }

  onCreate():void{
    const educ = new Educacion(this.nombreEdu, this.descripcionEdu, this.fechaEdu);
    this.sEducacion.save(educ).subscribe(
      data=>{
      alert('Educacion añadida correctamente');
      this.router.navigate(['']);
    }, err =>{
      alert("Error");
      this.router.navigate(['']);
    })
  }

}
