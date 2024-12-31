class DOM_class extends test {

    constructor() {
        super();
    }

    /** Para el campo con id proporcionada, muestra error y el mensaje de error correspondiente a codigoerror */
    mostrar_error_campo(id, codigoerror) {
        document.getElementById('div_error_' + id).style.display = 'inline';
        document.getElementById('div_error_' + id).innerHTML = codigoerror;
        document.getElementById('div_error_' + id).className = codigoerror;
        document.getElementById(id).className = 'errorcampo';
        document.getElementById(id).focus();
        setLang();
    }

    /**Muestra que el campo con id id es correcto */
    mostrar_exito_campo(id) {
        document.getElementById('div_error_' + id).style.display = 'none';
        document.getElementById('div_error_' + id).innerHTML = '';
        document.getElementById(id).className = 'exitocampo';
    }

    /**Usado en el select para seleccionar atributos a mostrar, al seleccionar un atributo ejecuta esto, si se muestra se oculta y viceversa */
    modificarcolumnasamostrar(atributo) {
        let nuevascolumnas = Array();
        if (this.columnasamostrar.includes(atributo)) { // borrar ese atributo
            for (let i = 0; i < this.columnasamostrar.length; i++) {
                if (this.columnasamostrar[i] != atributo) {
                    nuevascolumnas.push(this.columnasamostrar[i]);
                }
            }
            this.columnasamostrar = nuevascolumnas;
        }
        else {// añadir
            this.columnasamostrar.push(atributo);
        }
        this.crearTablaDatos();
    }

    /**Si no esta en las columnas a mostrar, oculta la columna */
    mostrarocultarcolumnas() {
        for (let columna of this.atributos) {
            if (!this.columnasamostrar.includes(columna)) {
                this.cambiacolumnastabla(columna);
                let arraytds = document.querySelectorAll("td[class='tabla-td-" + columna + "']");
                for (let i = 0; i < arraytds.length; i++) {
                    arraytds[i].style.display = 'none';
                }
            }
        }
    }

    cambiacolumnastabla(atributo) {
        document.querySelector("th[class='" + atributo + "']").style.display = 'none';
    }

    crearTablaDatos() {
        document.getElementById("id_tabla_datos").style.display = 'block';
        //construir tabla
        this.hacertabla();
        //hacer las opciones de pagina
        this.hacerPaginacion();
        //construir select
        this.construirSelect();
        //ocultar segun columnasamostrar
        if (this.datos != "") { this.mostrarocultarcolumnas() };
    }

    /**Construye el select de seleccion de columnas */
    construirSelect() {
        document.getElementById("seleccioncolumnas").innerHTML = '';
        let optionselect = '';
        for (let atributo of this.atributos) {
            optionselect = document.createElement('option');
            optionselect.className = atributo;
            optionselect.innerHTML = atributo;
            optionselect.setAttribute("onclick", "validar.modificarcolumnasamostrar('" + atributo + "');");
            optionselect.selected = this.columnasamostrar.includes(atributo);
            document.getElementById("seleccioncolumnas").append(optionselect);
        }
        setLang();
    }

    /**Crea la tabla */
    hacertabla() {
        // titulo de la entidad
        document.getElementById("text_title_page").className = "text_titulo_page_" + this.entidad;
        document.getElementById('title_page').style.display = 'block';

        if (this.datos == "") { //No hay datos
            document.getElementById("id_tabla_datos").style.display = 'block';
            document.getElementById('titulostablacabecera').innerHTML = '';
            document.getElementById('muestradatostabla').innerHTML = '';
            document.getElementById('muestradatostabla').className = 'RECORDSET_VACIO';
        }
        else {
            var textolineatitulos = '<tr>';
            for (let atributo of this.atributos) {
                textolineatitulos += '<th class="' + atributo + '">' + atributo + '</th>';
            }

            textolineatitulos += '<th colspan="3"></th>';

            textolineatitulos += '</tr>';

            let cabecera = document.getElementById("titulostablacabecera");
            cabecera.innerHTML = textolineatitulos;

            // filas

            var textolineadatos = '';

            for (let i = 0; i < this.datos.length; i++) {

                textolineadatos += '<tr style="background-color:grey;">';

                for (let clave in this.datos[i]) {
                    let valorcolumna;
                    if (this.datosespecialestabla.includes(clave)) {
                        valorcolumna = this.cambiardatosespecialestabla(clave, this.datos[i][clave]);
                    }
                    else {
                        // limpieza codigo no deseado incrustado html y script
                        let san = (obj) => {
                            let value = obj?.toString() || '';
                            let sanitizedObj = value.replace(/[&<>"'`]/g, function (match) {
                                switch (match) {
                                    case '&': return '&amp;';
                                    case '<': return '&lt;';
                                    case '>': return '&gt;';
                                    case '"': return '&quot;';
                                    case "'": return '&#039;';
                                    case '`': return '&#x60;';
                                }
                            });
                            return sanitizedObj;
                        }
                        valorcolumna = san(this.datos[i][clave]);
                    }
                    textolineadatos += '<td class="tabla-td-' + clave + '">' + valorcolumna + '</td>';

                }
                // crear los td para cada boton de llamada a funcion de formulario de accion (EDIT, DELETE O SHOWCURRENT)
                let lineaedit = this.crearboton('EDIT', JSON.stringify(this.datos[i]));
                let lineadelete = this.crearboton('DELETE', JSON.stringify(this.datos[i]));
                let lineashowcurrent = this.crearboton('SHOWCURRENT', JSON.stringify(this.datos[i]));

                textolineadatos += lineaedit + lineadelete + lineashowcurrent;
                textolineadatos += '</tr>';

            }
            let cuerpo = document.getElementById('muestradatostabla');
            cuerpo.innerHTML = textolineadatos;
        }
        setLang();
    }

    hacerPaginacion() {
        if (this.datos != "") { //hay datos
            this.levantarPaginacion();
        }
        else {
            document.getElementById("preposicionPag").style.visibility = "hidden";
            document.getElementById("PaginaActual").innerHTML = "";
            document.getElementById("FilasTotales").innerHTML = "";
            document.getElementById("botonANT").style.visibility = "hidden";
            document.getElementById("botonSIG").style.visibility = "hidden";
        }
    }
    levantarPaginacion() {
        document.getElementById("preposicionPag").style.visibility = "visible";

        let filaFinal = parseInt(this.tamPagina) + parseInt(this.empiezaFila);
        if (filaFinal > this.filasTotales) filaFinal = this.filasTotales;
        document.getElementById("PaginaActual").innerHTML = this.empiezaFila + "-" + filaFinal + " ";
        document.getElementById("FilasTotales").innerHTML = " " + this.filasTotales;
        if (this.empiezaFila > 0) { //hay pagina menor al haber tuplas sin mostrar
            let filaInicial = parseInt(this.empiezaFila) - parseInt(this.tamPagina);
            if (filaInicial < 0) filaInicial = 0;
            let textoonclick = "validar.SEARCH(" + filaInicial + ");"
            document.getElementById("botonANT").setAttribute('onclick', textoonclick);
            document.getElementById("botonANT").style.visibility = "visible";
        } else {
            document.getElementById("botonANT").style.visibility = "hidden";
        }
        if (filaFinal < this.filasTotales) { //hay pagina mayor
            let textoonclick = "validar.SEARCH(" + filaFinal + ");"
            document.getElementById("botonSIG").setAttribute('onclick', textoonclick);
            document.getElementById("botonSIG").style.visibility = "visible";
        } else {
            document.getElementById("botonSIG").style.visibility = "hidden";
        }
    }

    crearboton(accion, parametros) {
        let columna = document.createElement('td');
        let opcion = document.createElement('img');
        opcion.src = "./iconos/" + accion + '.png';
        let textoonclick = "validar.createForm('" + accion + "'," + parametros + ");"
        opcion.setAttribute('onclick', textoonclick);
        columna.appendChild(opcion);
        return columna.outerHTML;
    }


    cerrar_formulario() {
        document.getElementById("IU_form").innerHTML = '';
        document.getElementById("IU_form").setAttribute('onsubmit', "");
        document.getElementById("IU_form").setAttribute('action', "");
        document.getElementById("div_IU_form").style.display = 'none';
    }

    cerrar_test() {
        document.getElementById('div_IU_test').style.display = 'none'; //Para ocultarlo
        //Para limpiarlo
        document.getElementById('resultadodef').innerHTML = '';
        document.getElementById('tablaresultadostest').innerHTML = '';
        document.getElementById('resultadoprueba').innerHTML = '';
        document.getElementById('tablaresultadosprueba').innerHTML = '';
        document.getElementById('resultadotest').innerHTML = '';
        document.getElementById('salidaresultadosprueba').innerHTML = '';
    }

    cerrar_tabla() {
        document.getElementById("titulostablacabecera").innerHTML = '';
        document.getElementById("muestradatostabla").innerHTML = '';
        document.getElementById("id_tabla_datos").style.display = 'none';
        document.getElementById("title_page").style.display = 'none';

        this.ocultar_boton_test();
        this.cerrar_test();
    }

    ocultar_boton_test() {
        document.getElementById('botonTEST').style.display = 'none';
    }

    mostrar_boton_test() {
        document.getElementById('botonTEST').style.display = 'inline';
    }

    abrirModalError(errorMsg) {
        document.getElementById('error_action_modal').style.display = 'block';
        document.getElementById('modal_action_overlay').style.display = 'block';
        document.getElementById('error_action_msg').className = errorMsg;
        setLang();
    }

    cerrarModalError() {
        document.getElementById('error_action_modal').style.display = 'none';
        document.getElementById('modal_action_overlay').style.display = 'none';
    }


} // fin de clase
