class colocador_valores {

    constructor(estructura, that) {
        this.def_html = estructura;
        this.that = that;
    }


    colocarValoresForm(parametros) {

        //Recorrer campos 
        for (let atributo of this.def_html.atributos) {
            this.colocarValor(atributo, parametros[atributo]);
        }
    }

    colocarValor(atributo, valor, esTest = false) {
        if (this.def_html[atributo].esEspecial && !esTest) { //esTest es un apaño para el test de forma que se pueda usar la funcion para testing sin problemas al formatear fechas
            this.that.mostrardatosespecialesForm(atributo, valor);
        } else {
            switch (this.def_html[atributo].tag) {
                case "INPUT":
                    if (this.def_html[atributo].type == "file") {
                        if (valor == "") { //si no hay archivo que nu muestre link, por definicion de entidades siempre hay archivo
                            document.getElementById('link_' + atributo).remove();
                        } else {
                            document.getElementById('link_' + atributo).href += valor;
                        }
                    }
                    document.getElementById(atributo).value = valor;
                    break;
                case "TEXTAREA":
                    document.getElementById(atributo).value = valor;
                    break;
                case "SELECT":
                    if (this.def_html[atributo].multiple) {

                        for (let dato of valor) {
                            document.getElementById(dato).selected = true;
                        }

                    } else {
                        document.getElementById("SelectDefault_" + atributo).remove();
                        document.getElementById(valor).selected = true;
                    }
                    break;
                default:
                    break;
            }
        }
    }


} 