//agregar clase flotante al elemento de lista seleccionado
//npm install @types/node --save-dev  instalando para agregar al componente
//en el archivo tsconfig.app.json  agregamos  "types": ["node"]
//agregar clase flotante al elemento de lista seleccionado
/*alert("test valido");*/

let list=document.querySelectorAll(".navigation li");

function activeLink(){
    list.forEach((item)=>{
        item.classList.remove("hovered");
    })
    this.classList.add("hovered");
}

list.forEach((item)=>item.addEventListener("mouseover",activeLink));



//menu  desaparece aparece
let toggle=document.querySelector(".toggle");
let navigation =document.querySelector(".navigation");
let main=document.querySelector(".main");

toggle.onclick=function(){
    navigation.classList.toggle("active");
    main.classList.toggle("active")
}