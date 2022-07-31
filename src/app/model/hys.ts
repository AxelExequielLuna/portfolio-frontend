export class Hys {
  id? : number;
  porcentaje : any;
  image : string;
  showImage : boolean;
  height : number;
  width : number;
  showTitle : boolean;
  title : string;
  fontSize : string

  constructor(porcentaje: any, image: string, showImage: boolean, height: number, width: number, showTitle: boolean, title: string, fontSize: string) {
    this.porcentaje = porcentaje;
    this.image = image;
    this.showImage = showImage;
    this.height = height;
    this.width = width;
    this.showTitle = showTitle;
    this.title = title;
    this.fontSize = fontSize;
  }

}
