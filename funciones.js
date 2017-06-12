function verAlerta(titulo,contenido){
    document.getElementById('alerta-titulo').innerHTML = titulo;
    document.getElementById('alerta-mensaje').innerHTML = contenido;
    document.querySelector('.alerta').classList.add('ver');
    setTimeout(function(){
        document.querySelector('.alerta').classList.remove('ver')
    },4000);
}
function geolocalizar(){            
    //COMPROBAR QUE SE PUEDE GEOLOCALIZAR
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(verPosicion);
        navigator.vibrate('1000');
    }
}
            
function verPosicion(coordenadas){
    //DENTRO DEL OBJETO COORDENADAS OBTENEMOS EL ATRIBUTO COORDS, QUE DENTRO TIENE LA LONGITUD Y LATITUD
    lat=coordenadas.coords.latitude;
    long= coordenadas.coords.longitude; 
    localStorage.setItem('lat',lat);
    localStorage.setItem('long',long);
    verAlerta('Ubicación guardada','Selecciona el botón de Navegar para ver el mapa.');
}
var map;
function mostrarMapa(){
    lati = localStorage.getItem('lat');
    long = localStorage.getItem('long');
    var coordenadas = {lat: parseFloat(lati), lng: parseFloat(long)};
   var map = new google.maps.Map(document.getElementById('mapa'), {
            zoom: 17,
            center: new google.maps.LatLng(lati, long)
        });
        var marker = new google.maps.Marker({
            position:coordenadas,
            icon: "autoMap.png",
            map: map
        });
}