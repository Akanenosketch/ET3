class test {

    constructor() {
        // mostrar boton de test una vez creada la clase de entidad
        this.mostrar_boton_test();
    }

    test_run() {
        this.prepararTest();
        this.verificar();
        this.ejecutar_pruebas();
        setLang();
    }


    prepararTest() {
        document.getElementById('div_IU_test').style.display = 'block';
        document.getElementById('tablaresultadosprueba').innerHTML = '';//limpiar tabla definicion pruebas
        document.getElementById('salidaresultadosprueba').innerHTML = '';//limpia tabla de pruebas
        document.getElementById('modal_action_overlay').style.display = 'block';

        this.crearArrays();
    }

    crearArrays() {
        this.array_def = eval('def_tests_' + this.entidad);
        this.array_pruebas = eval('pruebas_' + this.entidad);
        this.array_pruebas_file = eval('pruebas_file_' + this.entidad);
        this.array_pruebas_esp = eval('pruebas_esp_' + this.entidad);
    }

    verificar() {
        this.verificarDefTest();

        let flag = this.verificarPruebas();
        flag = this.verificarPruebas_file() && flag;
        flag = this.verificarPruebas_esp() && flag;

        document.getElementById('contenidoPruebas').style.display = 'block';
        document.getElementById('res_estructura_pruebas').className = 'res_estructura_pruebas';
        document.getElementById('resultadoprueba').className = (flag) ? "DefPrueba_OK" : "DefPrueba_KO"; //Para saber si la definicion de pruebas es correcta
    }

    verificarDefTest() {
        let filacorrecta = true;
        let salidatabla = `<tr>
        <th class="Entidad"></th>
        <th class="Campo"></th>
        <th class="NumDefTest"></th>
        <th colspan='7' class="Datos"></th>
        </tr>`;
        let salidalinea = '';
        this.array_def.forEach(element => {
            salidalinea = "<tr>";
            salidalinea += '<td>' + element[0] + '</td>';
            salidalinea += '<td>' + element[1] + '</td>';
            salidalinea += '<td>' + element[2] + '</td>';
            for (let i = 0; i < 7; i++) {
                salidalinea += '<td>' + typeof (element[i]) + '</td>';
            }
            if (
                (typeof (element[0]) == 'string') &&
                (typeof (element[1]) == 'string') &&
                (typeof (element[2]) == 'number') &&
                (typeof (element[3]) == 'string') &&
                (typeof (element[4]) == 'string') &&
                ((typeof (element[5]) == 'string') || (typeof (element[5]) == 'boolean')) &&
                (typeof (element[6]) == 'string')
            ) {
                salidalinea += '<td class="CORRECTA"></td>';
            }
            else {
                salidalinea += '<td class="ERROR"></td>';
                filacorrecta = false;
            }
            salidalinea += "</tr>";
            salidatabla += salidalinea;
        });
        document.getElementById('tablaresultadostest').innerHTML = salidatabla;

        document.getElementById('res_estructura_tests').className = 'res_estructura_tests';
        document.getElementById('resultadodef').className = (filacorrecta) ? "DefTest_OK" : "DefTest_KO";
        document.getElementById('contenidoTests').style.display = 'block';
    }

    verificarPruebas() {
        let filacorrecta = true;
        let salidatabla = `<br><tr>
        <th class="Entidad"></th>
        <th class="Campo"></th>
        <th class="NumDefTest"></th>
        <th class="NumPrueba"></th>
        <th colspan='7' class="Datos"></th>
        </tr>`;
        let salidalinea = '';
        this.array_pruebas.forEach(element => {
            salidalinea = "<tr>";
            salidalinea += '<td>' + element[0] + '</td>';
            salidalinea += '<td>' + element[1] + '</td>';
            salidalinea += '<td>' + element[2] + '</td>';
            salidalinea += '<td>' + element[3] + '</td>';
            for (let i = 0; i < 7; i++) {
                salidalinea += '<td>' + typeof (element[i]) + '</td>';
            }
            if (
                (typeof (element[0]) == 'string') &&
                (typeof (element[1]) == 'string') &&
                (typeof (element[2]) == 'number') &&
                (typeof (element[3]) == 'number') &&
                (typeof (element[4]) == 'string') &&
                (typeof (element[5]) == 'string') &&
                ((typeof (element[6]) == 'string') || (typeof (element[6]) == 'boolean'))
            ) {
                salidalinea += '<td class="CORRECTA"></td>';
            }
            else {
                salidalinea += '<td class="ERROR"></td>';
                filacorrecta = false;
            }
            salidalinea += "</tr>";
            salidatabla += salidalinea;
        });
        document.getElementById('tablaresultadosprueba').innerHTML += salidatabla;
        return filacorrecta;
    }

    verificarPruebas_file() {
        let filacorrecta = true;
        let salidatabla = `<br><tr>
        <th class="Entidad"></th>
        <th class="Campo"></th>
        <th class="NumDefTest"></th>
        <th class="NumPrueba"></th>
        <th colspan='8' class="Datos"></th>
        </tr>`;
        let salidalinea = '';
        this.array_pruebas_file.forEach(element => {
            salidalinea = "<tr>";
            salidalinea += '<td>' + element[0] + '</td>';
            salidalinea += '<td>' + element[1] + '</td>';
            salidalinea += '<td>' + element[2] + '</td>';
            salidalinea += '<td>' + element[3] + '</td>';
            for (let i = 0; i < 8; i++) {
                salidalinea += '<td>' + typeof (element[i]) + '</td>';
            }
            if (
                (typeof (element[0]) == 'string') &&
                (typeof (element[1]) == 'string') &&
                (typeof (element[2]) == 'number') &&
                (typeof (element[3]) == 'number') &&
                (typeof (element[4]) == 'string') &&
                (typeof (element[5]) == 'string') &&
                (typeof (element[6]) == 'object') &&
                ((typeof (element[7]) == 'string') || (typeof (element[7]) == 'boolean'))
            ) {
                salidalinea += '<td class="CORRECTA"></td>';
            }
            else {
                salidalinea += '<td class="ERROR"></td>';
                filacorrecta = false;
            }
            salidalinea += "</tr>";
            salidatabla += salidalinea;
        });
        document.getElementById('tablaresultadosprueba').innerHTML += salidatabla;
        return filacorrecta;
    }

    verificarPruebas_esp() {
        let filacorrecta = true;
        let salidatabla = `<br><tr>
        <th class="Entidad"></th>
        <th class="Campo"></th>
        <th class="NumDefTest"></th>
        <th class="NumPrueba"></th>
        <th colspan='9' class="Datos"></th>
        </tr>`;
        let salidalinea = '';

        this.array_pruebas_esp.forEach(element => {
            salidalinea = "<tr>";
            salidalinea += '<td>' + element[0] + '</td>';
            salidalinea += '<td>' + element[1] + '</td>';
            salidalinea += '<td>' + element[2] + '</td>';
            salidalinea += '<td>' + element[3] + '</td>';
            for (let i = 0; i < 9; i++) {
                salidalinea += '<td>' + typeof (element[i]) + '</td>';
            }
            if (
                (typeof (element[0]) == 'string') &&
                (typeof (element[1]) == 'string') &&
                (typeof (element[2]) == 'number') &&
                (typeof (element[3]) == 'number') &&
                (typeof (element[4]) == 'string') &&
                (typeof (element[5]) == 'string') &&
                ((typeof (element[6]) == 'string') || (typeof (element[6]) == 'boolean')) &&
                (typeof (element[7]) == 'string') &&
                (typeof (element[8]) == 'string')
            ) {
                salidalinea += '<td class="CORRECTA"></td>';
            }
            else {
                salidalinea += '<td class="ERROR"></td>';
                filacorrecta = false;
            }
            salidalinea += "</tr>";
            salidatabla += salidalinea;
        });
        document.getElementById('tablaresultadosprueba').innerHTML += salidatabla;
        return filacorrecta;
    }

    ejecutar_pruebas() {
        let flag = this.test_entidad();
        flag = this.test_entidad_files() && flag;
        flag = this.test_entidad_esp() && flag;

        document.getElementById('resultadopruebas').style.display = 'block';
        document.getElementById('res_pruebas').className = "res_pruebas";
        document.getElementById('resultadotest').className = (flag) ? "pruebas_OK" : "pruebas_KO"; //Para saber si las pruebas son un exito        
    }

    test_entidad() {
        // construyo el titulo de la tabla de muestra
        let salidatest = `<tr>
        <th class="NumDefTest"></th>
        <th class="NumPrueba"></th>
        <th class="Campo"></th>
        <th class="Prueba"></th>
        <th class="Accion"></th>
        <th class="Valor"></th>
        <th class="Respuesta Test"></th>
        <th class="Respuesta esperada"></th>
        <th class="Resultado"></th>
        </tr>`;
        let flag = true;
        for (let i = 0; i < this.array_pruebas.length; i++) {

            var campotest = this.array_pruebas[i][1];
            var numdeftest = this.array_pruebas[i][2];
            var numprueba = this.array_pruebas[i][3];
            var acciontest = this.array_pruebas[i][4];
            var valortest = this.array_pruebas[i][5];
            var respuestatest = this.array_pruebas[i][6];
            //cargo formulario
            this.cargar_formulario(acciontest);

            // recupero el test correspondiente a la prueba que realizo
            var def = this.devolver_def(numdeftest);

            //meto valor en campo
            document.getElementById(campotest).value = valortest;

            //llamo a la funcion de validacion del campo según su accion
            let resultadotest = this.comprobar(campotest, acciontest);

            // compruebo si el resultado del test y la respuesta esperada es la misma
            if (respuestatest == resultadotest) {
                var resultadoestetest = 'CORRECTO';
            }
            else {
                var resultadoestetest = 'INCORRECTO';
                flag = false;
            }

            let respuestaTraducir = respuestatest;
            if (respuestaTraducir == true) { // Cambiar true por un codigo a traducir
                respuestaTraducir = this.entidad + "__" + campotest + "__OK";
            }
            // construyo la fila de salida de la prueba realizada
            var lineasalida = `<tr>
            <td>`+ numdeftest + `</td>
            <td>`+ numprueba + `</td>
            <td>`+ campotest + `</td>
            <td>`+ def[3] + `</td>
            <td>`+ acciontest + `</td>
            <td>`+ valortest + `</td>
            <td>`+ resultadotest + `</td>
            <td>`+ respuestatest + `(<a class="` + respuestaTraducir + `"></a>)` + `</td>
            <td class=`+ resultadoestetest + `></td>
            </tr>`;
            salidatest += lineasalida;
        }
        // presento el resultado
        document.getElementById('salidaresultadosprueba').innerHTML += salidatest;
        return flag;
    }

    test_entidad_files() {
        //br para separar las 2 tablas de pruebas
        let salidatest = `<br><tr>
        <th class="NumDefTest"></th>
        <th class="NumPrueba"></th>
        <th class="Campo"></th>
        <th class="Prueba"></th>
        <th class="Accion"></th>
        <th class="Valor"></th>
        <th class="Respuesta Test"></th>
        <th class="Respuesta esperada"></th>
        <th class="Resultado"></th>
        </tr>`;
        let flag = true;
        for (let i = 0; i < this.array_pruebas_file.length; i++) {

            var campotest = this.array_pruebas_file[i][1];
            var numdeftest = this.array_pruebas_file[i][2];
            var numprueba = this.array_pruebas_file[i][3];
            var acciontest = this.array_pruebas_file[i][4];
            var clasedetest = this.array_pruebas_file[i][5];
            var valortest = this.array_pruebas_file[i][6];
            var respuestatest = this.array_pruebas_file[i][7];
            //cargo formulario
            this.cargar_formulario(acciontest);
            //construyo objeto file y relleno valor para prueba
            if (valortest.length != 0) {
                var file = new File([new ArrayBuffer(valortest[2])], valortest[0], { type: valortest[1], webkitRelativePath: "C:\\fakepath\\" + valortest[0] });
                // Create a data transfer object. Similar to what you get from a `drop` event as `event.dataTransfer`
                const dataTransfer = new DataTransfer();
                // Add your file to the file list of the object
                dataTransfer.items.add(file);
                // Save the file list to a new variable
                const fileList = dataTransfer.files;
                // Set your input `files` to the file list
                document.getElementById(campotest).files = fileList;
            }

            //llamo a la funcion de validacion del campo según su accion
            let resultadotest = this.comprobar(campotest, acciontest);

            // compruebo si el resultado del test y la respuesta esperada es la misma
            if (respuestatest == resultadotest) {
                var resultadoestetest = 'CORRECTO';
            }
            else {
                var resultadoestetest = 'INCORRECTO';
                flag = false;
            }
            let respuestaTraducir = respuestatest;
            if (respuestaTraducir == true) { // Cambiar true por un codigo a traducir
                respuestaTraducir = this.entidad + "__" + campotest + "__OK";
            }

            var lineasalida = `<tr>
            <td>`+ numdeftest + `</td>
            <td>`+ numprueba + `</td>
            <td>`+ campotest + `</td>
            <td>`+ clasedetest + `</td>
            <td>`+ acciontest + `</td>
            <td>`+ valortest + `</td>
            <td>`+ resultadotest + `</td>
            <td>`+ respuestatest + `(<a class="` + respuestaTraducir + `"></a>)` + `</td>
            <td class=`+ resultadoestetest + `></td>
            </tr>`;
            salidatest += lineasalida;
        }

        // presento el resultado
        document.getElementById('salidaresultadosprueba').innerHTML += salidatest;
        return flag;
    }

    test_entidad_esp() {
        // construyo el titulo de la tabla de muestra
        let salidatest = `<br><tr>
        <th class="NumDefTest"></th>
        <th class="NumPrueba"></th>
        <th class="Campo"></th>
        <th class="Prueba"></th>
        <th class="Accion"></th>
        <th class="Valor"></th>
        <th class="CampoAux"></th>    
        <th class="ValorAux"></th>
        <th class="Respuesta Test"></th>
        <th class="Respuesta esperada"></th>
        <th class="Resultado"></th>
        </tr>`;
        let flag = true;
        for (let i = 0; i < this.array_pruebas_esp.length; i++) {

            var campotest = this.array_pruebas_esp[i][1];
            var numdeftest = this.array_pruebas_esp[i][2];
            var numprueba = this.array_pruebas_esp[i][3];
            var acciontest = this.array_pruebas_esp[i][4];
            var valortest = this.array_pruebas_esp[i][5];
            var respuestatest = this.array_pruebas_esp[i][6];
            let campoAux = this.array_pruebas_esp[i][7];
            let valorAux = this.array_pruebas_esp[i][8];
            //cargo formulario
            this.cargar_formulario(acciontest);
            // recupero el test correspondiente a la prueba que realizo
            var def = this.devolver_def(numdeftest);

            //meto valor en campo
            document.getElementById(campotest).value = valortest;
            //meto valor auxiliar en campo auxiliar
            document.getElementById(campoAux).value = valorAux;

            //llamo a la funcion de validacion del campo según su accion
            let resultadotest = this.comprobar(campotest, acciontest);

            // compruebo si el resultado del test y la respuesta esperada es la misma
            if (respuestatest == resultadotest) {
                var resultadoestetest = 'CORRECTO';
            }
            else {
                var resultadoestetest = 'INCORRECTO';
                flag = false;
            }

            let respuestaTraducir = respuestatest;
            if (respuestaTraducir == true) { // Cambiar true por un codigo a traducir
                respuestaTraducir = this.entidad + "__" + campotest + "__OK";
            }
            // construyo la fila de salida de la prueba realizada
            var lineasalida = `<tr>
            <td>`+ numdeftest + `</td>
            <td>`+ numprueba + `</td>
            <td>`+ campotest + `</td>
            <td>`+ def[3] + `</td>
            <td>`+ acciontest + `</td>
            <td>`+ valortest + `</td>
            <td>`+ campoAux + `</td>
            <td>`+ valorAux + `</td>
            <td>`+ resultadotest + `</td>
            <td>`+ respuestatest + `(<a class="` + respuestaTraducir + `"></a>)` + `</td>
            <td class=`+ resultadoestetest + `></td>
            </tr>`;
            salidatest += lineasalida;
        }
        // presento el resultado
        document.getElementById('salidaresultadosprueba').innerHTML += salidatest;
        return flag;
    }

    devolver_def(num_def) {
        for (let i = 0; i < this.array_def.length; i++) {
            if (this.array_def[i][2] == num_def) {
                return this.array_def[i];
            }
        }
    }
} //end class