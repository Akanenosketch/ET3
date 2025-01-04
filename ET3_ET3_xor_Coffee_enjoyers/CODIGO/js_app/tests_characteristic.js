let def_tests_characteristic = Array(
    //Formato test:Array(Entidad,Campo,Numero Test,Descripcion, Accion, Resultado esperado(CodError/true), Mensaje Respuesta)
    //codigo respuesta = entidad__campo__tipoTest_resultado


    //Campo = `id_characteristic` int(11) NOT NULL AUTOINCREMENT, dígitos min 1 max 11
    //Autoincrementable = no se va a comprobar en el add, se comprobara en el edit aunque no hace falta ya que el usuario no puede modificar salvo mediante consola el valor (que ya deberia ser correcto) y se comprobara en el search

    //SEARCH
    Array("characteristic", "id_characteristic", 1, "Cumple tamaño maximo 11",              "SEARCH", "characteristic__id_characteristic__max_size_KO", 'El Identificador supera el tamaño permitido, debe tener como mucho longitud 11.'),
    Array("characteristic", "id_characteristic", 2, "Cumple tener solo digitos",            "SEARCH", "characteristic__id_characteristic__format_KO",   'El Identificador no cumple el formato correcto, debe estar compuesto unicamente por digitos sin 0s a la izquierda.'),
    Array("characteristic", "id_characteristic", 3, "Cumple todo (tener hasta 11 digitos)", "SEARCH", true,                                             'El Identificador es correcto'),


    //Campo = `name_characteristic` varchar(100) NOT NULL,  alfabéticos y espacios sin acentos ni ñ, min 8 max 100

    //ADD
    Array("characteristic", "name_characteristic", 4, "Cumple tamaño minimo 8",                                                                "ADD", 'characteristic__name_characteristic__min_size_KO',       'El nombre de caracteristica es demasiado corto, debe tener al menos longitud 8.'),
    Array("characteristic", "name_characteristic", 5, "Cumple tamaño maximo 100",                                                              "ADD", 'characteristic__name_characteristic__max_size_KO',       'El nombre de caracteristica supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("characteristic", "name_characteristic", 6, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ",                 "ADD", 'characteristic__name_characteristic__format_KO',         'El nombre de caracteristica no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
    Array("characteristic", "name_characteristic", 7, "Cumple todo (tener entre 8 y 100 caracteres alfabeticos y espacios sin acentos ni ñ)",  "ADD", true,                                                     'El nombre de caracteristica es correcto'),

    //EDIT
    Array("characteristic", "name_characteristic", 8, "Cumple tamaño minimo 8",                                                                 "EDIT", 'characteristic__name_characteristic__min_size_KO',     'El nombre de caracteristica es demasiado corto, debe tener al menos longitud 8.'),
    Array("characteristic", "name_characteristic", 9, "Cumple tamaño maximo 100",                                                               "EDIT", 'characteristic__name_characteristic__max_size_KO',     'El nombre de caracteristica supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("characteristic", "name_characteristic", 10, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ",                 "EDIT", 'characteristic__name_characteristic__format_KO',       'El nombre de caracteristica no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
    Array("characteristic", "name_characteristic", 11, "Cumple todo (tener entre 8 y 100 caracteres alfabeticos y espacios sin acentos ni ñ)",  "EDIT", true,                                                   'El nombre de caracteristica es correcto'),

    //SEARCH
    Array("characteristic", "name_characteristic", 12, "Cumple tamaño maximo 100",                                                              "SEARCH", 'characteristic__name_characteristic__max_size_KO',   'El nombre de caracteristica supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("characteristic", "name_characteristic", 13, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ",                 "SEARCH", 'characteristic__name_characteristic__format_KO',     'El nombre de caracteristica no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
    Array("characteristic", "name_characteristic", 14, "Cumple todo (tener hasta 100 caracteres alfabeticos y espacios sin acentos ni ñ)",      "SEARCH", true,                                                 'El nombre de caracteristica es correcto'),


    //Campo = `description_characteristic` varchar(5000) NOT NULL,  alfabéticos y espacios sin acentos ni ñ, min 80 max 5000

    //ADD
    Array("characteristic", "description_characteristic", 15, "Cumple tamaño minimo 80",                                                                "ADD", 'characteristic__description_characteristic__min_size_KO',       'La descripción caracteristica es demasiado corto, debe tener al menos longitud 8.'),
    Array("characteristic", "description_characteristic", 16, "Cumple tamaño maximo 5000",                                                              "ADD", 'characteristic__description_characteristic__max_size_KO',       'La descripción caracteristica supera el tamaño permitido, debe tener como mucho longitud 5000.'),
    Array("characteristic", "description_characteristic", 17, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ",                  "ADD", 'characteristic__description_characteristic__format_KO',         'La descripción caracteristica no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
    Array("characteristic", "description_characteristic", 18, "Cumple todo (tener entre 80 y 5000 caracteres alfabeticos y espacios sin acentos ni ñ)", "ADD", true,                                                            'La descripción caracteristica es correcto'),

    //EDIT
    Array("characteristic", "description_characteristic", 19, "Cumple tamaño minimo 80",                                                                "EDIT", 'characteristic__description_characteristic__min_size_KO',      'La descripción caracteristica es demasiado corto, debe tener al menos longitud 8.'),
    Array("characteristic", "description_characteristic", 20, "Cumple tamaño maximo 5000",                                                              "EDIT", 'characteristic__description_characteristic__max_size_KO',      'La descripción caracteristica supera el tamaño permitido, debe tener como mucho longitud 5000.'),
    Array("characteristic", "description_characteristic", 21, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ",                  "EDIT", 'characteristic__description_characteristic__format_KO',        'La descripción caracteristica no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
    Array("characteristic", "description_characteristic", 22, "Cumple todo (tener entre 80 y 5000 caracteres alfabeticos y espacios sin acentos ni ñ)", "EDIT", true,                                                           'La descripción caracteristica es correcto'),

    //SEARCH
    Array("characteristic", "description_characteristic", 23, "Cumple tamaño maximo 5000",                                                              "SEARCH", 'characteristic__description_characteristic__max_size_KO',    'La descripción caracteristica supera el tamaño permitido, debe tener como mucho longitud 5000.'),
    Array("characteristic", "description_characteristic", 24, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ",                  "SEARCH", 'characteristic__description_characteristic__format_KO',      'La descripción caracteristica no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
    Array("characteristic", "description_characteristic", 25, "Cumple todo (tener hasta 5000 caracteres alfabeticos y espacios sin acentos ni ñ)",      "SEARCH", true,                                                         'La descripción caracteristica es correcto'),

    //Campo = `data_type_characteristic` enum('number','text','set') NOT NULL
   
    //ADD
    Array("characteristic", "data_type_characteristic", 26, "Parametro valido",                     "ADD",      'characteristic__data_type_characteristic__valid_KO',       'El tipo de la caracteristica no esta permitido.'),
    Array("characteristic", "data_type_characteristic", 27, "Cumple todo (Parametro valido)",       "ADD",      true,                                                       'El tipo de la caracteristica es correcto'),

    //EDIT
    Array("characteristic", "data_type_characteristic", 28, "Parametro valido",                     "EDIT",     'characteristic__data_type_characteristic__valid_KO',      'El tipo de la caracteristica no esta permitido'),
    Array("characteristic", "data_type_characteristic", 29, "Cumple todo (Parametro valido)",       "EDIT",     true,                                                      'El tipo de la caracteristica es correcto'),

    //SEARCH
    Array("characteristic", "data_type_characteristic", 30, "Parametro valido",                     "SEARCH",   'characteristic__data_type_characteristic__valid_KO',       'El tipo de la caracteristica no esta permitido'),
    Array("characteristic", "data_type_characteristic", 31, "Cumple todo (Parametro valido)",       "SEARCH",   true,                                                       'El tipo de la caracteristica es correcto'),

     //Campo = `category_characteristic` enum('soil_site','soil_chem','soil_bio') NOT NULL
   
    //ADD
    Array("characteristic", "category_characteristic", 32, "Parametro valido",                     "ADD",      'characteristic__category_characteristic__valid_KO',        'La categoria de la caracteristica no esta permitido.'),
    Array("characteristic", "category_characteristic", 33, "Cumple todo (Parametro valido)",       "ADD",      true,                                                       'La categoria de la caracteristica es correcto'),

    //EDIT
    Array("characteristic", "category_characteristic", 34, "Parametro valido",                     "EDIT",     'characteristic__category_characteristic__valid_KO',       'La categoria de la caracteristica no esta permitido'),
    Array("characteristic", "category_characteristic", 35, "Cumple todo (Parametro valido)",       "EDIT",     true,                                                      'La categoria de la caracteristica es correcto'),

    //SEARCH
    Array("characteristic", "category_characteristic", 36, "Parametro valido",                     "SEARCH",   'characteristic__category_characteristic__valid_KO',        'La categoria de la caracteristica no esta permitido'),
    Array("characteristic", "category_characteristic", 37, "Cumple todo (Parametro valido)",       "SEARCH",   true,                                                       'La categoria de la caracteristica es correcto'),

    //Campo = `bibref_characteristic` varchar(200) NOT NULL,  alfabéticos con acentos, ñ, espacios y signos de puntuación, min 16 max 200
   
   //ADD
   Array("characteristic", "bibref_characteristic", 38, "Cumple tamaño minimo 16",                                                               "ADD", 'characteristic__bibref_characteristic__min_size_KO',       'La referencia bibliografica de la caracteristica es demasiado corto, debe tener al menos longitud 16.'),
   Array("characteristic", "bibref_characteristic", 39, "Cumple tamaño maximo 200",                                                              "ADD", 'characteristic__bibref_characteristic__max_size_KO',       'La referencia bibliografica de la caracteristica supera el tamaño permitido, debe tener como mucho longitud 200.'),
   Array("characteristic", "bibref_characteristic", 40, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ",                 "ADD", 'characteristic__bibref_characteristic__format_KO',         'La referencia bibliografica de la caracteristica no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
   Array("characteristic", "bibref_characteristic", 41, "Cumple todo (tener entre 16 y 200 caracteres alfabeticos y espacios sin acentos ni ñ)", "ADD", true,                                                       'La referencia bibliografica de la caracteristica es correcto'),

   //EDI
   Array("characteristic", "bibref_characteristic", 42, "Cumple tamaño minimo 16",                                                               "EDIT", 'characteristic__bibref_characteristic__min_size_KO',      'La referencia bibliografica de la caracteristica es demasiado corto, debe tener al menos longitud 16.'),
   Array("characteristic", "bibref_characteristic", 43, "Cumple tamaño maximo 200",                                                              "EDIT", 'characteristic__bibref_characteristic__max_size_KO',      'La referencia bibliografica de la caracteristica supera el tamaño permitido, debe tener como mucho longitud 200.'),
   Array("characteristic", "bibref_characteristic", 44, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ",                 "EDIT", 'characteristic__bibref_characteristic__format_KO',        'La referencia bibliografica de la caracteristica no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
   Array("characteristic", "bibref_characteristic", 45, "Cumple todo (tener entre 16 y 200 caracteres alfabeticos y espacios sin acentos ni ñ)", "EDIT", true,                                                      'La referencia bibliografica de la caracteristica es correcto'),
   //SEARCH
   Array("characteristic", "bibref_characteristic", 46, "Cumple tamaño maximo 200",                                                              "SEARCH", 'characteristic__bibref_characteristic__max_size_KO',    'La referencia bibliografica de la caracteristica supera el tamaño permitido, debe tener como mucho longitud 200.'),
   Array("characteristic", "bibref_characteristic", 47, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ",                 "SEARCH", 'characteristic__bibref_characteristic__format_KO',      'La referencia bibliografica de la caracteristica no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
   Array("characteristic", "bibref_characteristic", 48, "Cumple todo (tener hasta 200 caracteres alfabeticos y espacios sin acentos ni ñ)",      "SEARCH", true,                                                    'La referencia bibliografica de la caracteristica es correcto'),

    //Campo = `file_characteristic` varchar(100) NOT NULL,  alfabéticos sin acentos ni ñ ni espacios min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 2000000 bytes.
    //No se lee en el ADD, readonly en EDIT
 
    //SEARCH
    Array("characteristic", "file_characteristic", 49, "Cumple tamaño de nombre maximo 100",                                                     "SEARCH", 'characteristic__file_characteristic__max_size_KO',  'El nombre del archivo de la caracteristica supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("characteristic", "file_characteristic", 50, "Cumple tener solo caracteres alfabeticos y puntos sin acentos,ñ o espacios",             "SEARCH", 'characteristic__file_characteristic__format_KO',    'El nombre del archivo de la caracteristica no cumple el formato correcto, debe contener solo letras y puntos sin acentos ni ñ ni espacios ni signos de puntuacion.'),
    Array("characteristic", "file_characteristic", 51, "Cumple todo (tener hasta 100 caracteres alfabeticos y puntos sin acentos,ñ o espacios)", "SEARCH", true,                                                'El archivo de la caracteristica es correcto'),


    //Campo = `nuevo_file_characteristic` varchar(100) NOT NULL,  alfabéticos sin acentos ni ñ ni espacios min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 2000000 bytes.
    //No se lee en el SEARCH

    //ADD
    Array("characteristic", "nuevo_file_characteristic", 52, "Cumple no ser un fichero vacio",                                                       "ADD", 'characteristic__nuevo_file_characteristic__empty_KO',            'El Nuevo Archivo no puede estar vacio, debe enviarse un archivo'),
    Array("characteristic", "nuevo_file_characteristic", 53, "Cumple tamaño de fichero menor a 2000000 Bytes (2 MB)",                                "ADD", 'characteristic__nuevo_file_characteristic__max_size_file_KO',    'El Nuevo Archivo supera el tamaño permitido, debe pesar menos de 2 MB.'),
    Array("characteristic", "nuevo_file_characteristic", 54, "Cumple tipo correcto de fichero (.pdf, .doc, .docx)",                                  "ADD", 'characteristic__nuevo_file_characteristic__type_file_KO',        'El Nuevo Archivo no es del tipo correcto, debe ser .pdf,.doc o .docx'),
    Array("characteristic", "nuevo_file_characteristic", 55, "Cumple tener solo caracteres alfabeticos y puntos sin acentos,ñ o espacios de nombre", "ADD", 'characteristic__nuevo_file_characteristic__format_name_file_KO', 'El nombre del Nuevo Archivo no cumple el formato correcto, debe contener solo letras y puntos sin acentos ni ñ ni espacios ni signos de puntuacion.'),
    Array("characteristic", "nuevo_file_characteristic", 56, "Cumple tamaño de nombre minimo 7",                                                     "ADD", 'characteristic__nuevo_file_characteristic__min_size_KO',         'El nombre del Nuevo Archivo es demasiado corto, debe tener al menos longitud 7.'),
    Array("characteristic", "nuevo_file_characteristic", 57, "Cumple tamaño de nombre maximo 100",                                                   "ADD", 'characteristic__nuevo_file_characteristic__max_size_KO',         'El nombre del Nuevo Archivo supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("characteristic", "nuevo_file_characteristic", 58, "Cumple todo",                                                                          "ADD", true,                                                             'El Nuevo Archivo es correcto'),


    //EDIT
    Array("characteristic", "nuevo_file_characteristic", 59, "Cumple tamaño de fichero menor a 2000000 Bytes (2 MB)",                                "EDIT", 'characteristic__nuevo_file_characteristic__max_size_file_KO',    'El Nuevo Archivo supera el tamaño permitido, debe pesar menos de 2 MB.'),
    Array("characteristic", "nuevo_file_characteristic", 59, "Cumple tipo correcto de fichero (.pdf, .doc, .docx)",                                  "EDIT", 'characteristic__nuevo_file_characteristic__type_file_KO',        'El Nuevo Archivo no es del tipo correcto, debe ser .pdf,.doc o .docx'),
    Array("characteristic", "nuevo_file_characteristic", 60, "Cumple tener solo caracteres alfabeticos y puntos sin acentos,ñ o espacios de nombre", "EDIT", 'characteristic__nuevo_file_characteristic__format_name_file_KO', 'El nombre del Nuevo Archivo no cumple el formato correcto, debe contener solo letras y puntos sin acentos ni ñ ni espacios ni signos de puntuacion.'),
    Array("characteristic", "nuevo_file_characteristic", 61, "Cumple tamaño de nombre minimo 7",                                                     "EDIT", 'characteristic__nuevo_file_characteristic__min_size_KO',         'El nombre del Nuevo Archivo es demasiado corto, debe tener al menos longitud 7.'),
    Array("characteristic", "nuevo_file_characteristic", 62, "Cumple tamaño de nombre maximo 100",                                                   "EDIT", 'characteristic__nuevo_file_characteristic__max_size_KO',         'El nombre del Nuevo Archivo supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("characteristic", "nuevo_file_characteristic", 63, "Cumple todo",                                                                          "EDIT", true,                                                             'El Nuevo Archivo es correcto'),
    Array("characteristic", "nuevo_file_characteristic", 64, "Cumple ser un fichero vacio",                                                          "EDIT", true,                                                             'El Nuevo Archivo es correcto'),

);

let pruebas_characteristic = Array(
    
    //Formato test:Array(Entidad,Campo,Numero Test,Numero Prueba, Accion,Valor, Mensaje Respuesta)
    //Campo = `id_analysis_preparation` int(11) NOT NULL AUTOINCREMENT, dígitos min 1 max 11
    //Autoincrementable = no se va a comprobar en el add, se comprobara en el edit aunque no hace falta ya que el usuario no puede modificar salvo mediante consola el valor (que ya deberia ser correcto) y se comprobara en el search

    //SEARCH
    Array("characteristic", "id_characteristic", 1, 1, "SEARCH", "2".repeat(12), "characteristic__id_characteristic__max_size_KO"),
    Array("characteristic", "id_characteristic", 1, 2, "SEARCH", "2".repeat(13), "characteristic__id_characteristic__max_size_KO"),
   
    Array("characteristic", "id_characteristic", 2, 3, "SEARCH", "texto",        "characteristic__id_characteristic__format_KO"),
    Array("characteristic", "id_characteristic", 2, 4, "SEARCH", "9/11",         "characteristic__id_characteristic__format_KO"),
    Array("characteristic", "id_characteristic", 2, 5, "SEARCH", "11S",          "characteristic__id_characteristic__format_KO"),
    
    Array("characteristic", "id_characteristic", 3, 9,  "SEARCH", "2".repeat(1),  true),
    Array("characteristic", "id_characteristic", 3, 10, "SEARCH", "2".repeat(11), true),
    Array("characteristic", "id_characteristic", 3, 11, "SEARCH", "4514",         true),

    //Campo = `name_analysis_preparation` varchar(100) NOT NULL UNIQUE,  alfabéticos y espacios sin acentos ni ñ, min 8 max 100

    //ADD
    Array("characteristic", "name_characteristic", 4, 13, "ADD", "a".repeat(3),                     "characteristic__name_characteristic__min_size_KO"),
    Array("characteristic", "name_characteristic", 4, 15, "ADD", "",                                "characteristic__name_characteristic__min_size_KO"),

    Array("characteristic", "name_characteristic", 5, 16, "ADD", "a".repeat(101),                   "characteristic__name_characteristic__max_size_KO"),
    Array("characteristic", "name_characteristic", 5, 17, "ADD", "a".repeat(102),                   "characteristic__name_characteristic__max_size_KO"),

    Array("characteristic", "name_characteristic", 6, 18, "ADD", "Análisis".repeat(2),              "characteristic__name_characteristic__format_KO"),
    Array("characteristic", "name_characteristic", 6, 19, "ADD", "Analisis Datos A Coruña",         "characteristic__name_characteristic__format_KO"),
    Array("characteristic", "name_characteristic", 6, 21, "ADD", "Analisis.".repeat(2),             "characteristic__name_characteristic__format_KO"),

    Array("characteristic", "name_characteristic", 7, 22, "ADD", "a".repeat(16),                    true),
    Array("characteristic", "name_characteristic", 7, 26, "ADD", "Analisis Aguas Fecales Ourense",  true),
    Array("characteristic", "name_characteristic", 7, 27, "ADD", "Analisis Calificaciones",         true),

    //EDIT
    Array("characteristic", "name_characteristic", 8, 28, "EDIT", "a".repeat(3),                    "characteristic__name_characteristic__min_size_KO"),
    Array("characteristic", "name_characteristic", 8, 30, "EDIT", "",                               "characteristic__name_characteristic__min_size_KO"),

    Array("characteristic", "name_characteristic", 9, 31, "EDIT", "a".repeat(101),                  "characteristic__name_characteristic__max_size_KO"),
    Array("characteristic", "name_characteristic", 9, 32, "EDIT", "a".repeat(102),                  "characteristic__name_characteristic__max_size_KO"),

    Array("characteristic", "name_characteristic", 10, 33, "EDIT", "Análisis".repeat(2),            "characteristic__name_characteristic__format_KO"),
    Array("characteristic", "name_characteristic", 10, 34, "EDIT", "Analisis Datos A Coruña",       "characteristic__name_characteristic__format_KO"),
    Array("characteristic", "name_characteristic", 10, 36, "EDIT", "Analisis.".repeat(2),           "characteristic__name_characteristic__format_KO"),

    Array("characteristic", "name_characteristic", 11, 37, "EDIT", "a".repeat(16),                   true),
    Array("characteristic", "name_characteristic", 11, 41, "EDIT", "Analisis Aguas Fecales Ourense", true),
    Array("characteristic", "name_characteristic", 11, 42, "EDIT", "Analisis Calificaciones",        true),
    

    //SEARCH  
    Array("characteristic", "name_characteristic", 12, 43, "SEARCH", "a".repeat(101), "characteristic__name_characteristic__max_size_KO"),
    Array("characteristic", "name_characteristic", 12, 44, "SEARCH", "a".repeat(102), "characteristic__name_characteristic__max_size_KO"),

    Array("characteristic", "name_characteristic", 13, 45, "SEARCH", "Análisis".repeat(2),      "characteristic__name_characteristic__format_KO"),
    Array("characteristic", "name_characteristic", 13, 46, "SEARCH", "Analisis Datos A Coruña", "characteristic__name_characteristic__format_KO"),
    Array("characteristic", "name_characteristic", 13, 48, "SEARCH", "Analisis.".repeat(2),     "characteristic__name_characteristic__format_KO"),

    Array("characteristic", "name_characteristic", 14, 49, "SEARCH", "a".repeat(1),                    true),
    Array("characteristic", "name_characteristic", 14, 53, "SEARCH", "Analisis Aguas Fecales Ourense", true),
    Array("characteristic", "name_characteristic", 14, 55, "SEARCH", "Analisis Calificaciones",                               true),


    //Campo = `description_analysis_preparation` varchar(5000) NOT NULL,  alfabéticos y espacios sin acentos ni ñ, min 80 max 5000

    //ADD
    Array("characteristic", "description_characteristic", 15, 56, "ADD", "a".repeat(29), "characteristic__description_characteristic__min_size_KO"),
    Array("characteristic", "description_characteristic", 15, 57, "ADD", "a".repeat(20), "characteristic__description_characteristic__min_size_KO"),
    Array("characteristic", "description_characteristic", 15, 58, "ADD", "",             "characteristic__description_characteristic__min_size_KO"),

    Array("characteristic", "description_characteristic", 16, 59, "ADD", "a".repeat(5001), "characteristic__description_characteristic__max_size_KO"),
    Array("characteristic", "description_characteristic", 16, 60, "ADD", "a".repeat(5002), "characteristic__description_characteristic__max_size_KO"),

    Array("characteristic", "description_characteristic", 17, 61, "ADD", "123456".repeat(100),                 "characteristic__code_characteristic__format_KO"),
    Array("characteristic", "description_characteristic", 17, 62, "ADD", "Ñaco".repeat(100), "characteristic__code_characteristic__format_KO"),
    Array("characteristic", "description_characteristic", 17, 63, "ADD", "Yó".repeat(100), "characteristic__code_characteristic__format_KO"),

    Array("characteristic", "description_characteristic", 18, 64, "ADD", "d".repeat(30),                             true),
    Array("characteristic", "description_characteristic", 18, 65, "ADD", "TOP SECRET PROYECTO ÑÁPA ETDOS".repeat(4), true),
    Array("characteristic", "description_characteristic", 18, 66, "ADD", " ".repeat(30),                             true),
    Array("characteristic", "description_characteristic", 18, 67, "ADD", `descripcion';DROP DATABASE    `,           true),


    //EDIT
    Array("characteristic", "description_characteristic", 19, 68, "EDIT", "a".repeat(29), "characteristic__description_characteristic__min_size_KO"),
    Array("characteristic", "description_characteristic", 19, 69, "EDIT", "a".repeat(20), "characteristic__description_characteristic__min_size_KO"),
    Array("characteristic", "description_characteristic", 19, 70, "EDIT", "",             "characteristic__description_characteristic__min_size_KO"),

    Array("characteristic", "description_characteristic", 20, 71, "EDIT", "a".repeat(5001), "characteristic__description_characteristic__max_size_KO"),
    Array("characteristic", "description_characteristic", 20, 72, "EDIT", "a".repeat(5002), "characteristic__description_characteristic__max_size_KO"),

    Array("characteristic", "description_characteristic", 21, 73, "EDIT", "123456".repeat(100),                 "characteristic__code_characteristic__format_KO"),
    Array("characteristic", "description_characteristic", 21, 74, "EDIT", "Ñaco".repeat(100), "characteristic__code_characteristic__format_KO"),
    Array("characteristic", "description_characteristic", 21, 75, "EDIT", "Yó".repeat(100), "characteristic__code_characteristic__format_KO"),

    Array("characteristic", "description_characteristic", 22, 76, "EDIT", "d".repeat(90),                             true),
    Array("characteristic", "description_characteristic", 22, 77, "EDIT", "TOP SECRET PROYECTO ÑÁPA ETDOS".repeat(4), true),
    Array("characteristic", "description_characteristic", 22, 78, "EDIT", " ".repeat(90),                             true),
    Array("characteristic", "description_characteristic", 22, 79, "EDIT", `descripcion';DROP DATABASE    `,           true),


    //SEARCH
    Array("characteristic", "description_characteristic", 23, 80, "SEARCH", "a".repeat(5001), "characteristic__description_characteristic__max_size_KO"),
    Array("characteristic", "description_characteristic", 23, 81, "SEARCH", "a".repeat(5002), "characteristic__description_characteristic__max_size_KO"),

    Array("characteristic", "description_characteristic", 24, 82, "SEARCH", "123456".repeat(100),                 "characteristic__code_characteristic__format_KO"),
    Array("characteristic", "description_characteristic", 24, 83, "SEARCH", "Ñaco".repeat(100), "characteristic__code_characteristic__format_KO"),
    Array("characteristic", "description_characteristic", 24, 84, "SEARCH", "Yó".repeat(100), "characteristic__code_characteristic__format_KO"),

    Array("characteristic", "description_characteristic", 25, 85, "SEARCH", "d".repeat(90),                             true),
    Array("characteristic", "description_characteristic", 25, 86, "SEARCH", "TOP SECRET PROYECTO ÑÁPA ETDOS".repeat(4), true),
    Array("characteristic", "description_characteristic", 25, 87, "SEARCH", " ".repeat(90),                             true),
    Array("characteristic", "description_characteristic", 25, 88, "SEARCH", `descripcion';DROP DATABASE    `,           true),

    //Campo = `data_type_characteristic` enum('number','text','set') NOT NULL

    //ADD
    Array("characteristic", "data_type_characteristic", 26, 89, "ADD", "button", "characteristic__data_type_characteristic__valid_KO"),
    Array("characteristic", "data_type_characteristic", 26, 90, "ADD", "label",  "characteristic__data_type_characteristic__valid_KO"),

    Array("characteristic", "data_type_characteristic", 27, 91, "ADD", "number",         true),
    Array("characteristic", "data_type_characteristic", 27, 92, "ADD", "text", true),
    Array("characteristic", "data_type_characteristic", 27, 93, "ADD", "set",           true),

    //EDIT
    Array("characteristic", "data_type_characteristic", 28, 94, "EDIT", "button", "characteristic__data_type_characteristic__valid_KO"),
    Array("characteristic", "data_type_characteristic", 28, 95, "EDIT", "label",  "characteristic__data_type_characteristic__valid_KO"),

    Array("characteristic", "data_type_characteristic", 29, 96, "EDIT", "number",         true),
    Array("characteristic", "data_type_characteristic", 29, 97, "EDIT", "text", true),
    Array("characteristic", "data_type_characteristic", 29, 98, "EDIT", "set",           true),

    //SEARCH
    Array("characteristic", "data_type_characteristic", 30, 99, "SEARCH", "button", "characteristic__data_type_characteristic__valid_KO"),
    Array("characteristic", "data_type_characteristic", 30, 100, "SEARCH", "label",  "characteristic__data_type_characteristic__valid_KO"),

    Array("characteristic", "description_characteristic", 31, 101, "SEARCH", "number",         true),
    Array("characteristic", "description_characteristic", 31, 102, "SEARCH", "text", true),
    Array("characteristic", "description_characteristic", 31, 103, "SEARCH", "set",           true),

    //Campo = `category_characteristic` enum('soil_site','soil_chem','soil_bio') NOT NULL

    //ADD
    Array("characteristic", "description_characteristic", 32, 104, "ADD", "button",             "characteristic__category_characteristic__valid_KO"),
    Array("characteristic", "description_characteristic", 32, 105, "ADD", "label",              "characteristic__category_characteristic__valid_KO"),

    Array("characteristic", "description_characteristic", 32, 106, "ADD", "soil_site",          true),
    Array("characteristic", "description_characteristic", 32, 107, "ADD", "soil_chem",          true),
    Array("characteristic", "description_characteristic", 32, 108, "ADD", "soil_bio",           true),

    //EDIT
    Array("characteristic", "description_characteristic", 33, 109, "EDIT", "button",            "characteristic__category_characteristic__valid_KO"),
    Array("characteristic", "description_characteristic", 33, 110, "EDIT", "label",             "characteristic__category_characteristic__valid_KO"),
 
    Array("characteristic", "description_characteristic", 34, 111, "EDIT", "soil_site",         true),
    Array("characteristic", "description_characteristic", 34, 112, "EDIT", "soil_chem",         true),
    Array("characteristic", "description_characteristic", 34, 113, "EDIT", "soil_bio",          true),

    //SEARCH
    Array("characteristic", "description_characteristic", 35, 114, "SEARCH", "button",          "characteristic__category_characteristic__valid_KO"),
    Array("characteristic", "description_characteristic", 35, 115, "SEARCH", "label",           "characteristic__category_characteristic__valid_KO"),

    Array("characteristic", "description_characteristic", 36, 116, "SEARCH", "soil_site",       true),
    Array("characteristic", "description_characteristic", 36, 117, "SEARCH", "soil_chem",       true),
    Array("characteristic", "description_characteristic", 36, 118, "SEARCH", "soil_bio",        true),

    //Campo = `bibref_characteristic` varchar(200) NOT NULL,  alfabéticos con acentos, ñ, espacios y signos de puntuación, min 16 max 200
   

    //ADD
    Array("characteristic", "bibref_characteristic", 37, 119, "ADD", "a".repeat(12),                                "characteristic__bibref_characteristic__min_size_KO"),
    Array("characteristic", "bibref_characteristic", 37, 120, "ADD", "a".repeat(13),                                "characteristic__bibref_characteristic__min_size_KO"),
    Array("characteristic", "bibref_characteristic", 37, 121, "ADD", "",                                            "characteristic__bibref_characteristic__min_size_KO"),

    Array("characteristic", "bibref_characteristic", 38, 122, "ADD", "a".repeat(201),                               "characteristic__bibref_characteristic__max_size_KO"),
    Array("characteristic", "bibref_characteristic", 38, 123, "ADD", "a".repeat(202),                               "characteristic__bibref_characteristic__max_size_KO"),

    Array("characteristic", "bibref_characteristic", 39, 124, "ADD", "123456891011121314",                          "characteristic__bibref_characteristic__format_KO"),
    Array("characteristic", "bibref_characteristic", 39, 125, "ADD", "Ñaco".repeat(10),                             "characteristic__bibref_characteristic__format_KO"),
    Array("characteristic", "bibref_characteristic", 39, 126, "ADD", "Yó".repeat(10),                               "characteristic__bibref_characteristic__format_KO"),
                      
    Array("characteristic", "bibref_characteristic", 40, 127, "ADD", "d".repeat(30),                                true),
    Array("characteristic", "bibref_characteristic", 40, 128, "ADD", "TOP SECRET PROYECTO ÑÁPA ETDOS".repeat(4),    true),
    Array("characteristic", "bibref_characteristic", 40, 129, "ADD", " ".repeat(30),                                true),
    Array("characteristic", "bibref_characteristic", 40, 130, "ADD", `descripcion';DROP DATABASE    `,              true),

    //EDIT
    Array("characteristic", "bibref_characteristic", 41, 131, "EDIT", "a".repeat(12),                               "characteristic__bibref_characteristic__min_size_KO"),
    Array("characteristic", "bibref_characteristic", 41, 132, "EDIT", "a".repeat(13),                               "characteristic__bibref_characteristic__min_size_KO"),
    Array("characteristic", "bibref_characteristic", 41, 133, "EDIT", "",                                           "characteristic__bibref_characteristic__min_size_KO"),

    Array("characteristic", "bibref_characteristic", 42, 134, "EDIT", "a".repeat(201),                              "characteristic__bibref_characteristic__max_size_KO"),
    Array("characteristic", "bibref_characteristic", 42, 135, "EDIT", "a".repeat(202),                              "characteristic__bibref_characteristic__max_size_KO"),

    Array("characteristic", "bibref_characteristic", 43, 136, "EDIT", "123456891011121314",                         "characteristic__bibref_characteristic__format_KO"),
    Array("characteristic", "bibref_characteristic", 43, 137, "EDIT", "Ñaco".repeat(10),                            "characteristic__bibref_characteristic__format_KO"),
    Array("characteristic", "bibref_characteristic", 43, 138, "EDIT", "Yó".repeat(10),                              "characteristic__bibref_characteristic__format_KO"),

    Array("characteristic", "bibref_characteristic", 44, 139, "EDIT", "d".repeat(30),                               true),
    Array("characteristic", "bibref_characteristic", 44, 140, "EDIT","TOP SECRET PROYECTO ÑÁPA ETDOS".repeat(4),    true),
    Array("characteristic", "bibref_characteristic", 44, 141, "EDIT"," ".repeat(30),                                true),
    Array("characteristic", "bibref_characteristic", 44, 142, "EDIT",`descripcion';DROP DATABASE    `,              true),

    //SEARCH
    Array("characteristic", "bibref_characteristic", 45, 143, "SEARCH", "a".repeat(201),                           "characteristic__bibref_characteristic__max_size_KO"),
    Array("characteristic", "bibref_characteristic", 45, 144, "SEARCH", "a".repeat(202),                           "characteristic__bibref_characteristic__max_size_KO"),

    Array("characteristic", "bibref_characteristic", 46, 145, "SEARCH","123456891011121314",                        "characteristic__bibref_characteristic__format_KO"),
    Array("characteristic", "bibref_characteristic", 46, 146, "SEARCH", "Ñaco".repeat(10),                          "characteristic__bibref_characteristic__format_KO"),
    Array("characteristic", "bibref_characteristic", 46, 147, "SEARCH", "Yó".repeat(10),                            "characteristic__bibref_characteristic__format_KO"),

    Array("characteristic", "bibref_characteristic", 47, 148, "SEARCH", "d".repeat(30),                             true),
    Array("characteristic", "bibref_characteristic", 47, 149, "SEARCH", "TOP SECRET PROYECTO ÑÁPA ETDOS".repeat(4), true),
    Array("characteristic", "bibref_characteristic", 47, 150, "SEARCH", " ".repeat(30),                             true),
    Array("characteristic", "bibref_characteristic", 47, 151, "SEARCH", `descripcion';DROP DATABASE    `,           true),


    //Campo = `file_analysis_preparation` varchar(100) NOT NULL,  alfabéticos sin acentos ni ñ ni espacios min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 2000000 bytes.
    //No se lee en el ADD, readonly en EDIT
 
    //SEARCH
    Array("characteristic", "file_characteristic", 48, 152, "SEARCH", "a".repeat(101),               "characteristic__file_characteristic__max_size_KO"),
    Array("characteristic", "file_characteristic", 48, 153, "SEARCH", "a".repeat(102),               "characteristic__file_characteristic__max_size_KO"),
    
    Array("characteristic", "file_characteristic", 49, 154, "SEARCH", "archivo45",                   "characteristic__file_characteristic__format_KO"),
    Array("characteristic", "file_characteristic", 49, 155, "SEARCH", "Saludos\nEsto deberia petar", "characteristic__file_characteristic__format_KO"),
    Array("characteristic", "file_characteristic", 49, 156, "SEARCH", "archivo/",                    "characteristic__file_characteristic__format_KO"),
    
    Array("characteristic", "file_characteristic", 50, 157, "SEARCH", "a".repeat(6),                 true),
    Array("characteristic", "file_characteristic", 50, 158, "SEARCH", "fic.h.e.ro.png",              true),
    Array("characteristic", "file_characteristic", 50, 159, "SEARCH", "ficheroName",                 true)
);

let pruebas_file_characteristic = Array(
    
    //Formato test:Array(Entidad,Campo,Numero Test,Numero Prueba, Accion,parametro a probar,Valor, Mensaje Respuesta)
    //Campo = `nuevo_file_analysis_preparation` varchar(100) NOT NULL,  alfabéticos sin acentos ni ñ ni espacios min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 2000000 bytes.
    //No se lee en el SEARCH

    //ADD
    Array("characteristic", "nuevo_file_characteristic", 51, 160, "ADD", "Existe", Array(), "characteristic__nuevo_file_characteristic__empty_KO"),

    Array("characteristic", "nuevo_file_characteristic", 52, 161, "ADD", "max_size_file", Array("filename",Array("application/pdf"),3000000),  "characteristic__nuevo_file_characteristic__max_size_file_KO"),
    Array("characteristic", "nuevo_file_characteristic", 52, 162, "ADD", "max_size_file", Array("filename",Array("application/pdf"),2000000),  "characteristic__nuevo_file_characteristic__max_size_file_KO"),
    Array("characteristic", "nuevo_file_characteristic", 52, 163, "ADD", "max_size_file", Array("filename",Array("application/pdf"),2000001),  "characteristic__nuevo_file_characteristic__max_size_file_KO"),
    
    Array("characteristic", "nuevo_file_characteristic", 53, 164, "ADD", "type_file", Array("filename",Array("image/jpeg"),1234),               "characteristic__nuevo_file_characteristic__type_file_KO"),
    Array("characteristic", "nuevo_file_characteristic", 53, 165, "ADD", "type_file", Array("filename",Array("text/plain"),1234),               "characteristic__nuevo_file_characteristic__type_file_KO"),
    Array("characteristic", "nuevo_file_characteristic", 53, 166, "ADD", "type_file", Array("filename",Array("image/png"),1234),                "characteristic__nuevo_file_characteristic__type_file_KO"), 
       
    Array("characteristic", "nuevo_file_characteristic", 54, 167, "ADD", "format_name_file", Array("archivo45",Array("application/pdf"),1234),  "characteristic__nuevo_file_characteristic__format_name_file_KO"), 
    Array("characteristic", "nuevo_file_characteristic", 54, 168, "ADD", "format_name_file", Array("archivoá",Array("application/pdf"),1234),   "characteristic__nuevo_file_characteristic__format_name_file_KO"), 
    Array("characteristic", "nuevo_file_characteristic", 54, 169, "ADD", "format_name_file", Array("archivo a",Array("application/pdf"),1234),  "characteristic__nuevo_file_characteristic__format_name_file_KO"), 
    
    Array("characteristic", "nuevo_file_characteristic", 55, 170, "ADD", "min_size", Array("a".repeat(6),Array("application/pdf"),1234),        "characteristic__nuevo_file_characteristic__min_size_KO"), 
    Array("characteristic", "nuevo_file_characteristic", 55, 171, "ADD", "min_size", Array("a".repeat(4),Array("application/pdf"),1234),        "characteristic__nuevo_file_characteristic__min_size_KO"), 
    
    Array("characteristic", "nuevo_file_characteristic", 56, 172, "ADD", "max_size", Array("a".repeat(101),Array("application/pdf"),1234),      "characteristic__nuevo_file_characteristic__max_size_KO"), 
    Array("characteristic", "nuevo_file_characteristic", 56, 173, "ADD", "max_size", Array("a".repeat(10134),Array("application/pdf"),1234),    "characteristic__nuevo_file_characteristic__max_size_KO"), 

    Array("characteristic", "nuevo_file_characteristic", 57, 174, "ADD", "OK", Array("a".repeat(14),Array("application/pdf"),1234),             true),
    Array("characteristic", "nuevo_file_characteristic", 57, 175, "ADD", "OK", Array("ficheroName",Array("application/pdf"),1234),              true),
    Array("characteristic", "nuevo_file_characteristic", 57, 176, "ADD", "OK", Array("a".repeat(100),Array("application/pdf"),1234),            true),
    Array("characteristic", "nuevo_file_characteristic", 57, 177, "ADD", "OK", Array("a".repeat(99),Array("application/pdf"),1234),             true),    
    
    //EDIT
    Array("characteristic", "nuevo_file_characteristic", 58, 178, "EDIT", "max_size_file", Array("filename",Array("application/pdf"),3000000),  "characteristic__nuevo_file_characteristic__max_size_file_KO"),
    Array("characteristic", "nuevo_file_characteristic", 58, 179, "EDIT", "max_size_file", Array("filename",Array("application/pdf"),2000000),  "characteristic__nuevo_file_characteristic__max_size_file_KO"),
    Array("characteristic", "nuevo_file_characteristic", 58, 180, "EDIT", "max_size_file", Array("filename",Array("application/pdf"),2000001),  "characteristic__nuevo_file_characteristic__max_size_file_KO"),
    
    Array("characteristic", "nuevo_file_characteristic", 59, 181, "EDIT", "type_file", Array("filename",Array("image/jpeg"),1234),              "characteristic__nuevo_file_characteristic__type_file_KO"),
    Array("characteristic", "nuevo_file_characteristic", 59, 182, "EDIT", "type_file", Array("filename",Array("text/plain"),1234),              "characteristic__nuevo_file_characteristic__type_file_KO"),
    Array("characteristic", "nuevo_file_characteristic", 59, 183, "EDIT", "type_file", Array("filename",Array("image/png"),1234),               "characteristic__nuevo_file_characteristic__type_file_KO"), 
       
    Array("characteristic", "nuevo_file_characteristic", 60, 184, "EDIT", "format_name_file", Array("archivo45",Array("application/pdf"),1234), "characteristic__nuevo_file_characteristic__format_name_file_KO"), 
    Array("characteristic", "nuevo_file_characteristic", 60, 185, "EDIT", "format_name_file", Array("archivoá",Array("application/pdf"),1234),  "characteristic__nuevo_file_characteristic__format_name_file_KO"), 
    Array("characteristic", "nuevo_file_characteristic", 60, 186, "EDIT", "format_name_file", Array("archivo a",Array("application/pdf"),1234), "characteristic__nuevo_file_characteristic__format_name_file_KO"), 
    
    Array("characteristic", "nuevo_file_characteristic", 61, 187, "EDIT", "min_size", Array("a".repeat(6),Array("application/pdf"),1234),       "characteristic__nuevo_file_characteristic__min_size_KO"), 
    Array("characteristic", "nuevo_file_characteristic", 61, 188, "EDIT", "min_size", Array("a".repeat(4),Array("application/pdf"),1234),       "characteristic__nuevo_file_characteristic__min_size_KO"), 
    
    Array("characteristic", "nuevo_file_characteristic", 62, 189, "EDIT", "max_size", Array("a".repeat(101),Array("application/pdf"),1234),     "characteristic__nuevo_file_characteristic__max_size_KO"), 
    Array("characteristic", "nuevo_file_characteristic", 62, 190, "EDIT", "max_size", Array("a".repeat(10134),Array("application/pdf"),1234),   "characteristic__nuevo_file_characteristic__max_size_KO"), 

    Array("characteristic", "nuevo_file_characteristic", 63, 191, "EDIT", "OK", Array("a".repeat(14),Array("application/pdf"),1234),            true),
    Array("characteristic", "nuevo_file_characteristic", 63, 192, "EDIT", "OK", Array("ficheroName",Array("application/pdf"),1234),             true),
    Array("characteristic", "nuevo_file_characteristic", 63, 193, "EDIT", "OK", Array("a".repeat(100),Array("application/pdf"),1234),           true),
    Array("characteristic", "nuevo_file_characteristic", 63, 194, "EDIT", "OK", Array("a".repeat(99),Array("application/pdf"),1234),            true), 
    
    Array("characteristic", "nuevo_file_characteristic", 64, 195, "EDIT", "OK", Array("",Array(""),0),                                          true)
);

let pruebas_esp_characteristic = Array(
    //vacio
);

let pruebas_esp_characteristic = Array(
    //vacio
);
