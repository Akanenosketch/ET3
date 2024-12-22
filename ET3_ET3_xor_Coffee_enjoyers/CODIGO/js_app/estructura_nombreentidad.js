class estructura_nombreentidad { //poner para que extienda a algo? poner en esta misma clase directamente la clase entidad de la et2?
    def_html_nombreentidad = {
        entidad: "", //nombre de la entidad
        atributos: [], //lista de los atributos
        atributo: { //definicion de cada atributo
            tag: "", //el tag html (input,select,textarea,radio,checkbox)
            type: "", //el tipo de input
            valores: [], //valores posibles si es select, radio, checkbox
            multiple: false, //si da opciones, si es multiple
            esPK: true,  //es PK en la tabla?
            esAutoIncremental: true //es autoincremental?
            //algo para poner tamaños de textarea?
        }
        //uno de atributos a mostrar?
        //algo para representar los atributos especiales?
    };

    //pasar a las estructuras lo necesario de las clases entidad y que herede de Abstracta, si es necesario algo especifico crear clase entidad que herede de esto

    def_test_nombreentidad = {
        accion: {
            atributo: {
                prueba: {
                    valor : "",//el maximo para un max_size o el regex para formato
                    codigo: "",//el codigo de error
                    especial : false //indica si es prueba especial (al hacer test que invoque validaciones atomicas o metodo especifco)
                }   

            }
        }
    };

} 