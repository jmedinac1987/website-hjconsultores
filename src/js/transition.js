$(document).ready(function(){

    //ScrollReveal plugin
    window.sr = ScrollReveal({duration: 2000, reset: true});
    
    sr.reveal('.navbar', {
      origin: 'bottom',
      reset: false
    });

    sr.reveal('.quienesSomos-content-left', {        
        origin: 'top'        
    });

    sr.reveal('.quienesSomos-content-right', {        
        origin: 'right'        
    });

    sr.reveal('#quienesSomos-btn', {        
        origin: 'bottom'
    });

    sr.reveal('#quienesSomosChild', {
        origin: 'left'
    });

    sr.reveal('#infoAditionalQuienesSomos', {
        origin: 'left'
    });

    sr.reveal('#servicios', {
        origin: 'left'
    });

    sr.reveal('#serviciosChild', {
        origin: 'left'
    });

    sr.reveal('#contactanos', {
        origin: 'left'
    });

    sr.reveal('#redesSociales', {
        origin: 'left'
    });        
    //Fin ScrollReveal plugin
   
    //Ubica al usuario conforme preciona los links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'               
            }); 
            
            if($('#navbarNav')[0].attributes[0].value === "navbar-collapse collapse show"){
                $('#togglerButtonNavHJ').click();
            }
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
                    matriz.item(i).className ="nav-item"; 
                }
            }                  
        });
    });

    $('#formulario').click(function(event){
        event.preventDefault();
        alert('En este momento la opción no esta disponible');
    });

});

