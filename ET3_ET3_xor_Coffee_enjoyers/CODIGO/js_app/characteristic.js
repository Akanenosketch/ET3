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
            texto += `<a id="link_file_characteristic_`;
            texto += valoratributo; // Para evitar ids duplicados
            texto += `" href="http://193.147.87.202/ET2/filesuploaded/files_file_characteristic/`;
            texto += valoratributo;
            texto += `">`;
    
            // Usar el SVG en lugar de la imagen
            texto += `<svg class="botonFILE" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 9V17.8C19 18.9201 19 19.4802 18.782 19.908C18.5903 20.2843 18.2843 20.5903 17.908 20.782C17.4802 21 16.9201 21 15.8 21H8.2C7.07989 21 6.51984 21 6.09202 20.782C5.71569 20.5903 5.40973 20.2843 5.21799 19.908C5 19.4802 5 18.9201 5 17.8V6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.0799 3 8.2 3H13M19 9L13 3M19 9H14C13.4477 9 13 8.55228 13 8V3" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>`;
            texto += `</a>`;
            
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