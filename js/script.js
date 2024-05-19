$(document).ready(function(){

    $('#login-btn').click(function(){
        $('.login-form').toggleClass('active');
        $('#menu-btn').removeClass('fa-times');
        $('.navbar').removeClass('active');
    });

    $('#menu-btn').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('active');
        $('.login-form').removeClass('active');
    })

    $(window).on('scroll load', function(){

        $('#menu-btn').removeClass('fa-times');
        $('.navbar').removeClass('active');
        $('.login-form').removeClass('active');

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');
    
            if(top >= offset && top < offset + height){
                $('.navbar a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
    
        });

    });

});




// document.getElementById("formulario-consulta").addEventListener("submit"), function(event) {
//     event.preventDefault();

//     let name = document.getElementById("contact-name").value;
//     let email = document.getElementById("contact-email").value;
//     let subject = document.getElementById("contact-subject").value;
//     let messaje = document.getElementById("messaje").value;

    // Se envían los datos del formulario a través de una petición AJAX o realizar otra acción necesaria
    // Por ejemplo, mostrar los datos en la consola
    // console.log("Nombre: ", name);
    // console.log("Email: ", email);
    // console.log("Subject: ",subject);
    // console.log("Mensaje: ", messaje)}





// --------------------------------------------------------
// Formulario Contacto
// --------------------------------------------------------

    //getElementByID selecciona el elemento del formulario con el id "formulario-consulta" y añade un event listener que estará atento a cuando se envíe el formulario. 
    // Cuando se envíe el formulario, se ejecutará la función validarFormulario
    //La llamada a event.preventDefault() evita que el formulario se envíe de forma convencional y permite que la validación se realice mediante JavaScript.

    document.getElementById("formulario-consulta").addEventListener("submit", function(event) {
        event.preventDefault();
        validarFormulario();
    });

  
    function validarFormulario() {
        let nameInput = document.getElementById("contact-name").value;
        let emailInput = document.getElementById("contact-email").vale;
        let validacionElement = document.getElementById("validacion");   
        if (nameInput === ''  || emailInput === '') {
            validacionElement.textContent = "Nombre y Email obligatorios";  
            validacionElement.classList.remove("validacionCorrecta");
            validacionElement.classList.add("validacionError");     
        } else {
            validacionElement.textContent = "Formulario enviado correctamente";
            validacionElement.classList.remove("validacionError");
            validacionElement.classList.add("validacionCorrecta");
        }
    }

// --------------------------------------------------------
// Formulario Imagen
// --------------------------------------------------------
    document.getElementById("formularioImagen").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de manera convencional
        validarFormularioImagen(event); // Llama a la función validarFormularioImagen() pasando el evento
    });
    
    let formularioImagen = document.getElementById('formularioImagen'); // Accede al formulario por su ID

// --------------------------------------------------------
// Validamos Redes
// --------------------------------------------------------
    let validarRadio = function (e) {
        if (!formularioImagen.redes[0].checked && !formularioImagen.redes[1].checked && !formularioImagen.redes[2].checked) {
            alert("Por favor, selecciona una red social");
            e.preventDefault(); // Evita el comportamiento por defecto
            // https://www.w3schools.com/jsref/event_preventdefault.asp
        }
    }
    
// --------------------------------------------------------
// Validamos Terminos y Condiciones
// --------------------------------------------------------
    let validarCheckbox = function (e) {
        if (!formularioImagen.terminos.checked) {
            alert("Por favor, acepta los términos y condiciones");
            e.preventDefault(); // Evita que se envíe el formulario
        }
    };
// --------------------------------------------------------
// Validamos subir imagen
// --------------------------------------------------------
    let validarSubidaImagen = function (e) {
        let archivo = document.getElementById('imagen').files[0];
        if (!archivo) {
            alert("Por favor, selecciona una imagen.");
            e.preventDefault(); // Evita que se envíe el formulario
            return;
        }
    }
// --------------------------------------------------------
// Se ejecuta al presionar submit e invoca a las tres validaciones
// --------------------------------------------------------
    let validarFormularioImagen = function (e) {  // "e" es el evento recibido del form (https://developer.mozilla.org/es/docs/Web/API/Event/preventDefault)
        validarRadio(e);
        validarCheckbox(e);
        validarSubidaImagen(e);
    }


    