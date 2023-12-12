class Expediente{
    constructor(id, data){
        //console.log(data);
        this.bandera=0;
        this.id=id;
        this.nombre=data.nombre;
        this.apellidoPaterno=data.apellidoPaterno;
        this.apellidoMaterno=data.apellidoMaterno;
        this.edad=data.edad;
        this.fechaNacimiento=data.fechaNacimiento;
        this.sexo=data.sexo;
        this.curp=data.curp;
        this.ocupacion=data.ocupacion;
        this.cancer=data.cancer;
        this.diabetes=data.diabetes;
        this.enfermedadesCorazon=data.enfermedadesCorazon;
        this.presionAlta=data.presionAlta;
        this.enfermedadesRiñones=data.enfermedadesRiñones;
        this.enfermedadesCerebro=data.enfermedadesCerebro;
        this.mentales=data.mentales;
        this.suicidio=data.suicidio;
        this.otras=data.otras;
        this.deporte=data.deporte;
        this.tipoDeporte=data.tipoDeporte;
        this.tiempoEjercicio=data.tiempoEjercicio;
        this.tiempoAlimentacion=data.tiempoAlimentacion;
        this.alimentacion=data.alimentacion;
        this.estatura=data.estatura;
        this.peso=data.peso;
        this.imc=data.imc;

    }
    set id(id){
        if (id!=null)
            id.length>0?this._id=id:this.bandera=1;
    }
    set nombre(nombre){
        nombre.length>0?this._nombre=nombre:this.bandera=1;
    }
    set apellidoPaterno(apellidoPaterno){
        apellidoPaterno.length>0?this._apellidoPaterno=apellidoPaterno:this.bandera=1;
    }
    set apellidoMaterno(apellidoMaterno){
        apellidoMaterno.length>0?this._apellidoMaterno=apellidoMaterno:this.bandera=1;
    }
    set edad(edad){
        edad.length>0?this._edad=edad:this.bandera=1;
    }
    set fechaNacimiento(fechaNacimiento){
        fechaNacimiento.length>0?this._fechaNacimiento=fechaNacimiento:this.bandera=1;
    }
    set sexo(sexo){
        sexo.length>0?this._sexo=sexo:this.bandera=1;
    }
    set curp(curp){
        curp.length>0?this._curp=curp:this.bandera=1;
    }
    set ocupacion(ocupacion){
        ocupacion.length>0?this._ocupacion=ocupacion:this.bandera=1;
    }
    set cancer(cancer){
        cancer.length>0?this._cancer=cancer:this.bandera=1;
    }
    set diabetes(diabetes){
        diabetes.length>0?this._diabetes=diabetes:this.bandera=1;
    }
    set enfermedadesCorazon(enfermedadesCorazon){
        enfermedadesCorazon.length>0?this._enfermedadesCorazon=enfermedadesCorazon:this.bandera=1;
    }
    set presionAlta(presionAlta){
        presionAlta.length>0?this._presionAlta=presionAlta:this.bandera=1;
    }
    set enfermedadesRiñones(enfermedadesRiñones){
        enfermedadesRiñones.length>0?this._enfermedadesRiñones=enfermedadesRiñones:this.bandera=1;
    }
    set enfermedadesCerebro(enfermedadesCerebro){
        enfermedadesCerebro.length>0?this._enfermedadesCerebro=enfermedadesCerebro:this.bandera=1;
    }
    set mentales(mentales){
        mentales.length>0?this._mentales=mentales:this.bandera=1;
    }
    set suicidio(suicidio){
        suicidio.length>0?this._suicidio=suicidio:this.bandera=1;
    }
    set otras(otras){
        otras.length>0?this._otras=otras:this.bandera=1;
    }
    set deporte(deporte){
        deporte.length>0?this._deporte=deporte:this.bandera=1;
    }
    set tipoDeporte(tipoDeporte){
        tipoDeporte.length>0?this._tipoDeporte=tipoDeporte:this.bandera=1;
    }
    set tiempoEjercicio(tiempoEjercicio){
        tiempoEjercicio.length>0?this._tiempoEjercicio=tiempoEjercicio:this.bandera=1;
    }
    set tiempoAlimentacion(tiempoAlimentacion){
        tiempoAlimentacion.length>0?this._tiempoAlimentacion=tiempoAlimentacion:this.bandera=1;
    }
    set alimentacion(alimentacion){
        alimentacion.length>0?this._alimentacion=alimentacion:this.bandera=1;
    }
    set estatura(estatura){
        estatura.length>0?this._estatura=estatura:this.bandera=1;
    }
    set peso(peso){
        peso.length>0?this._peso=peso:this.bandera=1;
    }
    set imc(imc){
        imc.length>0?this._imc=imc:this.bandera=1;
    }

    get id(){
        return this._id;
    }
    get nombre(){
        return this._nombre;
    }
    get apellidoPaterno(){
        return this._apellidoPaterno;
    }
    get apellidoMaterno(){
        return this._apellidoMaterno;
    }
    get edad(){
        return this._edad;
    }
    get fechaNacimiento(){
        return this._fechaNacimiento;
    }
    get sexo(){
        return this._sexo;
    }
    get curp(){
        return this._curp;
    }
    get ocupacion(){
        return this._ocupacion;
    }
    get cancer(){
        return this._cancer;
    }
    get diabetes(){
        return this._diabetes;
    }
    get enfermedadesCorazon(){
        return this._enfermedadesCorazon;
    }
    get presionAlta(){
        return this._presionAlta;
    }
    get enfermedadesRiñones(){
        return this._enfermedadesRiñones;
    }
    get enfermedadesCerebro(){
        return this._enfermedadesCerebro;
    }
    get mentales(){
        return this._mentales;
    }
    get suicidio(){
        return this._suicidio;
    }
    get otras(){
        return this._otras;
    }
    get deporte(){
        return this._deporte;
    }
    get tipoDeporte(){
        return this._tipoDeporte;
    }
    get tiempoEjercicio(){
        return this._tiempoEjercicio;
    }
    get tiempoAlimentacion(){
        return this._tiempoAlimentacion;
    }
    get alimentacion(){
        return this._alimentacion;
    }
    get estatura(){
        return this._estatura;
    }
    get peso(){
        return this._peso;
    }
    get imc(){
        return this._imc;
    }
    get obtenerExpediente(){
        if (this.id==null) {
            return{
                nombre:this.nombre,
                apellidoPaterno:this.apellidoPaterno,
                apellidoMaterno:this.apellidoMaterno,
                edad:this.edad,
                fechaNacimiento:this.fechaNacimiento,
                sexo:this.sexo,
                curp:this.curp,
                ocupacion:this.ocupacion,
                cancer:this.cancer,
                diabetes:this.diabetes,
                enfermedadesCorazon:this.enfermedadesCorazon,
                presionAlta:this.presionAlta,
                enfermedadesRiñones:this.enfermedadesRiñones,
                enfermedadesCerebro:this.enfermedadesCerebro,
                mentales:this.mentales,
                suicidio:this.suicidio,
                otras:this.otras,
                deporte:this.deporte,
                tipoDeporte:this.tipoDeporte,
                tiempoEjercicio:this.tiempoEjercicio,
                tiempoAlimentacion:this.tiempoAlimentacion,
                alimentacion:this.alimentacion,
                estatura:this.estatura,
                peso:this.peso,
                imc:this.imc
            }
        }
        else {
            return{
                id:this.id,
                nombre:this.nombre,
                apellidoPaterno:this.apellidoPaterno,
                apellidoMaterno:this.apellidoMaterno,
                edad:this.edad,
                fechaNacimiento:this.fechaNacimiento,
                sexo:this.sexo,
                curp:this.curp,
                ocupacion:this.ocupacion,
                cancer:this.cancer,
                diabetes:this.diabetes,
                enfermedadesCorazon:this.enfermedadesCorazon,
                presionAlta:this.presionAlta,
                enfermedadesRiñones:this.enfermedadesRiñones,
                enfermedadesCerebro:this.enfermedadesCerebro,
                mentales:this.mentales,
                suicidio:this.suicidio,
                otras:this.otras,
                deporte:this.deporte,
                tipoDeporte:this.tipoDeporte,
                tiempoEjercicio:this.tiempoEjercicio,
                tiempoAlimentacion:this.tiempoAlimentacion,
                alimentacion:this.alimentacion,
                estatura:this.estatura,
                peso:this.peso,
                imc:this.imc
            }
        }
    }

}

module.exports=Expediente;