<!doctype html>
<html>
    <head>
    <link rel="shortcut icon" href="#" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="public/bootstrap/css/bootstrap.min.css">
    <!-- FontAwesom CSS -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <!--Sweet Alert 2 -->
    <link rel="stylesheet" href="public/plugins/sweetalert2/sweetalert2.min.css">
    <!--CSS custom -->
    </head>
    <body>
      <h1 class="text-center mt-2">Datos Estudiante</h1>
      <hr>
      <div id="estudiantes">
        <div class="container">
          <button @click="crear" class="btn btn-info" title="Crear">Crear</button>

            <div class="row mt-5">
                <div class="col-lg-12">

                    <table class="table table-striped">
                        <thead>
                            <tr class="bg-success text-dark">
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Documento</th>
                                <th>Celular</th>
                                <th>Telefono</th>
                                <th>Correo</th>
                                <th>Codigo</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(movil,indice) of datos">
                                <td>{{movil.id}}</td>
                                <td>{{movil.nombre}}</td>
                                <td>{{movil.apellido}}</td>
                                <td>{{movil.documento}}</td>
                                <td>{{movil.celular}}</td>
                                <td>{{movil.telefono}}</td>
                                <td>{{movil.correo}}</td>
                                <td>{{movil.codigo}}</td>
                                <td>
                                  <div class="btn-group" role="group">
                                    <button @click="crear" class="btn btn-info" title="Crear"><i class="far fa-plus-square"></i></button>
                                    <button class="btn btn-warning" title="Editar" @click="editar(movil.id, movil.nombre, movil.apellido, movil.documento,movil.celular,movil.telefono,movil.correo,movil.codigo)"><i class="fas fa-pencil-alt"></i></button>
                                    <button class="btn btn-danger" title="Eliminar" @click="eliminar(movil.id)"><i class="fas fa-trash-alt"></i></button>
								                  </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <!-- jQuery, Popper.js, Bootstrap JS -->
    <script src="public/jquery/jquery-3.3.1.min.js"></script>
    <!-- <script src="public/popper/popper.min.js"></script> -->
    <script src="public/bootstrap/js/bootstrap.min.js"></script>
    <!--Vue.JS -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <!--Axios -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.15.2/axios.js"></script>
    <!--Sweet Alert 2 -->
    <script src="public/plugins/sweetalert2/sweetalert2.all.min.js"></script>
    <!--Código custom -->
    <script src="assets/main.js"></script>
    </body>
</html>
