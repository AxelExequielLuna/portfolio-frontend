export class persona{
    id?: Number;
    nombre: String;
    apellido: String;
    titulo: String;
    about: String;
    img: String;
    portada: String;

    constructor(nombre: String, apellido: String, titulo: String, about:String, img: String, portada: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.about = about;
        this.img = img;
        this.portada = portada;
    }
}