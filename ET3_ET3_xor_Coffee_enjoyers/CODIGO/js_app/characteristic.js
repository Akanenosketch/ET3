class characteristic extends estructura_characteristic {

    constructor() {
        super();
        this.columnasamostrar = Array("id_characteristic", "name_characteristic", "data_type_characteristic", "category_characteristic", "file_characteristic");
        this.datosespecialestabla = Array("file_characteristic");
        this.inicializar();
    }

    /*Metodos de personalizacion */

    //metodo para mostrar información especial de atributo en la tabla de muestra de tuplas
    cambiardatosespecialestabla(atributo, valoratributo) {
        if (atributo == 'file_characteristic') {
            if (valoratributo == '') return `<a class="no_file_found"></a>`; //por definicion de la entidad, debe haber fichero
            let texto = valoratributo;
            texto += `<a id="link_file_characteristic`;
            texto += `_`;
            texto += valoratributo; //Para evitar ids duplicados
            texto += `" href="http://193.147.87.202/ET2/filesuploaded/files_file_characteristic/`;
            texto += valoratributo;
            texto += `"><img src="./iconos/FILE.png" /></a>`;
            return texto;
        }
    }

    validacionesespeciales(atributo, prueba) {
        if (atributo == 'nuevo_file_characteristic') {
            if (prueba == 'empty') return document.getElementById(atributo).files.length != 0;
        }
        if (atributo == "data_type_characteristic") {
            if (prueba == "selectValido") {
                let values = this.def_html_characteristic["data_type_characteristic"].valores;
                return this.selectValido("data_type_characteristic", values);
            }
            if (prueba == "selectValidoSEARCH") {
                let values = [];
                for (let i = 0; i < this.def_html_characteristic["data_type_characteristic"].valores.length; i++) {
                    values.push(this.def_html_characteristic["data_type_characteristic"].valores[i]);
                } //copia en vez de tomar el array porque va a ser modificado
                values.push("");
                return this.selectValido("data_type_characteristic", values);
            }
        }
        if (atributo == "category_characteristic") {
            if (prueba == "selectValido") {
                let values = this.def_html_characteristic["category_characteristic"].valores;
                return this.selectValido("category_characteristic", values);
            }
            if (prueba == "selectValidoSEARCH") {
                let values = [];
                for (let i = 0; i < this.def_html_characteristic["category_characteristic"].valores.length; i++) {
                    values.push(this.def_html_characteristic["category_characteristic"].valores[i]);
                } //copia en vez de tomar el array porque va a ser modificado
                values.push("");
                return this.selectValido("category_characteristic", values);
            }
        }
    }

    selectValido(atributo, valoresValidos) { //este solo funciona para selects no multiples
        return valoresValidos.includes(document.getElementById(atributo).value);
    }

} 