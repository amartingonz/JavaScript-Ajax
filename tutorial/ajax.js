window.onload=()=>{

    boton = document.getElementById("peticion").onclick = comienzaPeticion;
    

}
let httpRequest;

function comienzaPeticion(){
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange=trataPeticion;
    httpRequest.open("GET","prueba.xml"); // Cambiar esto para cambiar el archivo que se quiera mostrar
    httpRequest.send();
}

function trataPeticion(){
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          //alert(httpRequest.responseText);
          //let datosNombre = JSON.parse(httpRequest.responseText);
          //document.body.innerHTML += datosNombre.nombre;
          let datosUsuario = httpRequest.responseXML;
          document.body.innerHTML += datosUsuario.getElementsByTagName("nombre")[0].innerHTML;
          
        } else {
          alert("There was a problem with the request.");
        }
      }
}