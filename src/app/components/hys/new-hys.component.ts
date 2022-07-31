import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hys } from 'src/app/model/hys';
import { HysService } from 'src/app/service/hys-service.service';

@Component({
  selector: 'app-new-hys',
  templateUrl: './new-hys.component.html',
  styleUrls: ['./new-hys.component.css']
})
export class NewHysComponent implements OnInit {
  porcentaje  = '';
  image = '';
  showImage = false;
  height = 0;
  width = 0;
  showTitle = false;
  title = '';
  fontSize = '';

  constructor(private sHys: HysService, private router: Router) {}

  ngOnInit(): void {
  }

  onCreate():void{
    const hys = new Hys(this.porcentaje, this.image, this.showImage, this.height, this.width, this.showTitle, this.title, this.fontSize);
    this.sHys.save(hys).subscribe(
      data=>{
      alert('Hys añadida correctamente');
      this.router.navigate(['']);
    }, err =>{
      alert("Error");
      this.router.navigate(['']);
    })
  }

}
