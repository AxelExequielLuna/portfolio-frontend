import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
    
  per: Persona[] = [];

  constructor(private sPersona: PersonaService) { }

  isLogged = false;
  
  ngOnInit(): void {
    this.sPersona.lista().subscribe(
      (data) => {
        this.per = data;
      }
    );

  }

}
