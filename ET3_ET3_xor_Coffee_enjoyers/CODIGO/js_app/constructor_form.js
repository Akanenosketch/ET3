class constructor_form {

    constructor(estructura) {
        this.def_html = estructura;
    }

    crearForm() {
        let formulario = document.getElementById("IU_form");
        formulario.appendChild(document.createElement("br"));
        formulario.appendChild(document.createElement("br"));

        for (let i = 0; i < this.def_html.atributos.length; i++) {
            this.crearFormAtributo(this.def_html.atributos[i]);
            formulario.appendChild(document.createElement("br"));
            formulario.appendChild(document.createElement("br"));
        }
        formulario.appendChild(document.createElement("br"));
    }

    crearFormAtributo(atributo) {
        let formulario = document.getElementById("IU_form");
        let datos = this.def_html[atributo];

        switch (datos["tag"]) {
            case "INPUT":
                this.crearInput(datos, atributo);
                break;
            case "TEXTAREA":
                formulario.appendChild(this.crearLabel(atributo));
                formulario.appendChild(this.crearTextarea(datos, atributo));
                formulario.appendChild(this.crearSpanError(atributo));
                break;
            case "SELECT":
                formulario.appendChild(this.crearLabel(atributo));
                formulario.appendChild(this.crearSelect(datos, atributo));
                formulario.appendChild(this.crearSpanError(atributo));
                break;
            default: break;
        }
    }

    crearInput(datos, atributo) {
        let formulario = document.getElementById("IU_form");
        let input = document.createElement("input");
        switch (datos["type"]) {
            case "file":
                formulario.appendChild(this.crearLabel(atributo));
                input.setAttribute("type", "text");
                input.setAttribute("id", atributo);
                input.setAttribute("name", atributo);
                input.setAttribute("class", "PH_" + atributo);
                if (eval(datos["size"])) input.setAttribute("size", datos["size"]);

                let a = document.createElement("a");
                a.setAttribute("id", "link_" + atributo);
                a.setAttribute("href", "http://193.147.87.202/ET2/filesuploaded/files_" + atributo + "/");
                let img = document.createElement("img");
                img.setAttribute("src", "./iconos/FILE.png");
                img.setAttribute("id", "botonFILE");
                img.setAttribute('onmouseover', `changeImageOnHover(true,"FILE");`);
                img.setAttribute('onmouseout', `changeImageOnHover(false, "FILE");`);
                img.style.width = '40px';
                img.style.height = '40px';
        
                a.appendChild(img);
                formulario.appendChild(input);

                formulario.appendChild(this.crearSpanError(atributo));
                formulario.appendChild(a);

                formulario.appendChild(document.createElement("br"));
                formulario.appendChild(document.createElement("br"));

                let nuevo = 'nuevo_' + atributo;
                formulario.appendChild(this.crearLabel(nuevo));

                input = document.createElement("input");


                input.setAttribute("type", "file");
                input.setAttribute("id", nuevo);
                input.setAttribute("name", nuevo);
                input.setAttribute("class", "PH_" + nuevo);
                formulario.appendChild(input);

                formulario.appendChild(this.crearSpanError(nuevo));
                break;
            case "number":
            case "date":
            case "password":
            case "text":
                formulario.appendChild(this.crearLabel(atributo));

                input.setAttribute("type", datos["type"]);
                input.setAttribute("id", atributo);
                input.setAttribute("name", atributo);
                input.setAttribute("class", "PH_" + atributo);
                if (eval(datos["size"])) input.setAttribute("size", datos["size"]);


                formulario.appendChild(input);
                formulario.appendChild(this.crearSpanError(atributo));
                break;
            case "radio": break;
            case "checkbox": break;
            default: break;
        }
    }


    crearTextarea(datos, atributo) {
        let text = document.createElement("textarea");
        text.setAttribute("id", atributo);
        text.setAttribute("name", atributo);
        text.className = "PH_" + atributo;
        text.setAttribute("type", "text");
        if (eval(datos["rows"])) text.setAttribute("rows", datos["rows"]);
        if (eval(datos["cols"])) text.setAttribute("cols", datos["cols"]);

        return text;
    }

    crearSelect(datos, atributo) {
        let select = document.createElement("select");
        select.setAttribute("id", atributo);
        select.setAttribute("name", atributo);
        select.className = "PH_" + atributo;

        if (datos["multiple"]) {
            select.setAttribute("size", 2);
            select.setAttribute("multiple", "");
        }

        let opcion = document.createElement("option");
        if (!datos["multiple"]) {
            opcion.setAttribute("value", "");
            opcion.setAttribute("id", "SelectDefault_" + atributo);
            opcion.className = "SelectDefault";
            opcion.innerHTML = "";
        }
        select.appendChild(opcion);

        for (let i = 0; i < datos.valores.length; i++) {
            opcion = document.createElement('option');
            opcion.innerHTML = datos.valores[i];
            opcion.setAttribute("id", datos.valores[i]);
            opcion.setAttribute("value", datos.valores[i]);
            select.appendChild(opcion);
        }

        return select;
    }

    crearLabel(atributo) {
        let label = document.createElement("label");
        label.setAttribute("id", "label_" + atributo);
        label.className = "label_" + atributo;
        label.setAttribute("for", atributo);
        label.innerHTML = atributo;
        return label;
    }

    crearSpanError(atributo) {
        let span = document.createElement("span");
        span.setAttribute("id", "div_error_" + atributo);
        let a = document.createElement("a");
        a.setAttribute("id", "error_" + atributo);
        span.appendChild(a);
        return span;
    }


    eliminarCampos(accion) {
        for (let atributo of this.def_html.atributos) {
            switch (accion) {
                case 'ADD':
                    //Autoincremental
                    if (this.def_html[atributo].esAutoIncremental) {
                        this.eliminarCampo(atributo);
                    } else if (this.def_html[atributo].tag == "INPUT" && this.def_html[atributo].type == "file") { //Ficheros
                        //no deberia haber ficheros autoincrementables, pero si los hay no peta
                        this.eliminarCampo(atributo);
                        document.getElementById('link_' + atributo).remove();

                    }
                    break;
                case 'SEARCH':
                    if (this.def_html[atributo].tag == "INPUT" && this.def_html[atributo].type == "file") { //Ficheros
                        this.eliminarCampo("nuevo_" + atributo);
                        document.getElementById('link_' + atributo).remove();
                    }
                    break;
                case 'DELETE':
                case 'SHOWCURRENT':
                    if (this.def_html[atributo].tag == "INPUT" && this.def_html[atributo].type == "file") { //Ficheros
                        this.eliminarCampo("nuevo_" + atributo);
                    }
                    break;
                case 'EDIT':
                default:
                    break;
            }
        }

    }

    eliminarCampo(id) {
        document.getElementById('label_' + id).remove();
        document.getElementById(id).remove();
        document.getElementById('div_error_' + id).remove();
    }

    ponernoactivoform(accion) {
        if (accion == "DELETE" || accion == "EDIT" || accion == "SHOWCURRENT") {
            //obtener campos del formulario
            let campos = document.forms['IU_form'].elements;
            //recorrer todos los campos
            for (let i = 0; i < campos.length; i++) {
                if (accion != "EDIT" || this.requiereReadOnlyEDIT(campos[i].id)) {
                    this.desactivarCampo(campos[i].id);
                }
            }
        }
    }

    requiereReadOnlyEDIT(id) { //PK, autoincremental, o files
        return (this.def_html[id] != undefined && (this.def_html[id].esAutoIncremental || this.def_html[id].esPK || (this.def_html[id].tag == "INPUT" && this.def_html[id].type == "file")));
    }

    desactivarCampo(id) {
        let campo = this.def_html[id];
        if (campo.tag == "SELECT") { //no permite readonly
            if (campo.multiple) {
                let onchange = `
                let options = document.getElementById(id).getElementsByTagName("option");
                for (option of options) {
                if (!option.disabled) {
                    option.setAttribute("selected", "");
                }    
                ;`;
                document.getElementById(id).onchange = onchange;
            }

            let options = document.getElementById(id).getElementsByTagName("option");
            for (let option of options) {
                if (!option.selected) {
                    option.setAttribute("disabled", "");
                }
            }
        } else {
            document.getElementById(id).setAttribute('readonly', true);
        }

    }

    SearchPH() {
        //cojer los de PH y ponerles _SEARCH
        let inputs = document.getElementById("IU_form").getElementsByTagName("input");
        let texts = document.getElementById("IU_form").getElementsByTagName("textarea");
        //Para cada hijo si la clase es PH_ añadirle _SEARCH al final
        for (var i = 0; i < inputs.length; i++) {
            var list = inputs[i].classList;
            for (var j = 0; j < list.length; j++) {
                if (list[j] == "PH_" + inputs[i].getAttribute("id")) {
                    inputs[i].classList.remove("PH_" + inputs[i].getAttribute("id"));
                    inputs[i].className = "PH_" + inputs[i].getAttribute("id") + "_SEARCH";
                }
            }
        }
        for (var i = 0; i < texts.length; i++) {
            var list = texts[i].classList;
            for (var j = 0; j < list.length; j++) {
                if (list[j] == "PH_" + texts[i].getAttribute("id")) {
                    texts[i].classList.remove("PH_" + texts[i].getAttribute("id"));
                    texts[i].className = "PH_" + texts[i].getAttribute("id") + "_SEARCH";
                }
            }
        }

    }
}