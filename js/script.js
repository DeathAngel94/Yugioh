var rutaImagen = [];
rutaImagen["duendeMistico"] = "./image/cards/SDY-024.png"

class monster_card {
    constructor(Nombre, Familia, Tipo, Nivel, Atk, Def){
        this.nombre = Nombre;
        this.tipo = Tipo;
        this.familia = Familia;
        this.nivel = Nivel;
        this.ataque = Atk;
        this.defensa = Def;

        this.imagen = new Image();
        this.imagen.src = rutaImagen[this.nombre];
    }  
}

class magic_card {
    constructor(nombre, tipo, efecto){
        this.nombre = nombre;
        this.tipo = tipo;
        this.efecto = efecto;

        this.imagen = new Image();
        this.imagen.src = rutaImagen[this.nombre];
    }
}

class trap_card {
    constructor(nombre, tipo, efecto){
        this.nombre = nombre;
        this.tipo = tipo;
        this.efecto = efecto;

        this.imagen = new Image();
        this.imagen.src = rutaImagen[this.nombre];
    }
}