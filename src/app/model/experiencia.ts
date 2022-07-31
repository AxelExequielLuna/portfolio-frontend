export class Experiencia {
    id? : number;
    nombreEx : string;
    descripcionEx : string;
    fechaEx : string;

    constructor(nombreEx: string, descripcionEx: string, fechaEx: string) {
        this.nombreEx = nombreEx;
        this.descripcionEx = descripcionEx;
        this.fechaEx = fechaEx;
    }
}
