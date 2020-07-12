document.addEventListener('DOMContentLoaded', function () {






  

    let consultas = [];
 
    let contenedor_consultas_sidebar_abierto = document.getElementById("Demo1");
    
 
    let contenedor_contultas_principal = document.getElementById("Borge");
 
 
  
    
 
 
 
 
 
 
 //mostrar mensaje principal
 
 console.log("1");
 
 getUsersInformation();
 
 
 
 
 
 
 
 
 function mostrarConsulta (posicion) {
 
 
    
    
    let imagen_mensaje_principal = document.getElementById("imagen_mensaje_principal");
    
 
    imagen_mensaje_principal.classList.toggle("w3-animate-top");
   
    //.getElementById("imagen_mensaje_principal");
 
    
 
    
   
    
 
    let nombre_mensaje_principal = document.getElementById("nombre_mensaje_principal");
    let fecha_hora_mensaje_principal = document.getElementById("fecha_hora_mensaje_principal");
    let cuerpo_mensaje_principal = document.getElementById("cuerpo_mensaje_principal");
    let email_mensaje_principal = document.getElementById("email_mensaje_principal");
 
   
 
    if (consultas[posicion].sexo == "mujer") {
 
        imagen_mensaje_principal.setAttribute('src', "img/mujer.png");
        console.log("entro");
    }else if   (consultas[posicion].sexo == "hombre") {
 
        imagen_mensaje_principal.setAttribute('src', "img/hombre_grande.png");
        console.log("entro");
 
    }
    else if (consultas[posicion].sexo == "No Definido") {
 
       imagen_mensaje_principal.setAttribute('src', "img/no_definido.jpg");
    }
 
 
    imagen_mensaje_principal.setAttribute('style', "width:15%");
   
   
 
 
    nombre_mensaje_principal.innerHTML = consultas[posicion].nombre;
    fecha_hora_mensaje_principal.innerHTML = '<i class="fa fa-calendar-o"></i>' + consultas[posicion].fecha;
    cuerpo_mensaje_principal.innerHTML =  consultas[posicion].mensaje;
    email_mensaje_principal.innerHTML = consultas[posicion].email;
 
 
  
 
 return console.log(posicion);
 
 
 
 
 
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 function getUsersInformation(){
 
    console.log("2");
     event.preventDefault();
  
      let apiUrl = 'https://web-unicen.herokuapp.com/api/groups/26/test_test';
     
      let coleccion = 'test_test';
      
      fetch(apiUrl, {
         method: "GET"
       
      })
        .then(function(response){
        if( ! response.ok ){
           console.log(response.status);
        } else {
          return response.json();
        }
      }).then(function(resultData){
        
         let contenedor_mensaje_principal = document.getElementById("contenedor_mensaje_principal");
         
 
         console.log("3");
       //   let contenedor_consultas_sidebar = document.getElementsByClassName("contenedor_demo1");
         
       //   console.log(contenedor_consultas_sidebar);
 
         let cantidad_consultas = document.getElementById("cantidad_consultas");
         cantidad_consultas.innerHTML = resultData[coleccion].length;
 
 
          for (var i = 0; i < resultData[coleccion].length; i++) {
 
              
             consultas.push(resultData[coleccion][i]['thing']);
             consultas[i].fecha = resultData[coleccion][i]['dateAdded'];
            
             // consultas[i]
 
 
 
 
             
             // <a href="javascript:void(0)" class="w3-bar-item w3-button w3-border-bottom test w3-hover-light-grey" onclick="openMail('Borge');w3_close();" id="firstTab">
 
             let contenedor_a_consulta_sidebar = document.createElement("a");
             contenedor_a_consulta_sidebar.setAttribute('href', "javascript:void(0)");
             contenedor_a_consulta_sidebar.setAttribute('class', "w3-bar-item w3-button w3-border-bottom test w3-hover-light-grey");
             contenedor_a_consulta_sidebar.setAttribute('onclick', "openMail('Borge');w3_close();");
             
             contenedor_a_consulta_sidebar.setAttribute('id', i);
             contenedor_a_consulta_sidebar.addEventListener('click', () => mostrarConsulta(contenedor_a_consulta_sidebar.id));
             //elegirConsulta("+i+")
 
 
 
 
 
 
             //En este caso openMail('Borge') deberia ser dependiendo del consultante
 
 
            
             contenedor_consultas_sidebar_abierto.appendChild(contenedor_a_consulta_sidebar);
 
 
             console.log(contenedor_consultas_sidebar_abierto);
 
 
 
 
 
             console.log(resultData[coleccion][i]['dateAdded']);
 
             console.log("4");
             // console.log(contenedor_consultas_sidebar);
 
 
 
 
             //       <div class="w3-container">
 
             let contenedor_consultas_sidebar = document.createElement("div");
             contenedor_consultas_sidebar.setAttribute('class', "w3-container" );
             contenedor_a_consulta_sidebar.appendChild(contenedor_consultas_sidebar);
 
             //       <img class="w3-round w3-margin-right" src="img/hombre_grande.png" style="width:15%;">
 
 
 
             let imagen_thumbnail_sidebar_consultante = document.createElement("img");
             imagen_thumbnail_sidebar_consultante.setAttribute('class', "w3-round w3-margin-right");
 
 
             if (consultas[i].sexo == "hombre") {
 
                imagen_thumbnail_sidebar_consultante.setAttribute('src', "img/hombre_grande.png");
             }
 
             else if (consultas[i].sexo == "mujer") {
 
                imagen_thumbnail_sidebar_consultante.setAttribute('src', "img/mujer.png");
             }
 
             else if (consultas[i].sexo == "No Definido") {
 
                imagen_thumbnail_sidebar_consultante.setAttribute('src', "img/no_definido.jpg");
             }
 
             // ACA LA IMAGEN DEPENDE DE SI ES HOMBRE MUJER O NO DEFINIDO
 
             imagen_thumbnail_sidebar_consultante.setAttribute('style', "width:15%");
 
 
 
             contenedor_consultas_sidebar.appendChild(imagen_thumbnail_sidebar_consultante);
 
             //<span class="w3-opacity w3-large">Borge Refsnes</span>
 
 
 
 
 
 
             let span_nombre_sidebar_consultante = document.createElement("span");
             span_nombre_sidebar_consultante.setAttribute('class', "w3-opacity w3-large");
             span_nombre_sidebar_consultante.innerHTML = consultas[i].nombre;
 
 
             contenedor_consultas_sidebar.appendChild(span_nombre_sidebar_consultante);
 
 
             console.log("entra for", span_nombre_sidebar_consultante);
 
 
             //       <h6>Subject: Remember Me</h6>
             // EN ESTE CASO SE HACE CON LA FECHA YA QUE RESULTA INFORMACION MAS IMPORTANTE
 
             let contenedor_fecha_sidebar_consultante = document.createElement("h6");
             contenedor_fecha_sidebar_consultante.innerHTML = resultData[coleccion][i]['dateAdded'];
 
             contenedor_consultas_sidebar.appendChild(contenedor_fecha_sidebar_consultante);
 
             //       <p>Hello, i just wanted to let you know that i'll be home at...</p>
 
 
             let cuerpo_mensaje_sidebar_resumido_consultante = document.createElement("p");
             cuerpo_mensaje_sidebar_resumido_consultante.innerHTML = consultas[i].mensaje;
 
             contenedor_consultas_sidebar.appendChild(cuerpo_mensaje_sidebar_resumido_consultante);
 
 
             //       </div>
             //    </a>
 
 
 
            
 
 
          }
 
 
           if (resultData[coleccion].length > 0) {
 
 
             
 
             let imagen_mensaje_principal = document.getElementById("imagen_mensaje_principal");
             let nombre_mensaje_principal = document.getElementById("nombre_mensaje_principal");
             let fecha_hora_mensaje_principal = document.getElementById("fecha_hora_mensaje_principal");
             let cuerpo_mensaje_principal = document.getElementById("cuerpo_mensaje_principal");
             let email_mensaje_principal = document.getElementById("email_mensaje_principal");
 
            
 
             if (consultas[0].sexo == "mujer") {
 
                 imagen_mensaje_principal.setAttribute('src', "img/mujer.png");
             }else if   (consultas[0].sexo == "hombre") {
 
                 imagen_mensaje_principal.setAttribute('src', "img/hombre_grande.png");
 
 
             }
 
 
 
             nombre_mensaje_principal.innerHTML = resultData[coleccion][0]['thing']['nombre'];
             fecha_hora_mensaje_principal.innerHTML = '<i class="fa fa-calendar-o"></i>' + resultData[coleccion][0]['dateAdded'];
             cuerpo_mensaje_principal.innerHTML =  resultData[coleccion][0]['thing']['mensaje'];
             email_mensaje_principal.innerHTML = resultData[coleccion][0]['thing']['email'];
 
 
 
 
 
             console.log(fecha_hora_mensaje_principal);
 
             console.log(consultas[0]);
 
           
         // // <div id="Borge" class="w3-container person">
         // let contenedor_consulta_abierta = document.createElement("div");
         // contenedor_consulta_abierta.setAttribute('id', "Borge");
         // contenedor_consulta_abierta.setAttribute('class', "w3-container person");
 
 
         // //   <br>
         // let espaciado = document.createElement("br");
         // contenedor_consulta_abierta.appendChild(espaciado);
 
 
 
 
 
         // //   <img class="w3-round  w3-animate-top" src="/w3images/avatar3.png" style="width:20%;">
 
         // let imagen_mensaje_principal = document.createElement("img");
         // imagen_mensaje_principal.setAttribute('class', "w3-round w3-animate-top");
         // imagen_mensaje_principal.setAttribute('src', "img/hombre_grande.png");
         // imagen_mensaje_principal.setAttribute('width', "20%");
         // contenedor_consulta_abierta.appendChild(imagen_mensaje_principal);
 
 
         // //   <h5 class="w3-opacity">Subject: Remember Me</h5>
         
         // let nombre_consultante = document.createElement("h5");
         // nombre_consultante.setAttribute('class', "w3-opacity");
         // let html = JSON.stringify(resultData[coleccion][0]['thing']['nombre']);
         // nombre_consultante.innerHTML = html;
 
         // console.log(html);
         // console.log(contenedor_consulta_abierta);
 
         // contenedor_consulta_abierta.appendChild(nombre_consultante);
 
         
 
 
 
 
         //   <h4><i class="fa fa-clock-o"></i> From Borge Refsnes, Sep 27, 2015.</h4>
 
 
 
 
 
 
 
 
 
         //   <a class="w3-button w3-light-grey" href="#">Reply<i class="w3-margin-left fa fa-mail-reply"></i></a>
         //   <a class="w3-button w3-light-grey" href="#">Forward<i class="w3-margin-left fa fa-arrow-right"></i></a>
         //   <hr>
         //   <p>Hello, i just wanted to let you know that i'll be home at lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         //   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         //   <p>Best Regards, <br>Borge Refsnes</p>
         // </div>
 
 
 
 
 
 
 
           }
  
 
  
           //console.log(cuentas);
          //  document.querySelector("#infoGroup").innerHTML = html;
         })
        .catch(function(e){
           console.log(e);
         })
    }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 // <div id="Borge" class="w3-container person">
 //   <br>
 //   <img class="w3-round  w3-animate-top" src="/w3images/avatar3.png" style="width:20%;">
 //   <h5 class="w3-opacity">Subject: Remember Me</h5>
 //   <h4><i class="fa fa-clock-o"></i> From Borge Refsnes, Sep 27, 2015.</h4>
 //   <a class="w3-button w3-light-grey" href="#">Reply<i class="w3-margin-left fa fa-mail-reply"></i></a>
 //   <a class="w3-button w3-light-grey" href="#">Forward<i class="w3-margin-left fa fa-arrow-right"></i></a>
 //   <hr>
 //   <p>Hello, i just wanted to let you know that i'll be home at lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
 //   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
 //   <p>Best Regards, <br>Borge Refsnes</p>
 // </div>
 
 
 
 
 
 
 
 
     
 });