$(document).ready(function(){

   
    //Ubica al usuario conforme preciona los links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'               
            }); 
       
        });
    });
     
    
    let matriz = document.querySelectorAll('li');//obtiene todos los elementos li de la página
    
    //Ajusta las clases bootstrap de los li de acuerdo al link precionado
    matriz.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();            
            for(let i = 0;i < matriz.length; i++){
                if(anchor.id === matriz.item(i).id ){
                    anchor.className = "nav-item active";
                }else{
                    matriz.item(i).className ="nav-item" 
                }
            }                  
        });
    });

    $('#formulario').click(function(event){
        event.preventDefault();
        alert('En este momento la opción no esta disponible')
    });

});

