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

        /*let opcion = document.createElement('img');
        opcion.src = "./iconos/" + accion + '.png';
        let textoonclick = "validar.createForm('" + accion + "'," + parametros + ");"
        opcion.setAttribute('onclick', textoonclick);
        columna.appendChild(opcion);*/

        // Crear el SVG según la acción
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "40px");
        svg.setAttribute("height", "40px");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("fill", "none");
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

        if (accion === 'DELETE') {
            svg.innerHTML = `
                <path d="M10 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                
            `;
            svg.classList.add("botonDELETE");  // Asignamos una clase al SVG
            
        } else if (accion === 'SHOWCURRENT') {
            svg.innerHTML = `
                <path d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z" stroke="#1C274C" stroke-width="1.5"/>
                <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#1C274C" stroke-width="1.5"/>
            `;
            svg.classList.add("botonSHOWCURRENT");  // Asignamos una clase al SVG

        } else if (accion === 'EDIT') {
            svg.innerHTML = `
                <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>    
            `;
            svg.classList.add("botonEDIT");  // Asignamos una clase al SVG

        }

        // Asignar el evento onclick al SVG
        let textoonclick = "validar.createForm('" + accion + "'," + parametros + ");";
        svg.setAttribute('onclick', textoonclick);

        // Añadir el SVG a la columna
        columna.appendChild(svg);

        // Devolver el HTML de la columna con el SVG
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
        document.getElementById('modal_action_overlay').style.display = 'none';

    }

    cerrar_tabla() {
        document.getElementById("titulostablacabecera").innerHTML = '';
        document.getElementById("muestradatostabla").innerHTML = '';
        document.getElementById("id_tabla_datos").style.display = 'none';
        document.getElementById("title_page").style.display = 'none';
        document.getElementById("divTablasDatosEntrega").style.display = "block";
        document.getElementById("textoInicio").style.display = "block";


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
