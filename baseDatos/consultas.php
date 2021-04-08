<?php
include_once 'conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$_POST = json_decode(file_get_contents("php://input"), true);
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$id = (isset($_POST['id'])) ? $_POST['id'] : '';
$nombre = (isset($_POST['nombre'])) ? $_POST['nombre'] : '';
$apellido = (isset($_POST['apellido'])) ? $_POST['apellido'] : '';
$documento = (isset($_POST['documento'])) ? $_POST['documento'] : '';
$celular = (isset($_POST['celular'])) ? $_POST['celular'] : '';
$telefono = (isset($_POST['telefono'])) ? $_POST['telefono'] : '';
$correo = (isset($_POST['correo'])) ? $_POST['correo'] : '';
$codigo = (isset($_POST['codigo'])) ? $_POST['codigo'] : '';


switch($opcion){
    case 1:
        $consulta = "INSERT INTO estudiantes (nombre, apellido, documento, celular, telefono, correo, codigo) VALUES('$nombre', '$apellido', '$documento', '$celular', '$telefono', '$correo', '$codigo') ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        break;
    case 2:
        $consulta = "UPDATE estudiantes SET nombre='$nombre', apellido='$apellido', documento='$documento', celular='$celular', telefono='$telefono', correo='$correo', codigo='$codigo' WHERE id='$id' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 3:
        $consulta = "DELETE FROM estudiantes WHERE id='$id' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        break;
    case 4:
        $consulta = "SELECT id,nombre, apellido, documento, celular, telefono, correo, codigo FROM estudiantes";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
}
print json_encode($data, JSON_UNESCAPED_UNICODE);
$conexion = NULL; //cerrar conexion
