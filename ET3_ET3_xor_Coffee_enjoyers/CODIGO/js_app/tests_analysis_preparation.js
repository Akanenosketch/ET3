let def_tests_analysis_preparation = Array(
    //Formato test:Array(Entidad,Campo,Numero Test,Descripcion, Accion, Resultado esperado, Mensaje Respuesta)
    //codigo respuesta = entidad__campo__tipoTest_resultado


    //Campo = `id_analysis_preparation` int(11) NOT NULL AUTOINCREMENT, dígitos min 1 max 11
    //Autoincrementable = no se va a comprobar en el add, se comprobara en el edit aunque no hace falta ya que el usuario no puede modificar salvo mediante consola el valor (que ya deberia ser correcto) y se comprobara en el search

    //SEARCH
    Array("analysis_preparation", "id_analysis_preparation", 1, "Cumple tamaño maximo 11",              "SEARCH", "analysis_preparation__id_analysis_preparation__max_size_KO", 'El Identificador supera el tamaño permitido, debe tener como mucho longitud 11.'),
    Array("analysis_preparation", "id_analysis_preparation", 2, "Cumple tener solo digitos",            "SEARCH", "analysis_preparation__id_analysis_preparation__format_KO",   'El Identificador no cumple el formato correcto, debe estar compuesto unicamente por digitos sin 0s a la izquierda.'),
    Array("analysis_preparation", "id_analysis_preparation", 3, "Cumple todo (tener hasta 11 digitos)", "SEARCH", true,                                                         'El Identificador es correcto'),
  

    //Campo = `name_analysis_preparation` varchar(100) NOT NULL UNIQUE,  alfabéticos y espacios sin acentos ni ñ, min 8 max 100

    //ADD
    Array("analysis_preparation", "name_analysis_preparation", 4, "Cumple tamaño minimo 8",                                                               "ADD", 'analysis_preparation__name_analysis_preparation__min_size_KO', 'El Nombre Analisis es demasiado corto, debe tener al menos longitud 8.'),
    Array("analysis_preparation", "name_analysis_preparation", 5, "Cumple tamaño maximo 100",                                                             "ADD", 'analysis_preparation__name_analysis_preparation__max_size_KO', 'El Nombre Analisis supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("analysis_preparation", "name_analysis_preparation", 6, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ",                "ADD", 'analysis_preparation__name_analysis_preparation__format_KO',   'El Nombre Analisis no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
    Array("analysis_preparation", "name_analysis_preparation", 7, "Cumple todo (tener entre 8 y 100 caracteres alfabeticos y espacios sin acentos ni ñ)", "ADD", true,                                                           'El Nombre Analisis es correcto'),


    //EDIT
    Array("analysis_preparation", "name_analysis_preparation", 8, "Cumple tamaño minimo 8",                                                                "EDIT", 'analysis_preparation__name_analysis_preparation__min_size_KO', 'El Nombre Analisis es demasiado corto, debe tener al menos longitud 8.'),
    Array("analysis_preparation", "name_analysis_preparation", 9, "Cumple tamaño maximo 100",                                                              "EDIT", 'analysis_preparation__name_analysis_preparation__max_size_KO', 'El Nombre Analisis supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("analysis_preparation", "name_analysis_preparation", 10, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ",                "EDIT", 'analysis_preparation__name_analysis_preparation__format_KO',   'El Nombre Analisis no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
    Array("analysis_preparation", "name_analysis_preparation", 11, "Cumple todo (tener entre 8 y 100 caracteres alfabeticos y espacios sin acentos ni ñ)", "EDIT", true,                                                           'El Nombre Analisis es correcto'),


    //SEARCH
    Array("analysis_preparation", "name_analysis_preparation", 12, "Cumple tamaño maximo 100",                                                         "SEARCH", 'analysis_preparation__name_analysis_preparation__max_size_KO', 'El Nombre Analisis supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("analysis_preparation", "name_analysis_preparation", 13, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ",            "SEARCH", 'analysis_preparation__name_analysis_preparation__format_KO',   'El Nombre Analisis no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
    Array("analysis_preparation", "name_analysis_preparation", 14, "Cumple todo (tener hasta 100 caracteres alfabeticos y espacios sin acentos ni ñ)", "SEARCH", true,                                                           'El Nombre Analisis es correcto'),
 

    //Campo = `description_analysis_preparation` varchar(5000) NOT NULL,  alfabéticos y espacios sin acentos ni ñ, min 80 max 5000

    //ADD
    Array("analysis_preparation", "description_analysis_preparation", 15, "Cumple tamaño minimo 80",                                                                "ADD", 'analysis_preparation__description_analysis_preparation__min_size_KO', 'La Descripcion es demasiado corta, debe tener al menos longitud 80.'),
    Array("analysis_preparation", "description_analysis_preparation", 16, "Cumple tamaño maximo 5000",                                                              "ADD", 'analysis_preparation__description_analysis_preparation__max_size_KO', 'La Descripcion supera el tamaño permitido, debe tener como mucho longitud 5000.'),
    Array("analysis_preparation", "description_analysis_preparation", 17, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ",                  "ADD", 'analysis_preparation__description_analysis_preparation__format_KO',   'La Descripcion no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
    Array("analysis_preparation", "description_analysis_preparation", 18, "Cumple todo (tener entre 80 y 5000 caracteres alfabeticos y espacios sin acentos ni ñ)", "ADD", true,                                                                  'La Descripcion es correcta'),
 

    //EDIT
    Array("analysis_preparation", "description_analysis_preparation", 19, "Cumple tamaño minimo 80",                                                                "EDIT", 'analysis_preparation__description_analysis_preparation__min_size_KO', 'La Descripcion es demasiado corta, debe tener al menos longitud 80.'),
    Array("analysis_preparation", "description_analysis_preparation", 20, "Cumple tamaño maximo 5000",                                                              "EDIT", 'analysis_preparation__description_analysis_preparation__max_size_KO', 'La Descripcion supera el tamaño permitido, debe tener como mucho longitud 5000.'),
    Array("analysis_preparation", "description_analysis_preparation", 21, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ",                  "EDIT", 'analysis_preparation__description_analysis_preparation__format_KO',   'La Descripcion no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
    Array("analysis_preparation", "description_analysis_preparation", 22, "Cumple todo (tener entre 80 y 5000 caracteres alfabeticos y espacios sin acentos ni ñ)", "EDIT", true,                                                                  'La Descripcion es correcta'),
 

    //SEARCH
    Array("analysis_preparation", "description_analysis_preparation", 23, "Cumple tamaño maximo 5000",                                                         "SEARCH", 'analysis_preparation__description_analysis_preparation__max_size_KO', 'La Descripcion supera el tamaño permitido, debe tener como mucho longitud 5000.'),
    Array("analysis_preparation", "description_analysis_preparation", 24, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ",             "SEARCH", 'analysis_preparation__description_analysis_preparation__format_KO',   'La Descripcion no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
    Array("analysis_preparation", "description_analysis_preparation", 25, "Cumple todo (tener hasta 5000 caracteres alfabeticos y espacios sin acentos ni ñ)", "SEARCH", true,                                                                  'La Descripcion es correcta'),
 

    //Campo = `bib_analysis_preparation` varchar(200) NOT NULL,  alfabéticos con acentos, ñ, espacios y signos de puntuación, min 6 max 200
   
    //ADD
    Array("analysis_preparation", "bib_analysis_preparation", 26, "Cumple tamaño minimo 6",                                                                                   "ADD", 'analysis_preparation__bib_analysis_preparation__min_size_KO', 'La Bibliografia es demasiado corta, debe tener al menos longitud 6.'),
    Array("analysis_preparation", "bib_analysis_preparation", 27, "Cumple tamaño maximo 200",                                                                                 "ADD", 'analysis_preparation__bib_analysis_preparation__max_size_KO', 'La Bibliografia supera el tamaño permitido, debe tener como mucho longitud 200.'),
    Array("analysis_preparation", "bib_analysis_preparation", 28, "Cumple tener solo caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación",                 "ADD", 'analysis_preparation__bib_analysis_preparation__format_KO',   'La Bibliografia no cumple el formato correcto, debe contener solo caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación.'),
    Array("analysis_preparation", "bib_analysis_preparation", 29, "Cumple todo (tener entre 6 y 200 caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación)", "ADD", true,                                                          'La Bibliografia es correcta'),

    
    //EDIT
    Array("analysis_preparation", "bib_analysis_preparation", 30, "Cumple tamaño minimo 6",                                                                                   "EDIT", 'analysis_preparation__bib_analysis_preparation__min_size_KO', 'La Bibliografia es demasiado corta, debe tener al menos longitud 6.'),
    Array("analysis_preparation", "bib_analysis_preparation", 31, "Cumple tamaño maximo 200",                                                                                 "EDIT", 'analysis_preparation__bib_analysis_preparation__max_size_KO', 'La Bibliografia supera el tamaño permitido, debe tener como mucho longitud 200.'),
    Array("analysis_preparation", "bib_analysis_preparation", 32, "Cumple tener solo caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación",                 "EDIT", 'analysis_preparation__bib_analysis_preparation__format_KO',   'La Bibliografia no cumple el formato correcto, debe contener solo caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación.'),
    Array("analysis_preparation", "bib_analysis_preparation", 33, "Cumple todo (tener entre 6 y 200 caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación)", "EDIT", true,                                                          'La Bibliografia es correcta'),

    
    //SEARCH
    Array("analysis_preparation", "bib_analysis_preparation", 34, "Cumple tamaño maximo 200",                                                                             "SEARCH", 'analysis_preparation__bib_analysis_preparation__max_size_KO', 'La Bibliografia supera el tamaño permitido, debe tener como mucho longitud 200.'),
    Array("analysis_preparation", "bib_analysis_preparation", 35, "Cumple tener solo caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación",             "SEARCH", 'analysis_preparation__bib_analysis_preparation__format_KO',   'La Bibliografia no cumple el formato correcto, debe contener solo caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación.'),
    Array("analysis_preparation", "bib_analysis_preparation", 36, "Cumple todo (tener hasta 200 caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación)", "SEARCH", true,                                                          'La Bibliografia es correcta'),


    //Campo = `file_analysis_preparation` varchar(100) NOT NULL,  alfabéticos sin acentos ni ñ ni espacios min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 2000000 bytes.
    //No se lee en el ADD, readonly en EDIT
 
    //SEARCH
    Array("analysis_preparation", "file_analysis_preparation", 37, "Cumple tamaño de nombre maximo 100",                                                     "SEARCH", 'analysis_preparation__file_analysis_preparation__max_size_KO','El nombre del Archivo Analisis supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("analysis_preparation", "file_analysis_preparation", 38, "Cumple tener solo caracteres alfabeticos y puntos sin acentos,ñ o espacios",             "SEARCH", 'analysis_preparation__file_analysis_preparation__format_KO',  'El nombre del Archivo Analisis no cumple el formato correcto, debe contener solo letras y puntos sin acentos ni ñ ni espacios ni signos de puntuacion.'),
    Array("analysis_preparation", "file_analysis_preparation", 39, "Cumple todo (tener hasta 100 caracteres alfabeticos y puntos sin acentos,ñ o espacios)", "SEARCH", true,                                                          'El Archivo Analisis es correcto'),


    //Campo = `nuevo_file_analysis_preparation` varchar(100) NOT NULL,  alfabéticos sin acentos ni ñ ni espacios min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 2000000 bytes.
    //No se lee en el SEARCH

    //ADD
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 40, "Cumple no ser un fichero vacio",                                                       "ADD", 'analysis_preparation__nuevo_file_analysis_preparation__empty_KO',            'El Nuevo Archivo no puede estar vacio, debe enviarse un archivo'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 41, "Cumple tamaño de fichero menor a 2000000 Bytes (2 MB)",                                "ADD", 'analysis_preparation__nuevo_file_analysis_preparation__max_size_file_KO',    'El Nuevo Archivo supera el tamaño permitido, debe pesar menos de 2 MB.'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 42, "Cumple tipo correcto de fichero (.pdf, .doc, .docx)",                                  "ADD", 'analysis_preparation__nuevo_file_analysis_preparation__type_file_KO',        'El Nuevo Archivo no es del tipo correcto, debe ser .pdf,.doc o .docx'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 43, "Cumple tener solo caracteres alfabeticos y puntos sin acentos,ñ o espacios de nombre", "ADD", 'analysis_preparation__nuevo_file_analysis_preparation__format_name_file_KO', 'El nombre del Nuevo Archivo no cumple el formato correcto, debe contener solo letras y puntos sin acentos ni ñ ni espacios ni signos de puntuacion.'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 44, "Cumple tamaño de nombre minimo 7",                                                     "ADD", 'analysis_preparation__nuevo_file_analysis_preparation__min_size_KO',         'El nombre del Nuevo Archivo es demasiado corto, debe tener al menos longitud 7.'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 45, "Cumple tamaño de nombre maximo 100",                                                   "ADD", 'analysis_preparation__nuevo_file_analysis_preparation__max_size_KO',         'El nombre del Nuevo Archivo supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, "Cumple todo",                                                                          "ADD", true,                                                                         'El Nuevo Archivo es correcto'),

    
    //EDIT
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 47, "Cumple ser un fichero vacio",                                                          "EDIT", true,                                                                         'El Nuevo Archivo es correcto'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 48, "Cumple tamaño de fichero menor a 2000000 Bytes (2 MB)",                                "EDIT", 'analysis_preparation__nuevo_file_analysis_preparation__max_size_file_KO',    'El Nuevo Archivo supera el tamaño permitido, debe pesar menos de 2 MB.'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 49, "Cumple tipo correcto de fichero (.pdf, .doc, .docx)",                                  "EDIT", 'analysis_preparation__nuevo_file_analysis_preparation__type_file_KO',        'El Nuevo Archivo no es del tipo correcto, debe ser .pdf,.doc o .docx'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 50, "Cumple tener solo caracteres alfabeticos y puntos sin acentos,ñ o espacios de nombre", "EDIT", 'analysis_preparation__nuevo_file_analysis_preparation__format_name_file_KO', 'El nombre del Nuevo Archivo no cumple el formato correcto, debe contener solo letras y puntos sin acentos ni ñ ni espacios ni signos de puntuacion.'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 51, "Cumple tamaño de nombre minimo 7",                                                     "EDIT", 'analysis_preparation__nuevo_file_analysis_preparation__min_size_KO',         'El nombre del Nuevo Archivo es demasiado corto, debe tener al menos longitud 7.'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 52, "Cumple tamaño de nombre maximo 100",                                                   "EDIT", 'analysis_preparation__nuevo_file_analysis_preparation__max_size_KO',         'El nombre del Nuevo Archivo supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, "Cumple todo",                                                                          "EDIT", true,                                                                         'El Nuevo Archivo es correcto')
);

let pruebas_analysis_preparation = Array(
    
    //Formato test:Array(Entidad,Campo,Numero Test,Numero Prueba, Accion,Valor, Mensaje Respuesta)
    //Campo = `id_analysis_preparation` int(11) NOT NULL AUTOINCREMENT, dígitos min 1 max 11
    //Autoincrementable = no se va a comprobar en el add, se comprobara en el edit aunque no hace falta ya que el usuario no puede modificar salvo mediante consola el valor (que ya deberia ser correcto) y se comprobara en el search

    //SEARCH
    Array("analysis_preparation", "id_analysis_preparation", 1, 1, "SEARCH", "2".repeat(12), "analysis_preparation__id_analysis_preparation__max_size_KO"),
    Array("analysis_preparation", "id_analysis_preparation", 1, 2, "SEARCH", "2".repeat(13), "analysis_preparation__id_analysis_preparation__max_size_KO"),
   
    Array("analysis_preparation", "id_analysis_preparation", 2, 3, "SEARCH", "texto", "analysis_preparation__id_analysis_preparation__format_KO"),
    Array("analysis_preparation", "id_analysis_preparation", 2, 4, "SEARCH", "11.9",  "analysis_preparation__id_analysis_preparation__format_KO"),
    Array("analysis_preparation", "id_analysis_preparation", 2, 5, "SEARCH", "11/9",  "analysis_preparation__id_analysis_preparation__format_KO"),
    Array("analysis_preparation", "id_analysis_preparation", 2, 6, "SEARCH", "-1",    "analysis_preparation__id_analysis_preparation__format_KO"),
    Array("analysis_preparation", "id_analysis_preparation", 2, 7, "SEARCH", "-0",     "analysis_preparation__id_analysis_preparation__format_KO"),
    Array("analysis_preparation", "id_analysis_preparation", 2, 8, "SEARCH", "-01",    "analysis_preparation__id_analysis_preparation__format_KO"),
    
    Array("analysis_preparation", "id_analysis_preparation", 3, 9,  "SEARCH", "2".repeat(1),  true),
    Array("analysis_preparation", "id_analysis_preparation", 3, 10, "SEARCH", "2".repeat(11), true),
    Array("analysis_preparation", "id_analysis_preparation", 3, 11, "SEARCH", "4514",         true),
    Array("analysis_preparation", "id_analysis_preparation", 3, 12, "SEARCH", "",             true),
    

    //Campo = `name_analysis_preparation` varchar(100) NOT NULL UNIQUE,  alfabéticos y espacios sin acentos ni ñ, min 8 max 100

    //ADD
    Array("analysis_preparation", "name_analysis_preparation", 4, 13, "ADD",  "a".repeat(7), "analysis_preparation__name_analysis_preparation__min_size_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 4, 14, "ADD",  "a".repeat(6), "analysis_preparation__name_analysis_preparation__min_size_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 4, 15, "ADD",  "",            "analysis_preparation__name_analysis_preparation__min_size_KO"),

    Array("analysis_preparation", "name_analysis_preparation", 5, 16, "ADD", "a".repeat(101), "analysis_preparation__name_analysis_preparation__max_size_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 5, 17, "ADD", "a".repeat(102), "analysis_preparation__name_analysis_preparation__max_size_KO"),

    Array("analysis_preparation", "name_analysis_preparation", 6, 18, "ADD", "Análisis",                "analysis_preparation__name_analysis_preparation__format_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 6, 19, "ADD", "Analisis Datos A Coruña", "analysis_preparation__name_analysis_preparation__format_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 6, 20, "ADD", "Analisis 45",             "analysis_preparation__name_analysis_preparation__format_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 6, 21, "ADD", "Analisis.",               "analysis_preparation__name_analysis_preparation__format_KO"),

    Array("analysis_preparation", "name_analysis_preparation", 7, 22, "ADD", "a".repeat(9),                    true),
    Array("analysis_preparation", "name_analysis_preparation", 7, 23, "ADD", "a".repeat(8),                    true),
    Array("analysis_preparation", "name_analysis_preparation", 7, 24, "ADD", "a".repeat(99),                   true),
    Array("analysis_preparation", "name_analysis_preparation", 7, 25, "ADD", "a".repeat(100),                  true),
    Array("analysis_preparation", "name_analysis_preparation", 7, 26, "ADD", "Analisis Aguas Fecales Ourense", true),
    Array("analysis_preparation", "name_analysis_preparation", 7, 27, "ADD", "Analisis Calificaciones",        true),
    

    //EDIT
    Array("analysis_preparation", "name_analysis_preparation", 8, 28, "EDIT", "a".repeat(7), "analysis_preparation__name_analysis_preparation__min_size_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 8, 29, "EDIT", "a".repeat(6), "analysis_preparation__name_analysis_preparation__min_size_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 8, 30, "EDIT", "",            "analysis_preparation__name_analysis_preparation__min_size_KO"),

    Array("analysis_preparation", "name_analysis_preparation", 9, 31, "EDIT", "a".repeat(101), "analysis_preparation__name_analysis_preparation__max_size_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 9, 32, "EDIT", "a".repeat(102), "analysis_preparation__name_analysis_preparation__max_size_KO"),

    Array("analysis_preparation", "name_analysis_preparation", 10, 33, "EDIT", "Análisis",                "analysis_preparation__name_analysis_preparation__format_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 10, 34, "EDIT", "Analisis Datos A Coruña", "analysis_preparation__name_analysis_preparation__format_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 10, 35, "EDIT", "Analisis 45",             "analysis_preparation__name_analysis_preparation__format_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 10, 36, "EDIT", "Analisis.",               "analysis_preparation__name_analysis_preparation__format_KO"),

    Array("analysis_preparation", "name_analysis_preparation", 11, 37, "EDIT", "a".repeat(9),                    true),
    Array("analysis_preparation", "name_analysis_preparation", 11, 38, "EDIT", "a".repeat(8),                    true),
    Array("analysis_preparation", "name_analysis_preparation", 11, 39, "EDIT", "a".repeat(99),                   true),
    Array("analysis_preparation", "name_analysis_preparation", 11, 40, "EDIT", "a".repeat(100),                  true),
    Array("analysis_preparation", "name_analysis_preparation", 11, 41, "EDIT", "Analisis Aguas Fecales Ourense", true),
    Array("analysis_preparation", "name_analysis_preparation", 11, 42, "EDIT", "Analisis Calificaciones",        true),

    //SEARCH
    Array("analysis_preparation", "name_analysis_preparation", 12, 43, "SEARCH", "a".repeat(101), "analysis_preparation__name_analysis_preparation__max_size_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 12, 44, "SEARCH", "a".repeat(102), "analysis_preparation__name_analysis_preparation__max_size_KO"),

    Array("analysis_preparation", "name_analysis_preparation", 13, 45, "SEARCH", "Análisis",                "analysis_preparation__name_analysis_preparation__format_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 13, 46, "SEARCH", "Analisis Datos A Coruña", "analysis_preparation__name_analysis_preparation__format_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 13, 47, "SEARCH", "Analisis 45",             "analysis_preparation__name_analysis_preparation__format_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 13, 48, "SEARCH", "Analisis.",               "analysis_preparation__name_analysis_preparation__format_KO"),

    Array("analysis_preparation", "name_analysis_preparation", 14, 49, "SEARCH", "a".repeat(1),                    true),
    Array("analysis_preparation", "name_analysis_preparation", 14, 50, "SEARCH", "a".repeat(8),                    true),
    Array("analysis_preparation", "name_analysis_preparation", 14, 51, "SEARCH", "a".repeat(99),                   true),
    Array("analysis_preparation", "name_analysis_preparation", 14, 52, "SEARCH", "a".repeat(100),                  true),
    Array("analysis_preparation", "name_analysis_preparation", 14, 53, "SEARCH", "Analisis Aguas Fecales Ourense", true),
    Array("analysis_preparation", "name_analysis_preparation", 14, 54, "SEARCH", "Analisis Calificaciones",        true),
    Array("analysis_preparation", "name_analysis_preparation", 14, 55, "SEARCH",  "",                              true),


    //Campo = `description_analysis_preparation` varchar(5000) NOT NULL,  alfabéticos y espacios sin acentos ni ñ, min 80 max 5000

    //ADD
    Array("analysis_preparation", "description_analysis_preparation", 15, 56, "ADD",  "a".repeat(79), "analysis_preparation__description_analysis_preparation__min_size_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 15, 57, "ADD",  "a".repeat(76), "analysis_preparation__description_analysis_preparation__min_size_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 15, 58, "ADD",  "",             "analysis_preparation__description_analysis_preparation__min_size_KO"),

    Array("analysis_preparation", "description_analysis_preparation", 16, 59, "ADD", "a".repeat(5001), "analysis_preparation__description_analysis_preparation__max_size_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 16, 60, "ADD", "a".repeat(5002), "analysis_preparation__description_analysis_preparation__max_size_KO"),

    Array("analysis_preparation", "description_analysis_preparation", 17, 61, "ADD", "Análisis".repeat(10),                "analysis_preparation__description_analysis_preparation__format_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 17, 62, "ADD", "Analisis Datos A Coruña".repeat(10), "analysis_preparation__description_analysis_preparation__format_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 17, 63, "ADD", "Analisis 45".repeat(10),             "analysis_preparation__description_analysis_preparation__format_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 17, 64, "ADD", "Analisis.".repeat(10),               "analysis_preparation__description_analysis_preparation__format_KO"),

    Array("analysis_preparation", "description_analysis_preparation", 18, 65, "ADD", "a".repeat(89),                              true),
    Array("analysis_preparation", "description_analysis_preparation", 18, 66, "ADD", "a".repeat(80),                              true),
    Array("analysis_preparation", "description_analysis_preparation", 18, 67, "ADD", "a".repeat(4999),                            true),
    Array("analysis_preparation", "description_analysis_preparation", 18, 68, "ADD", "a".repeat(5000),                            true),
    Array("analysis_preparation", "description_analysis_preparation", 18, 69, "ADD", "Analisis Aguas Fecales Ourense".repeat(10), true),
    Array("analysis_preparation", "description_analysis_preparation", 18, 70, "ADD", "Analisis Calificaciones".repeat(10),        true),

    //EDIT
    Array("analysis_preparation", "description_analysis_preparation", 19, 71, "EDIT",  "a".repeat(79), "analysis_preparation__description_analysis_preparation__min_size_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 19, 72, "EDIT",  "a".repeat(76), "analysis_preparation__description_analysis_preparation__min_size_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 19, 73, "EDIT",  "",             "analysis_preparation__description_analysis_preparation__min_size_KO"),

    Array("analysis_preparation", "description_analysis_preparation", 20, 74, "EDIT", "a".repeat(5001), "analysis_preparation__description_analysis_preparation__max_size_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 20, 75, "EDIT", "a".repeat(5002), "analysis_preparation__description_analysis_preparation__max_size_KO"),

    Array("analysis_preparation", "description_analysis_preparation", 21, 76, "EDIT", "Análisis".repeat(10),                "analysis_preparation__description_analysis_preparation__format_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 21, 77, "EDIT", "Analisis Datos A Coruña".repeat(10), "analysis_preparation__description_analysis_preparation__format_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 21, 78, "EDIT", "Analisis 45".repeat(10),             "analysis_preparation__description_analysis_preparation__format_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 21, 79, "EDIT", "Analisis.".repeat(10),               "analysis_preparation__description_analysis_preparation__format_KO"),

    Array("analysis_preparation", "description_analysis_preparation", 22, 80, "EDIT", "a".repeat(89),                              true),
    Array("analysis_preparation", "description_analysis_preparation", 22, 81, "EDIT", "a".repeat(80),                              true),
    Array("analysis_preparation", "description_analysis_preparation", 22, 82, "EDIT", "a".repeat(4999),                            true),
    Array("analysis_preparation", "description_analysis_preparation", 22, 83, "EDIT", "a".repeat(5000),                            true),
    Array("analysis_preparation", "description_analysis_preparation", 22, 84, "EDIT", "Analisis Aguas Fecales Ourense".repeat(10), true),
    Array("analysis_preparation", "description_analysis_preparation", 22, 85, "EDIT", "Analisis Calificaciones".repeat(10),        true), 

    //SEARCH
    Array("analysis_preparation", "description_analysis_preparation", 23, 86, "SEARCH", "a".repeat(5001), "analysis_preparation__description_analysis_preparation__max_size_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 23, 87, "SEARCH", "a".repeat(5002), "analysis_preparation__description_analysis_preparation__max_size_KO"),

    Array("analysis_preparation", "description_analysis_preparation", 24, 88, "SEARCH", "Análisis".repeat(10),                "analysis_preparation__description_analysis_preparation__format_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 24, 89, "SEARCH", "Analisis Datos A Coruña".repeat(10), "analysis_preparation__description_analysis_preparation__format_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 24, 90, "SEARCH", "Analisis 45".repeat(10),             "analysis_preparation__description_analysis_preparation__format_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 24, 91, "SEARCH", "Analisis.".repeat(10),               "analysis_preparation__description_analysis_preparation__format_KO"),

    Array("analysis_preparation", "description_analysis_preparation", 25, 92, "SEARCH", "a".repeat(1),                               true),
    Array("analysis_preparation", "description_analysis_preparation", 25, 93, "SEARCH", "a".repeat(80),                              true),
    Array("analysis_preparation", "description_analysis_preparation", 25, 94, "SEARCH", "a".repeat(4999),                            true),
    Array("analysis_preparation", "description_analysis_preparation", 25, 95, "SEARCH", "a".repeat(5000),                            true),
    Array("analysis_preparation", "description_analysis_preparation", 25, 96, "SEARCH", "Analisis Aguas Fecales Ourense".repeat(10), true),
    Array("analysis_preparation", "description_analysis_preparation", 25, 97, "SEARCH", "Analisis Calificaciones".repeat(10),        true), 
    Array("analysis_preparation", "description_analysis_preparation", 25, 98, "SEARCH", "",                                          true),


    //Campo = `bib_analysis_preparation` varchar(200) NOT NULL,  alfabéticos con acentos, ñ, espacios y signos de puntuación, min 6 max 200
   
    //ADD
    Array("analysis_preparation", "bib_analysis_preparation", 26, 99,  "ADD",  "a".repeat(5), "analysis_preparation__bib_analysis_preparation__min_size_KO"),
    Array("analysis_preparation", "bib_analysis_preparation", 26, 100, "ADD",  "a".repeat(4), "analysis_preparation__bib_analysis_preparation__min_size_KO"),
    Array("analysis_preparation", "bib_analysis_preparation", 26, 101, "ADD",  "",            "analysis_preparation__bib_analysis_preparation__min_size_KO"),

    Array("analysis_preparation", "bib_analysis_preparation", 27, 102, "ADD", "a".repeat(201), "analysis_preparation__bib_analysis_preparation__max_size_KO"),
    Array("analysis_preparation", "bib_analysis_preparation", 27, 103, "ADD", "a".repeat(202), "analysis_preparation__bib_analysis_preparation__max_size_KO"),

    Array("analysis_preparation", "bib_analysis_preparation", 28, 104, "ADD", "123456",                      "analysis_preparation__bib_analysis_preparation__format_KO"),
    Array("analysis_preparation", "bib_analysis_preparation", 28, 105, "ADD", "Saludos\nEsto deberia petar", "analysis_preparation__bib_analysis_preparation__format_KO"),
    Array("analysis_preparation", "bib_analysis_preparation", 28, 106, "ADD", "Saludos\tEsto deberia petar", "analysis_preparation__bib_analysis_preparation__format_KO"),
    
    Array("analysis_preparation", "bib_analysis_preparation", 29, 107, "ADD", "Nadie va a leer esto",                        true),
    Array("analysis_preparation", "bib_analysis_preparation", 29, 108, "ADD", "a".repeat(6),                                 true),
    Array("analysis_preparation", "bib_analysis_preparation", 29, 109, "ADD", "a".repeat(7),                                 true),
    Array("analysis_preparation", "bib_analysis_preparation", 29, 110, "ADD", "a".repeat(200),                               true),
    Array("analysis_preparation", "bib_analysis_preparation", 29, 111, "ADD", "a".repeat(199),                               true),
    Array("analysis_preparation", "bib_analysis_preparation", 29, 112, "ADD", `|`.repeat(10),                                true),
    Array("analysis_preparation", "bib_analysis_preparation", 29, 113, "ADD", "Análisis de A Coruña, comunidad de Galicia?", true),
    
    //EDIT
    Array("analysis_preparation", "bib_analysis_preparation", 30, 114, "EDIT",  "a".repeat(5), "analysis_preparation__bib_analysis_preparation__min_size_KO"),
    Array("analysis_preparation", "bib_analysis_preparation", 30, 115, "EDIT",  "a".repeat(4), "analysis_preparation__bib_analysis_preparation__min_size_KO"),
    Array("analysis_preparation", "bib_analysis_preparation", 30, 116, "EDIT",  "",            "analysis_preparation__bib_analysis_preparation__min_size_KO"),

    Array("analysis_preparation", "bib_analysis_preparation", 31, 117, "EDIT", "a".repeat(201), "analysis_preparation__bib_analysis_preparation__max_size_KO"),
    Array("analysis_preparation", "bib_analysis_preparation", 31, 118, "EDIT", "a".repeat(202), "analysis_preparation__bib_analysis_preparation__max_size_KO"),

    Array("analysis_preparation", "bib_analysis_preparation", 32, 119, "EDIT", "123456",                      "analysis_preparation__bib_analysis_preparation__format_KO"),
    Array("analysis_preparation", "bib_analysis_preparation", 32, 120, "EDIT", "Saludos\nEsto deberia petar", "analysis_preparation__bib_analysis_preparation__format_KO"),
    Array("analysis_preparation", "bib_analysis_preparation", 32, 121, "EDIT", "Saludos\tEsto deberia petar", "analysis_preparation__bib_analysis_preparation__format_KO"),
    
    Array("analysis_preparation", "bib_analysis_preparation", 33, 122, "EDIT", "!?!?!?!??!",                                  true),
    Array("analysis_preparation", "bib_analysis_preparation", 33, 123, "EDIT", "a".repeat(6),                                 true),
    Array("analysis_preparation", "bib_analysis_preparation", 33, 124, "EDIT", "a".repeat(7),                                 true),
    Array("analysis_preparation", "bib_analysis_preparation", 33, 125, "EDIT", "a".repeat(200),                               true),
    Array("analysis_preparation", "bib_analysis_preparation", 33, 126, "EDIT", "a".repeat(199),                               true),
    Array("analysis_preparation", "bib_analysis_preparation", 33, 127, "EDIT", `ñÑ !: {~¡«»¿áéíóúÁÉÍÓÚ`,                     true),
    Array("analysis_preparation", "bib_analysis_preparation", 33, 128, "EDIT", "Análisis de A Coruña, comunidad de Galicia?", true),
    
    //SEARCH
    Array("analysis_preparation", "bib_analysis_preparation", 34, 129, "SEARCH", "a".repeat(201), "analysis_preparation__bib_analysis_preparation__max_size_KO"),
    Array("analysis_preparation", "bib_analysis_preparation", 34, 130, "SEARCH", "a".repeat(202), "analysis_preparation__bib_analysis_preparation__max_size_KO"),

    Array("analysis_preparation", "bib_analysis_preparation", 35, 131, "SEARCH", "123456",                      "analysis_preparation__bib_analysis_preparation__format_KO"),
    Array("analysis_preparation", "bib_analysis_preparation", 35, 132, "SEARCH", "Saludos\nEsto deberia petar", "analysis_preparation__bib_analysis_preparation__format_KO"),
    Array("analysis_preparation", "bib_analysis_preparation", 35, 133, "SEARCH", "Saludos\tEsto deberia petar", "analysis_preparation__bib_analysis_preparation__format_KO"),
    
    Array("analysis_preparation", "bib_analysis_preparation", 36, 134, "SEARCH", ".;.,.,.,.,.;:;,.",                            true),
    Array("analysis_preparation", "bib_analysis_preparation", 36, 135, "SEARCH", "a".repeat(6),                                 true),
    Array("analysis_preparation", "bib_analysis_preparation", 36, 136, "SEARCH", "a".repeat(1),                                 true),
    Array("analysis_preparation", "bib_analysis_preparation", 36, 137, "SEARCH", "a".repeat(200),                               true),
    Array("analysis_preparation", "bib_analysis_preparation", 36, 138, "SEARCH", "a".repeat(199),                               true),
    Array("analysis_preparation", "bib_analysis_preparation", 36, 139, "SEARCH", `ñÑ !: {~¡«»¿áéíóúÁÉÍÓÚ`,                      true),
    Array("analysis_preparation", "bib_analysis_preparation", 36, 140, "SEARCH", "Análisis de A Coruña, comunidad de Galicia?", true),
    Array("analysis_preparation", "bib_analysis_preparation", 36, 141, "SEARCH",  "",                                           true),


    //Campo = `file_analysis_preparation` varchar(100) NOT NULL,  alfabéticos sin acentos ni ñ ni espacios min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 2000000 bytes.
    //No se lee en el ADD, readonly en EDIT
 
    //SEARCH
    Array("analysis_preparation", "file_analysis_preparation", 37, 142, "SEARCH", "a".repeat(101), "analysis_preparation__file_analysis_preparation__max_size_KO"),
    Array("analysis_preparation", "file_analysis_preparation", 37, 143, "SEARCH", "a".repeat(102), "analysis_preparation__file_analysis_preparation__max_size_KO"),
    
    Array("analysis_preparation", "file_analysis_preparation", 38, 144, "SEARCH", "archivo45",                   "analysis_preparation__file_analysis_preparation__format_KO"),
    Array("analysis_preparation", "file_analysis_preparation", 38, 145, "SEARCH", "Saludos\nEsto deberia petar", "analysis_preparation__file_analysis_preparation__format_KO"),
    Array("analysis_preparation", "file_analysis_preparation", 38, 146, "SEARCH", "Saludos\tEsto deberia petar", "analysis_preparation__file_analysis_preparation__format_KO"),
    Array("analysis_preparation", "file_analysis_preparation", 38, 147, "SEARCH", "archivoÑ",                    "analysis_preparation__file_analysis_preparation__format_KO"),
    Array("analysis_preparation", "file_analysis_preparation", 38, 148, "SEARCH", "archivoá",                    "analysis_preparation__file_analysis_preparation__format_KO"),
    Array("analysis_preparation", "file_analysis_preparation", 38, 149, "SEARCH", "archivo a",                   "analysis_preparation__file_analysis_preparation__format_KO"),
    Array("analysis_preparation", "file_analysis_preparation", 38, 150, "SEARCH", "archivo_pdf",                 "analysis_preparation__file_analysis_preparation__format_KO"),
    Array("analysis_preparation", "file_analysis_preparation", 38, 151, "SEARCH", "archivo/",                    "analysis_preparation__file_analysis_preparation__format_KO"),
    
    Array("analysis_preparation", "file_analysis_preparation", 39, 152, "SEARCH", "a".repeat(6),    true),
    Array("analysis_preparation", "file_analysis_preparation", 39, 153, "SEARCH", "a".repeat(1),    true),
    Array("analysis_preparation", "file_analysis_preparation", 39, 154, "SEARCH", "a".repeat(100),  true),
    Array("analysis_preparation", "file_analysis_preparation", 39, 155, "SEARCH", "a".repeat(99),   true),
    Array("analysis_preparation", "file_analysis_preparation", 39, 156, "SEARCH", `fichero.pdf`,    true),
    Array("analysis_preparation", "file_analysis_preparation", 39, 157, "SEARCH", "fichero.png",    true),
    Array("analysis_preparation", "file_analysis_preparation", 39, 158, "SEARCH",  "",              true),
    Array("analysis_preparation", "file_analysis_preparation", 39, 159, "SEARCH", "fic.h.e.ro.png", true),
    Array("analysis_preparation", "file_analysis_preparation", 39, 160, "SEARCH", "ficheroName",    true)
);

let pruebas_file_analysis_preparation = Array(
    
    //Formato test:Array(Entidad,Campo,Numero Test,Numero Prueba, Accion,parametro a probar,Valor, Mensaje Respuesta)
    //Campo = `nuevo_file_analysis_preparation` varchar(100) NOT NULL,  alfabéticos sin acentos ni ñ ni espacios min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 2000000 bytes.
    //No se lee en el SEARCH

    //ADD
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 40, 161, "ADD", "Existe", Array(), "analysis_preparation__nuevo_file_analysis_preparation__empty_KO"),

    Array("analysis_preparation", "nuevo_file_analysis_preparation", 41, 162, "ADD", "max_size_file", Array("filename",Array("application/pdf"),3000000), "analysis_preparation__nuevo_file_analysis_preparation__max_size_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 41, 163, "ADD", "max_size_file", Array("filename",Array("application/pdf"),2000000), "analysis_preparation__nuevo_file_analysis_preparation__max_size_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 41, 164, "ADD", "max_size_file", Array("filename",Array("application/pdf"),2000001), "analysis_preparation__nuevo_file_analysis_preparation__max_size_file_KO"),
    
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 42, 165, "ADD", "type_file", Array("filename",Array("image/jpeg"),1234),               "analysis_preparation__nuevo_file_analysis_preparation__type_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 42, 166, "ADD", "type_file", Array("filename",Array("application/octet-stream"),1234), "analysis_preparation__nuevo_file_analysis_preparation__type_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 42, 167, "ADD", "type_file", Array("filename",Array("text/plain"),1234),               "analysis_preparation__nuevo_file_analysis_preparation__type_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 42, 168, "ADD", "type_file", Array("filename",Array("image/png"),1234),                "analysis_preparation__nuevo_file_analysis_preparation__type_file_KO"), 
       
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 43, 169, "ADD", "format_name_file", Array("archivo45",Array("application/pdf"),1234),                   "analysis_preparation__nuevo_file_analysis_preparation__format_name_file_KO"), 
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 43, 170, "ADD", "format_name_file", Array("Saludos\nEsto deberia petar",Array("application/pdf"),1234), "analysis_preparation__nuevo_file_analysis_preparation__format_name_file_KO"), 
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 43, 171, "ADD", "format_name_file", Array("Saludos\tEsto deberia petar",Array("application/pdf"),1234), "analysis_preparation__nuevo_file_analysis_preparation__format_name_file_KO"), 
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 43, 172, "ADD", "format_name_file", Array("archivoÑ",Array("application/pdf"),1234),                    "analysis_preparation__nuevo_file_analysis_preparation__format_name_file_KO"), 
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 43, 173, "ADD", "format_name_file", Array("archivoá",Array("application/pdf"),1234),                    "analysis_preparation__nuevo_file_analysis_preparation__format_name_file_KO"), 
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 43, 174, "ADD", "format_name_file", Array("archivo_pdf",Array("application/pdf"),1234),                 "analysis_preparation__nuevo_file_analysis_preparation__format_name_file_KO"), 
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 43, 175, "ADD", "format_name_file", Array("archivo a",Array("application/pdf"),1234),                   "analysis_preparation__nuevo_file_analysis_preparation__format_name_file_KO"), 
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 43, 176, "ADD", "format_name_file", Array("archivo/",Array("application/pdf"),1234),                    "analysis_preparation__nuevo_file_analysis_preparation__format_name_file_KO"), 
    
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 44, 177, "ADD", "min_size", Array("a".repeat(6),Array("application/pdf"),1234), "analysis_preparation__nuevo_file_analysis_preparation__min_size_KO"), 
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 44, 178, "ADD", "min_size", Array("a".repeat(4),Array("application/pdf"),1234), "analysis_preparation__nuevo_file_analysis_preparation__min_size_KO"), 
    
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 45, 179, "ADD", "max_size", Array("a".repeat(101),Array("application/pdf"),1234),   "analysis_preparation__nuevo_file_analysis_preparation__max_size_KO"), 
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 45, 180, "ADD", "max_size", Array("a".repeat(10134),Array("application/pdf"),1234), "analysis_preparation__nuevo_file_analysis_preparation__max_size_KO"), 

    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, 181, "ADD", "OK", Array("a".repeat(14),Array("application/pdf"),1234),                                                         true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, 182, "ADD", "OK", Array("a".repeat(14),Array("application/pdf"),1000000),                                                      true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, 183, "ADD", "OK", Array("a".repeat(14),Array("application/pdf"),1999999),                                                      true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, 184, "ADD", "OK", Array("a".repeat(13),Array("application/pdf"),1234),                                                         true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, 185, "ADD", "OK", Array("a".repeat(13),Array("application/msword"),1234),                                                      true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, 186, "ADD", "OK", Array("a".repeat(13),Array("application/vnd.openxmlformats-officedocument.wordprocessingml.document"),1234), true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, 187, "ADD", "OK", Array("fichero.pdf",Array("application/pdf"),1234),                                                          true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, 188, "ADD", "OK", Array("fichero.png",Array("application/pdf"),1234),                                                          true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, 189, "ADD", "OK", Array("fic.h.e.ro.png",Array("application/pdf"),1234),                                                       true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, 190, "ADD", "OK", Array("ficheroName",Array("application/pdf"),1234),                                                          true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, 191, "ADD", "OK", Array("a".repeat(7),Array("application/pdf"),1234),                                                          true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, 192, "ADD", "OK", Array("a".repeat(8),Array("application/pdf"),1234),                                                          true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, 193, "ADD", "OK", Array("a".repeat(100),Array("application/pdf"),1234),                                                        true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, 194, "ADD", "OK", Array("a".repeat(99),Array("application/pdf"),1234),                                                         true),
  
    
    //EDIT
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 47, 195, "EDIT", "Empty", Array(), true),
    
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 48, 196, "EDIT", "max_size_file", Array("filename",Array("application/pdf"),2000000), "analysis_preparation__nuevo_file_analysis_preparation__max_size_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 48, 197, "EDIT", "max_size_file", Array("filename",Array("application/pdf"),2000001), "analysis_preparation__nuevo_file_analysis_preparation__max_size_file_KO"),
    
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 49, 198, "EDIT", "type_file", Array("filename",Array("image/jpeg"),1234),               "analysis_preparation__nuevo_file_analysis_preparation__type_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 49, 199, "EDIT", "type_file", Array("filename",Array("application/octet-stream"),1234), "analysis_preparation__nuevo_file_analysis_preparation__type_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 49, 200, "EDIT", "type_file", Array("filename",Array("text/plain"),1234),               "analysis_preparation__nuevo_file_analysis_preparation__type_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 49, 201, "EDIT", "type_file", Array("filename",Array("image/png"),1234),                "analysis_preparation__nuevo_file_analysis_preparation__type_file_KO"), 
       
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 50, 202, "EDIT", "format_name_file", Array("archivo45",Array("application/pdf"),1234),                   "analysis_preparation__nuevo_file_analysis_preparation__format_name_file_KO"), 
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 50, 203, "EDIT", "format_name_file", Array("Saludos\nEsto deberia petar",Array("application/pdf"),1234), "analysis_preparation__nuevo_file_analysis_preparation__format_name_file_KO"), 
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 50, 204, "EDIT", "format_name_file", Array("Saludos\tEsto deberia petar",Array("application/pdf"),1234), "analysis_preparation__nuevo_file_analysis_preparation__format_name_file_KO"), 
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 50, 205, "EDIT", "format_name_file", Array("archivoÑ",Array("application/pdf"),1234),                    "analysis_preparation__nuevo_file_analysis_preparation__format_name_file_KO"), 
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 50, 206, "EDIT", "format_name_file", Array("archivoá",Array("application/pdf"),1234),                    "analysis_preparation__nuevo_file_analysis_preparation__format_name_file_KO"), 
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 50, 207, "EDIT", "format_name_file", Array("archivo_pdf",Array("application/pdf"),1234),                 "analysis_preparation__nuevo_file_analysis_preparation__format_name_file_KO"), 
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 50, 208, "EDIT", "format_name_file", Array("archivo a",Array("application/pdf"),1234),                   "analysis_preparation__nuevo_file_analysis_preparation__format_name_file_KO"), 
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 50, 209, "EDIT", "format_name_file", Array("archivo/",Array("application/pdf"),1234),                    "analysis_preparation__nuevo_file_analysis_preparation__format_name_file_KO"), 
    
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 51, 210, "EDIT", "min_size", Array("a".repeat(6),Array("application/pdf"),1234), "analysis_preparation__nuevo_file_analysis_preparation__min_size_KO"), 
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 51, 211, "EDIT", "min_size", Array("a".repeat(4),Array("application/pdf"),1234), "analysis_preparation__nuevo_file_analysis_preparation__min_size_KO"), 
    
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 52, 212, "EDIT", "max_size", Array("a".repeat(101),Array("application/pdf"),1234),   "analysis_preparation__nuevo_file_analysis_preparation__max_size_KO"), 
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 52, 213, "EDIT", "max_size", Array("a".repeat(10134),Array("application/pdf"),1234), "analysis_preparation__nuevo_file_analysis_preparation__max_size_KO"), 

    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, 214, "EDIT", "OK", Array("a".repeat(14),Array("application/pdf"),1234),                                                         true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, 215, "EDIT", "OK", Array("a".repeat(14),Array("application/pdf"),1000000),                                                      true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, 216, "EDIT", "OK", Array("a".repeat(14),Array("application/pdf"),1999999),                                                      true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, 217, "EDIT", "OK", Array("a".repeat(13),Array("application/pdf"),1234),                                                         true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, 218, "EDIT", "OK", Array("a".repeat(13),Array("application/msword"),1234),                                                      true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, 219, "EDIT", "OK", Array("a".repeat(13),Array("application/vnd.openxmlformats-officedocument.wordprocessingml.document"),1234), true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, 220, "EDIT", "OK", Array("fichero.pdf",Array("application/pdf"),1234),                                                          true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, 221, "EDIT", "OK", Array("fichero.png",Array("application/pdf"),1234),                                                          true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, 222, "EDIT", "OK", Array("fic.h.e.ro.png",Array("application/pdf"),1234),                                                       true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, 223, "EDIT", "OK", Array("ficheroName",Array("application/pdf"),1234),                                                          true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, 224, "EDIT", "OK", Array("a".repeat(7),Array("application/pdf"),1234),                                                          true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, 225, "EDIT", "OK", Array("a".repeat(8),Array("application/pdf"),1234),                                                          true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, 226, "EDIT", "OK", Array("a".repeat(100),Array("application/pdf"),1234),                                                        true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, 227, "EDIT", "OK", Array("a".repeat(99),Array("application/pdf"),1234),                                                         true)
);

let pruebas_esp_analysis_preparation = Array(
    //vacio
);