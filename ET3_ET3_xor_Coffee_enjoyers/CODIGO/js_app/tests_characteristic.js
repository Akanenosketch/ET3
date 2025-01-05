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
    Array("characteristic", "data_type_characteristic", 30, "Parametro valido",                     "SEARCH",   'characteristic__data_type_characteristic__valid_SEARCH_KO', 'El tipo de la caracteristica no esta permitido'),
    Array("characteristic", "data_type_characteristic", 31, "Cumple todo (Parametro valido)",       "SEARCH",   true,                                                        'El tipo de la caracteristica es correcto'),

     //Campo = `category_characteristic` enum('soil_site','soil_chem','soil_bio') NOT NULL
   
    //ADD
    Array("characteristic", "category_characteristic", 32, "Parametro valido",                     "ADD",      'characteristic__category_characteristic__valid_KO',        'La categoria de la caracteristica no esta permitido.'),
    Array("characteristic", "category_characteristic", 33, "Cumple todo (Parametro valido)",       "ADD",      true,                                                       'La categoria de la caracteristica es correcto'),

    //EDIT
    Array("characteristic", "category_characteristic", 34, "Parametro valido",                     "EDIT",     'characteristic__category_characteristic__valid_KO',       'La categoria de la caracteristica no esta permitido'),
    Array("characteristic", "category_characteristic", 35, "Cumple todo (Parametro valido)",       "EDIT",     true,                                                      'La categoria de la caracteristica es correcto'),

    //SEARCH
    Array("characteristic", "category_characteristic", 36, "Parametro valido",                     "SEARCH",   'characteristic__category_characteristic__valid_SEARCH_KO', 'La categoria de la caracteristica no esta permitido'),
    Array("characteristic", "category_characteristic", 37, "Cumple todo (Parametro valido)",       "SEARCH",   true,                                                       'La categoria de la caracteristica es correcto'),

    //Campo = `bibref_characteristic` varchar(200) NOT NULL,  alfabéticos con acentos, ñ, espacios y signos de puntuación, min 16 max 200
   
   //ADD
   Array("characteristic", "bibref_characteristic", 38, "Cumple tamaño minimo 16",                                                               "ADD", 'characteristic__bibref_characteristic__min_size_KO',       'La referencia bibliografica de la caracteristica es demasiado corto, debe tener al menos longitud 16.'),
   Array("characteristic", "bibref_characteristic", 39, "Cumple tamaño maximo 200",                                                              "ADD", 'characteristic__bibref_characteristic__max_size_KO',       'La referencia bibliografica de la caracteristica supera el tamaño permitido, debe tener como mucho longitud 200.'),
   Array("characteristic", "bibref_characteristic", 40, "Cumple tener solo caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación",                 "ADD", 'characteristic__bibref_characteristic__format_KO',         'La referencia bibliografica de la caracteristica no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
   Array("characteristic", "bibref_characteristic", 41, "Cumple todo (tener entre 16 y 200 caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación)", "ADD", true,                                                       'La referencia bibliografica de la caracteristica es correcto'),

   //EDI
   Array("characteristic", "bibref_characteristic", 42, "Cumple tamaño minimo 16",                                                               "EDIT", 'characteristic__bibref_characteristic__min_size_KO',      'La referencia bibliografica de la caracteristica es demasiado corto, debe tener al menos longitud 16.'),
   Array("characteristic", "bibref_characteristic", 43, "Cumple tamaño maximo 200",                                                              "EDIT", 'characteristic__bibref_characteristic__max_size_KO',      'La referencia bibliografica de la caracteristica supera el tamaño permitido, debe tener como mucho longitud 200.'),
   Array("characteristic", "bibref_characteristic", 44, "Cumple tener solo caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación",                 "EDIT", 'characteristic__bibref_characteristic__format_KO',        'La referencia bibliografica de la caracteristica no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
   Array("characteristic", "bibref_characteristic", 45, "Cumple todo (tener entre 16 y 200 caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación)", "EDIT", true,                                                      'La referencia bibliografica de la caracteristica es correcto'),
   //SEARCH
   Array("characteristic", "bibref_characteristic", 46, "Cumple tamaño maximo 200",                                                              "SEARCH", 'characteristic__bibref_characteristic__max_size_KO',    'La referencia bibliografica de la caracteristica supera el tamaño permitido, debe tener como mucho longitud 200.'),
   Array("characteristic", "bibref_characteristic", 47, "Cumple tener solo caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación",                 "SEARCH", 'characteristic__bibref_characteristic__format_KO',      'La referencia bibliografica de la caracteristica no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
   Array("characteristic", "bibref_characteristic", 48, "Cumple todo (tener hasta 200 caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación)",      "SEARCH", true,                                                    'La referencia bibliografica de la caracteristica es correcto'),

    //Campo = `file_characteristic` varchar(100) NOT NULL,  alfabéticos sin acentos ni ñ ni espacios min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 200000 bytes.
    //No se lee en el ADD, readonly en EDIT
 
    //SEARCH
    Array("characteristic", "file_characteristic", 49, "Cumple tamaño de nombre maximo 100",                                                     "SEARCH", 'characteristic__file_characteristic__max_size_KO',  'El nombre del archivo de la caracteristica supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("characteristic", "file_characteristic", 50, "Cumple tener solo caracteres alfabeticos y puntos sin acentos,ñ o espacios",             "SEARCH", 'characteristic__file_characteristic__format_KO',    'El nombre del archivo de la caracteristica no cumple el formato correcto, debe contener solo letras y puntos sin acentos ni ñ ni espacios ni signos de puntuacion.'),
    Array("characteristic", "file_characteristic", 51, "Cumple todo (tener hasta 100 caracteres alfabeticos y puntos sin acentos,ñ o espacios)", "SEARCH", true,                                                'El archivo de la caracteristica es correcto'),


    //Campo = `nuevo_file_characteristic` varchar(100) NOT NULL,  alfabéticos sin acentos ni ñ ni espacios min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 200000 bytes.
    //No se lee en el SEARCH

    //ADD
    Array("characteristic", "nuevo_file_characteristic", 52, "Cumple no ser un fichero vacio",                                                       "ADD", 'characteristic__nuevo_file_characteristic__empty_KO',            'El Nuevo Archivo no puede estar vacio, debe enviarse un archivo'),
    Array("characteristic", "nuevo_file_characteristic", 53, "Cumple tamaño de fichero menor a 2000000 Bytes (200 KB)",                              "ADD", 'characteristic__nuevo_file_characteristic__max_size_file_KO',    'El Nuevo Archivo supera el tamaño permitido, debe pesar menos de 2 MB.'),
    Array("characteristic", "nuevo_file_characteristic", 54, "Cumple tipo correcto de fichero (.pdf, .doc, .docx)",                                  "ADD", 'characteristic__nuevo_file_characteristic__type_file_KO',        'El Nuevo Archivo no es del tipo correcto, debe ser .pdf,.doc o .docx'),
    Array("characteristic", "nuevo_file_characteristic", 55, "Cumple tener solo caracteres alfabeticos y puntos sin acentos,ñ o espacios de nombre", "ADD", 'characteristic__nuevo_file_characteristic__format_name_file_KO', 'El nombre del Nuevo Archivo no cumple el formato correcto, debe contener solo letras y puntos sin acentos ni ñ ni espacios ni signos de puntuacion.'),
    Array("characteristic", "nuevo_file_characteristic", 56, "Cumple tamaño de nombre minimo 7",                                                     "ADD", 'characteristic__nuevo_file_characteristic__min_size_KO',         'El nombre del Nuevo Archivo es demasiado corto, debe tener al menos longitud 7.'),
    Array("characteristic", "nuevo_file_characteristic", 57, "Cumple tamaño de nombre maximo 100",                                                   "ADD", 'characteristic__nuevo_file_characteristic__max_size_KO',         'El nombre del Nuevo Archivo supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("characteristic", "nuevo_file_characteristic", 58, "Cumple todo",                                                                          "ADD", true,                                                             'El Nuevo Archivo es correcto'),


    //EDIT
    Array("characteristic", "nuevo_file_characteristic", 59, "Cumple tamaño de fichero menor a 2000000 Bytes (200 KB)",                              "EDIT", 'characteristic__nuevo_file_characteristic__max_size_file_KO',    'El Nuevo Archivo supera el tamaño permitido, debe pesar menos de 2 MB.'),
    Array("characteristic", "nuevo_file_characteristic", 60, "Cumple tipo correcto de fichero (.pdf, .doc, .docx)",                                  "EDIT", 'characteristic__nuevo_file_characteristic__type_file_KO',        'El Nuevo Archivo no es del tipo correcto, debe ser .pdf,.doc o .docx'),
    Array("characteristic", "nuevo_file_characteristic", 61, "Cumple tener solo caracteres alfabeticos y puntos sin acentos,ñ o espacios de nombre", "EDIT", 'characteristic__nuevo_file_characteristic__format_name_file_KO', 'El nombre del Nuevo Archivo no cumple el formato correcto, debe contener solo letras y puntos sin acentos ni ñ ni espacios ni signos de puntuacion.'),
    Array("characteristic", "nuevo_file_characteristic", 62, "Cumple tamaño de nombre minimo 7",                                                     "EDIT", 'characteristic__nuevo_file_characteristic__min_size_KO',         'El nombre del Nuevo Archivo es demasiado corto, debe tener al menos longitud 7.'),
    Array("characteristic", "nuevo_file_characteristic", 63, "Cumple tamaño de nombre maximo 100",                                                   "EDIT", 'characteristic__nuevo_file_characteristic__max_size_KO',         'El nombre del Nuevo Archivo supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("characteristic", "nuevo_file_characteristic", 64, "Cumple todo",                                                                          "EDIT", true,                                                             'El Nuevo Archivo es correcto'),
    Array("characteristic", "nuevo_file_characteristic", 65, "Cumple ser un fichero vacio",                                                          "EDIT", true,                                                             'El Nuevo Archivo es correcto'),

);

let pruebas_characteristic = Array(
    
    //Formato test:Array(Entidad,Campo,Numero Test,Numero Prueba, Accion,Valor, Mensaje Respuesta)
  
    //Campo = `id_characteristic`

    //SEARCH
    Array("characteristic", "id_characteristic", 1, 1, "SEARCH", "2".repeat(12), "characteristic__id_characteristic__max_size_KO"),
    Array("characteristic", "id_characteristic", 1, 2, "SEARCH", "2".repeat(13), "characteristic__id_characteristic__max_size_KO"),
   
    Array("characteristic", "id_characteristic", 2, 3, "SEARCH", "texto", "characteristic__id_characteristic__format_KO"),
    Array("characteristic", "id_characteristic", 2, 4, "SEARCH", "9/11",  "characteristic__id_characteristic__format_KO"),
    Array("characteristic", "id_characteristic", 2, 5, "SEARCH", "11S",   "characteristic__id_characteristic__format_KO"),
    
    Array("characteristic", "id_characteristic", 3, 6, "SEARCH", "2".repeat(1),  true),
    Array("characteristic", "id_characteristic", 3, 7, "SEARCH", "2".repeat(11), true),
    Array("characteristic", "id_characteristic", 3, 8, "SEARCH", "4514",         true),


    //Campo = `name_characteristic`
    
    //ADD
    Array("characteristic", "name_characteristic", 4, 9, "ADD", "a".repeat(3), "characteristic__name_characteristic__min_size_KO"),
    Array("characteristic", "name_characteristic", 4, 10, "ADD", "",           "characteristic__name_characteristic__min_size_KO"),

    Array("characteristic", "name_characteristic", 5, 11, "ADD", "a".repeat(101), "characteristic__name_characteristic__max_size_KO"),
    Array("characteristic", "name_characteristic", 5, 12, "ADD", "a".repeat(102), "characteristic__name_characteristic__max_size_KO"),

    Array("characteristic", "name_characteristic", 6, 13, "ADD", "Análisis".repeat(2),      "characteristic__name_characteristic__format_KO"),
    Array("characteristic", "name_characteristic", 6, 14, "ADD", "Analisis Datos A Coruña", "characteristic__name_characteristic__format_KO"),
    Array("characteristic", "name_characteristic", 6, 15, "ADD", "Analisis.".repeat(2),     "characteristic__name_characteristic__format_KO"),

    Array("characteristic", "name_characteristic", 7, 16, "ADD", "a".repeat(16),                   true),
    Array("characteristic", "name_characteristic", 7, 17, "ADD", "Analisis Aguas Fecales Ourense", true),
    Array("characteristic", "name_characteristic", 7, 18, "ADD", "Analisis Calificaciones",        true),

    //EDIT
    Array("characteristic", "name_characteristic", 8, 19, "EDIT", "a".repeat(3), "characteristic__name_characteristic__min_size_KO"),
    Array("characteristic", "name_characteristic", 8, 20, "EDIT", "",            "characteristic__name_characteristic__min_size_KO"),

    Array("characteristic", "name_characteristic", 9, 21, "EDIT", "a".repeat(101), "characteristic__name_characteristic__max_size_KO"),
    Array("characteristic", "name_characteristic", 9, 22, "EDIT", "a".repeat(102), "characteristic__name_characteristic__max_size_KO"),

    Array("characteristic", "name_characteristic", 10, 23, "EDIT", "Análisis".repeat(2),      "characteristic__name_characteristic__format_KO"),
    Array("characteristic", "name_characteristic", 10, 24, "EDIT", "Analisis Datos A Coruña", "characteristic__name_characteristic__format_KO"),
    Array("characteristic", "name_characteristic", 10, 25, "EDIT", "Analisis.".repeat(2),     "characteristic__name_characteristic__format_KO"),

    Array("characteristic", "name_characteristic", 11, 26, "EDIT", "a".repeat(16),                   true),
    Array("characteristic", "name_characteristic", 11, 27, "EDIT", "Analisis Aguas Fecales Ourense", true),
    Array("characteristic", "name_characteristic", 11, 28, "EDIT", "Analisis Calificaciones",        true),
    

    //SEARCH  
    Array("characteristic", "name_characteristic", 12, 29, "SEARCH", "a".repeat(101), "characteristic__name_characteristic__max_size_KO"),
    Array("characteristic", "name_characteristic", 12, 30, "SEARCH", "a".repeat(102), "characteristic__name_characteristic__max_size_KO"),

    Array("characteristic", "name_characteristic", 13, 31, "SEARCH", "Análisis".repeat(2),      "characteristic__name_characteristic__format_KO"),
    Array("characteristic", "name_characteristic", 13, 32, "SEARCH", "Analisis Datos A Coruña", "characteristic__name_characteristic__format_KO"),
    Array("characteristic", "name_characteristic", 13, 33, "SEARCH", "Analisis.".repeat(2),     "characteristic__name_characteristic__format_KO"),

    Array("characteristic", "name_characteristic", 14, 34, "SEARCH", "a".repeat(1),                    true),
    Array("characteristic", "name_characteristic", 14, 35, "SEARCH", "Analisis Aguas Fecales Ourense", true),
    Array("characteristic", "name_characteristic", 14, 36, "SEARCH", "Analisis Calificaciones",        true),


    //Campo = `description_characteristic` 

    //ADD
    Array("characteristic", "description_characteristic", 15, 37, "ADD", "a".repeat(29), "characteristic__description_characteristic__min_size_KO"),
    Array("characteristic", "description_characteristic", 15, 38, "ADD", "a".repeat(20), "characteristic__description_characteristic__min_size_KO"),
    Array("characteristic", "description_characteristic", 15, 39, "ADD", "",             "characteristic__description_characteristic__min_size_KO"),

    Array("characteristic", "description_characteristic", 16, 40, "ADD", "a".repeat(5001), "characteristic__description_characteristic__max_size_KO"),
    Array("characteristic", "description_characteristic", 16, 41, "ADD", "a".repeat(5002), "characteristic__description_characteristic__max_size_KO"),

    Array("characteristic", "description_characteristic", 17, 42, "ADD", "123456".repeat(100), "characteristic__description_characteristic__format_KO"),
    Array("characteristic", "description_characteristic", 17, 43, "ADD", "Ñaco".repeat(100),   "characteristic__description_characteristic__format_KO"),
    Array("characteristic", "description_characteristic", 17, 44, "ADD", "Yó".repeat(100),     "characteristic__description_characteristic__format_KO"),

    Array("characteristic", "description_characteristic", 18, 45, "ADD", "d".repeat(90),                           true),
    Array("characteristic", "description_characteristic", 18, 46, "ADD", "TOP SECRET PROYECTO PA ETDOS".repeat(4), true),
    Array("characteristic", "description_characteristic", 18, 47, "ADD", " ".repeat(90),                           true),
    Array("characteristic", "description_characteristic", 18, 48, "ADD", `descripcionDROP DATABASE    `.repeat(4), true),


    //EDIT
    Array("characteristic", "description_characteristic", 19, 49, "EDIT", "a".repeat(29), "characteristic__description_characteristic__min_size_KO"),
    Array("characteristic", "description_characteristic", 19, 50, "EDIT", "a".repeat(20), "characteristic__description_characteristic__min_size_KO"),
    Array("characteristic", "description_characteristic", 19, 51, "EDIT", "",             "characteristic__description_characteristic__min_size_KO"),

    Array("characteristic", "description_characteristic", 20, 52, "EDIT", "a".repeat(5001), "characteristic__description_characteristic__max_size_KO"),
    Array("characteristic", "description_characteristic", 20, 53, "EDIT", "a".repeat(5002), "characteristic__description_characteristic__max_size_KO"),

    Array("characteristic", "description_characteristic", 21, 54, "EDIT", "123456".repeat(100), "characteristic__description_characteristic__format_KO"),
    Array("characteristic", "description_characteristic", 21, 55, "EDIT", "Ñaco".repeat(100),   "characteristic__description_characteristic__format_KO"),
    Array("characteristic", "description_characteristic", 21, 56, "EDIT", "Yó".repeat(100),     "characteristic__description_characteristic__format_KO"),

    Array("characteristic", "description_characteristic", 22, 57, "EDIT", "d".repeat(90),                           true),
    Array("characteristic", "description_characteristic", 22, 58, "EDIT", "TOP SECRET PROYECTO PA ETDOS".repeat(4), true),
    Array("characteristic", "description_characteristic", 22, 59, "EDIT", " ".repeat(90),                           true),
    Array("characteristic", "description_characteristic", 22, 60, "EDIT", `descripcionDROP DATABASE    `.repeat(4), true),


    //SEARCH
    Array("characteristic", "description_characteristic", 23, 61, "SEARCH", "a".repeat(5001), "characteristic__description_characteristic__max_size_KO"),
    Array("characteristic", "description_characteristic", 23, 62, "SEARCH", "a".repeat(5002), "characteristic__description_characteristic__max_size_KO"),

    Array("characteristic", "description_characteristic", 24, 63, "SEARCH", "123456".repeat(100), "characteristic__description_characteristic__format_KO"),
    Array("characteristic", "description_characteristic", 24, 64, "SEARCH", "Ñaco".repeat(100),   "characteristic__description_characteristic__format_KO"),
    Array("characteristic", "description_characteristic", 24, 65, "SEARCH", "Yó".repeat(100),     "characteristic__description_characteristic__format_KO"),

    Array("characteristic", "description_characteristic", 25, 66, "SEARCH", "d".repeat(90),                           true),
    Array("characteristic", "description_characteristic", 25, 67, "SEARCH", "TOP SECRET PROYECTO PA ETDOS".repeat(4), true),
    Array("characteristic", "description_characteristic", 25, 68, "SEARCH", " ".repeat(90),                           true),
    Array("characteristic", "description_characteristic", 25, 69, "SEARCH", `descripcionDROP DATABASE    `,           true),

    //Campo = `data_type_characteristic` enum('number','text','set') NOT NULL

    //ADD
    Array("characteristic", "data_type_characteristic", 26, 70, "ADD", "button", "characteristic__data_type_characteristic__valid_KO"),
    Array("characteristic", "data_type_characteristic", 26, 71, "ADD", "label",  "characteristic__data_type_characteristic__valid_KO"),

    Array("characteristic", "data_type_characteristic", 27, 72, "ADD", "number", true),
    Array("characteristic", "data_type_characteristic", 27, 73, "ADD", "text",   true),
    Array("characteristic", "data_type_characteristic", 27, 74, "ADD", "set",    true),

    //EDIT
    Array("characteristic", "data_type_characteristic", 28, 75, "EDIT", "button", "characteristic__data_type_characteristic__valid_KO"),
    Array("characteristic", "data_type_characteristic", 28, 76, "EDIT", "label",  "characteristic__data_type_characteristic__valid_KO"),

    Array("characteristic", "data_type_characteristic", 29, 77, "EDIT", "number", true),
    Array("characteristic", "data_type_characteristic", 29, 78, "EDIT", "text",   true),
    Array("characteristic", "data_type_characteristic", 29, 79, "EDIT", "set",    true),

    //SEARCH
    Array("characteristic", "data_type_characteristic", 31, 82, "SEARCH", "number", true),
    Array("characteristic", "data_type_characteristic", 31, 83, "SEARCH", "text",   true),
    Array("characteristic", "data_type_characteristic", 31, 84, "SEARCH", "set",    true),

    //Campo = `category_characteristic` enum('soil_site','soil_chem','soil_bio') NOT NULL

    //ADD
    Array("characteristic", "category_characteristic", 32, 85, "ADD", "button", "characteristic__category_characteristic__valid_KO"),
    Array("characteristic", "category_characteristic", 32, 86, "ADD", "label",  "characteristic__category_characteristic__valid_KO"),

    Array("characteristic", "category_characteristic", 33, 87, "ADD", "soil_site", true),
    Array("characteristic", "category_characteristic", 33, 88, "ADD", "soil_chem", true),
    Array("characteristic", "category_characteristic", 33, 89, "ADD", "soil_bio",  true),

    //EDIT
    Array("characteristic", "category_characteristic", 34, 90, "EDIT", "button", "characteristic__category_characteristic__valid_KO"),
    Array("characteristic", "category_characteristic", 34, 91, "EDIT", "label",  "characteristic__category_characteristic__valid_KO"),
 
    Array("characteristic", "category_characteristic", 35, 92, "EDIT", "soil_site", true),
    Array("characteristic", "category_characteristic", 35, 93, "EDIT", "soil_chem", true),
    Array("characteristic", "category_characteristic", 35, 94, "EDIT", "soil_bio",  true),

    //SEARCH
    Array("characteristic", "category_characteristic", 37, 97, "SEARCH", "soil_site", true),
    Array("characteristic", "category_characteristic", 37, 98, "SEARCH", "soil_chem", true),
    Array("characteristic", "category_characteristic", 37, 99, "SEARCH", "soil_bio",  true),


    //Campo = `bibref_characteristic` varchar(200) NOT NULL,  alfabéticos con acentos, ñ, espacios y signos de puntuación, min 16 max 200

    //ADD
    Array("characteristic", "bibref_characteristic", 38, 100, "ADD", "a".repeat(12), "characteristic__bibref_characteristic__min_size_KO"),
    Array("characteristic", "bibref_characteristic", 38, 101, "ADD", "a".repeat(13), "characteristic__bibref_characteristic__min_size_KO"),
    Array("characteristic", "bibref_characteristic", 38, 102, "ADD", "",             "characteristic__bibref_characteristic__min_size_KO"),

    Array("characteristic", "bibref_characteristic", 39, 103, "ADD", "a".repeat(201), "characteristic__bibref_characteristic__max_size_KO"),
    Array("characteristic", "bibref_characteristic", 39, 104, "ADD", "a".repeat(202), "characteristic__bibref_characteristic__max_size_KO"),

    Array("characteristic", "bibref_characteristic", 40, 105, "ADD", "123456891011121314", "characteristic__bibref_characteristic__format_KO"),
                      
    Array("characteristic", "bibref_characteristic", 41, 106, "ADD", "d".repeat(30),                             true),
    Array("characteristic", "bibref_characteristic", 41, 107, "ADD", "TOP SECRET PROYECTO ÑÁPA ETDOS".repeat(4), true),
    Array("characteristic", "bibref_characteristic", 41, 108, "ADD", " ".repeat(30),                             true),
    Array("characteristic", "bibref_characteristic", 41, 109, "ADD", `descripcion';DROP DATABASE    `,           true),

    //EDIT
    Array("characteristic", "bibref_characteristic", 42, 110, "EDIT", "a".repeat(12), "characteristic__bibref_characteristic__min_size_KO"),
    Array("characteristic", "bibref_characteristic", 42, 111, "EDIT", "a".repeat(13), "characteristic__bibref_characteristic__min_size_KO"),
    Array("characteristic", "bibref_characteristic", 42, 112, "EDIT", "",             "characteristic__bibref_characteristic__min_size_KO"),

    Array("characteristic", "bibref_characteristic", 43, 113, "EDIT", "a".repeat(201), "characteristic__bibref_characteristic__max_size_KO"),
    Array("characteristic", "bibref_characteristic", 43, 114, "EDIT", "a".repeat(202), "characteristic__bibref_characteristic__max_size_KO"),

    Array("characteristic", "bibref_characteristic", 44, 115, "EDIT", "123456891011121314", "characteristic__bibref_characteristic__format_KO"),
    
    Array("characteristic", "bibref_characteristic", 45, 116, "EDIT",  "d".repeat(30),                            true),
    Array("characteristic", "bibref_characteristic", 45, 117, "EDIT", "TOP SECRET PROYECTO ÑÁPA ETDOS".repeat(4), true),
    Array("characteristic", "bibref_characteristic", 45, 118, "EDIT", " ".repeat(30),                             true),
    Array("characteristic", "bibref_characteristic", 45, 119, "EDIT", `descripcion';DROP DATABASE    `,           true),

    //SEARCH
    Array("characteristic", "bibref_characteristic", 46, 120, "SEARCH", "a".repeat(201), "characteristic__bibref_characteristic__max_size_KO"),
    Array("characteristic", "bibref_characteristic", 46, 121, "SEARCH", "a".repeat(202), "characteristic__bibref_characteristic__max_size_KO"),

    Array("characteristic", "bibref_characteristic", 47, 122, "SEARCH","123456891011121314", "characteristic__bibref_characteristic__format_KO"),
    
    Array("characteristic", "bibref_characteristic", 48, 123, "SEARCH", "d".repeat(30),                             true),
    Array("characteristic", "bibref_characteristic", 48, 124, "SEARCH", "TOP SECRET PROYECTO ÑÁPA ETDOS".repeat(4), true),
    Array("characteristic", "bibref_characteristic", 48, 125, "SEARCH", " ".repeat(30),                             true),
    Array("characteristic", "bibref_characteristic", 48, 126, "SEARCH", `descripcion';DROP DATABASE    `,           true),


    //Campo = `file_characteristic` varchar(100) NOT NULL,  alfabéticos sin acentos ni ñ ni espacios min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 200000 bytes.
    //No se lee en el ADD, readonly en EDIT
 
    //SEARCH
    Array("characteristic", "file_characteristic", 49, 127, "SEARCH", "a".repeat(101), "characteristic__file_characteristic__max_size_KO"),
    Array("characteristic", "file_characteristic", 49, 128, "SEARCH", "a".repeat(102), "characteristic__file_characteristic__max_size_KO"),
    
    Array("characteristic", "file_characteristic", 50, 129, "SEARCH", "archivo45",                   "characteristic__file_characteristic__format_KO"),
    Array("characteristic", "file_characteristic", 50, 130, "SEARCH", "Saludos\nEsto deberia petar", "characteristic__file_characteristic__format_KO"),
    Array("characteristic", "file_characteristic", 50, 131, "SEARCH", "archivo/",                    "characteristic__file_characteristic__format_KO"),
    
    Array("characteristic", "file_characteristic", 51, 132, "SEARCH", "a".repeat(6),    true),
    Array("characteristic", "file_characteristic", 51, 133, "SEARCH", "fic.h.e.ro.png", true),
    Array("characteristic", "file_characteristic", 51, 134, "SEARCH", "ficheroName",    true)
);

let pruebas_file_characteristic = Array(
    
    //Formato test:Array(Entidad,Campo,Numero Test,Numero Prueba, Accion,parametro a probar,Valor, Mensaje Respuesta)
    //Campo = `nuevo_file_characteristic` varchar(100) NOT NULL,  alfabéticos sin acentos ni ñ ni espacios min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 200000 bytes.
    //No se lee en el SEARCH

    //ADD
    Array("characteristic", "nuevo_file_characteristic", 52, 135, "ADD", "Existe", Array(), "characteristic__nuevo_file_characteristic__empty_KO"),

    Array("characteristic", "nuevo_file_characteristic", 53, 136, "ADD", "max_size_file", Array("filename",Array("application/pdf"),300000),  "characteristic__nuevo_file_characteristic__max_size_file_KO"),
    Array("characteristic", "nuevo_file_characteristic", 53, 137, "ADD", "max_size_file", Array("filename",Array("application/pdf"),200000),  "characteristic__nuevo_file_characteristic__max_size_file_KO"),
    Array("characteristic", "nuevo_file_characteristic", 53, 138, "ADD", "max_size_file", Array("filename",Array("application/pdf"),200001),  "characteristic__nuevo_file_characteristic__max_size_file_KO"),
    
    Array("characteristic", "nuevo_file_characteristic", 54, 139, "ADD", "type_file", Array("filename",Array("image/jpeg"),1234),               "characteristic__nuevo_file_characteristic__type_file_KO"),
    Array("characteristic", "nuevo_file_characteristic", 54, 140, "ADD", "type_file", Array("filename",Array("text/plain"),1234),               "characteristic__nuevo_file_characteristic__type_file_KO"),
    Array("characteristic", "nuevo_file_characteristic", 54, 141, "ADD", "type_file", Array("filename",Array("image/png"),1234),                "characteristic__nuevo_file_characteristic__type_file_KO"), 
       
    Array("characteristic", "nuevo_file_characteristic", 55, 142, "ADD", "format_name_file", Array("archivo45",Array("application/pdf"),1234),  "characteristic__nuevo_file_characteristic__format_name_file_KO"), 
    Array("characteristic", "nuevo_file_characteristic", 55, 143, "ADD", "format_name_file", Array("archivoá",Array("application/pdf"),1234),   "characteristic__nuevo_file_characteristic__format_name_file_KO"), 
    Array("characteristic", "nuevo_file_characteristic", 55, 144, "ADD", "format_name_file", Array("archivo a",Array("application/pdf"),1234),  "characteristic__nuevo_file_characteristic__format_name_file_KO"), 
    
    Array("characteristic", "nuevo_file_characteristic", 56, 145, "ADD", "min_size", Array("a".repeat(6),Array("application/pdf"),1234),        "characteristic__nuevo_file_characteristic__min_size_KO"), 
    Array("characteristic", "nuevo_file_characteristic", 56, 146, "ADD", "min_size", Array("a".repeat(4),Array("application/pdf"),1234),        "characteristic__nuevo_file_characteristic__min_size_KO"), 
    
    Array("characteristic", "nuevo_file_characteristic", 57, 147, "ADD", "max_size", Array("a".repeat(101),Array("application/pdf"),1234),      "characteristic__nuevo_file_characteristic__max_size_KO"), 
    Array("characteristic", "nuevo_file_characteristic", 57, 148, "ADD", "max_size", Array("a".repeat(10134),Array("application/pdf"),1234),    "characteristic__nuevo_file_characteristic__max_size_KO"), 

    Array("characteristic", "nuevo_file_characteristic", 58, 149, "ADD", "OK", Array("a".repeat(14),Array("application/pdf"),1234),             true),
    Array("characteristic", "nuevo_file_characteristic", 58, 150, "ADD", "OK", Array("ficheroName",Array("application/pdf"),1234),              true),
    Array("characteristic", "nuevo_file_characteristic", 58, 151, "ADD", "OK", Array("a".repeat(100),Array("application/pdf"),1234),            true),
    Array("characteristic", "nuevo_file_characteristic", 58, 152, "ADD", "OK", Array("a".repeat(99),Array("application/pdf"),1234),             true),    
    
    //EDIT
    Array("characteristic", "nuevo_file_characteristic", 59, 153, "EDIT", "max_size_file", Array("filename",Array("application/pdf"),300000),  "characteristic__nuevo_file_characteristic__max_size_file_KO"),
    Array("characteristic", "nuevo_file_characteristic", 59, 154, "EDIT", "max_size_file", Array("filename",Array("application/pdf"),200000),  "characteristic__nuevo_file_characteristic__max_size_file_KO"),
    Array("characteristic", "nuevo_file_characteristic", 59, 155, "EDIT", "max_size_file", Array("filename",Array("application/pdf"),200001),  "characteristic__nuevo_file_characteristic__max_size_file_KO"),
    
    Array("characteristic", "nuevo_file_characteristic", 60, 156, "EDIT", "type_file", Array("filename",Array("image/jpeg"),1234),              "characteristic__nuevo_file_characteristic__type_file_KO"),
    Array("characteristic", "nuevo_file_characteristic", 60, 157, "EDIT", "type_file", Array("filename",Array("text/plain"),1234),              "characteristic__nuevo_file_characteristic__type_file_KO"),
    Array("characteristic", "nuevo_file_characteristic", 60, 158, "EDIT", "type_file", Array("filename",Array("image/png"),1234),               "characteristic__nuevo_file_characteristic__type_file_KO"), 
       
    Array("characteristic", "nuevo_file_characteristic", 61, 159, "EDIT", "format_name_file", Array("archivo45",Array("application/pdf"),1234), "characteristic__nuevo_file_characteristic__format_name_file_KO"), 
    Array("characteristic", "nuevo_file_characteristic", 61, 160, "EDIT", "format_name_file", Array("archivoá",Array("application/pdf"),1234),  "characteristic__nuevo_file_characteristic__format_name_file_KO"), 
    Array("characteristic", "nuevo_file_characteristic", 61, 161, "EDIT", "format_name_file", Array("archivo a",Array("application/pdf"),1234), "characteristic__nuevo_file_characteristic__format_name_file_KO"), 
    
    Array("characteristic", "nuevo_file_characteristic", 62, 162, "EDIT", "min_size", Array("a".repeat(6),Array("application/pdf"),1234),       "characteristic__nuevo_file_characteristic__min_size_KO"), 
    Array("characteristic", "nuevo_file_characteristic", 62, 163, "EDIT", "min_size", Array("a".repeat(4),Array("application/pdf"),1234),       "characteristic__nuevo_file_characteristic__min_size_KO"), 
    
    Array("characteristic", "nuevo_file_characteristic", 63, 164, "EDIT", "max_size", Array("a".repeat(101),Array("application/pdf"),1234),     "characteristic__nuevo_file_characteristic__max_size_KO"), 
    Array("characteristic", "nuevo_file_characteristic", 63, 165, "EDIT", "max_size", Array("a".repeat(10134),Array("application/pdf"),1234),   "characteristic__nuevo_file_characteristic__max_size_KO"), 

    Array("characteristic", "nuevo_file_characteristic", 64, 166, "EDIT", "OK", Array("a".repeat(14),Array("application/pdf"),1234),            true),
    Array("characteristic", "nuevo_file_characteristic", 64, 167, "EDIT", "OK", Array("ficheroName",Array("application/pdf"),1234),             true),
    Array("characteristic", "nuevo_file_characteristic", 64, 168, "EDIT", "OK", Array("a".repeat(100),Array("application/pdf"),1234),           true),
    Array("characteristic", "nuevo_file_characteristic", 64, 169, "EDIT", "OK", Array("a".repeat(99),Array("application/pdf"),1234),            true), 
    
    Array("characteristic", "nuevo_file_characteristic", 65, 170, "EDIT", "OK", Array(),                                          true)
);

let pruebas_esp_characteristic = Array(
    //vacio
);

