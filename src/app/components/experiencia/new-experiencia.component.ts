import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreEx: string = '';
  descripcionEx: string= '';
  fechaEx: string = '';

  constructor(private sExperiencia: ExperienciaService, private router: Router) {}

  ngOnInit(): void {
  }

  onCreate():void{
    const expe = new Experiencia(this.nombreEx, this.descripcionEx, this.fechaEx);
    this.sExperiencia.save(expe).subscribe(
      data=>{
      alert('Experiencia añadida correctamente');
      this.router.navigate(['']);
    }, err =>{
      alert("Error");
      this.router.navigate(['']);
    })
  }

}
