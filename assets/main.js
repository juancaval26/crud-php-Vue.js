var url = "baseDatos/consultas.php";

var estudiantes = new Vue({
el: "#estudiantes",
data:{
     datos:[],
     nombre:"",
     apellido:"",
     documento:"",
     celular:0,
     telefono:"",
     correo:"",
     codigo:0,
 },
methods:{
    //BOTONES
    crear:async function(){
        const {value: formValues} = await Swal.fire({
        title: 'NUEVO',
        html:
        '<div class="row"><label class="col-sm-3 col-form-label">nombre</label><div class="col-sm-7"><input id="nombre" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">apellido</label><div class="col-sm-7"><input id="apellido" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">documento</label><div class="col-sm-7"><input id="documento" type="text" min="0" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">celular</label><div class="col-sm-7"><input id="celular" type="number" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">telefono</label><div class="col-sm-7"><input id="telefono" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">correo</label><div class="col-sm-7"><input id="correo" type="text" min="0" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">codigo</label><div class="col-sm-7"><input id="codigo" type="number" class="form-control"></div></div>',
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        confirmButtonColor:'#1cc88a',
        cancelButtonColor:'#3085d6',
        preConfirm: () => {
            return [
              this.nombre = document.getElementById('nombre').value,
              this.apellido = document.getElementById('apellido').value,
              this.documento = document.getElementById('documento').value,
              this.celular = document.getElementById('celular').value,
              this.telefono = document.getElementById('telefono').value,
              this.correo = document.getElementById('correo').value,
              this.codigo = document.getElementById('codigo').value

            ]
          }
        });
        if(this.nombre == "" || this.apellido == "" || this.documento == "" || this.celular == 0 || this.telefono == "" || this.correo == "" || this.codigo == 0){
          console.log("no se han guardado datos");
        }
        else{
          this.crearEstudiante();
          const Toast = Swal.mixin({
              toast: true,
              showConfirmButton: false,
              timer: 1000
            });
            Toast.fire({
              type: 'success',
              showConfirmButton: false,
              title: 'Datos Agregados Correctamente!'
            });
        }
    },
    editar:async function(id, nombre, apellido, documento, celular, telefono, correo, codigo){
        await Swal.fire({
        title: 'EDITAR',
        html:
        '<div class="form-group"><div class="row"><label class="col-sm-3 col-form-label">nombre</label><div class="col-sm-7"><input id="nombre" type="text" class="form-control" value="'+nombre+'"></div></div><div class="row"><label class="col-sm-3 col-form-label">apellido</label><div class="col-sm-7"><input id="apellido" type="text" class="form-control" value="'+apellido+'"></div></div><div class="row"><label class="col-sm-3 col-form-label">documento</label><div class="col-sm-7"><input id="documento" type="number" min="0" class="form-control" value="'+documento+'"></div></div><div class="row"><label class="col-sm-3 col-form-label">celular</label><div class="col-sm-7"><input id="celular" type="number" class="form-control" value="'+celular+'"></div></div><div class="row"><label class="col-sm-3 col-form-label">telefono</label><div class="col-sm-7"><input id="telefono" type="text" class="form-control" value="'+telefono+'"></div></div><div class="row"><label class="col-sm-3 col-form label">correo</label><div class="col-sm-7"><input id="correo" type="text" min="0" class="form-control" value="'+correo+'"></div></div><div class="row"><label class="col-sm-3 col-form-label">codigo</label><div class="col-sm-7"><input id="codigo" type="number" class="form-control" value="'+codigo+'"></div></div></div>',
        focusConfirm: false,
        showCancelButton: true,
        }).then((result) => {
          if (result.value) {
            nombre = document.getElementById('nombre').value,
            apellido = document.getElementById('apellido').value,
            documento = document.getElementById('documento').value,
            celular = document.getElementById('celular').value,
            telefono = document.getElementById('telefono').value,
            correo = document.getElementById('correo').value,
            codigo = document.getElementById('codigo').value,

            this.editarEstudiante(id,nombre,apellido,documento,celular,telefono,correo,codigo);
            Swal.fire(
              '¡Actualizado!',
              'El registro ha sido actualizado.',
              'success'
            )
          }
        });

    },
    eliminar:function(id){
        Swal.fire({
          title: '¿Está seguro de borrar el registro: '+id+" ?",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor:'#d33',
          cancelButtonColor:'#3085d6',
          confirmButtonText: 'Borrar'
        }).then((result) => {
          if (result.value) {
            this.eliminarEstudiante(id);
            //mostrar  mensaje de eliminación
            Swal.fire(
              '¡Eliminado!',
              'El registro ha sido borrado.',
              'success'
            )
          }
        });
    },

    //PROCEDIMIENTOS para el CRUD
    listarEstudiantes:function(){
        axios.post(url, {opcion:4}).then(response =>{
           this.datos = response.data;
        });
    },
    //Procedimiento CREAR.
    crearEstudiante:function(){
        axios.post(url, {opcion:1, nombre:this.nombre, apellido:this.apellido,documento:this.documento,celular:this.celular,telefono:this.telefono,correo:this.correo,codigo:this.codigo }).then(response =>{
            this.listarEstudiantes();
        });
        //para limpiar los campos luego de crear
         this.nombre = "",
         this.apellido = "",
         this.documento = "",
         this.celular = 0,
         this.telefono = "",
         this.correo = "",
         this.codigo = 0

    },
    //Procedimiento EDITAR.
    editarEstudiante:function(id,nombre,apellido,documento,celular,telefono,correo,codigo){
        axios.post(url, {opcion:2, id:id, nombre:nombre, apellido:apellido,documento:documento,celular:celular,telefono:telefono,correo:correo,codigo:codigo }).then(response =>{
           this.listarEstudiantes();
        });
    },
    //Procedimiento BORRAR.
    eliminarEstudiante:function(id){
        axios.post(url, {opcion:3, id:id}).then(response =>{
            this.listarEstudiantes();
            });
    }
},
created: function(){
   this.listarEstudiantes();
}
});
