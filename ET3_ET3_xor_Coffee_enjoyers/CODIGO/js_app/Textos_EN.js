let textos_EN = {
    
    /*TITULOS*/


    //Idiomas
    "idiomaES" : "Spanish",
    "idiomaEN" : "English",

    //Textos datos generales
    'Nombre Grupo'        : 'Group Name',
    'Entrega'             : 'Assignment',
    'Horas Totales'       : 'Total Hours',
    'Nombre Integrante'   : 'Member Name',
    'Horas'               : 'Hours Worked',

    //textos titulos index
    'text_titulo_app'   : 'IU ET3 Interface',
    'text_titulo_menu'  : 'Menu',
    'text_titulo_pie'   : 'Footer',

    //Opciones de menu
    'text_project'       : 'Project',
    'text_analysis_prep' : 'Analysis Preparation',
    'text_characteristic': 'Characteristic',

    //textos titulos pagina entidades
    'text_titulo_page_project'              : 'Project Management',
    'text_titulo_page_analysis_preparation' : 'Analysis Preparation Management',

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
    'project__id_project__format_KO'  : 'Project ID has invalid format, must have only digits with no leading 0s.',

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
    'project__id_sampling_methodology__format_KO'  : 'Sampling Methodology ID has invalid format, must have only digits with no leading 0s.',

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
    'analysis_preparation__id_analysis_preparation__format_KO'  : 'Analysis ID has invalid format, must have only digits with no leading 0s.',
    
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


    /*OTROS*/

    //no hay fichero, no deberia pasar
    "no_file_found"     : "file not found",

    //Fallo de SQL, posible forzarlo con datos validos: En description_project se acepta cualquier ascii, poner ' dara error ya que el back intenta hacer INSERT/UPDATE [....] description_project=''', fallando; tambien al insertar una fecha no valida
    'SQL_KO'            : 'An error has occurred, check your input is correct',
    
    //SEARCH no encuentra tuplas
    'RECORDSET_VACIO'   : 'No data found'
}