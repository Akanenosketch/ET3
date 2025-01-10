let textos_EN = {
    
    "SelectDefault" : "Select",
    "textoInicio" : "Welcome, this is our group´s ET3 Interface",

    /*TITULOS*/

    "base_de_datos" : "Structure",
    "API": "API",
    "pagina_principal": "Home Page",

    //Idiomas
    "idiomaES" : "Spanish",
    "idiomaEN" : "English",

    //paginacion
    "preposicionPag" : "entries out of",
    
    //Textos datos generales
    'Nombre Grupo'        : 'Group Name',
    'Entrega'             : 'Assignment',
    'Horas Totales'       : 'Total Hours',
    'Nombre Integrante'   : 'Member Name',
    'Horas'               : 'Hours Worked',

    //textos titulos index
    'text_titulo_app'   : 'IU ET3 Interface',
    'text_titulo_app_api': 'ET3 API',
    'text_titulo_app_est': 'ET3 Structure',
    'text_titulo_menu'  : 'Menu',
    'text_titulo_pie'   : 'Footer',

    //Opciones de menu
    'text_project'       : 'Project',
    'text_analysis_prep' : 'Analysis Preparation',
    'text_characteristic': 'Characteristic',

    //textos titulos pagina entidades
    'text_titulo_page_project'              : 'Project Management',
    'text_titulo_page_analysis_preparation' : 'Analysis Preparation Management',
    'text_titulo_page_characteristic'       : 'Characteristic Management',

    //Titulos de forms project 
    'text_contenido_titulo_form_project_ADD'        : 'Project Add Form',
    'text_contenido_titulo_form_project_SEARCH'     : 'Project Search Form',
    'text_contenido_titulo_form_project_EDIT'       : 'Project Edit Form',
    'text_contenido_titulo_form_project_SHOWCURRENT': 'Project Show Form',
    'text_contenido_titulo_form_project_DELETE'     : 'Project Delete Form',

    //Titulos de forms analysis_preparation
    'text_contenido_titulo_form_analysis_preparation_ADD'           : 'Analysis Preparation Add Form',
    'text_contenido_titulo_form_analysis_preparation_SEARCH'        : 'Analysis Preparation Search Form',
    'text_contenido_titulo_form_analysis_preparation_EDIT'          : 'Analysis Preparation Edit Form',
    'text_contenido_titulo_form_analysis_preparation_SHOWCURRENT'   : 'Analysis Preparation Show Form',
    'text_contenido_titulo_form_analysis_preparation_DELETE'        : 'Analysis Preparation Delete Form',

    //Titulos de los forms characteristic
    'text_contenido_titulo_form_characteristic_ADD'        : 'Characteristic Add Form',
    'text_contenido_titulo_form_characteristic_SEARCH'     : 'Characteristic Search Form',
    'text_contenido_titulo_form_characteristic_EDIT'       : 'Characteristic Edit Form',
    'text_contenido_titulo_form_characteristic_SHOWCURRENT': 'Characteristic Show Form',
    'text_contenido_titulo_form_characteristic_DELETE'     : 'Characteristic Delete Form',

    /*TRADUCCIONES PARA ESTRUCTURA.HTML*/

    'InfoTextStruct1': 'This page offers an explanation of the structures made for the entities used for this project.',
    'InfoTextStruct2': 'To learn more information about a structure, select one of the available entities within the menu located at the top left..',

    //Titulos
    'text_title_page_default_structures'               : 'Used Structures',
    'text_titulo_page_estructura_project'              : 'Proyect Structure',
    'text_titulo_page_estructura_analysis_preparation' : 'Analysis Preparation Structure',
    'text_titulo_page_estructura_characteristic'       : 'Characteristic Structure',

    /*TRADUCCIONES PARA API.HTML*/

    'InfoTextAPI1' : 'This page will show all the functions that have been implemented to carry out this work.',
    'InfoTextAPI2' : 'To learn about the implemented functions, choose one of the options in the menu located at the top left.',

    // Textos funciones test

    'func1' : 'test_run()',
    'desc1' : '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de preparar, verificar y ejecutar todos los test que han sido definidos.',
    'func2' : 'prepararTest()',
    'desc2' : '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Es llamada por <b>test_run()</b> para limpiar las tablas y crear los arrays necesarios para ejecutar los tests.',
    'func3' : 'crearArrays()',
    'desc3' : '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de crear los arrays para las definiciones de test, las pruebas y las pruebas específicas de archivos y especiales, esta función es llamada por <b>prepararTest()</b>.',
    'func4' : 'verificar()',
    'desc4' : '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de comprobar que todas las definiciones de test y de pruebas están definidas correctamente, esta función es llamada por <b>test_run()</b>',
    'func5' : 'verificarDeftest()',
    'desc5' : '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de de verificar que el formato de las definiciones de test son correctas, esta función es llamada por <b>verificar()</b>',
    'func6' : 'verificarPruebas()',
    'desc6' : '<b>Parámetros:</b> No usa parámetros.\n<b>Output:</b> Devuelve un valor booleano (filacorrecta) que indica si el formato de las pruebas es correcto o no.\n<b>Función:</b> Se encarga de comprobar que el formato de las pruebas definidas es correcto, esta función es llamada por <b>verificar()</b>.',
    'func7' : 'verificarPruebas_file()',
    'desc7' : '<b>Parámetros:</b> No usa parámetros.\n<b>Output:</b> Devuelve un valor booleano (filacorrecta) que indica si el formato de las pruebas de fichero es correcto o no.\n<b>Función:</b> Se encarga de comprobar que el formato de las pruebas de fichero definidas es correcto, esta función es llamada por <b>verificar()</b>.',
    'func8' : 'verificarPruebas_esp()',
    'desc8' : '<b>Parámetros:</b> No usa parámetros.\n<b>Output:</b> Devuelve un valor booleano (filacorrecta) que indica si el formato de las pruebas especiales es correcto o no.\n<b>Función:</b> Se encarga de comprobar que el formato de las pruebas especiales definidas es correcto, esta función es llamada por <b>verificar()</b>.',
    'func9' : 'ejecutar_pruebas()',
    'desc9' : '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de comprobar que todas las pruebas definidas se ejecutan correctamente, esta función es llamada por <b>test_run()</b>',
    'func10' : 'test_entidad()',
    'desc10' : '<b>Parámetros:</b> No usa parámetros.\n<b>Output:</b> Devuelve un valor booleano (flag) que indica si las pruebas definidas se han ejecutado correctamente o no.\n<b>Función:</b> Se encarga de comprobar que las pruebas definidas se ejecutan correctamente, esta función es llamada por <b>ejecutar_pruebas()</b>.',
    'func11' : 'test_entidad_files()',
    'desc11' : '<b>Parámetros:</b> No usa parámetros.\n<b>Output:</b> Devuelve un valor booleano (flag) que indica si las pruebas de ficheros definidas se han ejecutado correctamente o no.\n<b>Función:</b> Se encarga de comprobar que las pruebas de ficheros definidas se ejecutan correctamente, esta función es llamada por <b>ejecutar_pruebas()</b>.',
    'func12' : 'test_entidad_esp()',
    'desc12' : '<b>Parámetros:</b> No usa parámetros.\n<b>Output:</b> Devuelve un valor booleano (flag) que indica si las pruebas para variables especiales definidas se han ejecutado correctamente o no.\n<b>Función:</b> Se encarga de comprobar que las pruebas para variables especiales definidas se ejecutan correctamente, esta función es llamada por <b>ejecutar_pruebas()</b>.',
    'func13' : 'devolver_dev(num_def)',
    'desc13' : '<b>Parámetros:</b>\n\tnum_def:\n\t\tTipo: Número.\n\t\tDescripción: Hace referencia al número de definición de test.\n<b>Output:</b> Devuelve un array (array_def) que contiene el test asociado a ese número de defincición.\n<b>Función:</b> Se encarga de devolver la definición de test asociada a un número de definición de test determinado.',
    'func14' : 'check(id, accion)',
    'desc14' : '<b>Parámetros:</b>\n\tid:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un atributo de una entidad\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las acciones que se pueden realizar ADD, SEARCH, EDIT.\n<b>Output:</b> Devuelve un valor booleano, indicando que las pruebas han salido con éxito o no.\n<b>Función:</b> Se encarga de comprobar si las pruebas realizadas en un atributo han salido todas con éxito, en caso contrario se muestra un campo con el mensaje de error asociado.',
    'func15' : 'check_submit(accion)',
    'desc15' : '<b>Parámetros:</b>\n\taccion\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las acciones que se pueden realizar ADD, SEARCH, EDIT.\n<b>Output:</b> Devuelve un booleano indicando que los tests se han realizado correctamente o no.\n<b>Función:</b> Se encarga de comprobar todos los atributos para ver si cumplen con los requisitos definidos en las definiciones de test.',
    'func16' : 'colocarvalicaciones(accion)',
    'desc16': '<b>Parámetros:</b>\n\taccion\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las acciones que se pueden realizar ADD, SEARCH, EDIT.\n<b>Output:</b> La ejecución de esta función no devuelve ningún output.\n<b>Función:</b> Se encarga de coloca todas las validaciones relacionadas con los tests, esta función es llamada por <b>createForm()</b>',
    'func17' : 'ocultar_boton_test()',
    'desc17' : '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de ocultar el botón que permite la ejecución de los test y pruebas definidas.',
    'func18' : 'mostrar_boton_test()',
    'desc18' : '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de poner en visible el botón que permite la ejecución de los test y pruebas definidas.',
    'func19' : 'validacionesespeciales(atributo, prueba)',
    'desc19' : '<b>Parámetros:</b>\n\tatributo:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia al nombre del atributo especial a analizar.\n\tprueba:\n\t\tTipo: String.\n\t\tDescripción: Nombre de la prueba a realizar.\n<b>Output:</b> Devuelve un valor booleano que viene de lo que devuelvan las correspondientes funciónes auxiliares.\n<b>Función:</b> Se encarga de realizar las pruebas a los campos considerados como especiales (i.e.: las fechas en project).',
    'func20' : 'fechaValida(fecha)',
    'desc20' : '<b>Parámetros:</b>\n\tfecha:\n\t\tTipo: String.\n\t\tDescripción: Fecha a validar (inicio o fin de proyecto)\n<b>Output:</b> Devuelve un valor booleano, indicando si la fecha es válida o no.\n<b>Función:</b> Se encarga de comprobar si la fecha introducida es una fecha válida, esta función es llamada por <b>validacionesespeciales()</b> dentro de la clase <b>project</b>.',
    'func21' : 'fechasOrdenadas(fecha1, fecha2)',
    'desc21' : '<b>Parámetros:</b>\n\tfecha1:\n\t\tTipo: String.\n\t\tDescripción: Fecha de inicio de proyecto\n\tfecha2:\n\t\tTipo: String.\n\t\tDescripción: Fecha de fin de proyecto.\n<b>Output:</b> Devuelve un valor booleano, indicando si las fechas están ordenadas o no.\n<b>Función:</b> Se encarga de comprobar si la fecha de inicio es menor que la de fin y que la fecha de fin sea mayor que la de inicio, esta función es llamada por <b>validacionesespeciales()</b> dentro de la clase <b>project</b>.',
    'func22' : 'selectValido(atributo, valores)',
    'desc22' : '<b>Parámetros:</b>\n\tatributo\n\t\tTipo: String.\n\t\tDescripción: Categoría o tipo de dato.\n\tvalores:\n\t\tTipo: Array.\n\t\tDescripción: Almacena los valores que son válidos (los que se pueden escoger).\n<b>Output:</b> Devuelve un valor booleano, indicando si el valor escogido está contenido en la lista de valores o no.\n<b>Función:</b> Se encarga de comprobar si el valor escogido o buscado está entre las opciones válidas, esta función es llamada por <b>validacionesespeciales()</b> dentro de la clase <b>characteristic</b>.',
    'func23' : 'cerrar_test()',
    'desc23' : '<b>Parámetros/Output:</b> No usa parámetros y su ejecución no devuelve ningun tipo de output.\n<b>Función:</b> Se encarga de limpiar la tabla de tests y ocultarlo.',


    // Test funciones Presentación de tablas

    'func24' : 'SEARCH(empieza, filas)',
    'desc24' : '<b>Parámetros:</b>\n\tempieza:\n\t\tTipo: Número.\n\t\tDescripción: Indica el número por donde empieza la paginación.\n\tfilas:\n\t\tTipo: número\n\t\tDescipción: Indica el número de tuples que habrá por página.<b>Output: </b>La ejecución de esta función no proporciona ningún tipo de output.<b>Función:</b> Se encarga de buscar tuplas dentro de una entidad en base a unos criterios especificados para, posteriormente, mostrarlos en la tabla.',
    'func25' : 'ADD()',
    'desc25' : '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de llamar al back e insertar una nueva tupla dentro de la tabla de la entidad en la que estemos trabajando.',
    'func26' : 'EDIT()',
    'desc26' : '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de llamar al back y editar la tupla editada dentro de la tabla de la entidad en la que estemos trabajando.',
    'func27' : 'DELETE()',
    'desc27' : '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de llamar al back y borrar una tupla existente dentro de la tabla de la entidad en la que estemos trabajando.',
    'func28' : 'cambiardatosespecialestabla(atributo, valoratributo, i)',
    'desc28' : '<b>Parámetros:</b>\n\atributo:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento perteneciente a una entidad.\n\tvaloratributo:\n\t\tTipo: String.\n\t\tDescipción: Valor que tiene el atributo atributp almacenado.\n\ti\n\t\tTipo: String.\n\t\tDescripción: Elemento auxiliar.\n<b>Output: </b>Proporciona un output en tipo string que hace referencia a un elemento html que cambia como se ven los datos especiales dentro de la tabla.\n<b>Función:</b> Se encarga de cambiar los datos/atributos asignados como datos especiales para que se puedan ver con el formato permitido en la tabla.',
    'func29' : 'modificarcolumnasmostrar(atributo)',
    'desc29' : '<b>Parámetros:</b>\n\tatributo:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento de un entidad.\n<b>Output: </b>La ejecución de esta función no proporciona ningún tipo de output.\n<b>Función: </b> Se emplea para mostrar o ocultar la columna asociada al atributo seleccionado en el select.',
    'func30' : 'mostrarocultarcolumnas()',
    'desc30' : '<b>Parámetros/Output:</b>No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de ocultar las columnas que no están marcadas para mostrar.',
    'func31' : 'cambiarcolumnatabla(atributo)',
    'desc31' : '<b>Parámetros:</b>\n\tatributo:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento de un entidad.\n<b>Output: </b>La ejecución de esta función no proporciona ningún tipo de output.\n<b>Función: </b> Se encarga de ocultar la tabla en base al atributo pasado en los parámetros, esta función es llamada por <b>mostrarocultarcolumna()</b>.',
    'func32' : 'crearTablaDatos()',
    'desc32' : '<b>Parámetros/Output:</b>No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de llamar a las funciones auxiliares necesarias para crear las tablas.',
    'func33' : 'construirSelect()',
    'desc33' : '<b>Parámetros/Output:</b>No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de crear el select de selección de columnas.',
    'func34' : 'hacerTabla()',
    'desc34' : '<b>Parámetros/Output:</b>No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de crear la propia tabla, esta función es llamada por <b>crearDatosTabla()</b>.',
    'func35' : 'hacerPaginacion()',
    'desc35' : '<b>Parámetros/Output:</b>No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de llamar a la función encargada de crear la paginación en el caso de que existan tuplas, en caso contrario se ocultan todos los elementos del HTML relacionados con la paginación..',
    'func36' : 'levantarPaginacion()',
    'desc36' : '<b>Parámetros/Output:</b>No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de propiamente crear la paginación, esta función es llamada por <b>hacerPaginacion()</b>.',
    'func37' : 'crearboton(accion, parametros, i)',
    'desc37' : '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia las acciones que se pueden realizar: DELETE, SHOWCURRENT, EDIT.\n\tparámetros:\n\t\tTipo: String.\n\t\tDescipción: Hace referencia a algún elemento de la estructura.\n\ti:\n\t\tTipo: Stirng.\n\t\tDescripción: Elemento auxiliar.\n<b>Output:</b> Devulve un HTMLTableCellElement con el svg de los iconos.\n<b>Función:</b> Se encarga de crear los botones y los iconos correspondientes para las acciones de DELETE, SHOWCURRENT y EDIT.',
    'func38' : 'cerrar_tabla()',
    'desc38' : '<b>Parámetros/Output:</b>No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se oculta la tabla y se oculta el boton de test.',
    
    //textos funciones de formularios
 
    'func39' : 'crearForm()',
    'desc39' : '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de llamar a la función auxiliar <b>crearFormAtributo()</b> para crear el formulario.',
    'func40' : 'crearFormAtributo(atributo)',
    'desc40' : '<b>Parámetros:</b>\n\tatributo:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento perteneciente a una entidad.\n<b>Output:</b> La ejecución de esta función no devuelve ningún output.\n<b>Función:</b> Se encarga de crear la parte del formulario asociada a un atributo, esta función es llamada por <b>crearForm()</b>.',
    'func41' : 'crearInput(datos, atributo)',
    'desc41' : '<b>Parámetros:</b>\n\tdatos:\n\t\tTipo: Array.\n\t\tDescripción: Es una lista con los diferentes tipos de input que se pueden usar dentro de un formulario.\n\tatributo\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento perteneciente a una entidad.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de crear el input para un determinado atributo, esta función es llamada por <b>crearFormAtributo()</b>.',
    'func42' : 'crearTextarea(datos, atributo)',
    'desc42' : '<b>Parámetros:</b>\n\tdatos:\n\t\tTipo: Array.\n\t\tDescripción: Es una lista con los diferentes tipos de input que se pueden usar dentro de un formulario.\n\tatributo\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento perteneciente a una entidad.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de crear el textarea para un determinado atributo, esta función es llamada por <b>crearFormAtributo()</b>.',
    'func43' : 'crearSelect(datos, atributo)',
    'desc43' : '<b>Parámetros:</b>\n\tdatos:\n\t\tTipo: Array.\n\t\tDescripción: Es una lista con los diferentes tipos de input que se pueden usar dentro de un formulario.\n\tatributo\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento perteneciente a una entidad.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de crear el select para un determinado atributo, esta función es llamada por <b>crearFormAtributo()</b>.',
    'func44' : 'crearLabel(atributo)',
    'desc44' : '<b>Parámetros:</b>\n\tatributo:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento perteneciente a una entidad.\n<b>Output:</b> Devuelve un HTMLLabelElement (label).\n<b>Función:</b> Se encarga de crear una etiqueta label que acompaña a cada uno de los inputs, esta función es llamada por <b>crearFormAtributo()</b>.',
    'func45' : 'crearSpanError(atributo)',
    'desc45' : '<b>Parámetros:</b>\n\tatributo:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento perteneciente a una entidad.\n<b>Output:</b> Devuelve un HTMLSpanElement (span).\n<b>Función:</b> Se encarga de crear una etiqueta span que se mostrará cuando las validaciones de input no salgan bien, esta función es llamada por <b>crearFormAtributo()</b>.',
    'func46' : 'eliminarCampos(accion)',
    'desc46' : '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las acciones que se pueden realizar ADD, SEARCH, DELETE, SHOWCURRENT, EDIT.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de eliminar los campos necesarios en base a la acción a realizar.',
    'func47' : 'eliminarCampo(id)',
    'desc47' : '<b>Parámetros:</b>\n\tid:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento HTML.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de eliminar el campo del id proporcionado, esta función es llamada por <b>eliminarCampos()</b>.',
    'func48' : 'ponernoactivoform(accion)',
    'desc48' : '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las acciones que se pueden realizar DELETE, SHOWCURRENT, EDIT.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de desactivar los campos, los cuales no son necesarios o no debe de ser editados.',
    'func49' : 'requiereReadOnlyEDIT(id)',
    'desc49' : '<b>Parámetros:</b>\n\tid:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento HTML.\n<b>Output:</b> Devuelve un valor booleano indicando si el campo debe de ser no editable dentro de un formulario de edición o no.\n<b>Función:</b> Se encarga de indicar qué campos deben de ser puestos en sólo lectura en los formularios de edición, esta función es llamada por <b>ponernoactivoform()</b>.',
    'func50' : 'desactivarCampo(id)',
    'desc50' : '<b>Parámetros:</b>\n\tid:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento HTML.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de poner en sólo lectura los atributos necesarios en los formularios de edición, esta función es llamada por <b>ponernoactivoform()</b>.',
    'func51' : 'SearchPH()',
    'desc51' : '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de buscar y de colocar los placeholders para los formularios de SEARCH.',
    'func52' : 'colocarValoresForm(parametros)',
    'desc52' : '<b>Parámetros:</b>\n\tparametros:\n\t\tTipo: Array.\n\t\tDescripción: Hace referencia a todas las características asignadas a un atributo en base a lo indicado en su estructura.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de llamar a la correspondiente función auxiliar par colocar todod slos valores para todos los atributos de una entidad.',
    'func53' : 'colocarValor(atributo, valor)',
    'desc53' : '<b>Parámetros:</b>\n\tatributo:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento perteneciente a una entidad.\n\tvalor:\n\t\tTipo: String(Puede tomar cualquier tipo)\n\t\tDescripción: Hace referencia al dato asignado a un atributo en específico.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de colocar el valor de un atributo en su correspondiente campo, teniendo en cuenta su tipo y la existencia de un valor o no.',
    'func54' : 'mostrarvaloresespecialesform(atributo, valoratributo)',
    'desc54' : '<b>Parámetros:</b>\n\tatributo:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento perteneciente a una entidad.\n\tvaloratributo:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia al valor asignado a un atributo.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de mostrar los valores especiales dentro del formulario.',
    'func55' : 'inicializar()',
    'desc55' : '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de incializar todo lo necesarios para la creación de formularios, tablas y test.',
    'func56' : 'createForm(accion, parametros)',
    'desc56' : '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las accione sque se pueden realizar ADD, EDIT, DELETE, SEARCH.\n\tparametros\n\t\tTipo: \n\t\tDescripción: .\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de llamar a todas las funciones auxiliares necesarias para crear el formulario.',
    'func57' : 'cargar_formulario(accion)',
    'desc57' : '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las acciones que se pueden realizar ADD, DELETE, EDIT, SEARCH.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de cargar el formulario y mostrará error en el caso de que no exista un formulario, esta función es llamada por <b>createForm()</b>.',
    'func58' : 'cargar_formulario_dinamico(accion)',
    'desc58' : '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las acciones que se pueden realizar ADD, DELETE, EDIT, SEARCH.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de cargar el formulario dinámico, esta función es llamada por <b>cargar_formulario()</b> si no existe formulario en clase entidad.',
    'func59' : 'ponerTitulosForm(accion)',
    'desc59' : '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las acciones que se pueden realizar ADD, DELETE, EDIT, SEARCH.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de ponerle el título al formulario teniendo en cuenta la acción que se está a realizar, esta función es llamada por <b>createForm()</b>.',
    'func60' : 'eliminarCamposForm(accion)',
    'desc60' : '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las acciones que se pueden realizar ADD, DELETE, EDIT, SEARCH.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de eliminar los campos no necesario teniendo en cuenta la acción que se está a realizar, esta función es llamada por <b>createForm()</b>.',
    'func61' : 'mostrarAtributosForm(accion, parametros)',
    'desc61' : '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las accione sque se pueden realizar ADD, EDIT, DELETE, SEARCH.\n\tparametros\n\t\tTipo: \n\t\tDescripción: .\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de mostrar los atributos necesarios dentro del formulario.',
    'func62' : 'colocarvalidaciones(accion)',
    'desc62' : '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las acciones que se pueden realizar ADD, DELETE, EDIT, SEARCH.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de colocar las validaciones en los correspondientes campos, esta función es llamada por <b>createForm()</b>.',
    'func63' : 'comprobar(id, accion)',
    'desc63' : '<b>Parámetros:</b>\n\tid:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento HTML.\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las accione sque se pueden realizar ADD, EDIT, DELETE, SEARCH.\n<b>Output:</b> Devuelve un valor booleano que es la respuesta de la función <b>check(id, accion)</b> indicando si lo introducido es válido o no.\n<b>Función:</b> Se encarga de comprobar si lo introducido dentro del campo con el id proporcionado cumple con lo que está permitido.',
    'func64' : 'ponernoactivo(accion)',
    'desc64' : '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las acciones que se pueden realizar ADD, DELETE, EDIT, SEARCH.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de poner en modo de lectura los campos correspondientes, esta función es llamada por <b>createForm()</b>.',
    'func65' : 'colocarboton(accion)',
    'desc65' : '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las acciones que se pueden realizar ADD, DELETE, EDIT, SEARCH.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de crear el botón de submit, esta función es llamada por <b>createForm()</b>.',
    'func66' : 'colocarOnSubmitForm(accion)',
    'desc66' : '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las acciones que se pueden realizar ADD, DELETE, EDIT, SEARCH.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de colocar el botón de submit en el formulario que se esté creando, esta función es llamada por <b>createForm()</b>.',
    'func67' : 'comprobar_submit(accion)',
    'desc67' : '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las acciones que se pueden realizar ADD, DELETE, EDIT, SEARCH.\n<b>Output:</b> Devuelve un valor booleano que corresponderá con la respuesta dada por la función <b>check_submit(accion)</b>, indicando que todo lo introducido en el formulario está correcto o no.\n<b>Función:</b> Se encarga de comprobar que todo lo introducido en el formulario cumple con los requisitos definidos en las correspondientes estructuras de las entidades.',
    'func68' : 'colocarActionForm(accion)',
    'desc68' : '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las acciones que se pueden realizar ADD, DELETE, EDIT, SEARCH.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de establecer la acción del formulario para verificar todo lo que se tenga que verificar para la acción que se esté a realizar, esta función es llamada por <b>createForm()</b>.',
    'func69' : 'mostrarform()',
    'desc69' : '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Muestra el formulario una vez creado, esta función es llamada por <b>createForm()</b>.',
    'func70' : 'actuarRespuesta(respuesta)',
    'desc70' : '<b>Parámetros:</b>\n\trespuesta:\n\t\tTipo: String(?)\n\t\tDescripción: Hace referencia a la respuesta que proporciona el back.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función: </b>Se encarga de limpiar el formulario.',
    'func71' : 'abrirModalError(errorMsg)',
    'desc71' : '<b>Parámetros:</b>\n\terrorMsg:\n\t\tTipo: String.\n\t\tDescripción: Es el mensaje de error que se debe de mostrar en el modal.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función: </b>Se encarga de abrir un modal con el mensaje de error correspondiente.',
    'func72' : 'cerrarModalError()',
    'desc72' : '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de cerrar el modal una vez que el usuario lo ha visto.',
    'func73' : 'cerrar_formulario()',
    'desc73' : '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de cerrar el formulario una ver envíado al back o cuando el usuario lo cancela.',
    'func74' : 'mostrar_error_campo(id, codigoerror)',
    'desc74' : '<b>Parámetros:</b>\n\tid:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento HTML.\n\tcodigoerror:\n\t\tTipo: String.\n\t\tDescripción: Se refiere uno de los códigos de error que se pueden producir si no se ponen los valores correctamente.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de mostrar error y su correspondiente error en el campo del id proporcionado.',
    'func75' : 'mostrar_exito_campo(id)',
    'desc75' : '<b>Parámetros:</b>\n\tid:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento de HTML.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función: </b>Se encarga de mostrar que el dato intorducido en un campo es correcto.',

    //Textos para otras funciones
    'func76' : 'evento(event)',
    'desc76' : '<b>Parámetros:</b>\n\tevent:\n\t\tTipo: Objeto\n\t\tDescripción: Evento registrado a partir de la realización de una acción determinada.\n<b>Output:</b> La ejecución de esta función no proporciona ningún tipo de output.\n<b>Función:</b> Se encarga de cerrar el menú en el caso de que esté abierto y el click no fuera dentro del menú ni en el botón para abrirlo.',
    'func77' : 'menu_work()',
    'desc77' : '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de abrir y cerrar el menú, es llamada por la función <b>evento()</b> cuando hay que cerrar el menú.',
    'func78' : 'toggleTheme()',
    'desc78' : '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de manejar los cambios de modo claro a modo oscuro.',
    'func79' : 'changeImageOnHover(isMouseOver, action, i)',
    'desc79' : '<b>Parámetros:</b>\n\tisMouseOver:\n\t\tTipo: Booleano.\n\t\tDescripción: Cambia cuando el ratón está encima de un objeto en específico.\n\taction:\n\t\tTipo: String.\n\t\tDescripción: Parte del nombre de la imagen en cuestión, que hace referencia a la acción que realizas al hacer click en el icono.\n\ti: \n\t\tTipo: String.\n\t\tDescripción: Elemento auxiliar.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de cambiar el color de los iconos cuando se le pasa el ratón por encima.',
    'func80' : 'showAPI(APIElement)',
    'desc80' : '<b>Parámetros:</b>\n\tAPIElement:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las diferentes clasificaciones de las funciones.\n<b>Output:</b> La ejecución de esta función no proporciona ningún tipo de output.\n<b>Función:</b> Se encarga de mostrar todas las funciones relacionadas a la opción seleccionada en el menú.',
    'func81' : 'showEstructura(entity)',
    'desc81' : '<b>Parámetros:</b>\n\tentity:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las entidades existentes en este proyecto (Analysis preparation, Project y Characteristic).\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de mostrar y explicar las estructuras empleadas para la realización de esta ET3.',
    'func82' : 'setLang(lang)',
    'desc82' : '<b>Parámetros:</b>\n\tlang:\n\t\tTipo: String.\n\t\tDescripción: Empleada para almacenar el lenguaje al que queremos traducir la página web.\n<b>Output:</b> La ejecución de esta función no proporciona ningún tipo de output.\n<b>Función:</b> Se encarga de cambiar el lenguaje entre castellado e inglés en toda web mediante el uso de cookies.',
    'func83' : 'setCookie(name, value, days)',
    'desc83' : '<b>Parámetros:</b>\n\tname:\n\t\tTipo: String.\n\t\tDescripción: Nombre que le queremos poner a la cookie.\n\tvalue:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a los idiomas disponibles (EN y ES).\n\tdays:\n\t\tTipo: Número.\n\t\tDescripción: Número de días los que queremos que aguante la cookie.\n<b>Output:</b> La ejecución de esta función no proporciona ningún tipo de output.\n<b>Función:</b> Se encarga de establecer el valor de la cookie al valor que nosotros queramos, esta función es llamada por <b>setLang(lang)</b>.',
    'func84' : 'getCookie(name)',
    'desc84' : '<b>Parámetros:</b>\n\tname:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia al nombre de la cookie.\n<b>Output:</b> Devuelve un valor nulo.\n<b>Función:</b> Se encarga de obtener el valor de la cookie en base a su nombre.',
    'func85' : 'peticionBackGeneral(formulario, controlador, action, datosextra = null)',
    'desc85' : '<b>Parámetros:</b>\n\tformulario\n\t\tTipo: Objeto formulario\n\t\tDescripción: El formulario creado.\n\tcontrolador:\n\t\tTipo: Any\n\t\tDescipción: Controlador\n\taction:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a la acción que se esté realizando\n\tdatosextra:\n\t\tTipo: Nulo\n\t\tDescripción: Datos extra.\n<b>Output:</b> Devuelve una nueva promesa con la resolución del dominio del servidor.\n<b>Función:</b> Se encarga de mandar las peticiones al back.',

    // Textos de funciones de validación

    'func86' : 'min_size(id, minsize)',
    'desc86' : '<b>Parámetros:</b>\n\tid:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento HTML.\n\tminsize:\n\t\tTipo: Número.\n\t\tDescripción: Hace referencia al tamaño mínimo que debe de tener el valor.\n<b>Output:</b> Devuelve un valor booleano corespondiente a la respuesta de <b>evaluar_tam()</b> indicando si cumple con el tamaño mínimo o no.\n<b>Función:</b>Se encarga de comprobar si el valor introducido cumple con el tamaño mínimo establecido en los requisitos de ese campo.',
    'func87' : 'max_size(id, maxsize)',
    'desc87' : '<b>Parámetros:</b>\n\tid:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento HTML.\n\tmaxsize:\n\t\tTipo: Número.\n\t\tDescripción: Hace referencia al tamaño máximo que puede tener el valor.\n<b>Output:</b> Devuelve un valor booleano corespondiente a la respuesta de <b>evaluar_tam()</b> indicando si cumple con el tamaño máximo o no.\n<b>Función:</b>Se encarga de comprobar si el valor introducido cumple con el tamaño máximo establecido en los requisitos de ese campo.',
    'func88' : 'format(id, expreg)',
    'desc88' : '<b>Parámetros:</b>\n\tid:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento HTML.\n\texpreg:\n\t\tTipo: String.\n\t\tDescripción: Expresión regular empleada para comprobar el formato del valor del elemento contenido en id.\n<b>Output:</b> Devuelve un valor booleando correspondiente al output de <b>evaluar_regex()</b>, indicando si el valor introducido en el campo id cumple con el formato indicado o no.\n<b>Función:</b> Se encarga de comprobar si el valor introducido en campo id cumple con el formato establecido o no.',
    'func89' : 'max_size_file(id, maxsize)',
    'desc89' : '<b>Parámetros:</b>\n\tid:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento HTML.\n\tmaxsize:\n\t\tTipo: Número.\n\t\tDescripción: Hace referencia al tamaño máximo para el archivo en cuestión.\n<b>Output:</b>Devuelve un valor booleano indicando si el archivo supera el tamaño permitido o no.\n<b>Función:</b> Se encarga de comprobar que el archivo adjuntado no sobrepase el tamaño máximo permitido.',
    'func90' : 'type_file(id, array_tipos)',
    'desc90' : '<b>Parámetros:</b>\n\tid:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento HTML.\n\tarray_tipos:\n\t\tTipo: Array.\n\t\tDescripción: Hace referencia a los tipos de archivos permitidos (doc, docx, pdf).\n<b>Output:</b> Devuelve un valor booleano confirmando si el tipo de archivo coincide con uno de los tipos de archivos permitidos.\n<b>Función:</b> Se encarga de verificar que el tipo de archivo del archivo adjuntado esté dentro de los tipos de archivo permitidos en la definición de la entidad.',
    'func91' : 'format_name_file(id, expreg)',
    'desc91' : '<b>Parámetros:</b>\n\tid:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento HTML.\n\texpreg:\n\t\tTipo: String.\n\t\tDescripción: Expresión regular empleada para comprobar el formato del valor del elemento contenido en id.\n<b>Output:</b>Devuleve un valor booleando correspondiente al output de <b>evaluar_regex()</b>, indicando si el valor introducido en el campo id cumpel con el formato indicado o no.\n<b>Función:</b> Se encarga de comprobar si el nombre del fichero adjuntado cumple con el formato establecido o no.',
    'func92' : 'evaluar_regex(valor, expreg)',
    'desc92' : '<b>Parámetros:</b>\n\tvalor:\n\t\tTipo: String.\n\t\tDescripción: Hace al valor introducido dentro de un campop de un formulario.\n\texpreg:\n\t\tTipo: String.\n\t\tDescripción: Expresión regular empleada para comprobar el formato del valor introducido.\n<b>Output:</b> Devuelve un valor booleano correspondiente a la respuesta de <b>expresionregular.test(valor)</b> indicando si cumple con el regex indicado o no.\n<b>Función:</b> Se encarga de comprobar que el valor introducido cumple con el formato indicado, esta función es llamada por <b>format()</b> y <b>format_name_file()</b>',
    'func93' : 'evaluar_tam(id, parametro, mayor)',
    'desc93' : '<b>Parámetros:</b>\n\tid:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento HTML.\n\tparametro:\n\t\tTipo: Número.\n\t\tDescripción: Hace referencia al tamaño máximo o mínimo.\n\tmayor:\n\t\tTipo: Booleano.\n\t\tDescripción: Indica si el valor debe de ser mayor/igual o menor al parametro indicado.\n<b>Output:</b> Devuelve un valor booleando indicando si el valor cumple con que sea mayor/igual o menor al parametro indicado.\n<b>Función:</b> Se encarga de comprobar si el valor introducido en el campo id, cumple con el requisisto de tamaño mínimo o de tamaño máximo, esta función es llamada por <b>min_size(id, minsize)</b> y <b>max_size(id, maxsize)</b>.',


    //Textos referencia a las clases

    'clase1'   : 'Funciones dentro de EntidadAbstracta.js',
    'clase2'   : 'Funciones dentro de Test_class.js',
    'clase3'   : 'Funciones dentro de DOM_class.js',
    'clase4'   : 'Funciones dentro de constructor_form.js',
    'clase5'   : 'Funciones dentro de constructor_validaciones.js',
    'clase6'   : 'Funciones dentro de colocador_valores.js',
    'clase7'   : 'Funciones dentro de project.js',
    'clase8'   : 'Funciones dentro de characteristic.js',
    'clase9'   : 'Funciones dentro de analysis_preparation.js',
    'clase10'  : 'Funciones dentro de varias clases (project.js/characteristic.js)',
    'clase11'  : 'Funciones dentro de varias clases (analysis_preparation.js/project.js/characteristic.js)',
    'clase12'  : 'Funciones dentro de otros archivos (index.html/estructuras.html/API.html)',
    'clase13'  : 'Funciones dentro de idioma.js',
    'clase14'  : 'Funciones dentro de Validaciones_Atomicas.js',
    'clase15'  : 'Funciones dentro de ExternalAccess.js ',
    'clase16'  : 'Funciones dentro de idioma.js',

    //Titulos
    'text_title_page_default_API'  : 'API Used',
    'text_title_page_test'         : 'Functions used for Test',
    'text_title_page_tabla'        : 'Functions used for Presentation Table',
    'text_title_page_form'         : 'Functions used for Form Creation',
    'text_title_page_other'        : 'Functions used for Other Things',
    'text_title_page_validaciones' : 'Functions used forValidations',

    //Opciones Menu
    'opt_funciones_test'      : 'Tests',
    'opt_funciones_tabla'     : 'Table Presentation',
    'opt_funciones_form'      : 'Form Creation',
    'opt_funciones_valid'     : 'Validation Functions',
    'opt_funciones_other'     : 'Other Functions',

    /*TRADUCCIONES PARA TEST*/ 


    //Titulos tablas
    'res_estructura_tests'  : 'Test Definition Verification Table',
    'res_estructura_pruebas': 'Test Cases Definition Verification Table',
    'res_pruebas'           : 'Unit Test Results Table',

    //Textos de resultado de verificaciones
    'DefTest_OK'    : 'The structure of all Test definitions is correct',
    'DefTest_KO'    : 'The structure of all Test definitions is NOT correct',
    'DefPrueba_OK'  : 'The definition of all Test Cases is correct',
    'DefPrueba_KO'  : 'The definition of all Test Cases is NOT correct',
    'pruebas_OK'    : 'All Unit Test results are correct',
    'pruebas_KO'    : 'All Unit Test results are NOT correct',

    //Titulos de las tablas de tests
    'Entidad'           : 'Entity',
    'NumDefTest'        : 'TestDefNum',
    'Datos'             : 'Data',
    'NumPrueba'         : 'TestCaseNum',
    'Campo'             : 'Field',
    'Prueba'            : 'TestCase',
    'Accion'            : 'Action',
    'Valor'             : 'Value',
    'Respuesta Test'    : 'Test Response',
    'Respuesta esperada': 'Expected Response',
    'Resultado'         : 'Result',
    'CampoAux'          : 'Aux.Field',
    'ValorAux'          : 'Aux.Value',
    
    //Valores resultado tests
    'CORRECTO'  : 'CORRECT',
    'CORRECTA'  : 'CORRECT',
    'ERROR'     : 'ERROR',
    'INCORRECTO': 'INCORRECT',
   

    /*ATRIBUTOS*/


    // atributos project
    'id_project'                : 'Project ID',
    'name_project'              : 'Project Name',
    'start_date_project'        : 'Start Date',
    'end_date_project'          : 'End Date',
    'responsable_project'       : 'Responsable',
    'organization_project'      : 'Organization',
    'description_project'       : 'Description',
    'file_project'              : 'Project File',
    'code_project'              : 'Project Code',
    'acronym_project'           : 'Project Acronym',
    'id_sampling_methodology'   : 'Sampling Methodology ID',

    //atributos analysis_preparation
    'id_analysis_preparation'           : 'Analysis ID',
    'name_analysis_preparation'         : 'Analysis Name',
    'description_analysis_preparation'  : 'Description',
    'bib_analysis_preparation'          : 'Bibliography',
    'file_analysis_preparation'         : 'Analysis File',

    // atributos characteristic
    'id_characteristic'           : 'Characteristic ID',
    'name_characteristic'         : 'Characteristic Name',
    'description_characteristic'  : 'Description',
    'data_type_characteristic'    : 'Data Type',
    'category_characteristic'     : 'Category',
    'bibref_characteristic'       : 'Bibliographic Reference',
    'file_characteristic'         : 'Characteristic File',


    /*LABELS*/ //Tienen que ir despues de los atributos, si hay fors en los labels se traduce con los codigos de los id de inputs


    // labels project
    'label_id_project'              : 'Project ID',
    'label_name_project'            : 'Project Name',
    'label_start_date_project'      : 'Start Date',
    'label_end_date_project'        : 'End Date',
    'label_responsable_project'     : 'Responsable',
    'label_organization_project'    : 'Organization',
    'label_description_project'     : 'Description',
    'label_file_project'            : 'Project File',
    'label_code_project'            : 'Project Code',
    'label_acronym_project'         : 'Project Acronym',
    'label_id_sampling_methodology' : 'Sampling Methodology ID',
    'label_nuevo_file_project'      : 'New Project File',
  
    //labels analysis_preparation
    'label_id_analysis_preparation'         : 'Analysis ID',
    'label_name_analysis_preparation'       : 'Analysis Name',
    'label_description_analysis_preparation': 'Description',
    'label_bib_analysis_preparation'        : 'Bibliography',
    'label_file_analysis_preparation'       : 'Analysis File',
    'label_nuevo_file_analysis_preparation' : 'New Analysis File',

    // labels characteristic
    'label_id_characteristic'         : 'Characteristic ID',
    'label_name_characteristic'       : 'Characteristic Name',
    'label_description_characteristic': 'Description',
    'label_data_type_characteristic'  : 'Data Type',
    'label_category_characteristic'   : 'Category',
    'label_bibref_characteristic'     : 'Bibliographic Reference',
    'label_file_characteristic'       : 'Characteristic File',
    'label_nuevo_file_characteristic' : 'New Characteristic File',
    

    /*PLACEHOLDERS*/


    //Placeholders atributos project

    'PH_id_project'                 : '',
    'PH_name_project'               : '15-100 letters including spaces',
    'PH_start_date_project'         : 'dd/mm/yyyy',
    'PH_end_date_project'           : 'dd/mm/yyyy',
    'PH_responsable_project'        : '6-60 letters including ñ,accents or spaces',
    'PH_organization_project'       : '6-100 letters including ñ,accents or spaces',
    'PH_description_project'        : '30-500 characters',
    'PH_file_project'               : '',
    'PH_code_project'               : '6-50 letters including ñ,spaces or punctuation',
    'PH_acronym_project'            : '6-15 letters including ñ or punctuation',
    'PH_id_sampling_methodology'    : '1-11 digit, number > 0',
    'PH_nuevo_file_project'         : 'File .pdf, .doc o .docx max 2MB size; filename 7-100 letters or dots',
    
    //SEARCH                                  
    'PH_id_project_SEARCH'                 : 'Up to 11 digits',
    'PH_name_project_SEARCH'               : 'Up to 100 letters including spaces',
    'PH_start_date_project_SEARCH'         : 'dd/mm/yyyy or substrings',
    'PH_end_date_project_SEARCH'           : 'dd/mm/yyyy or substrings',
    'PH_responsable_project_SEARCH'        : 'Up to 60 letters including ñ,accents or spaces',
    'PH_organization_project_SEARCH'       : 'Up to 100 letters including ñ,accents or spaces',
    'PH_description_project_SEARCH'        : 'Up to 500 characters',
    'PH_file_project_SEARCH'               : 'Up to 100 letters including dots (file extension optional)',
    'PH_code_project_SEARCH'               : 'Up to 50 letters including ñ,spaces or punctuation',
    'PH_acronym_project_SEARCH'            : 'Up to 15 letters including ñ or punctuation',
    'PH_id_sampling_methodology_SEARCH'    : 'Up to 11 digits',
   
    //Placeholders atributos analysis_preparation
    'PH_id_analysis_preparation'            : '',
    'PH_name_analysis_preparation'          : '8-100 letters including spaces',
    'PH_description_analysis_preparation'   : '80-5000 letters including spaces',
    'PH_bib_analysis_preparation'           : '6-200 letters including ñ, accents, spaces or punctuation',
    'PH_file_analysis_preparation'          : '',
    'PH_nuevo_file_analysis_preparation'    : 'File .pdf, .doc o .docx max 2MB size; filename 7-100 letters or dots',

    //SEARCH
    'PH_id_analysis_preparation_SEARCH'            : 'Up to 11 digits',
    'PH_name_analysis_preparation_SEARCH'          : 'Up to 100 letters including spaces',
    'PH_description_analysis_preparation_SEARCH'   : 'Up to 5000 letters including spaces',
    'PH_bib_analysis_preparation_SEARCH'           : 'Up to 200 letters including ñ, accents, spaces or punctuation',
    'PH_file_analysis_preparation_SEARCH'          : 'Up to 100 letters including dots (file extension optional)',

    //Placeholders atributos characteristic

    'PH_id_characteristic'          : '',
    'PH_name_characteristic'        : '8-100 letters including spaces',
    //'PH_data_type_characteristic'   : '',
    //'PH_category_characteristic'    : '',
    'PH_description_characteristic' : '80-5000 letters including spaces',
    'PH_bibref_characteristic'      : '16-200 letters including ñ, accents, spaces or punctuation',
    'PH_file_characteristic'        : '',
    'PH_nuevo_file_characteristic'  : 'File .pdf, .doc o .docx max 200KB size; filename 7-100 letters or dots',
            
    //SEARCH
    'PH_id_characteristic_SEARCH'          : 'Up to 11 digits',
    'PH_name_characteristic_SEARCH'        : 'Up to 100 letters including spaces',
   // 'PH_data_type_characteristic_SEARCH'   : '',
   // 'PH_category_characteristic_SEARCH'    : '',
    'PH_bibref_characteristic_SEARCH'      : 'Up to 200 letters including ñ, accents, spaces or punctuation',
    'PH_description_characteristic_SEARCH' : 'Up to 5000 letters including spaces',
    'PH_file_characteristic_SEARCH'        : 'Up to 100 letters including dots (file extension optional)',
    

    /*MENSAJES DE ERROR*/


    /*project*/ 

    //Mensajes de OK
    'project__id_project__OK'              : 'Valid Project ID',
    'project__name_project__OK'            : 'Valid Project Name',
    'project__start_date_project__OK'      : 'Valid Start Date',
    'project__end_date_project__OK'        : 'Valid End Date',
    'project__responsable_project__OK'     : 'Valid Responsable',
    'project__organization_project__OK'    : 'Valid Organization',
    'project__description_project__OK'     : 'Valid Description',
    'project__file_project__OK'            : 'Valid Project File',
    'project__code_project__OK'            : 'Valid Project Code',
    'project__acronym_project__OK'         : 'Valid Project Acronym',
    'project__id_sampling_methodology__OK' : 'Valid Sampling Methodology ID',
    'project__nuevo_file_project__OK'      : 'Valid New Project File',

    //Mensajes de error

    //id_project
    'project__id_project__max_size_KO': 'Project ID is too long, must be length 11 at most.',
    'project__id_project__format_KO'  : 'Project ID has invalid format, must have only digits.',

    //name_project
    'project__name_project__min_size_KO': 'Project Name is too short, must be length 15 at least.',
    'project__name_project__max_size_KO': 'Project Name is too long, must be length 100 at most.',
    'project__name_project__format_KO'  : 'Project Name has invalid format, must have only letters or spaces without ñ or accents.',

    //start_date_project
    'project__start_date_project__format_KO'  : 'Start Date format is invalid, must follow format dd/mm/yyyy.',
    'project__start_date_project__valid_KO'   : 'Start Date is not valid, must be an existing date on the gregorian calendar.',
    'project__start_date_project__superior_KO': 'Start Date must not be after End Date.',
    'project__start_date_project__format_SEARCH_KO': 'Start Date format is invalid, must be at least part of a dd/mm/yyyy date.',

    //end_date_project
    'project__end_date_project__format_KO'  : 'End Date format is invalid, must follow format dd/mm/yyyy.',
    'project__end_date_project__valid_KO'   : 'End Date is not valid, must be an existing date on the gregorian calendar.',
    'project__end_date_project__inferior_KO': 'End Date must not be before Start Date.',
    'project__end_date_project__format_SEARCH_KO': 'End Date format is invalid, must be at least part of a dd/mm/yyyy date.',

    //responsable_project
    'project__responsable_project__min_size_KO': 'Responsable is too short, must be length 6 at least.',
    'project__responsable_project__max_size_KO': 'Responsable is too long, must be length 60 at most.',
    'project__responsable_project__format_KO'  : 'Responsable has invalid format, must have only letters or spaces, ñ or accents.',

    //organization_project
    'project__organization_project__min_size_KO': 'Organization is too short, must be length 6 at least.',
    'project__organization_project__max_size_KO': 'Organization is too long, must be length 100 at most.',
    'project__organization_project__format_KO'  : 'Organization has invalid format, must have only letters or spaces, ñ or accents.',

    //description_project
    'project__description_project__min_size_KO': 'Description is too short, must be length 30 at least.',
    'project__description_project__max_size_KO': 'Description is too long, must be length 500 at most.',
    'project__description_project__format_KO'  : 'Description has invalid format, must have only West European Latin Characters.',//Prueba hecha para que acepte cualquier caracter que se puede incluir 

    //code_project
    'project__code_project__min_size_KO': 'Project Code is too short, must be length 6 at least.',
    'project__code_project__max_size_KO': 'Project Code is too long, must be length 50 at most.',
    'project__code_project__format_KO'  : 'Project Code has invalid format, must have only letters, ñ, spaces or punctuation, without accents.',

    //acronym_project
    'project__acronym_project__min_size_KO': 'Project Acronym is too short, must be length 6 at least.',
    'project__acronym_project__max_size_KO': 'Project Acronym is too long, must be length 50 at most.',
    'project__acronym_project__format_KO'  : 'Project Acronym has invalid format, must have only letters, ñ or punctuation, without accents and spaces.',

    //id_sampling_methodology
    'project__id_sampling_methodology__min_size_KO': 'Sampling Methodology ID cannot be empty, must be length 1 at least',
    'project__id_sampling_methodology__max_size_KO': 'Sampling Methodology ID is too long, must be length 11 at most.',
    'project__id_sampling_methodology__format_KO'  : 'Sampling Methodology ID has invalid format, must have only digits.',

    //file_project
    'project__file_project__max_size_KO': 'Project File name is too long, must be length 100 at most.',
    'project__file_project__format_KO'  : 'Project File name has invalid format, must have only letters or dots without accents,ñ and punctuation.',

    //nuevo_file_project
    'project__nuevo_file_project__empty_KO'           : 'New Project File cannot be empty, a file must be sent',
    'project__nuevo_file_project__max_size_file_KO'   : 'New Project File is too big, size must be less than 2 MB.',
    'project__nuevo_file_project__type_file_KO'       : 'New Project File is not of an allowed type, must be .pdf,.doc or .docx',
    'project__nuevo_file_project__format_name_file_KO': 'New Project File name has invalid format, must have only letters or dots without accents, ñ, spaces or punctuation.',
    'project__nuevo_file_project__min_size_KO'        : 'New Project File name is too short, must be length 7 at least',
    'project__nuevo_file_project__max_size_KO'        : 'New Project File name is too long, must be length 100 at most.',

    
    /*analysis_preparation*/ 

    //Mensajes de OK
    'analysis_preparation__id_analysis_preparation__OK'             : 'Valid Analysis ID',
    'analysis_preparation__name_analysis_preparation__OK'           : 'Valid Analysis Name',
    'analysis_preparation__description_analysis_preparation__OK'    : 'Valid Description',
    'analysis_preparation__file_analysis_preparation__OK'           : 'Valid Analysis File',
    'analysis_preparation__bib_analysis_preparation__OK'            : 'Valid Bibliography',
    'analysis_preparation__nuevo_file_analysis_preparation__OK'     : 'Valid New Analysis File',

    //Mensajes de error
    
    //id_analysis_preparation
    'analysis_preparation__id_analysis_preparation__max_size_KO': 'Analysis ID is too long, must be length 11 at most',
    'analysis_preparation__id_analysis_preparation__format_KO'  : 'Analysis ID has invalid format, must have only digits.',
    
    //name_analysis_preparation
    'analysis_preparation__name_analysis_preparation__min_size_KO': 'Analysis Name is too short, must be length 8 at least.',
    'analysis_preparation__name_analysis_preparation__max_size_KO': 'Analysis Name is too long, must be length 100 at most.',
    'analysis_preparation__name_analysis_preparation__format_KO'  : 'Analysis Name has invalid format, must have only letters or spaces without accents or ñ.',

    //description_analysis_preparation
    'analysis_preparation__description_analysis_preparation__min_size_KO': 'Description is too short, must be length 80 at least.',
    'analysis_preparation__description_analysis_preparation__max_size_KO': 'Description is too long, must be length 5000 at most.',
    'analysis_preparation__description_analysis_preparation__format_KO'  : 'Description has invalid format, must have only letters or spaces without accents or ñ.',

    //bib_analysis_preparation
    'analysis_preparation__bib_analysis_preparation__min_size_KO': 'Bibliography is too short, must be length 6 at least.',
    'analysis_preparation__bib_analysis_preparation__max_size_KO': 'Bibliography is too long, must be length 200 at most.',
    'analysis_preparation__bib_analysis_preparation__format_KO'  : 'Bibliography has invalid format, must have only letters, accents, ñ, spaces or punctuation.',
    
    //file_analysis_preparation
    'analysis_preparation__file_analysis_preparation__max_size_KO':'Analysis File name is too long, must be length 100 at most.',
    'analysis_preparation__file_analysis_preparation__format_KO'  :'Analysis File name has invalid format, must have only letters or dots without accents,ñ and punctuation.',

    //nuevo_file_analysis_preparation
    'analysis_preparation__nuevo_file_analysis_preparation__empty_KO'           : 'New Analysis File cannot be empty, a file must be sent.',
    'analysis_preparation__nuevo_file_analysis_preparation__max_size_file_KO'   : 'New Analysis File is too big, size must be less than 2 MB.',
    'analysis_preparation__nuevo_file_analysis_preparation__type_file_KO'       : 'New Analysis File is not of an allowed type, must be .pdf,.doc or .docx',
    'analysis_preparation__nuevo_file_analysis_preparation__format_name_file_KO': 'New Analysis File name has invalid format, must have only letters or dots without accents, ñ, spaces or punctuation.',
    'analysis_preparation__nuevo_file_analysis_preparation__min_size_KO'        : 'New Analysis File name is too short, must be length 7 at least.',
    'analysis_preparation__nuevo_file_analysis_preparation__max_size_KO'        : 'New Analysis File name is too long, must be length 100 at most.',
    
    
    /*characteristic*/ 

    //Mensajes de OK
    'characteristic__id_characteristic__OK'          : 'Valid Characteristic ID',
    'characteristic__name_characteristic__OK'        : 'Valid Characteristic Name',
    'characteristic__description_characteristic__OK' : 'Valid Description',
    'characteristic__data_type_characteristic__OK'   : 'Valid Data Type',
    'characteristic__category_characteristic__OK'    : 'Valid Category',
    'characteristic__file_characteristic__OK'        : 'Valid New Characteristic File',
    'characteristic__bibref_characteristic__OK'      : 'Valid Bibliography',
    'characteristic__nuevo_file_characteristic__OK'  : 'Valid New Characteristic File',

    //Mensajes de error
    
    //id_characteristic
    'characteristic__id_characteristic__max_size_KO': 'Characteristic ID is too long, must be length 11 at most.',
    'characteristic__id_characteristic__format_KO'  : 'Characteristic ID has invalid format, must have only digits. ',

    //name_characteristic
    'characteristic__name_characteristic__min_size_KO': 'Characteristic Name is too short, must be length 8 at least.',
    'characteristic__name_characteristic__max_size_KO': 'Characteristic Name is too long, must be length 100 at most.',
    'characteristic__name_characteristic__format_KO'  : 'Characteristic Name has invalid format, must have only letters or spaces without accents or ñ.',
    
    //description_characteristic
    'characteristic__description_characteristic__min_size_KO': 'Description is too short, must be length 80 at least.',
    'characteristic__description_characteristic__max_size_KO': 'Description is too long, must be length 5000 at most.',
    'characteristic__description_characteristic__format_KO'  : 'Description has invalid format, must have only letters or spaces without accents or ñ.',

    //data_type_characteristic
    'characteristic__data_type_characteristic__valid_KO'        : 'Selected Option is Invalid',
    "characteristic__data_type_characteristic__valid_SEARCH_KO" : 'Selected Option is Invalid',

    //category_characteristic
    'characteristic__category_characteristic__valid_KO'        : 'Selected Option is Invalid',
    "characteristic__category_characteristic__valid_SEARCH_KO" : 'Selected Option is Invalid',

    //bibref_characteristic
    'characteristic__bibref_characteristic__min_size_KO': 'Bibliography is too short, must be length 16 at least.',
    'characteristic__bibref_characteristic__max_size_KO': 'Bibliography is too long, must be length 200 at most.',
    'characteristic__bibref_characteristic__format_KO'  : 'Bibliography has invalid format, must have only letters, accents, ñ, spaces or punctuation.',
    
    //file_characteristic
    'characteristic__file_characteristic__max_size_KO':'Characteristic File name is too long, must be length 100 at most.',
    'characteristic__file_characteristic__format_KO'  :'Characteristic File name has invalid format, must have only letters or dots without accents,ñ and punctuation.',

    //nuevo_file_characteristic
    'characteristic__nuevo_file_characteristic__empty_KO'           : 'New Characteristic File cannot be empty, a file must be sent.',
    'characteristic__nuevo_file_characteristic__max_size_file_KO'   : 'New Characteristic File is too big, size must be less than 200 KB.',
    'characteristic__nuevo_file_characteristic__type_file_KO'       : 'New Characteristic File is not of an allowed type, must be .pdf,.doc or .docx',
    'characteristic__nuevo_file_characteristic__format_name_file_KO': 'New Characteristic File name has invalid format, must have only letters or dots without accents, ñ, spaces or punctuation.',
    'characteristic__nuevo_file_characteristic__min_size_KO'        : 'New Characteristic File name is too short, must be length 7 at least.',
    'characteristic__nuevo_file_characteristic__max_size_KO'        : 'New Characteristic File name is too long, must be length 100 at most.',




    /*MENSAJES DE ERROR DEL BACK*/
    /*Todos menos file_project_es_nulo_KO, SQL_KO y RECORDSET_VACIO no pueden ocurrir con las comprobaciones activas, y file_project_es_nulo_KO solo puede ocurrir si hay tuplas ilegales (sin fichero, en contra de la definicion) en el back*/ 
        
    //project

    //atributo forzado a nulo en EDIT o DELETE
    'id_project_es_nulo_KO'             : 'An error has occurred,check field Project ID is not empty',
    
    //atributo forzado a nulo en ADD o EDIT
    'name_project_es_nulo_KO'           : 'An error has occurred,check field Project Name is not empty',
    'start_date_project_es_nulo_KO'     : 'An error has occurred,check field Start Date is not empty',
    'end_date_project_es_nulo_KO'       : 'An error has occurred,check field End Date is not empty',//NOTA, las fechas se envian con offsets, saltan errores no relacionados con la ET2 si se fuerza a enviar 1 solo caracter,pero se envia 
    'responsable_project_es_nulo_KO'    : 'An error has occurred,check field Responsable is not empty',//NOTA, las fechas se envian con offsets, saltan errores no relacionados con la ET2 si se fuerza a enviar 1 solo caracter,pero se envia 
    'organization_project_es_nulo_KO'   : 'An error has occurred,check field Organization is not empty',
    'description_project_es_nulo_KO'    : 'An error has occurred,check field Description is not empty',
    'code_project_es_nulo_KO'           : 'An error has occurred,check field Project Code is not empty ',
    'acronym_project_es_nulo_KO'        : 'An error has occurred,check field Project Acronym is not empty ',
    'id_sampling_methodology_es_nulo_KO': 'An error has occurred,check field Sampling Methodology ID is not empty ',

    //tipo incorrecto de fichero en ADD o EDIT
    'ERROR_UPLOAD_file_project_KO'      : 'An error has occurred,check New Project File is correct',
    
    /*
    A pesar del nombre, no es un error al forzar el atributo a nulo en ADD o EDIT, el back acepta ficheros nulos en ambas entidades.
    Este error ocurre al intentar editar una tupla de project que este guardada sin file_project
    */
    'file_project_es_nulo_KO'           : 'A critical error has occurred, the current data is not editable', 
   
    //analysis_preparation
   
    //atributo forzado a nulo en EDIT o DELETE
    'id_analysis_preparation_es_nulo_KO'            : 'An error has occurred,check field Analysis ID is not empty',

    //atributo forzado a nulo en ADD o EDIT
    'name_analysis_preparation_es_nulo_KO'          : 'An error has occurred,check field Analysis Name is not empty',
    'description_analysis_preparation_es_nulo_KO'   : 'An error has occurred,check field Description is not empty',
    'bib_analysis_preparation_es_nulo_KO'           : 'An error has occurred,check field Bibliography is not empty',
    
    //tipo incorrecto de fichero en ADD o EDIT
    'ERROR_UPLOAD_file_analysis_preparation_KO'     : 'An error has occurred,check New Analysis File is correct',
    
    //no se si existe este error, existe el equivalente en project pero no parece que exista para analysis_preparation, no salta en los testeos
    'file_analysis_preparation_es_nulo_KO'          : 'A critical error has occurred, the current data is not editable', 

    //characteristic
   
    //atributo forzado a nulo en EDIT o DELETE
    'id_characteristic_es_nulo_KO'          : 'An error has occurred,check field Characteristic ID is not empty',

    //atributo forzado a nulo en ADD o EDIT
    'name_characteristic_es_nulo_KO'        : 'An error has occurred,check field Name Characteristic is not empty',
    'description_characteristic_es_nulo_KO' : 'An error has occurred,check field Description is not empty',
    'bibref_characteristic_es_nulo_KO'      : 'An error has occurred,check field Bibliography is not empty',
    'data_type_characteristic_es_nulo_KO'   : 'An error has occurred,check field Data Type is not empty',
    'category_characteristic_es_nulo_KO'    : 'An error has occurred,check field Category is not empty',
    
    //tipo incorrecto de fichero en ADD o EDIT
    'ERROR_UPLOAD_file_characteristic_KO'   : 'An error has occurred,check New Characteristic File is correct',
    
    //no se si existe este error, existe el equivalente en project pero no parece que exista para characteristic, no salta en los testeos
    'file_characteristic_es_nulo_KO'        : 'A critical error has occurred, the current data is not editable', 



    /*OTROS*/

    //el administrador no te deja borrar la tupla
    "admin_no_te_lo_deja_borrar_KO":"An error has ocurred, the administrator did not give you the permissions to delete stuff",

    //no hay fichero, no deberia pasar
    "no_file_found"     : "file not found",

    //Fallo de SQL, posible forzarlo con datos validos: En description_project se acepta cualquier ascii, poner ' dara error ya que el back intenta hacer INSERT/UPDATE [....] description_project=''', fallando; tambien al insertar una fecha no valida
    'SQL_KO'            : 'An error has occurred, check your input is correct',
    
    //SEARCH no encuentra tuplas
    'RECORDSET_VACIO'   : 'No data found'
}