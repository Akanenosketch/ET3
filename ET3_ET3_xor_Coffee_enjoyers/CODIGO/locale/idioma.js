
/** Funcion para traducir */
function setLang(lang = '') {

    if (lang == '') {
        if (getCookie('lang') != '') {
            lang = getCookie('lang');
        } else {
            lang = 'ES';
        }

    }

    setCookie('lang', lang, 1);
    var traduccion;


    switch (lang) {
        case 'ES':
            traduccion = textos_ES;
            document.getElementById("languageSelect").value = 'ES';
            break;
        case 'EN':
            traduccion = textos_EN;
            document.getElementById("languageSelect").value = 'EN';
            break;
        default:
            traduccion = textos_ES;
            document.getElementById("languageSelect").value = 'ES';
            break;
    }


    /*Se recorre el array de traducciones buscando coincidencias una por una*/
    for (var clave in traduccion) {

        var elementos = document.getElementsByClassName(clave);
        var etiquetas = document.getElementsByTagName('label');
        var inputs = document.getElementsByTagName('input');
        var textareas = document.getElementsByTagName('textarea');
        var imgs = document.getElementsByTagName('img');
        var options = document.getElementsByTagName('option');
        var traducido = false;

        for (var i = 0; i < etiquetas.length; i++) {
            if (etiquetas[i].htmlFor == clave) {
                etiquetas[i].innerHTML = traduccion[clave];
            }
        }

        for (var i = 0; i < inputs.length; i++) {
            var list = inputs[i].classList;
            for (var j = 0; j < list.length; j++) {
                if (list[j] == clave) {
                    inputs[i].placeholder = traduccion[clave];
                    inputs[i].title = traduccion[clave];
                    traducido = true;
                }
            }
        }
        for (var i = 0; i < textareas.length; i++) {
            var list = textareas[i].classList;
            for (var j = 0; j < list.length; j++) {
                if (list[j] == clave) {
                    textareas[i].placeholder = traduccion[clave];
                    textareas[i].title = traduccion[clave];
                    traducido = true;
                }
            }
        }

        for (var i = 0; i < imgs.length; i++) {
            var list = imgs[i].classList;
            for (var j = 0; j < list.length; j++) {
                if (list[j] == clave) {
                    imgs[i].alt = traduccion[clave]; // texto alternativo si no se ve la imagen
                    imgs[i].title = traduccion[clave]; // texto superpuesto a la imagen al pasar sobre ella
                }
            }
        }

        for (var i = 0; i < options.length; i++) {
            if (options[i].className == clave) {
                //options[i].label = traduccion[clave]; NO IMPLEMENTADO EN FIREFOX
                options[i].innerHTML = traduccion[clave];
            }
        }

        //comprobar si es necesario traducir otros tipos de campos
        if (!traducido) { //evita que se traduzca al innerHTML si se ha traducido un input o textarea (comprobar si hace falta para select o radio)
            for (var elem in elementos) {
                elementos[elem].innerHTML = traduccion[clave];
            }
        }
    }

}

/**Función para establecer el valor de la cookie*/
function setCookie(name, value, days) {

    var expires = "";

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }

    document.cookie = name + "=" + (value || "") + expires + "; path=/";
    document.cookie += "; Secure; SameSite=none; path=/";
}

/**Función para obtener el valor de la cookie*/
function getCookie(name) {

    var nameEQ = name + "=";
    var ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }

    return null;

}