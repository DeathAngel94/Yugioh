class monster_card {
    constructor(Nombre, Tipo, Nivel, Atk, Def){
        this.nombre = Nombre;
        this.tipo = Tipo;
        this.nivel = Nivel;
        this.ataque = Atk;
        this.defensa = Def;

        this.imagen = new Image();
        this.imagen.src = rutaImagen[this.nombre];
    }
}