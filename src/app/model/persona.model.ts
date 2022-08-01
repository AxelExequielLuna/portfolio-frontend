export class Persona{
    id?: Number;
    nombre: String;
    apellido: String;
    titulo: String;
    about: String;
    img: String;
    portada: String;
    git: String;
    linkedin: String;

    constructor(nombre: String, apellido: String, titulo: String, about:String, img: String, portada: String, git: String, linkedin: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.about = about;
        this.img = img;
        this.portada = portada;
        this.git = git;
        this.linkedin = linkedin;
    }
}