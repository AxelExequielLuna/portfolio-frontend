import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto-service.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreP: string = '';
  descripcionP: string= '';
  imagenP: string = '';
  linkP: string = '';

  constructor(private sProyecto: ProyectoService, private router: Router) {}

  ngOnInit(): void {
  }

  onCreate():void{
    const proy = new Proyecto(this.nombreP, this.descripcionP, this.imagenP, this.linkP);
    this.sProyecto.save(proy).subscribe(
      data=>{
      alert('Proyecto añadido correctamente');
      this.router.navigate(['']);
    }, err =>{
      alert("Error");
      this.router.navigate(['']);
    })
  }

}
