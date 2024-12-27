class constructor_form { //HACER CON JS NO EN TEXTO CREO, aparte de eso esta ya
    //done
    constructor(estructura) {
        this.def_html = estructura;
    }

    //done
    crearForm() {
        let formulario = "<br><br>";
        for (let i = 0; i < this.def_html.atributos.length; i++) {
            formulario += this.crearFormAtributo(this.def_html.atributos[i]);
            formulario += "<br><br>";
        }
        formulario += "<br>";
        return formulario;
    }

    //done
    crearFormAtributo(atributo) {
        let form = "";
        let datos = this.def_html[atributo];
        switch (datos["tag"]) {
            case "INPUT":
                form += this.crearInput(datos, atributo);
                break;
            case "TEXTAREA":
                form += this.crearTextarea(datos, atributo);
                break;
            case "SELECT":
                form += this.crearSelect(datos, atributo);
                break;
            default: break;
        }
        return form;
    }

    //hacer radio y checkbox o mejor no?
    crearInput(datos, atributo) {
        let input = "";
        switch (datos["type"]) {
            case "file":
                input += this.crearLabel(atributo);

                input += '<input type="text" id="';
                input += atributo;
                input += '" name="';
                input += atributo;
                input += '" class="PH_';
                input += atributo;
                input += '" ';
                if (eval(datos["size"])) input += 'size="' + datos["size"] + '" ';
                input += '></input>';


                input += '<a id="link_';
                input += atributo;
                input += '" href="http://193.147.87.202/ET2/filesuploaded/files_';
                input += atributo;
                input += '/"><img src="./iconos/FILE.png" /></a>';

                input += this.crearSpanError(atributo);
                input += "<br><br>";
                let nuevo = 'nuevo_' + atributo;

                input += this.crearLabel(nuevo);

                input += '<input type="file" id="';
                input += nuevo;
                input += '" name="';
                input += nuevo;
                input += '" class="PH_';
                input += nuevo;
                input += '" ';
                input += '></input>';

                input += this.crearSpanError(nuevo);
                break;
            case "number":
            case "date":
            case "password":
            case "text":
                input += this.crearLabel(atributo);

                input += '<input type="';
                input += datos["type"];
                input += '" id="';
                input += atributo;
                input += '" name="';
                input += atributo;
                input += '" class="PH_';
                input += atributo;
                input += '" ';
                if (eval(datos["size"])) input += 'size="' + datos["size"] + '" ';
                input += '></input>';

                input += this.crearSpanError(atributo);
                break;
            case "radio": break;
            case "checkbox": break;
            default: break;
        }
        return input;
    }

    //done
    crearTextarea(datos, atributo) {
        let text = '';
        text += this.crearLabel(atributo);

        text += '<textarea type="text"';
        text += '" id="';
        text += atributo;
        text += '" name="';
        text += atributo;
        text += '" class="PH_';
        text += atributo;
        text += '" ';
        if (eval(datos["rows"])) text += 'rows="' + datos["rows"] + '" ';
        if (eval(datos["cols"])) text += 'cols="' + datos["cols"] + '" ';
        text += '></textarea>';

        text += this.crearSpanError(atributo);
        return text;
    }

    //done
    crearSelect(datos, atributo) {
        let select = '';
        select += this.crearLabel(atributo);

        select += '<select id="';
        select += atributo;
        select += '" name="';
        select += atributo;
        select += '" class="PH_';
        select += atributo;
        select += '" ';
        if (datos["multiple"]) select += 'size ="2" multiple';
        select += '>';
        if (!datos["multiple"]) select += '<option value="" class="SelectDefault">Select</option>';
        for (let i = 0; i < datos.valores.length; i++) {
            select += '<option value="' + datos.valores[i] + '" class="option' + datos.valores[i] + '">' + datos.valores[i] + '</option>';
        }
        select += '</select>';
        select += this.crearSpanError(atributo);
        return select;
    }

    //done
    crearLabel(atributo) {
        let label = '<label id="label_';
        label += atributo;
        label += '" class ="label_';
        label += atributo;
        label += '" for="';
        label += atributo;
        label += '" >';
        label += atributo;
        label += '</label >';
        return label;
    }

    //done
    crearSpanError(atributo) {
        let span = '<span id="div_error_';
        span += atributo;
        span += '"><a id="error_';
        span += atributo;
        span += '"></a></span>';
        return span;
    }

    //hacer
    SearchPH(formulario) {
        let form = formulario;
        //cojer los de PH y ponerles _SEARCH

        return form;
    }
}