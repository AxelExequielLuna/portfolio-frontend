import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css']
})
export class LogoAPComponent implements OnInit {
  
    per: Persona[] = [];
  
    constructor(private sPersona: PersonaService, private tokenService: TokenService, private router:Router ) { }
    
    isLogged = false;
  
    ngOnInit(): void {
      this.cargarPersona();
      if(this.tokenService.getToken()){
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
  
    }
  
    cargarPersona():void{
      this.sPersona.lista().subscribe(
        (data) => {
          this.per = data;
        }
      );
    }

    onLogout():void{
      this.tokenService.logOut();
      window.location.reload();
    }
    login(): void{
      this.router.navigate(['login']);
    }
  
  }
  