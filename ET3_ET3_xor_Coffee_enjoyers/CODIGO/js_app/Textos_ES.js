let textos_ES = {

    /*TITULOS*/


    //Idiomas
    "idiomaES" : "Español",
    "idiomaEN" : "Ingles",

    //textos titulos index
    'text_titulo_app'   : 'Interfaz ET2 IU',
    'text_titulo_menu'  : 'Menú',
    'text_titulo_pie'   : 'Pie de Página',

    //Opciones de menu
    'text_project'      : 'Proyecto',
    'text_analysis_prep': 'Preparacion Analisis',

    //textos titulos pagina entidades
    'text_titulo_page_project'              : 'Gestión de Proyecto',
    'text_titulo_page_analysis_preparation' : 'Gestión de Preparacion Analisis',

    //Titulos de forms project 
    'text_contenido_titulo_form_project_ADD'        : 'Formulario Alta Proyecto',
    'text_contenido_titulo_form_project_SEARCH'     : 'Formulario Busqueda Proyecto',
    'text_contenido_titulo_form_project_EDIT'       : 'Formulario Modificación Proyecto',
    'text_contenido_titulo_form_project_SHOWCURRENT': 'Formulario Muestra Proyecto',
    'text_contenido_titulo_form_project_DELETE'     : 'Formulario Borrado Proyecto',

    //Titulos de forms analysis_preparation
    'text_contenido_titulo_form_analysis_preparation_ADD'           : 'Formulario Alta Preparacion Analisis',
    'text_contenido_titulo_form_analysis_preparation_SEARCH'        : 'Formulario Busqueda Preparacion Analisis',
    'text_contenido_titulo_form_analysis_preparation_EDIT'          : 'Formulario Modificación Preparacion Analisis',
    'text_contenido_titulo_form_analysis_preparation_SHOWCURRENT'   : 'Formulario Muestra Preparacion Analisis',
    'text_contenido_titulo_form_analysis_preparation_DELETE'        : 'Formulario Borrado Preparacion Analisis',


    /*TRADUCCIONES PARA TEST*/ 


    //Titulos tablas
    'res_estructura_tests'  : 'Tabla de Verificacion de Definiciones de Test',
    'res_estructura_pruebas': 'Tabla de Verificacion de Definiciones de Pruebas',
    'res_pruebas'           : 'Tabla de Verificacion de Ejecución de Pruebas',

    //Textos de resultado de verificaciones
    'DefTest_OK'    : 'La estructura de todas las definiciones de test es correcta',
    'DefTest_KO'    : 'La estructura de todas las definiciones de test NO es correcta',
    'DefPrueba_OK'  : 'La estructura de todas las definiciones de pruebas es correcta',
    'DefPrueba_KO'  : 'La estructura de todas las definiciones de pruebas NO es correcta',
    'pruebas_OK'    : 'La ejecucion de todas las pruebas es correcta',
    'pruebas_KO'    : 'La ejecucion de todas las pruebas NO es correcta',    

    //Titulos de las tablas de tests
    'Entidad'           : 'Entidad',
    'NumDefTest'        : 'NumDefTest',
    'Datos'             : 'Datos',
    'NumPrueba'         : 'NumPrueba',
    'Campo'             : 'Campo',
    'Prueba'            : 'Prueba',
    'Accion'            : 'Accion',
    'Valor'             : 'Valor',
    'Respuesta Test'    : 'Respuesta Test',
    'Respuesta esperada': 'Respuesta esperada',
    'Resultado'         : 'Resultado',

    //Valores resultado tests
    'CORRECTO'  : 'CORRECTO',
    'CORRECTA'  : 'CORRECTA',
    'ERROR'     : 'ERROR',
    'INCORRECTO': 'INCORRECTO',
   

    /*ATRIBUTOS*/


    // atributos project
    'id_project'                : 'Identificador',
    'name_project'              : 'Nombre Proyecto',
    'start_date_project'        : 'Fecha de Inicio',
    'end_date_project'          : 'Fecha de Fin',
    'responsable_project'       : 'Responsable',
    'organization_project'      : 'Organizacion',
    'description_project'       : 'Descripcion',
    'file_project'              : 'Archivo Proyecto',
    'code_project'              : 'Codigo Proyecto',
    'acronym_project'           : 'Acronimo Proyecto',
    'id_sampling_methodology'   : 'Id Metodologia de Muestreo',

    //atributos analysis_preparation
    'id_analysis_preparation'           : 'Identificador',
    'name_analysis_preparation'         : 'Nombre Analisis',
    'description_analysis_preparation'  : 'Descripcion',
    'bib_analysis_preparation'          : 'Bibliografia',
    'file_analysis_preparation'         : 'Archivo Analisis',


    /*LABELS*/ //Tienen que ir despues de los atributos, si hay fors en los labels se traduce con los codigos de los id de inputs


    // labels project
    'label_id_project'              : 'Identificador',
    'label_name_project'            : 'Nombre Proyecto',
    'label_start_date_project'      : 'Fecha de Inicio',
    'label_end_date_project'        : 'Fecha de Fin',
    'label_responsable_project'     : 'Responsable',
    'label_organization_project'    : 'Organizacion',
    'label_description_project'     : 'Descripcion',
    'label_file_project'            : 'Archivo Proyecto',
    'label_code_project'            : 'Codigo Proyecto',
    'label_acronym_project'         : 'Acronimo Proyecto',
    'label_id_sampling_methodology' : 'Id Metodologia de Muestreo',
    'label_nuevo_file_project'      : 'Nuevo Archivo',
  
    //labels analysis_preparation
    'label_id_analysis_preparation'         : 'Identificador',
    'label_name_analysis_preparation'       : 'Nombre Analisis',
    'label_description_analysis_preparation': 'Descripcion',
    'label_bib_analysis_preparation'        : 'Bibliografia',
    'label_file_analysis_preparation'       : 'Archivo Analisis',
    'label_nuevo_file_analysis_preparation' : 'Nuevo Archivo',


    /*PLACEHOLDERS*/


    //Placeholders atributos project

    'PH_id_project'                 : '',
    'PH_name_project'               : '15-100 letras pudiendo incluir espacios',
    'PH_start_date_project'         : 'dd/mm/aaaa',
    'PH_end_date_project'           : 'dd/mm/aaaa',
    'PH_responsable_project'        : '6-60 letras pudiendo incluir ñ,acentos y espacios',
    'PH_organization_project'       : '6-100 letras pudiendo incluir ñ,acentos y espacios',
    'PH_description_project'        : '30-500 caracteres',
    'PH_file_project'               : '',
    'PH_code_project'               : '6-50 letras pudiendo incluir ñ,espacios y puntuacion',
    'PH_acronym_project'            : '6-15 letras pudiendo incluir ñ y puntuacion',
    'PH_id_sampling_methodology'    : '1-11 digitos',
    'PH_nuevo_file_project'         : 'Archivo .pdf, .doc o .docx de 2MB maximo; nombre de archivo 7-100 letras y puntos',
    
    //SEARCH
    'PH_id_project_SEARCH'                 : 'Hasta 11 digitos',
    'PH_name_project_SEARCH'               : 'Hasta 100 letras pudiendo incluir espacios',
    'PH_start_date_project_SEARCH'         : 'dd/mm/aaaa o subcadenas',
    'PH_end_date_project_SEARCH'           : 'dd/mm/aaaa o subcadenas',
    'PH_responsable_project_SEARCH'        : 'Hasta 60 letras pudiendo incluir ñ,acentos y espacios',
    'PH_organization_project_SEARCH'       : 'Hasta 100 letras pudiendo incluir ñ,acentos y espacios',
    'PH_description_project_SEARCH'        : 'Hasta 500 caracteres',
    'PH_file_project_SEARCH'               : 'Hasta 100 letras pudiendo incluir puntos (extension de archivo optativa)',
    'PH_code_project_SEARCH'               : 'Hasta 50 letras pudiendo incluir ñ,espacios y puntuacion',
    'PH_acronym_project_SEARCH'            : 'Hasta 15 letras pudiendo incluir ñ y puntuacion',
    'PH_id_sampling_methodology_SEARCH'    : 'Hasta 11 digitos',
   
    //Placeholders atributos analysis_preparation
    'PH_id_analysis_preparation'            : '',
    'PH_name_analysis_preparation'          : '8-100 letras pudiendo incluir espacios',
    'PH_description_analysis_preparation'   : '80-5000 letras pudiendo incluir espacios',
    'PH_bib_analysis_preparation'           : '6-200 letras pudiendo incluir ñ, acentos, espacios y puntuacion',
    'PH_file_analysis_preparation'          : '',
    'PH_nuevo_file_analysis_preparation'    : 'Archivo .pdf, .doc o .docx de 2MB maximo; nombre de archivo 7-100 letras y puntos',

    //SEARCH
    'PH_id_analysis_preparation_SEARCH'            : 'Hasta 11 digitos',
    'PH_name_analysis_preparation_SEARCH'          : 'Hasta 100 letras pudiendo incluir espacios',
    'PH_description_analysis_preparation_SEARCH'   : 'Hasta 5000 letras pudiendo incluir espacios',
    'PH_bib_analysis_preparation_SEARCH'           : 'Hasta 200 letras pudiendo incluir ñ, acentos, espacios y puntuacion',
    'PH_file_analysis_preparation_SEARCH'          : 'Hasta 100 letras pudiendo incluir puntos (extension de archivo optativa)',
   

    /*MENSAJES DE ERROR*/


    /*project*/ 

    //Mensajes de OK
    'project__id_project__OK'              : 'El Identificador es correcto',
    'project__name_project__OK'            : 'El Nombre Proyecto es correcto',
    'project__start_date_project__OK'      : 'La Fecha de Inicio es correcta',
    'project__end_date_project__OK'        : 'La Fecha de Fin es correcta',
    'project__responsable_project__OK'     : 'El Responsable es correcto',
    'project__organization_project__OK'    : 'La Organizacion es correcta',
    'project__description_project__OK'     : 'La Descripcion es correcta',
    'project__file_project__OK'            : 'El Archivo Proyecto es correcto',
    'project__code_project__OK'            : 'El Codigo Proyecto es correcto',
    'project__acronym_project__OK'         : 'El Acronimo Proyecto es correcto',
    'project__id_sampling_methodology__OK' : 'El Id Metodologia de Muestreo es correcto',
    'project__nuevo_file_project__OK'      : 'El Nuevo Archivo es correcto',

    //Mensajes de error

    //id_project
    'project__id_project__max_size_KO': 'El Identificador supera el tamaño permitido, debe tener como mucho longitud 11.',
    'project__id_project__format_KO'  : 'El Identificador no cumple el formato correcto, debe estar compuesto unicamente por digitos sin 0s a la izquierda.',

    //name_project
    'project__name_project__min_size_KO': 'El Nombre Proyecto es demasiado corto, debe tener al menos longitud 15.',
    'project__name_project__max_size_KO': 'El Nombre Proyecto supera el tamaño permitido, debe tener como mucho longitud 100.',
    'project__name_project__format_KO'  : 'El Nombre Proyecto no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.',

    //start_date_project
    'project__start_date_project__format_KO'  : 'El formato de la Fecha de Inicio es incorrecto, debe seguir un formato dd/mm/aaaa.',
    'project__start_date_project__valid_KO'   : 'El valor de la Fecha de Inicio es incorrecto, debe ser una fecha existente en el calendario gregoriano.',
    'project__start_date_project__superior_KO': 'La Fecha de Inicio no puede ser superior a la Fecha de Fin.',
    'project__start_date_project__format_SEARCH_KO': 'El formato de la Fecha de Inicio es incorrecto, debe ser al menos una parte de una fecha dd/mm/aaaa.',

    //end_date_project
    'project__end_date_project__format_KO'  : 'El formato de la Fecha de Fin es incorrecto, debe seguir un formato dd/mm/aaaa.',
    'project__end_date_project__valid_KO'   : 'El valor de la Fecha de Fin es incorrecto, debe ser una fecha existente en el calendario gregoriano.',
    'project__end_date_project__inferior_KO': 'La Fecha de Fin no puede ser inferior a la Fecha de Inicio',
    'project__end_date_project__format_SEARCH_KO': 'El formato de la Fecha de Fin del proyecto es incorrecto, debe ser al menos una parte de una fecha dd/mm/aaaa.',

    //responsable_project
    'project__responsable_project__min_size_KO': 'El Responsable es demasiado corto, debe tener al menos longitud 6.',
    'project__responsable_project__max_size_KO': 'El Responsable supera el tamaño permitido, debe tener como mucho longitud 60.',
    'project__responsable_project__format_KO'  : 'El Responsable no cumple el formato correcto, debe contener solo caracteres alfabéticos con acentos, ñ y espacios.',

    //organization_project
    'project__organization_project__min_size_KO': 'La Organizacion es demasiado corta, debe tener al menos longitud 6.',
    'project__organization_project__max_size_KO': 'La Organizacion supera el tamaño permitido, debe tener como mucho longitud 100.',
    'project__organization_project__format_KO'  : 'La Organizacion no cumple el formato correcto, debe contener solo caracteres alfabéticos con acentos, ñ y espacios.',

    //description_project
    'project__description_project__min_size_KO': 'La Descripcion es demasiado corta, debe tener al menos longitud 30.',
    'project__description_project__max_size_KO': 'La Descripcion supera el tamaño permitido, debe tener como mucho longitud 500.',
    'project__description_project__format_KO'  : 'La Descripcion tiene caracteres invalidos, use caracteres latinos de europa occidental.',//Prueba hecha para que acepte cualquier caracter 

    //code_project
    'project__code_project__min_size_KO': 'El Codigo Proyecto es demasiado corto, debe tener al menos longitud 6.',
    'project__code_project__max_size_KO': 'El Codigo Proyecto supera el tamaño permitido, debe tener como mucho longitud 50.',
    'project__code_project__format_KO'  : 'El Codigo Proyecto no cumple el formato correcto, debe contener solo caracteres alfabéticos con ñ, espacios y signos de puntuación, sin acentos.',

    //acronym_project
    'project__acronym_project__min_size_KO': 'El Acronimo Proyecto es demasiado corto, debe tener al menos longitud 6.',
    'project__acronym_project__max_size_KO': 'El Acronimo Proyecto supera el tamaño permitido, debe tener como mucho longitud 15.',
    'project__acronym_project__format_KO'  : 'El Acronimo Proyecto no cumple el formato correcto, debe contener solo caracteres alfabéticos con ñ y signos de puntuación, sin acentos ni espacios.',

    //id_sampling_methodology
    'project__id_sampling_methodology__min_size_KO': 'El Id Metodologia de Muestreo no puede estar vacio, debe tener al menos longitud 1.',
    'project__id_sampling_methodology__max_size_KO': 'El Id Metodologia de Muestreo supera el tamaño permitido, debe tener como mucho longitud 11.',
    'project__id_sampling_methodology__format_KO'  : 'El Id Metodologia de Muestreo no cumple el formato correcto, debe estar compuesto unicamente por digitos sin 0s a la izquierda.',

    //file_project
    'project__file_project__max_size_KO': 'El nombre del Archivo Proyecto supera el tamaño permitido, debe tener como mucho longitud 100.',
    'project__file_project__format_KO'  : 'El nombre del Archivo Proyecto no cumple el formato correcto, debe contener solo letras y puntos sin acentos ni ñ ni espacios ni signos de puntuacion.',

    //nuevo_file_project
    'project__nuevo_file_project__empty_KO'           : 'El Nuevo Archivo no puede estar vacio, debe enviarse un archivo',
    'project__nuevo_file_project__max_size_file_KO'   : 'El Nuevo Archivo supera el tamaño permitido, debe pesar menos de 2 MB.',
    'project__nuevo_file_project__type_file_KO'       : 'El Nuevo Archivo no es del tipo correcto, debe ser .pdf,.doc o .docx',
    'project__nuevo_file_project__format_name_file_KO': 'El nombre del Nuevo Archivo no cumple el formato correcto, debe contener solo letras y puntos sin acentos ni ñ ni espacios ni signos de puntuacion.',
    'project__nuevo_file_project__min_size_KO'        : 'El nombre del Nuevo Archivo es demasiado corto, debe tener al menos longitud 7.',
    'project__nuevo_file_project__max_size_KO'        : 'El nombre del Nuevo Archivo supera el tamaño permitido, debe tener como mucho longitud 100.',

    
    /*analysis_preparation*/ 

    //Mensajes de OK
    'analysis_preparation__id_analysis_preparation__OK'             : 'El Identificador es correcto',
    'analysis_preparation__name_analysis_preparation__OK'           : 'El Nombre Analisis es correcto',
    'analysis_preparation__description_analysis_preparation__OK'    : 'La Descripcion es correcta',
    'analysis_preparation__file_analysis_preparation__OK'           : 'El Archivo Analisis es correcto',
    'analysis_preparation__bib_analysis_preparation__OK'            : 'La Bibliografia es correcta',
    'analysis_preparation__nuevo_file_analysis_preparation__OK'     : 'El Nuevo Archivo es correcto',

    //Mensajes de error
    
    //id_analysis_preparation
    'analysis_preparation__id_analysis_preparation__max_size_KO': 'El Identificador supera el tamaño permitido, debe tener como mucho longitud 11.',
    'analysis_preparation__id_analysis_preparation__format_KO'  : 'El Identificador no cumple el formato correcto, debe estar compuesto unicamente por digitos sin 0s a la izquierda.',

    //name_analysis_preparation
    'analysis_preparation__name_analysis_preparation__min_size_KO': 'El Nombre Analisis es demasiado corto, debe tener al menos longitud 8.',
    'analysis_preparation__name_analysis_preparation__max_size_KO': 'El Nombre Analisis supera el tamaño permitido, debe tener como mucho longitud 100.',
    'analysis_preparation__name_analysis_preparation__format_KO'  : 'El Nombre Analisis no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.',

    //description_analysis_preparation
    'analysis_preparation__description_analysis_preparation__min_size_KO': 'La Descripcion es demasiado corta, debe tener al menos longitud 80.',
    'analysis_preparation__description_analysis_preparation__max_size_KO': 'La Descripcion supera el tamaño permitido, debe tener como mucho longitud 5000.',
    'analysis_preparation__description_analysis_preparation__format_KO'  : 'La Descripcion no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.',

    //bib_analysis_preparation
    'analysis_preparation__bib_analysis_preparation__min_size_KO': 'La Bibliografia es demasiado corta, debe tener al menos longitud 6.',
    'analysis_preparation__bib_analysis_preparation__max_size_KO': 'La Bibliografia supera el tamaño permitido, debe tener como mucho longitud 200.',
    'analysis_preparation__bib_analysis_preparation__format_KO'  : 'La Bibliografia no cumple el formato correcto, debe contener solo caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación.',
    
    //file_analysis_preparation
    'analysis_preparation__file_analysis_preparation__max_size_KO':'El nombre del Archivo Analisis supera el tamaño permitido, debe tener como mucho longitud 100.',
    'analysis_preparation__file_analysis_preparation__format_KO'  :'El nombre del Archivo Analisis no cumple el formato correcto, debe contener solo letras y puntos sin acentos ni ñ ni espacios ni signos de puntuacion.',

    //nuevo_file_analysis_preparation
    'analysis_preparation__nuevo_file_analysis_preparation__empty_KO'           : 'El Nuevo Archivo no puede estar vacio, debe enviarse un archivo',
    'analysis_preparation__nuevo_file_analysis_preparation__max_size_file_KO'   : 'El Nuevo Archivo supera el tamaño permitido, debe pesar menos de 2 MB.',
    'analysis_preparation__nuevo_file_analysis_preparation__type_file_KO'       : 'El Nuevo Archivo no es del tipo correcto, debe ser .pdf,.doc o .docx',
    'analysis_preparation__nuevo_file_analysis_preparation__format_name_file_KO': 'El nombre del Nuevo Archivo no cumple el formato correcto, debe contener solo letras y puntos sin acentos ni ñ ni espacios ni signos de puntuacion.',
    'analysis_preparation__nuevo_file_analysis_preparation__min_size_KO'        : 'El nombre del Nuevo Archivo es demasiado corto, debe tener al menos longitud 7.',
    'analysis_preparation__nuevo_file_analysis_preparation__max_size_KO'        : 'El nombre del Nuevo Archivo supera el tamaño permitido, debe tener como mucho longitud 100.',
    
    
    /*MENSAJES DE ERROR DEL BACK*/
    /*Todos menos file_project_es_nulo_KO, SQL_KO y RECORDSET_VACIO no pueden ocurrir con las comprobaciones activas, y file_project_es_nulo_KO solo puede ocurrir si hay tuplas ilegales (sin fichero, en contra de la definicion) en el back*/ 
        
    //project

    //atributo forzado a nulo en EDIT o DELETE
    'id_project_es_nulo_KO'             : 'Se ha producido un error grave,asegurese de que el campo Identificador no este vacio',
    
    //atributo forzado a nulo en ADD o EDIT
    'name_project_es_nulo_KO'           : 'Se ha producido un error grave,asegurese de que el campo Nombre Proyecto no este vacio',
    'start_date_project_es_nulo_KO'     : 'Se ha producido un error grave,asegurese de que el campo Fecha de Inicio no este vacio',
    'end_date_project_es_nulo_KO'       : 'Se ha producido un error grave,asegurese de que el campo Fecha de Fin no este vacio',//NOTA, las fechas se envian con offsets, saltan errores no relacionados con la ET2 si se fuerza a enviar 1 solo caracter,pero se envia 
    'responsable_project_es_nulo_KO'    : 'Se ha producido un error grave,asegurese de que el campo Responsable no este vacio',//NOTA, las fechas se envian con offsets, saltan errores no relacionados con la ET2 si se fuerza a enviar 1 solo caracter,pero se envia 
    'organization_project_es_nulo_KO'   : 'Se ha producido un error grave,asegurese de que el campo Organizacion no este vacio',
    'description_project_es_nulo_KO'    : 'Se ha producido un error grave,asegurese de que el campo Descripcion no este vacio',
    'code_project_es_nulo_KO'           : 'Se ha producido un error grave,asegurese de que el campo Codigo Proyecto no este vacio',
    'acronym_project_es_nulo_KO'        : 'Se ha producido un error grave,asegurese de que el campo Acronimo Proyecto no este vacio',
    'id_sampling_methodology_es_nulo_KO': 'Se ha producido un error grave,asegurese de que el campo Id Metodologia de Muestreo no este vacio',

    //tipo incorrecto de fichero en ADD o EDIT
    'ERROR_UPLOAD_file_project_KO'      : 'Se ha producido un error grave,asegurese de que el archivo subido sea del tipo correcto (.pdf,.doc o .docx)',
    
    /*
    A pesar del nombre, no es un error al forzar el atributo a nulo en ADD o EDIT, el back acepta ficheros nulos en ambas entidades.
    Este error ocurre al intentar editar una tupla de project que este guardada sin file_project
    */
    'file_project_es_nulo_KO'           : 'Se ha producido un error critico, los datos que intenta editar no son editables', 
   
    //analysis_preparation
   
    //atributo forzado a nulo en EDIT o DELETE
    'id_analysis_preparation_es_nulo_KO'            : 'Se ha producido un error grave,asegurese de que el campo Identificador no este vacio',

    //atributo forzado a nulo en ADD o EDIT
    'name_analysis_preparation_es_nulo_KO'          : 'Se ha producido un error grave,asegurese de que el campo Nombre Analisis no este vacio',
    'description_analysis_preparation_es_nulo_KO'   : 'Se ha producido un error grave,asegurese de que el campo Descripcion no este vacio',
    'bib_analysis_preparation_es_nulo_KO'           : 'Se ha producido un error grave,asegurese de que el campo Bibliografia no este vacio',
    
    //tipo incorrecto de fichero en ADD o EDIT
    'ERROR_UPLOAD_file_analysis_preparation_KO'     : 'Se ha producido un error grave,asegurese de que el archivo subido sea del tipo correcto (.pdf,.doc o .docx)',
    
    //no se si existe este error, existe el equivalente en project pero no parece que exista para analysis_preparation, no salta en los testeos
    'file_analysis_preparation_es_nulo_KO'          : 'Se ha producido un error critico, los datos que intenta editar no son editables', 


    /*OTROS*/

    //no hay fichero, no deberia pasar
    "no_file_found":"no hay fichero",

    //Fallo de SQL, posible forzarlo con datos validos: En description_project se acepta cualquier ascii, poner ' dara error ya que el back intenta hacer INSERT/UPDATE [....] description_project=''', fallando; tambien al insertar una fecha no valida
    'SQL_KO'            : 'Se ha producido un error, revise que los datos son correctos',
    
    //SEARCH no encuentra tuplas
    'RECORDSET_VACIO'   : 'No se han encontrado datos'
}