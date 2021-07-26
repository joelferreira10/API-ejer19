

let buscar=document.querySelector("#buscar");
let key=`273abdb9e633e43591906b13e172d199`;

buscar.addEventListener('click',mostrarDatos)

function mostrarDatos(){
let pais=document.querySelector("#ciudad").value;
const url=`https://api.openweathermap.org/data/2.5/weather?q=${pais}&appid=${key}`;
console.log(url)
fetch(url)
    .then(response=>response.json())
    .then(clima=>{
        const{name,main:{temp,humidity},wind:{speed},weather:{0:{description,icon}}}=clima
       // temp=temp-273.15;
       document.querySelector("#texto-ciudad").innerHTML=name;
       document.querySelector("#pronostico").innerHTML=description;
       document.querySelector("#icono").src=`http://openweathermap.org/img/w/${icon}.png`
        document.querySelector("#temperatura").innerHTML=(temp-273.15).toFixed(1)+"&#8451";
        document.querySelector("#humedad").innerHTML=`${humidity} %`;
        console.log("humedad "+humidity);
        document.querySelector("#viento").innerHTML=`${speed} km`;
    })
}
