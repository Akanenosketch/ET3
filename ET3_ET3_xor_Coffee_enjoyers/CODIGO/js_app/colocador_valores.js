class colocador_valores {

    constructor(estructura, that) {
        this.def_html = estructura;
        this.that = that;
    }


    colocarValoresForm(parametros) {

        //Recorrer campos 
        for (let atributo of this.def_html.atributos) {
            if (this.def_html[atributo].esEspecial) {
                this.that.mostrardatosespecialesForm(atributo, parametros[atributo]);
            } else {
                switch (this.def_html[atributo].tag) {
                    case "INPUT":
                        if (this.def_html[atributo].type == "file") {
                            document.getElementById('link_' + atributo).href += parametros[atributo];
                        }
                        document.getElementById(atributo).value = parametros[atributo];
                        break;
                    case "TEXTAREA":
                        document.getElementById(atributo).value = parametros[atributo];
                        break;
                    case "SELECT":
                        if (this.def_html[atributo].multiple) {

                            for (let dato of parametros[atributo]) {
                                document.getElementById(dato).selected = true;
                            }

                        } else {
                            document.getElementById("SelectDefault_"+atributo).setAttribute("disabled", "");

                            document.getElementById(parametros[atributo]).selected = true;

                        }
                        break;
                    default:
                        break;
                }
            }
        }
    }



} 