let def_tests_project = Array(
    //Formato test:Array(Entidad,Campo,Numero Test,Descripcion, Accion, Resultado esperado, Mensaje Respuesta)
    //codigo respuesta = entidad__campo__tipoTest_resultado


    //Campo = `id_project` int(11) NOT NULL, dígitos min 1 max 11
    //Autoincrementable = no se va a comprobar en el add, se comprobara en el edit pero el usuario no puede modificar salvo mediante consola el valor (que ya deberia ser correcto) y se comprobara en el search

    //SEARCH
    Array("project", "id_project", 1, "Cumple tamaño maximo 11",              "SEARCH", "project__id_project__max_size_KO", 'El Identificador supera el tamaño permitido, debe tener como mucho longitud 11.'),
    Array("project", "id_project", 2, "Cumple tener solo digitos",            "SEARCH", "project__id_project__format_KO",   'El Identificador no cumple el formato correcto, debe estar compuesto unicamente por digitos sin 0s a la izquierda.'),
    Array("project", "id_project", 3, "Cumple todo (tener hasta 11 digitos)", "SEARCH", true,                               'El Identificador es correcto'),


    //Campo = `name_project` varchar(500) NOT NULL UNIQUE, alfabéticos y espacios sin acentos ni ñ, min 15 max 100

    //ADD
    Array("project", "name_project", 4, "Cumple tamaño minimo 15",                                                               "ADD", 'project__name_project__min_size_KO', 'El Nombre Proyecto es demasiado corto, debe tener al menos longitud 15.'),
    Array("project", "name_project", 5, "Cumple tamaño maximo 100",                                                              "ADD", 'project__name_project__max_size_KO', 'El Nombre Proyecto supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("project", "name_project", 6, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ",                 "ADD", 'project__name_project__format_KO',   'El Nombre Proyecto no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
    Array("project", "name_project", 7, "Cumple todo (tener entre 15 y 100 caracteres alfabeticos y espacios sin acentos ni ñ)", "ADD", true,                                 'El Nombre Proyecto es correcto'),


    //EDIT
    Array("project", "name_project", 8, "Cumple tamaño minimo 15",                                                                "EDIT", 'project__name_project__min_size_KO', 'El Nombre Proyecto es demasiado corto, debe tener al menos longitud 15.'),
    Array("project", "name_project", 9, "Cumple tamaño maximo 100",                                                               "EDIT", 'project__name_project__max_size_KO', 'El Nombre Proyecto supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("project", "name_project", 10, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ",                 "EDIT", 'project__name_project__format_KO',   'El Nombre Proyecto no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
    Array("project", "name_project", 11, "Cumple todo (tener entre 15 y 100 caracteres alfabeticos y espacios sin acentos ni ñ)", "EDIT", true,                                 'El Nombre Proyecto es correcto'),


    //SEARCH
    Array("project", "name_project", 12, "Cumple tamaño maximo 100",                                                         "SEARCH", 'project__name_project__max_size_KO', 'El Nombre Proyecto supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("project", "name_project", 13, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ",            "SEARCH", 'project__name_project__format_KO',   'El Nombre Proyecto no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
    Array("project", "name_project", 14, "Cumple todo (tener hasta 100 caracteres alfabeticos y espacios sin acentos ni ñ)", "SEARCH", true,                                 'El Nombre Proyecto es correcto'),


    //Campo = `start_date_project` date NOT NULL, fecha válida con formato dd/mm/aaaa 

    //ADD
    Array("project", "start_date_project", 15, "Cumple tener formato dd/mm/aaaa",                            "ADD", 'project__start_date_project__format_KO',   'El formato de la Fecha de Inicio es incorrecto, debe seguir un formato dd/mm/yyyy.'),
    Array("project", "start_date_project", 16, "Cumple tener una fecha valida",                              "ADD", 'project__start_date_project__valid_KO',    'El valor de la Fecha de Inicio es incorrecto, debe ser una fecha existente en el calendario gregoriano.'),
    Array("project", "start_date_project", 17, "Cumple todo (tener una fecha valida en formato dd/mm/aaaa)", "ADD", true,                                       'La Fecha de Inicio es correcta'),


    //EDIT
    Array("project", "start_date_project", 18, "Cumple tener formato dd/mm/aaaa",                            "EDIT", 'project__start_date_project__format_KO',   'El formato de la Fecha de Inicio es incorrecto, debe seguir un formato dd/mm/yyyy.'),
    Array("project", "start_date_project", 19, "Cumple tener una fecha valida",                              "EDIT", 'project__start_date_project__valid_KO',    'El valor de la Fecha de Inicio es incorrecto, debe ser una fecha existente en el calendario gregoriano.'),
    Array("project", "start_date_project", 20, "Cumple todo (tener una fecha valida en formato dd/mm/aaaa)", "EDIT", true,                                       'La Fecha de Inicio es correcta'),


    //SEARCH
    Array("project", "start_date_project", 21, "Cumple tener formato dd/mm/aaaa o una substring o ser vacio",        "SEARCH", 'project__start_date_project__format_SEARCH_KO', 'El formato de la Fecha de Inicio es incorrecto, debe ser al menos una parte de una fecha dd/mm/yyyy.'),
    Array("project", "start_date_project", 22, "Cumple todo (tener formato dd/mm/aaaa o una substring o ser vacio)", "SEARCH", true,                                            'La Fecha de Inicio es correcta'),


    //Campo = `end_date_project` date NOT NULL, fecha válida con formato dd/mm/aaaa y superior a start_date_project

    //ADD
    Array("project", "end_date_project", 23, "Cumple tener formato dd/mm/aaaa",                            "ADD", 'project__end_date_project__format_KO',   'El formato de la Fecha de Fin es incorrecto, debe seguir un formato dd/mm/yyyy.'),
    Array("project", "end_date_project", 24, "Cumple tener una fecha valida",                              "ADD", 'project__end_date_project__valid_KO',    'El valor de la Fecha de Fin es incorrecto, debe ser una fecha existente en el calendario gregoriano.'),
    Array("project", "end_date_project", 25, "Cumple todo (tener una fecha valida en formato dd/mm/aaaa)", "ADD", true,                                     'La Fecha de Fin es correcta'),


    //EDIT
    Array("project", "end_date_project", 26, "Cumple tener formato dd/mm/aaaa",                            "EDIT", 'project__end_date_project__format_KO',   'El formato de la Fecha de Fin es incorrecto, debe seguir un formato dd/mm/yyyy.'),
    Array("project", "end_date_project", 27, "Cumple tener una fecha valida",                              "EDIT", 'project__end_date_project__valid_KO',    'El valor de la Fecha de Fin es incorrecto, debe ser una fecha existente en el calendario gregoriano.'),
    Array("project", "end_date_project", 28, "Cumple todo (tener una fecha valida en formato dd/mm/aaaa)", "EDIT", true,                                     'La Fecha de Fin es correcta'),


    //SEARCH
    Array("project", "end_date_project", 29, "Cumple tener formato dd/mm/aaaa o una substring o ser vacio",        "SEARCH", 'project__end_date_project__format_SEARCH_KO', 'El formato de la Fecha de Fin es incorrecto, debe ser al menos una parte de una fecha dd/mm/yyyy.'),
    Array("project", "end_date_project", 30, "Cumple todo (tener formato dd/mm/aaaa o una substring o ser vacio)", "SEARCH", true,                                          'La Fecha de Fin es correcta'),


    //Campo = `responsable_project` varchar(60) NOT NULL, alfabéticos con acentos, ñ y espacios min 6 max 60 

    //ADD
    Array("project", "responsable_project", 31, "Cumple tamaño minimo 6",                                                            "ADD", 'project__responsable_project__min_size_KO', 'El Responsable es demasiado corto, debe tener al menos longitud 6.'),
    Array("project", "responsable_project", 32, "Cumple tamaño maximo 60",                                                           "ADD", 'project__responsable_project__max_size_KO', 'El Responsable supera el tamaño permitido, debe tener como mucho longitud 60.'),
    Array("project", "responsable_project", 33, "Cumple tener solo caracteres alfabéticos con acentos, ñ y espacios",                "ADD", 'project__responsable_project__format_KO',   'El Responsable no cumple el formato correcto, debe contener solo caracteres alfabéticos con acentos, ñ y espacios.'),
    Array("project", "responsable_project", 34, "Cumple todo (tener entre 6 y 60 caracteres alfabéticos con acentos, ñ y espacios)", "ADD", true,                                        'El Responsable es correcto'),


    //EDIT
    Array("project", "responsable_project", 35, "Cumple tamaño minimo 6",                                                            "EDIT", 'project__responsable_project__min_size_KO', 'El Responsable es demasiado corto, debe tener al menos longitud 6.'),
    Array("project", "responsable_project", 36, "Cumple tamaño maximo 60",                                                           "EDIT", 'project__responsable_project__max_size_KO', 'El Responsable supera el tamaño permitido, debe tener como mucho longitud 60.'),
    Array("project", "responsable_project", 37, "Cumple tener solo caracteres alfabéticos con acentos, ñ y espacios",                "EDIT", 'project__responsable_project__format_KO',   'El Responsable no cumple el formato correcto, debe contener solo caracteres alfabéticos con acentos, ñ y espacios.'),
    Array("project", "responsable_project", 38, "Cumple todo (tener entre 6 y 60 caracteres alfabéticos con acentos, ñ y espacios)", "EDIT", true,                                        'El Responsable es correcto'),


    //SEARCH
    Array("project", "responsable_project", 39, "Cumple tamaño maximo 60",                                                       "SEARCH", 'project__responsable_project__max_size_KO', 'El Responsable supera el tamaño permitido, debe tener como mucho longitud 60.'),
    Array("project", "responsable_project", 40, "Cumple tener solo caracteres alfabéticos con acentos, ñ y espacios",            "SEARCH", 'project__responsable_project__format_KO',   'El Responsable no cumple el formato correcto, debe contener solo caracteres alfabéticos con acentos, ñ y espacios.'),
    Array("project", "responsable_project", 41, "Cumple todo (tener hasta 60 caracteres alfabéticos con acentos, ñ y espacios)", "SEARCH", true,                                        'El Responsable es correcto'),


    //Campo = `organization_project` varchar(100) NOT NULL, alfabéticos con acentos, ñ y espacios min 6 max 100 

    //ADD
    Array("project", "organization_project", 42, "Cumple tamaño minimo 6",                                                             "ADD", 'project__organization_project__min_size_KO', 'La Organizacion es demasiado corta, debe tener al menos longitud 6.'),
    Array("project", "organization_project", 43, "Cumple tamaño maximo 100",                                                           "ADD", 'project__organization_project__max_size_KO', 'La Organizacion supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("project", "organization_project", 44, "Cumple tener solo caracteres alfabéticos con acentos, ñ y espacios",                 "ADD", 'project__organization_project__format_KO',   'La Organizacion no cumple el formato correcto, debe contener solo caracteres alfabéticos con acentos, ñ y espacios.'),
    Array("project", "organization_project", 45, "Cumple todo (tener entre 6 y 100 caracteres alfabéticos con acentos, ñ y espacios)", "ADD", true,                                         'La Organizacion es correcta'),


    //EDIT
    Array("project", "organization_project", 46, "Cumple tamaño minimo 6",                                                             "EDIT", 'project__organization_project__min_size_KO', 'La Organizacion es demasiado corta, debe tener al menos longitud 6.'),
    Array("project", "organization_project", 47, "Cumple tamaño maximo 100",                                                           "EDIT", 'project__organization_project__max_size_KO', 'La Organizacion supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("project", "organization_project", 48, "Cumple tener solo caracteres alfabéticos con acentos, ñ y espacios",                 "EDIT", 'project__organization_project__format_KO',   'La Organizacion no cumple el formato correcto, debe contener solo caracteres alfabéticos con acentos, ñ y espacios.'),
    Array("project", "organization_project", 49, "Cumple todo (tener entre 6 y 100 caracteres alfabéticos con acentos, ñ y espacios)", "EDIT", true,                                         'La Organizacion es correcta'),


    //SEARCH
    Array("project", "organization_project", 50, "Cumple tamaño maximo 100",                                                       "SEARCH", 'project__organization_project__max_size_KO', 'La Organizacion supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("project", "organization_project", 51, "Cumple tener solo caracteres alfabéticos con acentos, ñ y espacios",             "SEARCH", 'project__organization_project__format_KO',   'La Organizacion no cumple el formato correcto, debe contener solo caracteres alfabéticos con acentos, ñ y espacios.'),
    Array("project", "organization_project", 52, "Cumple todo (tener hasta 100 caracteres alfabéticos con acentos, ñ y espacios)", "SEARCH", true,                                         'La Organizacion es correcta'),


    //Campo = `description_project` varchar(500) NOT NULL, Cualquier ascii min 30 max 500 

    //ADD
    Array("project", "description_project", 53, "Cumple tamaño minimo 30",                             "ADD", 'project__description_project__min_size_KO', 'La Descripcion es demasiado corta, debe tener al menos longitud 30.'),
    Array("project", "description_project", 54, "Cumple tamaño maximo 500",                            "ADD", 'project__description_project__max_size_KO', 'La Descripcion supera el tamaño permitido, debe tener como mucho longitud 500.'),
    Array("project", "description_project", 55, "Cumple todo (tener entre 30 y 500 caracteres ascii)", "ADD", true,                                        'La Descripcion es correcta'),


    //EDIT
    Array("project", "description_project", 56, "Cumple tamaño minimo 30",                             "EDIT", 'project__description_project__min_size_KO', 'La Descripcion es demasiado corta, debe tener al menos longitud 30.'),
    Array("project", "description_project", 57, "Cumple tamaño maximo 500",                            "EDIT", 'project__description_project__max_size_KO', 'La Descripcion supera el tamaño permitido, debe tener como mucho longitud 500.'),
    Array("project", "description_project", 58, "Cumple todo (tener entre 30 y 500 caracteres ascii)", "EDIT", true,                                        'La Descripcion es correcta'),


    //SEARCH
    Array("project", "description_project", 59, "Cumple tamaño maximo 500",                       "SEARCH", 'project__description_project__max_size_KO', 'La Descripcion supera el tamaño permitido, debe tener como mucho longitud 500.'),
    Array("project", "description_project", 60, "Cumple todo (tener hasta 500 caracteres ascii)", "SEARCH", true,                                        'La Descripcion es correcta'),


    //Campo = `code_project` varchar(50) NOT NULL, alfabéticos con ñ, espacios y signos de puntuación, sin acentos, min 6 max 50 

    //ADD
    Array("project", "code_project", 61, "Cumple tamaño minimo 6",                                                                         "ADD", 'project__code_project__min_size_KO', 'El Codigo Proyecto es demasiado corto, debe tener al menos longitud 6.'),
    Array("project", "code_project", 62, "Cumple tamaño maximo 50",                                                                        "ADD", 'project__code_project__max_size_KO', 'El Codigo Proyecto supera el tamaño permitido, debe tener como mucho longitud 50.'),
    Array("project", "code_project", 63, "Cumple tener solo caracteres alfabéticos con ñ, espacios y signos de puntuación",                "ADD", 'project__code_project__format_KO',   'El Codigo Proyecto no cumple el formato correcto, debe contener solo caracteres alfabéticos con ñ, espacios y signos de puntuación, sin acentos.'),
    Array("project", "code_project", 64, "Cumple todo (tener entre 6 y 50 caracteres alfabéticos con ñ, espacios y signos de puntuación)", "ADD", true,                                 'El Codigo Proyecto es correcto'),


    //EDIT
    Array("project", "code_project", 65, "Cumple tamaño minimo 6",                                                                         "EDIT", 'project__code_project__min_size_KO', 'El Codigo Proyecto es demasiado corto, debe tener al menos longitud 6.'),
    Array("project", "code_project", 66, "Cumple tamaño maximo 50",                                                                        "EDIT", 'project__code_project__max_size_KO', 'El Codigo Proyecto supera el tamaño permitido, debe tener como mucho longitud 50.'),
    Array("project", "code_project", 67, "Cumple tener solo caracteres alfabéticos con ñ, espacios y signos de puntuación",                "EDIT", 'project__code_project__format_KO',   'El Codigo Proyecto no cumple el formato correcto, debe contener solo caracteres alfabéticos con ñ, espacios y signos de puntuación, sin acentos.'),
    Array("project", "code_project", 68, "Cumple todo (tener entre 6 y 50 caracteres alfabéticos con ñ, espacios y signos de puntuación)", "EDIT", true,                                 'El Codigo Proyecto es correcto'),


    //SEARCH
    Array("project", "code_project", 69, "Cumple tamaño maximo 50",                                                                    "SEARCH", 'project__code_project__max_size_KO', 'El Codigo Proyecto supera el tamaño permitido, debe tener como mucho longitud 50.'),
    Array("project", "code_project", 70, "Cumple tener solo caracteres alfabéticos con ñ, espacios y signos de puntuación",            "SEARCH", 'project__code_project__format_KO',   'El Codigo Proyecto no cumple el formato correcto, debe contener solo caracteres alfabéticos con ñ, espacios y signos de puntuación, sin acentos.'),
    Array("project", "code_project", 71, "Cumple todo (tener hasta 50 caracteres alfabéticos con ñ, espacios y signos de puntuación)", "SEARCH", true,                                 'El Codigo Proyecto es correcto'),


    //Campo = `acronym_project` varchar(15) NOT NULL, alfabéticos con ñ y signos de puntuación, sin acentos ni espacios, min 6 max 15 

    //ADD
    Array("project", "acronym_project", 72, "Cumple tamaño minimo 6",                                                               "ADD", 'project__acronym_project__min_size_KO', 'El Acronimo Proyecto es demasiado corto, debe tener al menos longitud 6.'),
    Array("project", "acronym_project", 73, "Cumple tamaño maximo 15",                                                              "ADD", 'project__acronym_project__max_size_KO', 'El Acronimo Proyecto supera el tamaño permitido, debe tener como mucho longitud 15.'),
    Array("project", "acronym_project", 74, "Cumple tener solo caracteres alfabéticos con ñ y signos de puntuación",                "ADD", 'project__acronym_project__format_KO',   'El Acronimo Proyecto no cumple el formato correcto, debe contener solo caracteres alfabéticos con ñ y signos de puntuación, sin acentos ni espacios.'),
    Array("project", "acronym_project", 75, "Cumple todo (tener entre 6 y 15 caracteres alfabéticos con ñ y signos de puntuación)", "ADD", true,                                    'El Acronimo Proyecto es correcto'),


    //EDIT
    Array("project", "acronym_project", 76, "Cumple tamaño minimo 6",                                                               "EDIT", 'project__acronym_project__min_size_KO', 'El Acronimo Proyecto es demasiado corto, debe tener al menos longitud 6.'),
    Array("project", "acronym_project", 77, "Cumple tamaño maximo 15",                                                              "EDIT", 'project__acronym_project__max_size_KO', 'El Acronimo Proyecto supera el tamaño permitido, debe tener como mucho longitud 15.'),
    Array("project", "acronym_project", 78, "Cumple tener solo caracteres alfabéticos con ñ y signos de puntuación",                "EDIT", 'project__acronym_project__format_KO',   'El Acronimo Proyecto no cumple el formato correcto, debe contener solo caracteres alfabéticos con ñ y signos de puntuación, sin acentos ni espacios.'),
    Array("project", "acronym_project", 79, "Cumple todo (tener entre 6 y 15 caracteres alfabéticos con ñ y signos de puntuación)", "EDIT", true,                                    'El Acronimo Proyecto es correcto'),


    //SEARCH
    Array("project", "acronym_project", 80, "Cumple tamaño maximo 15",                                                          "SEARCH", 'project__acronym_project__max_size_KO', 'El Acronimo Proyecto supera el tamaño permitido, debe tener como mucho longitud 15.'),
    Array("project", "acronym_project", 81, "Cumple tener solo caracteres alfabéticos con ñ y signos de puntuación",            "SEARCH", 'project__acronym_project__format_KO',   'El Acronimo Proyecto no cumple el formato correcto, debe contener solo caracteres alfabéticos con ñ y signos de puntuación, sin acentos ni espacios.'),
    Array("project", "acronym_project", 82, "Cumple todo (tener hasta 15 caracteres alfabéticos con ñ y signos de puntuación)", "SEARCH", true,                                    'El Acronimo Proyecto es correcto'),


    //Campo = `id_sampling_methodology` int(11) NOT NULL, dígitos min 1 max 11

    //ADD
    Array("project", "id_sampling_methodology", 83, "Cumple tamaño minimo 1",                   "ADD", 'project__id_sampling_methodology__min_size_KO', 'El Id Metodologia de Muestreo no puede estar vacio, debe tener al menos longitud 1.'),
    Array("project", "id_sampling_methodology", 84, "Cumple tamaño maximo 11",                  "ADD", 'project__id_sampling_methodology__max_size_KO', 'El Id Metodologia de Muestreo supera el tamaño permitido, debe tener como mucho longitud 11.'),
    Array("project", "id_sampling_methodology", 85, "Cumple tener solo digitos",                "ADD", 'project__id_sampling_methodology__format_KO',   'El Id Metodologia de Muestreo no cumple el formato correcto, debe estar compuesto unicamente por digitos sin 0s a la izquierda.'),
    Array("project", "id_sampling_methodology", 86, "Cumple todo (tener entre 1 y 11 digitos)", "ADD", true,                                            'El Id Metodologia de Muestreo es correcto'),


    //EDIT
    Array("project", "id_sampling_methodology", 87, "Cumple tamaño minimo 1",                   "EDIT", 'project__id_sampling_methodology__min_size_KO', 'El Id Metodologia de Muestreo no puede estar vacio, debe tener al menos longitud 1.'),
    Array("project", "id_sampling_methodology", 88, "Cumple tamaño maximo 11",                  "EDIT", 'project__id_sampling_methodology__max_size_KO', 'El Id Metodologia de Muestreo supera el tamaño permitido, debe tener como mucho longitud 11.'),
    Array("project", "id_sampling_methodology", 89, "Cumple tener solo digitos",                "EDIT", 'project__id_sampling_methodology__format_KO',   'El Id Metodologia de Muestreo no cumple el formato correcto, debe estar compuesto unicamente por digitos sin 0s a la izquierda.'),
    Array("project", "id_sampling_methodology", 90, "Cumple todo (tener entre 1 y 11 digitos)", "EDIT", true,                                            'El Id Metodologia de Muestreo es correcto'),

    //SEARCH
    Array("project", "id_sampling_methodology", 91, "Cumple tamaño maximo 11",              "SEARCH", 'project__id_sampling_methodology__max_size_KO', 'El Id Metodologia de Muestreo supera el tamaño permitido, debe tener como mucho longitud 11.'),
    Array("project", "id_sampling_methodology", 92, "Cumple tener solo digitos",            "SEARCH", 'project__id_sampling_methodology__format_KO',   'El Id Metodologia de Muestreo no cumple el formato correcto, debe estar compuesto unicamente por digitos sin 0s a la izquierda.'),
    Array("project", "id_sampling_methodology", 93, "Cumple todo (tener hasta 11 digitos)", "SEARCH", true,                                            'El Id Metodologia de Muestreo es correcto'),


    //Campo = `file_project` varchar(100) NOT NULL,  alfabéticos sin acentos ni ñ ni espacios min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 2000000 bytes.
    //No se lee en el ADD, readonly en EDIT

    //SEARCH
    Array("project", "file_project", 94, "Cumple tamaño de nombre maximo 100",                                                     "SEARCH", 'project__file_project__max_size_KO','El nombre del Archivo Proyecto supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("project", "file_project", 95, "Cumple tener solo caracteres alfabeticos y puntos sin acentos,ñ o espacios",             "SEARCH", 'project__file_project__format_KO',  'El nombre del Archivo Proyecto no cumple el formato correcto, debe contener solo letras y puntos sin acentos ni ñ ni espacios ni signos de puntuacion.'),
    Array("project", "file_project", 96, "Cumple todo (tener hasta 100 caracteres alfabeticos y puntos sin acentos,ñ o espacios)", "SEARCH", true,                                'El Archivo Proyecto es correcto'),


    //Campo = `nuevo_file_project` varchar(100) NOT NULL,  alfabéticos sin acentos ni ñ ni espacios min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 2000000 bytes.
    //No se lee en el SEARCH

    //ADD
    Array("project", "nuevo_file_project", 97, "Cumple no ser un fichero vacio",                                                       "ADD", 'project__nuevo_file_project__empty_KO',            'El Nuevo Archivo no puede estar vacio, debe enviarse un archivo'),
    Array("project", "nuevo_file_project", 98, "Cumple tamaño de fichero menor a 2000000 Bytes (2 MB)",                                "ADD", 'project__nuevo_file_project__max_size_file_KO',    'El Nuevo Archivo supera el tamaño permitido, debe pesar menos de 2 MB.'),
    Array("project", "nuevo_file_project", 99, "Cumple tipo correcto de fichero (.pdf, .doc, .docx)",                                  "ADD", 'project__nuevo_file_project__type_file_KO',        'El Nuevo Archivo no es del tipo correcto, debe ser .pdf,.doc o .docx'),
    Array("project", "nuevo_file_project", 100, "Cumple tener solo caracteres alfabeticos y puntos sin acentos,ñ o espacios de nombre", "ADD", 'project__nuevo_file_project__format_name_file_KO', 'El nombre del Nuevo Archivo no cumple el formato correcto, debe contener solo letras y puntos sin acentos ni ñ ni espacios ni signos de puntuacion.'),
    Array("project", "nuevo_file_project", 101, "Cumple tamaño de nombre minimo 7",                                                     "ADD", 'project__nuevo_file_project__min_size_KO',         'El nombre del Nuevo Archivo es demasiado corto, debe tener al menos longitud 7.'),
    Array("project", "nuevo_file_project", 102, "Cumple tamaño de nombre maximo 100",                                                   "ADD", 'project__nuevo_file_project__max_size_KO',         'El nombre del Nuevo Archivo supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("project", "nuevo_file_project", 103, "Cumple todo",                                                                          "ADD", true,                                               'El Nuevo Archivo es correcto'),


    //EDIT
    Array("project", "nuevo_file_project", 104, "Cumple tamaño de fichero menor a 2000000 Bytes (2 MB)",                                "EDIT", 'project__nuevo_file_project__max_size_file_KO',    'El Nuevo Archivo supera el tamaño permitido, debe pesar menos de 2 MB.'),
    Array("project", "nuevo_file_project", 105, "Cumple tipo correcto de fichero (.pdf, .doc, .docx)",                                  "EDIT", 'project__nuevo_file_project__type_file_KO',        'El Nuevo Archivo no es del tipo correcto, debe ser .pdf,.doc o .docx'),
    Array("project", "nuevo_file_project", 106, "Cumple tener solo caracteres alfabeticos y puntos sin acentos,ñ o espacios de nombre", "EDIT", 'project__nuevo_file_project__format_name_file_KO', 'El nombre del Nuevo Archivo no cumple el formato correcto, debe contener solo letras y puntos sin acentos ni ñ ni espacios ni signos de puntuacion.'),
    Array("project", "nuevo_file_project", 107, "Cumple tamaño de nombre minimo 7",                                                     "EDIT", 'project__nuevo_file_project__min_size_KO',         'El nombre del Nuevo Archivo es demasiado corto, debe tener al menos longitud 7.'),
    Array("project", "nuevo_file_project", 108, "Cumple tamaño de nombre maximo 100",                                                   "EDIT", 'project__nuevo_file_project__max_size_KO',         'El nombre del Nuevo Archivo supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("project", "nuevo_file_project", 109, "Cumple todo",                                                                          "EDIT", true,                                               'El Nuevo Archivo es correcto'),
    Array("project", "nuevo_file_project", 110, "Cumple ser un fichero vacio",                                                          "EDIT", true,                                               'El Nuevo Archivo es correcto')
);

let pruebas_project = Array(

    //Formato test:Array(Entidad,Campo,Numero Test,Numero Prueba, Accion,Valor, Mensaje Respuesta)
    //codigo respuesta = entidad__campo__tipoTest_resultado


    //Campo = `id_project` int(11) NOT NULL, dígitos min 1 max 11
    //Autoincrementable = no se va a comprobar en el add, se comprobara en el edit pero el usuario no puede modificar salvo mediante consola el valor (que ya deberia ser correcto) y se comprobara en el search

    //SEARCH
    Array("project", "id_project", 1, 1, "SEARCH", "2".repeat(12), "project__id_project__max_size_KO"),
    Array("project", "id_project", 1, 2, "SEARCH", "2".repeat(13), "project__id_project__max_size_KO"),
   
    Array("project", "id_project", 2, 3, "SEARCH", "texto", "project__id_project__format_KO"),
    Array("project", "id_project", 2, 4, "SEARCH", "11.9",  "project__id_project__format_KO"),
    Array("project", "id_project", 2, 5, "SEARCH", "11/9",  "project__id_project__format_KO"),
    Array("project", "id_project", 2, 6, "SEARCH", "-1",    "project__id_project__format_KO"),
    Array("project", "id_project", 2, 7, "SEARCH", "0",     "project__id_project__format_KO"),
    Array("project", "id_project", 2, 8, "SEARCH", "01",    "project__id_project__format_KO"),
    
    Array("project", "id_project", 3, 9,  "SEARCH", "2".repeat(1),  true),
    Array("project", "id_project", 3, 10, "SEARCH", "2".repeat(11), true),
    Array("project", "id_project", 3, 11, "SEARCH", "4514",         true),
    Array("project", "id_project", 3, 12, "SEARCH", "",             true),

    //Campo = `name_project` varchar(500) NOT NULL UNIQUE, alfabéticos y espacios sin acentos ni ñ, min 15 max 100

    //ADD
    Array("project", "name_project", 4, 13, "ADD", "a".repeat(14), "project__name_project__min_size_KO"),
    Array("project", "name_project", 4, 14, "ADD", "a".repeat(6),  "project__name_project__min_size_KO"),
    Array("project", "name_project", 4, 15, "ADD", "",             "project__name_project__min_size_KO"),

    Array("project", "name_project", 5, 16, "ADD", "a".repeat(101), "project__name_project__max_size_KO"),
    Array("project", "name_project", 5, 17, "ADD", "a".repeat(102), "project__name_project__max_size_KO"),

    Array("project", "name_project", 6, 18, "ADD", "Análisis".repeat(2),      "project__name_project__format_KO"),
    Array("project", "name_project", 6, 19, "ADD", "Analisis Datos A Coruña", "project__name_project__format_KO"),
    Array("project", "name_project", 6, 20, "ADD", "Analisis 45".repeat(2),   "project__name_project__format_KO"),
    Array("project", "name_project", 6, 21, "ADD", "Analisis.".repeat(2),     "project__name_project__format_KO"),

    Array("project", "name_project", 7, 22, "ADD", "a".repeat(16),                   true),
    Array("project", "name_project", 7, 23, "ADD", "a".repeat(17),                   true),
    Array("project", "name_project", 7, 24, "ADD", "a".repeat(99),                   true),
    Array("project", "name_project", 7, 25, "ADD", "a".repeat(100),                  true),
    Array("project", "name_project", 7, 26, "ADD", "Analisis Aguas Fecales Ourense", true),
    Array("project", "name_project", 7, 27, "ADD", "Analisis Calificaciones",        true),

    //EDIT
    Array("project", "name_project", 8, 28, "EDIT", "a".repeat(14), "project__name_project__min_size_KO"),
    Array("project", "name_project", 8, 29, "EDIT", "a".repeat(6),  "project__name_project__min_size_KO"),
    Array("project", "name_project", 8, 30, "EDIT", "",             "project__name_project__min_size_KO"),

    Array("project", "name_project", 9, 31, "EDIT", "a".repeat(101), "project__name_project__max_size_KO"),
    Array("project", "name_project", 9, 32, "EDIT", "a".repeat(102), "project__name_project__max_size_KO"),

    Array("project", "name_project", 10, 33, "EDIT", "Análisis".repeat(2),      "project__name_project__format_KO"),
    Array("project", "name_project", 10, 34, "EDIT", "Analisis Datos A Coruña", "project__name_project__format_KO"),
    Array("project", "name_project", 10, 35, "EDIT", "Analisis 45".repeat(2),   "project__name_project__format_KO"),
    Array("project", "name_project", 10, 36, "EDIT", "Analisis.".repeat(2),     "project__name_project__format_KO"),

    Array("project", "name_project", 11, 37, "EDIT", "a".repeat(16),                   true),
    Array("project", "name_project", 11, 38, "EDIT", "a".repeat(17),                   true),
    Array("project", "name_project", 11, 39, "EDIT", "a".repeat(99),                   true),
    Array("project", "name_project", 11, 40, "EDIT", "a".repeat(100),                  true),
    Array("project", "name_project", 11, 41, "EDIT", "Analisis Aguas Fecales Ourense", true),
    Array("project", "name_project", 11, 42, "EDIT", "Analisis Calificaciones",        true),
    

    //SEARCH  
    Array("project", "name_project", 12, 43, "SEARCH", "a".repeat(101), "project__name_project__max_size_KO"),
    Array("project", "name_project", 12, 44, "SEARCH", "a".repeat(102), "project__name_project__max_size_KO"),

    Array("project", "name_project", 13, 45, "SEARCH", "Análisis".repeat(2),      "project__name_project__format_KO"),
    Array("project", "name_project", 13, 46, "SEARCH", "Analisis Datos A Coruña", "project__name_project__format_KO"),
    Array("project", "name_project", 13, 47, "SEARCH", "Analisis 45".repeat(2),   "project__name_project__format_KO"),
    Array("project", "name_project", 13, 48, "SEARCH", "Analisis.".repeat(2),     "project__name_project__format_KO"),

    Array("project", "name_project", 14, 49, "SEARCH", "a".repeat(1),                    true),
    Array("project", "name_project", 14, 50, "SEARCH", "a".repeat(17),                   true),
    Array("project", "name_project", 14, 51, "SEARCH", "a".repeat(99),                   true),
    Array("project", "name_project", 14, 52, "SEARCH", "a".repeat(100),                  true),
    Array("project", "name_project", 14, 53, "SEARCH", "Analisis Aguas Fecales Ourense", true),
    Array("project", "name_project", 14, 54, "SEARCH", "Analisis Calificaciones",        true),
    Array("project", "name_project", 14, 55, "SEARCH", "",                               true),


    //Campo = `start_date_project` date NOT NULL, fecha válida con formato dd/mm/aaaa 

    //ADD
    Array("project", "start_date_project", 15, 56, "ADD", "02-11-2004",         "project__start_date_project__format_KO"),
    Array("project", "start_date_project", 15, 57, "ADD", "2004-02-11",         "project__start_date_project__format_KO"),
    Array("project", "start_date_project", 15, 58, "ADD", "01/marzo/2020",      "project__start_date_project__format_KO"),
    Array("project", "start_date_project", 15, 59, "ADD", "1/02/2004",          "project__start_date_project__format_KO"),
    Array("project", "start_date_project", 15, 60, "ADD", "11/2/2004",          "project__start_date_project__format_KO"),
    Array("project", "start_date_project", 15, 61, "ADD", "0020/02/01",         "project__start_date_project__format_KO"),
    Array("project", "start_date_project", 15, 62, "ADD", "02/0002/01",         "project__start_date_project__format_KO"),
    Array("project", "start_date_project", 15, 63, "ADD", "25/12/01",           "project__start_date_project__format_KO"),
    Array("project", "start_date_project", 15, 64, "ADD", "02-11-04",           "project__start_date_project__format_KO"),
    Array("project", "start_date_project", 15, 65, "ADD", "1 de enero de 1970", "project__start_date_project__format_KO"),
    Array("project", "start_date_project", 15, 66, "ADD", "01,12,2000",         "project__start_date_project__format_KO"),
    
    Array("project", "start_date_project", 16, 67, "ADD", "00/11/2020", "project__start_date_project__valid_KO"),
    Array("project", "start_date_project", 16, 68, "ADD", "02/00/2020", "project__start_date_project__valid_KO"),
    Array("project", "start_date_project", 16, 69, "ADD", "32/12/2020", "project__start_date_project__valid_KO"),
    Array("project", "start_date_project", 16, 70, "ADD", "02/13/2020", "project__start_date_project__valid_KO"),
    Array("project", "start_date_project", 16, 71, "ADD", "31/11/2020", "project__start_date_project__valid_KO"),
    Array("project", "start_date_project", 16, 72, "ADD", "30/02/2024", "project__start_date_project__valid_KO"),
    Array("project", "start_date_project", 16, 73, "ADD", "29/02/2023", "project__start_date_project__valid_KO"),//test bisiestos
    Array("project", "start_date_project", 16, 74, "ADD", "29/02/1900", "project__start_date_project__valid_KO"),
    Array("project", "start_date_project", 16, 75, "ADD", "01/01/0000", "project__start_date_project__valid_KO"),

    Array("project", "start_date_project", 17, 76, "ADD", "02/11/2004", true),
    Array("project", "start_date_project", 17, 77, "ADD", "29/02/2024", true),
    Array("project", "start_date_project", 17, 78, "ADD", "29/02/2000", true),

    
    //EDIT
    Array("project", "start_date_project", 18, 79, "EDIT", "02-11-2004",         "project__start_date_project__format_KO"),
    Array("project", "start_date_project", 18, 80, "EDIT", "2004-02-11",         "project__start_date_project__format_KO"),
    Array("project", "start_date_project", 18, 81, "EDIT", "01/marzo/2020",      "project__start_date_project__format_KO"),
    Array("project", "start_date_project", 18, 82, "EDIT", "1/02/2004",          "project__start_date_project__format_KO"),
    Array("project", "start_date_project", 18, 83, "EDIT", "11/2/2004",          "project__start_date_project__format_KO"),
    Array("project", "start_date_project", 18, 84, "EDIT", "0020/02/01",         "project__start_date_project__format_KO"),
    Array("project", "start_date_project", 18, 85, "EDIT", "02/0002/01",         "project__start_date_project__format_KO"),
    Array("project", "start_date_project", 18, 86, "EDIT", "25/12/01",           "project__start_date_project__format_KO"),
    Array("project", "start_date_project", 18, 87, "EDIT", "02-11-04",           "project__start_date_project__format_KO"),
    Array("project", "start_date_project", 18, 88, "EDIT", "1 de enero de 1970", "project__start_date_project__format_KO"),
    Array("project", "start_date_project", 18, 89, "EDIT", "01,12,2000",         "project__start_date_project__format_KO"),
    
    Array("project", "start_date_project", 19, 90, "EDIT", "00/11/2020", "project__start_date_project__valid_KO"),
    Array("project", "start_date_project", 19, 91, "EDIT", "02/00/2020", "project__start_date_project__valid_KO"),
    Array("project", "start_date_project", 19, 92, "EDIT", "32/12/2020", "project__start_date_project__valid_KO"),
    Array("project", "start_date_project", 19, 93, "EDIT", "02/13/2020", "project__start_date_project__valid_KO"),
    Array("project", "start_date_project", 19, 94, "EDIT", "31/11/2020", "project__start_date_project__valid_KO"),
    Array("project", "start_date_project", 19, 95, "EDIT", "30/02/2024", "project__start_date_project__valid_KO"),
    Array("project", "start_date_project", 19, 96, "EDIT", "29/02/2023", "project__start_date_project__valid_KO"),//test bisiestos
    Array("project", "start_date_project", 19, 97, "EDIT", "29/02/1900", "project__start_date_project__valid_KO"),
    Array("project", "start_date_project", 19, 98, "EDIT", "01/01/0000", "project__start_date_project__valid_KO"),

    Array("project", "start_date_project", 20, 99,  "EDIT", "02/11/2004", true),
    Array("project", "start_date_project", 20, 100, "EDIT", "29/02/2024", true),
    Array("project", "start_date_project", 20, 101, "EDIT", "29/02/2000", true),


    //SEARCH
    Array("project", "start_date_project", 21, 102, "SEARCH", "02-11-2004",         "project__start_date_project__format_SEARCH_KO"),
    Array("project", "start_date_project", 21, 103, "SEARCH", "2004-02-11",         "project__start_date_project__format_SEARCH_KO"),
    Array("project", "start_date_project", 21, 104, "SEARCH", "01/marzo/2020",      "project__start_date_project__format_SEARCH_KO"),
    Array("project", "start_date_project", 21, 105, "SEARCH", "0020/02/01",         "project__start_date_project__format_SEARCH_KO"),
    Array("project", "start_date_project", 21, 106, "SEARCH", "02/0002/01",         "project__start_date_project__format_SEARCH_KO"),
    Array("project", "start_date_project", 21, 107, "SEARCH", "02-11-04",           "project__start_date_project__format_SEARCH_KO"),
    Array("project", "start_date_project", 21, 108, "SEARCH", "1 de enero de 1970", "project__start_date_project__format_SEARCH_KO"),
    Array("project", "start_date_project", 21, 109, "SEARCH", "01,12,2000",         "project__start_date_project__format_SEARCH_KO"),
    Array("project", "start_date_project", 21, 110, "SEARCH", "00/000/00",          "project__start_date_project__format_SEARCH_KO"),
    Array("project", "start_date_project", 21, 111, "SEARCH", "000/00/00",          "project__start_date_project__format_SEARCH_KO"),
    Array("project", "start_date_project", 21, 112, "SEARCH", "00/00/00000",          "project__start_date_project__format_SEARCH_KO"),
    
    Array("project", "start_date_project", 22, 113, "SEARCH", "1/02/2004", true),
    Array("project", "start_date_project", 22, 114, "SEARCH", "11/2/2004", true),
    Array("project", "start_date_project", 22, 115, "SEARCH", "25/12/01",  true),
    Array("project", "start_date_project", 22, 116, "SEARCH", "25/12/1",   true),
    Array("project", "start_date_project", 22, 117, "SEARCH", "25",        true),
    Array("project", "start_date_project", 22, 118, "SEARCH", "25/1",      true),
    Array("project", "start_date_project", 22, 119, "SEARCH", "25/1/1",    true),
    Array("project", "start_date_project", 22, 120, "SEARCH", "/1/1",      true),
    Array("project", "start_date_project", 22, 121, "SEARCH", "",          true),
    Array("project", "start_date_project", 22, 122, "SEARCH", "//",        true),


    //Campo = `end_date_project` date NOT NULL, fecha válida con formato dd/mm/aaaa y superior a start_date_project

    //ADD
    Array("project", "end_date_project", 23, 123, "ADD", "02-11-2004",         "project__end_date_project__format_KO"),
    Array("project", "end_date_project", 23, 124, "ADD", "2004-02-11",         "project__end_date_project__format_KO"),
    Array("project", "end_date_project", 23, 125, "ADD", "01/marzo/2020",      "project__end_date_project__format_KO"),
    Array("project", "end_date_project", 23, 126, "ADD", "1/02/2004",          "project__end_date_project__format_KO"),
    Array("project", "end_date_project", 23, 127, "ADD", "11/2/2004",          "project__end_date_project__format_KO"),
    Array("project", "end_date_project", 23, 128, "ADD", "0020/02/01",         "project__end_date_project__format_KO"),
    Array("project", "end_date_project", 23, 129, "ADD", "02/0002/01",         "project__end_date_project__format_KO"),
    Array("project", "end_date_project", 23, 130, "ADD", "25/12/01",           "project__end_date_project__format_KO"),
    Array("project", "end_date_project", 23, 131, "ADD", "02-11-04",           "project__end_date_project__format_KO"),
    Array("project", "end_date_project", 23, 132, "ADD", "1 de enero de 1970", "project__end_date_project__format_KO"),
    Array("project", "end_date_project", 23, 133, "ADD", "01,12,2000",         "project__end_date_project__format_KO"),
    
    Array("project", "end_date_project", 24, 134, "ADD", "00/11/2020", "project__end_date_project__valid_KO"),
    Array("project", "end_date_project", 24, 135, "ADD", "02/00/2020", "project__end_date_project__valid_KO"),
    Array("project", "end_date_project", 24, 136, "ADD", "32/12/2020", "project__end_date_project__valid_KO"),
    Array("project", "end_date_project", 24, 137, "ADD", "02/13/2020", "project__end_date_project__valid_KO"),
    Array("project", "end_date_project", 24, 138, "ADD", "31/11/2020", "project__end_date_project__valid_KO"),
    Array("project", "end_date_project", 24, 139, "ADD", "30/02/2024", "project__end_date_project__valid_KO"),
    Array("project", "end_date_project", 24, 140, "ADD", "29/02/2023", "project__end_date_project__valid_KO"),//test bisiestos
    Array("project", "end_date_project", 24, 141, "ADD", "29/02/1900", "project__end_date_project__valid_KO"),
    Array("project", "end_date_project", 24, 142, "ADD", "01/01/0000", "project__end_date_project__valid_KO"),

    Array("project", "end_date_project", 25, 143, "ADD", "02/11/2004", true),
    Array("project", "end_date_project", 25, 144, "ADD", "29/02/2024", true),
    Array("project", "end_date_project", 25, 145, "ADD", "29/02/2000", true),


    //EDIT
    Array("project", "end_date_project", 26, 146, "EDIT", "02-11-2004",         "project__end_date_project__format_KO"),
    Array("project", "end_date_project", 26, 147, "EDIT", "2004-02-11",         "project__end_date_project__format_KO"),
    Array("project", "end_date_project", 26, 148, "EDIT", "01/marzo/2020",      "project__end_date_project__format_KO"),
    Array("project", "end_date_project", 26, 149, "EDIT", "1/02/2004",          "project__end_date_project__format_KO"),
    Array("project", "end_date_project", 26, 150, "EDIT", "11/2/2004",          "project__end_date_project__format_KO"),
    Array("project", "end_date_project", 26, 151, "EDIT", "0020/02/01",         "project__end_date_project__format_KO"),
    Array("project", "end_date_project", 26, 152, "EDIT", "02/0002/01",         "project__end_date_project__format_KO"),
    Array("project", "end_date_project", 26, 153, "EDIT", "25/12/01",           "project__end_date_project__format_KO"),
    Array("project", "end_date_project", 26, 154, "EDIT", "02-11-04",           "project__end_date_project__format_KO"),
    Array("project", "end_date_project", 26, 155, "EDIT", "1 de enero de 1970", "project__end_date_project__format_KO"),
    Array("project", "end_date_project", 26, 156, "EDIT", "01,12,2000",         "project__end_date_project__format_KO"),
    
    Array("project", "end_date_project", 27, 157, "EDIT", "00/11/2020", "project__end_date_project__valid_KO"),
    Array("project", "end_date_project", 27, 158, "EDIT", "02/00/2020", "project__end_date_project__valid_KO"),
    Array("project", "end_date_project", 27, 159, "EDIT", "32/12/2020", "project__end_date_project__valid_KO"),
    Array("project", "end_date_project", 27, 160, "EDIT", "02/13/2020", "project__end_date_project__valid_KO"),
    Array("project", "end_date_project", 27, 161, "EDIT", "31/11/2020", "project__end_date_project__valid_KO"),
    Array("project", "end_date_project", 27, 162, "EDIT", "30/02/2024", "project__end_date_project__valid_KO"),
    Array("project", "end_date_project", 27, 163, "EDIT", "29/02/2023", "project__end_date_project__valid_KO"),//test bisiestos
    Array("project", "end_date_project", 27, 164, "EDIT", "29/02/1900", "project__end_date_project__valid_KO"),
    Array("project", "end_date_project", 27, 165, "EDIT", "01/01/0000", "project__end_date_project__valid_KO"),

    Array("project", "end_date_project", 28, 166,  "EDIT", "02/11/2004", true),
    Array("project", "end_date_project", 28, 167, "EDIT", "29/02/2024", true),
    Array("project", "end_date_project", 28, 168, "EDIT", "29/02/2000", true),


    //SEARCH
    Array("project", "end_date_project", 29, 169, "SEARCH", "02-11-2004",         "project__end_date_project__format_SEARCH_KO"),
    Array("project", "end_date_project", 29, 170, "SEARCH", "2004-02-11",         "project__end_date_project__format_SEARCH_KO"),
    Array("project", "end_date_project", 29, 171, "SEARCH", "01/marzo/2020",      "project__end_date_project__format_SEARCH_KO"),
    Array("project", "end_date_project", 29, 172, "SEARCH", "0020/02/01",         "project__end_date_project__format_SEARCH_KO"),
    Array("project", "end_date_project", 29, 173, "SEARCH", "02/0002/01",         "project__end_date_project__format_SEARCH_KO"),
    Array("project", "end_date_project", 29, 174, "SEARCH", "02-11-04",           "project__end_date_project__format_SEARCH_KO"),
    Array("project", "end_date_project", 29, 175, "SEARCH", "1 de enero de 1970", "project__end_date_project__format_SEARCH_KO"),
    Array("project", "end_date_project", 29, 176, "SEARCH", "01,12,2000",         "project__end_date_project__format_SEARCH_KO"),
    Array("project", "end_date_project", 29, 177, "SEARCH", "00/000/00",          "project__end_date_project__format_SEARCH_KO"),
    Array("project", "end_date_project", 29, 178, "SEARCH", "000/00/00",          "project__end_date_project__format_SEARCH_KO"),
    Array("project", "end_date_project", 29, 179, "SEARCH", "00/00/00000",          "project__end_date_project__format_SEARCH_KO"),
    
    Array("project", "end_date_project", 30, 180, "SEARCH", "1/02/2004", true),
    Array("project", "end_date_project", 30, 181, "SEARCH", "11/2/2004", true),
    Array("project", "end_date_project", 30, 182, "SEARCH", "25/12/01",  true),
    Array("project", "end_date_project", 30, 183, "SEARCH", "25/12/1",   true),
    Array("project", "end_date_project", 30, 184, "SEARCH", "25",        true),
    Array("project", "end_date_project", 30, 185, "SEARCH", "25/1",      true),
    Array("project", "end_date_project", 30, 186, "SEARCH", "25/1/1",    true),
    Array("project", "end_date_project", 30, 187, "SEARCH", "/1/1",      true),
    Array("project", "end_date_project", 30, 188, "SEARCH", "",          true),
    Array("project", "end_date_project", 30, 189, "SEARCH", "//",        true),


    //Campo = `responsable_project` varchar(60) NOT NULL, alfabéticos con acentos, ñ y espacios min 6 max 60 

    //ADD
    Array("project", "responsable_project", 31, 190, "ADD", "a".repeat(5), "project__responsable_project__min_size_KO"),
    Array("project", "responsable_project", 31, 191, "ADD", "a".repeat(4), "project__responsable_project__min_size_KO"),
    Array("project", "responsable_project", 31, 192, "ADD", "",            "project__responsable_project__min_size_KO"),

    Array("project", "responsable_project", 32, 193, "ADD", "a".repeat(61), "project__responsable_project__max_size_KO"),
    Array("project", "responsable_project", 32, 194, "ADD", "a".repeat(62), "project__responsable_project__max_size_KO"),

    Array("project", "responsable_project", 33, 195, "ADD", "123456",                   "project__responsable_project__format_KO"),
    Array("project", "responsable_project", 33, 196, "ADD", "PROYECTO SUPER SECRETO ?", "project__responsable_project__format_KO"),
    Array("project", "responsable_project", 33, 197, "ADD", "PROYECTO SUPER SECRETO .", "project__responsable_project__format_KO"),

    Array("project", "responsable_project", 34, 198, "ADD", "d".repeat(6),                    true),
    Array("project", "responsable_project", 34, 199, "ADD", "d".repeat(7),                    true),
    Array("project", "responsable_project", 34, 200, "ADD", "d".repeat(59),                   true),
    Array("project", "responsable_project", 34, 201, "ADD", "d".repeat(60),                   true),
    Array("project", "responsable_project", 34, 202, "ADD", "TOP SECRET PROYECTO ÑÁPA ETDOS", true),


    //EDIT
    Array("project", "responsable_project", 35, 203, "EDIT", "a".repeat(5), "project__responsable_project__min_size_KO"),
    Array("project", "responsable_project", 35, 204, "EDIT", "a".repeat(4), "project__responsable_project__min_size_KO"),
    Array("project", "responsable_project", 35, 205, "EDIT", "",            "project__responsable_project__min_size_KO"),

    Array("project", "responsable_project", 36, 206, "EDIT", "a".repeat(61), "project__responsable_project__max_size_KO"),
    Array("project", "responsable_project", 36, 207, "EDIT", "a".repeat(62), "project__responsable_project__max_size_KO"),

    Array("project", "responsable_project", 37, 208, "EDIT", "123456",                   "project__responsable_project__format_KO"),
    Array("project", "responsable_project", 37, 209, "EDIT", "PROYECTO SUPER SECRETO ?", "project__responsable_project__format_KO"),
    Array("project", "responsable_project", 37, 210, "EDIT", "PROYECTO SUPER SECRETO .", "project__responsable_project__format_KO"),

    Array("project", "responsable_project", 38, 211, "EDIT", "d".repeat(6),                    true),
    Array("project", "responsable_project", 38, 212, "EDIT", "d".repeat(7),                    true),
    Array("project", "responsable_project", 38, 213, "EDIT", "d".repeat(59),                   true),
    Array("project", "responsable_project", 38, 214, "EDIT", "d".repeat(60),                   true),
    Array("project", "responsable_project", 38, 215, "EDIT", "TOP SECRET PROYECTO ÑÁPA ETDOS", true),


    //SEARCH
    Array("project", "responsable_project", 39, 216, "SEARCH", "a".repeat(61), "project__responsable_project__max_size_KO"),
    Array("project", "responsable_project", 39, 217, "SEARCH", "a".repeat(62), "project__responsable_project__max_size_KO"),

    Array("project", "responsable_project", 40, 218, "SEARCH", "123456",                   "project__responsable_project__format_KO"),
    Array("project", "responsable_project", 40, 219, "SEARCH", "PROYECTO SUPER SECRETO ?", "project__responsable_project__format_KO"),
    Array("project", "responsable_project", 40, 220, "SEARCH", "PROYECTO SUPER SECRETO .", "project__responsable_project__format_KO"),

    Array("project", "responsable_project", 41, 221, "SEARCH", "d".repeat(1),                    true),
    Array("project", "responsable_project", 41, 222, "SEARCH", "d".repeat(7),                    true),
    Array("project", "responsable_project", 41, 223, "SEARCH", "d".repeat(59),                   true),
    Array("project", "responsable_project", 41, 224, "SEARCH", "d".repeat(60),                   true),
    Array("project", "responsable_project", 41, 225, "SEARCH", "TOP SECRET PROYECTO ÑÁPA ETDOS", true),
    Array("project", "responsable_project", 41, 226, "SEARCH", "",                               true),
    

    //Campo = `organization_project` varchar(100) NOT NULL, alfabéticos con acentos, ñ y espacios min 6 max 100 

    //ADD
    Array("project", "organization_project", 42, 227, "ADD", "a".repeat(5), "project__organization_project__min_size_KO"),
    Array("project", "organization_project", 42, 228, "ADD", "a".repeat(4), "project__organization_project__min_size_KO"),
    Array("project", "organization_project", 42, 229, "ADD", "",            "project__organization_project__min_size_KO"),

    Array("project", "organization_project", 43, 230, "ADD", "a".repeat(101), "project__organization_project__max_size_KO"),
    Array("project", "organization_project", 43, 231, "ADD", "a".repeat(102), "project__organization_project__max_size_KO"),

    Array("project", "organization_project", 44, 232, "ADD", "123456",                   "project__organization_project__format_KO"),
    Array("project", "organization_project", 44, 233, "ADD", "PROYECTO SUPER SECRETO ?", "project__organization_project__format_KO"),
    Array("project", "organization_project", 44, 234, "ADD", "PROYECTO SUPER SECRETO .", "project__organization_project__format_KO"),

    Array("project", "organization_project", 45, 235, "ADD", "d".repeat(6),                    true),
    Array("project", "organization_project", 45, 236, "ADD", "d".repeat(7),                    true),
    Array("project", "organization_project", 45, 237, "ADD", "d".repeat(59),                   true),
    Array("project", "organization_project", 45, 238, "ADD", "d".repeat(60),                   true),
    Array("project", "organization_project", 45, 239, "ADD", "TOP SECRET PROYECTO ÑÁPA ETDOS", true),


    //EDIT
    Array("project", "organization_project", 46, 240, "EDIT", "a".repeat(5), "project__organization_project__min_size_KO"),
    Array("project", "organization_project", 46, 241, "EDIT", "a".repeat(4), "project__organization_project__min_size_KO"),
    Array("project", "organization_project", 46, 242, "EDIT", "",            "project__organization_project__min_size_KO"),

    Array("project", "organization_project", 47, 243, "EDIT", "a".repeat(101), "project__organization_project__max_size_KO"),
    Array("project", "organization_project", 47, 244, "EDIT", "a".repeat(102), "project__organization_project__max_size_KO"),

    Array("project", "organization_project", 48, 245, "EDIT", "123456",                   "project__organization_project__format_KO"),
    Array("project", "organization_project", 48, 246, "EDIT", "PROYECTO SUPER SECRETO ?", "project__organization_project__format_KO"),
    Array("project", "organization_project", 48, 247, "EDIT", "PROYECTO SUPER SECRETO .", "project__organization_project__format_KO"),

    Array("project", "organization_project", 49, 248, "EDIT", "d".repeat(6),                    true),
    Array("project", "organization_project", 49, 249, "EDIT", "d".repeat(7),                    true),
    Array("project", "organization_project", 49, 250, "EDIT", "d".repeat(59),                   true),
    Array("project", "organization_project", 49, 251, "EDIT", "d".repeat(60),                   true),
    Array("project", "organization_project", 49, 252, "EDIT", "TOP SECRET PROYECTO ÑÁPA ETDOS", true),
 

    //SEARCH  
    Array("project", "organization_project", 50, 253, "SEARCH", "a".repeat(101), "project__organization_project__max_size_KO"),
    Array("project", "organization_project", 50, 254, "SEARCH", "a".repeat(102), "project__organization_project__max_size_KO"),

    Array("project", "organization_project", 51, 255, "SEARCH", "123456",                   "project__organization_project__format_KO"),
    Array("project", "organization_project", 51, 256, "SEARCH", "PROYECTO SUPER SECRETO ?", "project__organization_project__format_KO"),
    Array("project", "organization_project", 51, 257, "SEARCH", "PROYECTO SUPER SECRETO .", "project__organization_project__format_KO"),

    Array("project", "organization_project", 52, 258, "SEARCH", "d".repeat(6),                    true),
    Array("project", "organization_project", 52, 259, "SEARCH", "d".repeat(7),                    true),
    Array("project", "organization_project", 52, 260, "SEARCH", "d".repeat(59),                   true),
    Array("project", "organization_project", 52, 261, "SEARCH", "d".repeat(60),                   true),
    Array("project", "organization_project", 52, 262, "SEARCH", "TOP SECRET PROYECTO ÑÁPA ETDOS", true),
    Array("project", "organization_project", 52, 263, "SEARCH", "",                               true),

   

    //Campo = `description_project` varchar(500) NOT NULL, Cualquier ascii min 30 max 500 

    //ADD
    Array("project", "description_project", 53, 264, "ADD", "a".repeat(29), "project__description_project__min_size_KO"),
    Array("project", "description_project", 53, 265, "ADD", "a".repeat(20), "project__description_project__min_size_KO"),
    Array("project", "description_project", 53, 266, "ADD", "",             "project__description_project__min_size_KO"),

    Array("project", "description_project", 54, 267, "ADD", "a".repeat(501), "project__description_project__max_size_KO"),
    Array("project", "description_project", 54, 268, "ADD", "a".repeat(502), "project__description_project__max_size_KO"),

    Array("project", "description_project", 55, 269, "ADD", "d".repeat(30),                             true),
    Array("project", "description_project", 55, 270, "ADD", "d".repeat(31),                             true),
    Array("project", "description_project", 55, 271, "ADD", "d".repeat(500),                            true),
    Array("project", "description_project", 55, 272, "ADD", "d".repeat(499),                            true),
    Array("project", "description_project", 55, 273, "ADD", "TOP SECRET PROYECTO ÑÁPA ETDOS".repeat(4), true),
    Array("project", "description_project", 55, 274, "ADD", "d1an( &".repeat(10),                       true),
    Array("project", "description_project", 55, 275, "ADD", "d1an( &\n".repeat(10),                     true),
    Array("project", "description_project", 55, 276, "ADD", "d1an( &\t".repeat(10),                     true),
    Array("project", "description_project", 55, 277, "ADD", " ".repeat(30),                             true),
    Array("project", "description_project", 55, 278, "ADD", "<b>'permites meter codigo html? ')",       true),
    Array("project", "description_project", 55, 279, "ADD", `descripcion';DELETE * FROM project`,       true),
    Array("project", "description_project", 55, 280, "ADD", `descripcion';DROP DATABASE    `,           true),


    //EDIT
    Array("project", "description_project", 56, 281, "EDIT", "a".repeat(29), "project__description_project__min_size_KO"),
    Array("project", "description_project", 56, 282, "EDIT", "a".repeat(20), "project__description_project__min_size_KO"),
    Array("project", "description_project", 56, 283, "EDIT", "",             "project__description_project__min_size_KO"),

    Array("project", "description_project", 57, 284, "EDIT", "a".repeat(501), "project__description_project__max_size_KO"),
    Array("project", "description_project", 57, 285, "EDIT", "a".repeat(502), "project__description_project__max_size_KO"),

    Array("project", "description_project", 58, 286, "EDIT", "d".repeat(30),                             true),
    Array("project", "description_project", 58, 287, "EDIT", "d".repeat(31),                             true),
    Array("project", "description_project", 58, 288, "EDIT", "d".repeat(500),                            true),
    Array("project", "description_project", 58, 289, "EDIT", "d".repeat(499),                            true),
    Array("project", "description_project", 58, 290, "EDIT", "TOP SECRET PROYECTO ÑÁPA ETDOS".repeat(4), true),
    Array("project", "description_project", 58, 291, "EDIT", "d1an( &".repeat(10),                       true),
    Array("project", "description_project", 58, 292, "EDIT", "d1an( &\n".repeat(10),                     true),
    Array("project", "description_project", 58, 293, "EDIT", "d1an( &\t".repeat(10),                     true),
    Array("project", "description_project", 58, 294, "EDIT", " ".repeat(30),                             true),
    Array("project", "description_project", 58, 295, "EDIT", "<b>'permites meter codigo html? ')",       true),
    Array("project", "description_project", 58, 296, "EDIT", `descripcion';DELETE * FROM project`,       true),
    Array("project", "description_project", 58, 297, "EDIT", `descripcion';DROP DATABASE    `,           true),


    //SEARCH
    Array("project", "description_project", 59, 298, "SEARCH", "a".repeat(501), "project__description_project__max_size_KO"),
    Array("project", "description_project", 59, 299, "SEARCH", "a".repeat(502), "project__description_project__max_size_KO"),

    Array("project", "description_project", 60, 300, "SEARCH", "d".repeat(30),                             true),
    Array("project", "description_project", 60, 301, "SEARCH", "d".repeat(31),                             true),
    Array("project", "description_project", 60, 302, "SEARCH", "d".repeat(500),                            true),
    Array("project", "description_project", 60, 303, "SEARCH", "d".repeat(499),                            true),
    Array("project", "description_project", 60, 304, "SEARCH", "TOP SECRET PROYECTO ÑÁPA ETDOS".repeat(4), true),
    Array("project", "description_project", 60, 305, "SEARCH", "d1an( &".repeat(10),                       true),
    Array("project", "description_project", 60, 306, "SEARCH", "d1an( &\n".repeat(10),                     true),
    Array("project", "description_project", 60, 307, "SEARCH", "d1an( &\t".repeat(10),                     true),
    Array("project", "description_project", 60, 308, "SEARCH", " ".repeat(30),                             true),
    Array("project", "description_project", 60, 309, "SEARCH", "<b>'permites meter codigo html? ')",       true),
    Array("project", "description_project", 60, 310, "SEARCH", `descripcion';DELETE * FROM project`,       true),
    Array("project", "description_project", 60, 311, "SEARCH", `descripcion';DROP DATABASE    `,           true),
    Array("project", "description_project", 60, 312, "SEARCH", "",                                         true),


    //Campo = `code_project` varchar(50) NOT NULL, alfabéticos con ñ, espacios y signos de puntuación, sin acentos, min 6 max 50 

    //ADD
    Array("project", "code_project", 61, 313, "ADD", "a".repeat(5), "project__code_project__min_size_KO"),
    Array("project", "code_project", 61, 314, "ADD", "a".repeat(4), "project__code_project__min_size_KO"),
    Array("project", "code_project", 61, 315, "ADD", "",            "project__code_project__min_size_KO"),

    Array("project", "code_project", 62, 316, "ADD", "a".repeat(51), "project__code_project__max_size_KO"),
    Array("project", "code_project", 62, 317, "ADD", "a".repeat(52), "project__code_project__max_size_KO"),

    Array("project", "code_project", 63, 318, "ADD", "123456",                 "project__code_project__format_KO"),
    Array("project", "code_project", 63, 319, "ADD", "PROYECTO SUPER SECRETÓ", "project__code_project__format_KO"),
    
    Array("project", "code_project", 64, 320, "ADD", "d".repeat(6),                                true),
    Array("project", "code_project", 64, 321, "ADD", "d".repeat(7),                                true),
    Array("project", "code_project", 64, 322, "ADD", "d".repeat(49),                               true),
    Array("project", "code_project", 64, 323, "ADD", "d".repeat(50),                               true),
    Array("project", "code_project", 64, 324, "ADD", "TOP SECRET PROYECTO ÑAPA ETDOS!?!?!?......", true),


    //EDIT
    Array("project", "code_project", 65, 325, "EDIT", "a".repeat(5), "project__code_project__min_size_KO"),
    Array("project", "code_project", 65, 326, "EDIT", "a".repeat(4), "project__code_project__min_size_KO"),
    Array("project", "code_project", 65, 327, "EDIT", "",            "project__code_project__min_size_KO"),

    Array("project", "code_project", 66, 328, "EDIT", "a".repeat(51), "project__code_project__max_size_KO"),
    Array("project", "code_project", 66, 329, "EDIT", "a".repeat(52), "project__code_project__max_size_KO"),

    Array("project", "code_project", 67, 330, "EDIT", "123456",                 "project__code_project__format_KO"),
    Array("project", "code_project", 67, 331, "EDIT", "PROYECTO SUPER SECRETÓ", "project__code_project__format_KO"),

    Array("project", "code_project", 68, 332, "EDIT", "d".repeat(6),                                true),
    Array("project", "code_project", 68, 333, "EDIT", "d".repeat(7),                                true),
    Array("project", "code_project", 68, 334, "EDIT", "d".repeat(49),                               true),
    Array("project", "code_project", 68, 335, "EDIT", "d".repeat(50),                               true),
    Array("project", "code_project", 68, 336, "EDIT", "TOP SECRET PROYECTO ÑAPA ETDOS!?!?!?......", true),


    //SEARCH
    Array("project", "code_project", 69, 337, "SEARCH", "a".repeat(51), "project__code_project__max_size_KO"),
    Array("project", "code_project", 69, 338, "SEARCH", "a".repeat(52), "project__code_project__max_size_KO"),

    Array("project", "code_project", 70, 339, "SEARCH", "123456",                 "project__code_project__format_KO"),
    Array("project", "code_project", 70, 340, "SEARCH", "PROYECTO SUPER SECRETÓ", "project__code_project__format_KO"),

    Array("project", "code_project", 71, 341, "SEARCH", "d".repeat(6),                                true),
    Array("project", "code_project", 71, 342, "SEARCH", "d".repeat(7),                                true),
    Array("project", "code_project", 71, 343, "SEARCH", "d".repeat(49),                               true),
    Array("project", "code_project", 71, 344, "SEARCH", "d".repeat(50),                               true),
    Array("project", "code_project", 71, 345, "SEARCH", "TOP SECRET PROYECTO ÑAPA ETDOS!?!?!?......", true),
    Array("project", "code_project", 71, 346, "SEARCH", "",                                           true),


    //Campo = `acronym_project` varchar(15) NOT NULL, alfabéticos con ñ y signos de puntuación, sin acentos ni espacios, min 6 max 15 

    //ADD
    Array("project", "acronym_project", 72, 347, "ADD", "a".repeat(5), "project__acronym_project__min_size_KO"),
    Array("project", "acronym_project", 72, 348, "ADD", "a".repeat(4), "project__acronym_project__min_size_KO"),
    Array("project", "acronym_project", 72, 349, "ADD", "",            "project__acronym_project__min_size_KO"),

    Array("project", "acronym_project", 73, 350, "ADD", "a".repeat(16), "project__acronym_project__max_size_KO"),
    Array("project", "acronym_project", 73, 351, "ADD", "a".repeat(17), "project__acronym_project__max_size_KO"),

    Array("project", "acronym_project", 74, 352, "ADD", "123456",  "project__acronym_project__format_KO"),
    Array("project", "acronym_project", 74, 353, "ADD", "SECRETÓ", "project__acronym_project__format_KO"),
    Array("project", "acronym_project", 74, 354, "ADD", "SECRET A", "project__acronym_project__format_KO"),
    
    Array("project", "acronym_project", 75, 355, "ADD", "d".repeat(6),  true),
    Array("project", "acronym_project", 75, 356, "ADD", "d".repeat(7),  true),
    Array("project", "acronym_project", 75, 357, "ADD", "d".repeat(15), true),
    Array("project", "acronym_project", 75, 358, "ADD", "d".repeat(14), true),
    Array("project", "acronym_project", 75, 359, "ADD", "Ñ._;:(){}-'",  true),


    //EDIT
    Array("project", "acronym_project", 76, 360, "EDIT", "a".repeat(5), "project__acronym_project__min_size_KO"),
    Array("project", "acronym_project", 76, 361, "EDIT", "a".repeat(4), "project__acronym_project__min_size_KO"),
    Array("project", "acronym_project", 76, 362, "EDIT", "",            "project__acronym_project__min_size_KO"),

    Array("project", "acronym_project", 77, 363, "EDIT", "a".repeat(16), "project__acronym_project__max_size_KO"),
    Array("project", "acronym_project", 77, 364, "EDIT", "a".repeat(17), "project__acronym_project__max_size_KO"),

    Array("project", "acronym_project", 78, 365, "EDIT", "123456",  "project__acronym_project__format_KO"),
    Array("project", "acronym_project", 78, 366, "EDIT", "SECRETÓ", "project__acronym_project__format_KO"),
    Array("project", "acronym_project", 78, 367, "EDIT", "SECRET A", "project__acronym_project__format_KO"),
    
    Array("project", "acronym_project", 79, 368, "EDIT", "d".repeat(6),  true),
    Array("project", "acronym_project", 79, 369, "EDIT", "d".repeat(7),  true),
    Array("project", "acronym_project", 79, 370, "EDIT", "d".repeat(15), true),
    Array("project", "acronym_project", 79, 371, "EDIT", "d".repeat(14), true),
    Array("project", "acronym_project", 79, 372, "EDIT", "Ñ._;:(){}-'",  true),


    //SEARCH
    Array("project", "acronym_project", 80, 373, "SEARCH", "a".repeat(16), "project__acronym_project__max_size_KO"),
    Array("project", "acronym_project", 80, 374, "SEARCH", "a".repeat(17), "project__acronym_project__max_size_KO"),

    Array("project", "acronym_project", 81, 375, "SEARCH", "123456",  "project__acronym_project__format_KO"),
    Array("project", "acronym_project", 81, 376, "SEARCH", "SECRETÓ", "project__acronym_project__format_KO"),
    Array("project", "acronym_project", 81, 377, "SEARCH", "SECRET A", "project__acronym_project__format_KO"),
    
    Array("project", "acronym_project", 82, 378, "SEARCH", "d".repeat(6),  true),
    Array("project", "acronym_project", 82, 379, "SEARCH", "d".repeat(7),  true),
    Array("project", "acronym_project", 82, 380, "SEARCH", "d".repeat(15), true),
    Array("project", "acronym_project", 82, 381, "SEARCH", "d".repeat(14), true),
    Array("project", "acronym_project", 82, 382, "SEARCH", "Ñ._;:(){}-'",  true),
    Array("project", "acronym_project", 82, 383, "SEARCH", "",             true),


    //Campo = `id_sampling_methodology` int(11) NOT NULL, dígitos min 1 max 11

    //ADD
    Array("project", "id_sampling_methodology", 83, 384, "ADD", "",            "project__id_sampling_methodology__min_size_KO"),
    Array("project", "id_sampling_methodology", 83, 385, "ADD", "",            "project__id_sampling_methodology__min_size_KO"),

    Array("project", "id_sampling_methodology", 84, 386, "ADD", "2".repeat(12), "project__id_sampling_methodology__max_size_KO"),
    Array("project", "id_sampling_methodology", 84, 387, "ADD", "2".repeat(13), "project__id_sampling_methodology__max_size_KO"),
   
    Array("project", "id_sampling_methodology", 85, 388, "ADD", "texto", "project__id_sampling_methodology__format_KO"),
    Array("project", "id_sampling_methodology", 85, 389, "ADD", "11.9",  "project__id_sampling_methodology__format_KO"),
    Array("project", "id_sampling_methodology", 85, 390, "ADD", "11/9",  "project__id_sampling_methodology__format_KO"),
    Array("project", "id_sampling_methodology", 85, 391, "ADD", "-1",    "project__id_sampling_methodology__format_KO"),
    Array("project", "id_sampling_methodology", 85, 392, "ADD", "0",     "project__id_sampling_methodology__format_KO"),
    Array("project", "id_sampling_methodology", 85, 393, "ADD", "01",    "project__id_sampling_methodology__format_KO"),
    
    Array("project", "id_sampling_methodology", 86, 394, "ADD", "2".repeat(1),  true),
    Array("project", "id_sampling_methodology", 86, 395, "ADD", "2".repeat(11), true),
    Array("project", "id_sampling_methodology", 86, 396, "ADD", "4514",         true),


    //EDIT
    Array("project", "id_sampling_methodology", 87, 397, "EDIT", "",            "project__id_sampling_methodology__min_size_KO"),
    Array("project", "id_sampling_methodology", 87, 398, "EDIT", "",            "project__id_sampling_methodology__min_size_KO"),

    Array("project", "id_sampling_methodology", 88, 399, "EDIT", "2".repeat(12), "project__id_sampling_methodology__max_size_KO"),
    Array("project", "id_sampling_methodology", 88, 400, "EDIT", "2".repeat(13), "project__id_sampling_methodology__max_size_KO"),
   
    Array("project", "id_sampling_methodology", 89, 401, "EDIT", "texto", "project__id_sampling_methodology__format_KO"),
    Array("project", "id_sampling_methodology", 89, 402, "EDIT", "11.9",  "project__id_sampling_methodology__format_KO"),
    Array("project", "id_sampling_methodology", 89, 403, "EDIT", "11/9",  "project__id_sampling_methodology__format_KO"),
    Array("project", "id_sampling_methodology", 89, 404, "EDIT", "-1",    "project__id_sampling_methodology__format_KO"),
    Array("project", "id_sampling_methodology", 89, 405, "EDIT", "0",     "project__id_sampling_methodology__format_KO"),
    Array("project", "id_sampling_methodology", 89, 406, "EDIT", "01",    "project__id_sampling_methodology__format_KO"),
    
    Array("project", "id_sampling_methodology", 90, 407, "EDIT", "2".repeat(1),  true),
    Array("project", "id_sampling_methodology", 90, 408, "EDIT", "2".repeat(11), true),
    Array("project", "id_sampling_methodology", 90, 409, "EDIT", "4514",         true),


    //SEARCH
    Array("project", "id_sampling_methodology", 91, 410, "SEARCH", "2".repeat(12), "project__id_sampling_methodology__max_size_KO"),
    Array("project", "id_sampling_methodology", 91, 411, "SEARCH", "2".repeat(13), "project__id_sampling_methodology__max_size_KO"),
   
    Array("project", "id_sampling_methodology", 92, 412, "SEARCH", "texto", "project__id_sampling_methodology__format_KO"),
    Array("project", "id_sampling_methodology", 92, 413, "SEARCH", "11.9",  "project__id_sampling_methodology__format_KO"),
    Array("project", "id_sampling_methodology", 92, 414, "SEARCH", "11/9",  "project__id_sampling_methodology__format_KO"),
    Array("project", "id_sampling_methodology", 92, 415, "SEARCH", "-1",    "project__id_sampling_methodology__format_KO"),
    Array("project", "id_sampling_methodology", 92, 416, "SEARCH", "0",     "project__id_sampling_methodology__format_KO"),
    Array("project", "id_sampling_methodology", 92, 417, "SEARCH", "01",    "project__id_sampling_methodology__format_KO"),
    
    Array("project", "id_sampling_methodology", 93, 418, "SEARCH", "2".repeat(1),  true),
    Array("project", "id_sampling_methodology", 93, 419, "SEARCH", "2".repeat(11), true),
    Array("project", "id_sampling_methodology", 93, 420, "SEARCH", "4514",         true),
    Array("project", "id_sampling_methodology", 93, 421, "SEARCH", "",             true),

   
    //Campo = `file_project` varchar(100) NOT NULL,  alfabéticos sin acentos ni ñ ni espacios min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 2000000 bytes.
    //No se lee en el ADD, readonly en EDIT

    //SEARCH
    Array("project", "file_project", 94, 422, "SEARCH", "a".repeat(101), "project__file_project__max_size_KO"),
    Array("project", "file_project", 94, 423, "SEARCH", "a".repeat(102), "project__file_project__max_size_KO"),
    
    Array("project", "file_project", 95, 424, "SEARCH", "archivo45",                   "project__file_project__format_KO"),
    Array("project", "file_project", 95, 425, "SEARCH", "Saludos\nEsto deberia petar", "project__file_project__format_KO"),
    Array("project", "file_project", 95, 426, "SEARCH", "Saludos\tEsto deberia petar", "project__file_project__format_KO"),
    Array("project", "file_project", 95, 427, "SEARCH", "archivoÑ",                    "project__file_project__format_KO"),
    Array("project", "file_project", 95, 428, "SEARCH", "archivoá",                    "project__file_project__format_KO"),
    Array("project", "file_project", 95, 429, "SEARCH", "archivo a",                   "project__file_project__format_KO"),
    Array("project", "file_project", 95, 430, "SEARCH", "archivo_pdf",                 "project__file_project__format_KO"),
    Array("project", "file_project", 95, 431, "SEARCH", "archivo/",                    "project__file_project__format_KO"),
    
    Array("project", "file_project", 96, 432, "SEARCH", "a".repeat(6),    true),
    Array("project", "file_project", 96, 433, "SEARCH", "a".repeat(1),    true),
    Array("project", "file_project", 96, 434, "SEARCH", "a".repeat(100),  true),
    Array("project", "file_project", 96, 435, "SEARCH", "a".repeat(99),   true),
    Array("project", "file_project", 96, 436, "SEARCH", `fichero.pdf`,    true),
    Array("project", "file_project", 96, 437, "SEARCH", "fichero.png",    true),
    Array("project", "file_project", 96, 438, "SEARCH",  "",              true),
    Array("project", "file_project", 96, 439, "SEARCH", "fic.h.e.ro.png", true),
    Array("project", "file_project", 96, 440, "SEARCH", "ficheroName",    true)
);

let pruebas_file_project = Array(

    //Formato test:Array(Entidad,Campo,Numero Test,Numero Prueba, Accion,parametro a probar,Valor, Mensaje Respuesta)
    //Campo = `nuevo_file_project` varchar(100) NOT NULL,  alfabéticos sin acentos ni ñ ni espacios min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 2000000 bytes.
    //No se lee en el SEARCH

    //ADD
    Array("project", "nuevo_file_project", 97, 441, "ADD", "Existe", Array(), "project__nuevo_file_project__empty_KO"),
    
    Array("project", "nuevo_file_project", 98, 443, "ADD", "max_size_file", Array("filename",Array("application/pdf"),3000000), "project__nuevo_file_project__max_size_file_KO"),
    Array("project", "nuevo_file_project", 98, 443, "ADD", "max_size_file", Array("filename",Array("application/pdf"),2000000), "project__nuevo_file_project__max_size_file_KO"),
    Array("project", "nuevo_file_project", 98, 444, "ADD", "max_size_file", Array("filename",Array("application/pdf"),2000001), "project__nuevo_file_project__max_size_file_KO"),
    
    Array("project", "nuevo_file_project", 99, 445, "ADD", "type_file", Array("filename",Array("image/jpeg"),1234),               "project__nuevo_file_project__type_file_KO"),
    Array("project", "nuevo_file_project", 99, 446, "ADD", "type_file", Array("filename",Array("application/octet-stream"),1234), "project__nuevo_file_project__type_file_KO"),
    Array("project", "nuevo_file_project", 99, 447, "ADD", "type_file", Array("filename",Array("text/plain"),1234),               "project__nuevo_file_project__type_file_KO"),
    Array("project", "nuevo_file_project", 99, 448, "ADD", "type_file", Array("filename",Array("image/png"),1234),                "project__nuevo_file_project__type_file_KO"), 
       
    Array("project", "nuevo_file_project", 100, 449, "ADD", "format_name_file", Array("archivo45",Array("application/pdf"),1234),                   "project__nuevo_file_project__format_name_file_KO"), 
    Array("project", "nuevo_file_project", 100, 450, "ADD", "format_name_file", Array("Saludos\nEsto deberia petar",Array("application/pdf"),1234), "project__nuevo_file_project__format_name_file_KO"), 
    Array("project", "nuevo_file_project", 100, 451, "ADD", "format_name_file", Array("Saludos\tEsto deberia petar",Array("application/pdf"),1234), "project__nuevo_file_project__format_name_file_KO"), 
    Array("project", "nuevo_file_project", 100, 452, "ADD", "format_name_file", Array("archivoÑ",Array("application/pdf"),1234),                    "project__nuevo_file_project__format_name_file_KO"), 
    Array("project", "nuevo_file_project", 100, 453, "ADD", "format_name_file", Array("archivoá",Array("application/pdf"),1234),                    "project__nuevo_file_project__format_name_file_KO"), 
    Array("project", "nuevo_file_project", 100, 454, "ADD", "format_name_file", Array("archivo_pdf",Array("application/pdf"),1234),                 "project__nuevo_file_project__format_name_file_KO"), 
    Array("project", "nuevo_file_project", 100, 455, "ADD", "format_name_file", Array("archivo a",Array("application/pdf"),1234),                   "project__nuevo_file_project__format_name_file_KO"), 
    Array("project", "nuevo_file_project", 100, 456, "ADD", "format_name_file", Array("archivo/",Array("application/pdf"),1234),                    "project__nuevo_file_project__format_name_file_KO"), 
    
    Array("project", "nuevo_file_project", 101, 457, "ADD", "min_size", Array("a".repeat(6),Array("application/pdf"),1234), "project__nuevo_file_project__min_size_KO"), 
    Array("project", "nuevo_file_project", 101, 458, "ADD", "min_size", Array("a".repeat(4),Array("application/pdf"),1234), "project__nuevo_file_project__min_size_KO"), 
    
    Array("project", "nuevo_file_project", 102, 459, "ADD", "max_size", Array("a".repeat(101),Array("application/pdf"),1234),   "project__nuevo_file_project__max_size_KO"), 
    Array("project", "nuevo_file_project", 102, 460, "ADD", "max_size", Array("a".repeat(10134),Array("application/pdf"),1234), "project__nuevo_file_project__max_size_KO"), 

    Array("project", "nuevo_file_project", 103, 461, "ADD", "OK", Array("a".repeat(14),Array("application/pdf"),1234),                                                         true),
    Array("project", "nuevo_file_project", 103, 462, "ADD", "OK", Array("a".repeat(14),Array("application/pdf"),1000000),                                                      true),
    Array("project", "nuevo_file_project", 103, 463, "ADD", "OK", Array("a".repeat(14),Array("application/pdf"),1999999),                                                      true),
    Array("project", "nuevo_file_project", 103, 464, "ADD", "OK", Array("a".repeat(13),Array("application/pdf"),1234),                                                         true),
    Array("project", "nuevo_file_project", 103, 465, "ADD", "OK", Array("a".repeat(13),Array("application/msword"),1234),                                                      true),
    Array("project", "nuevo_file_project", 103, 466, "ADD", "OK", Array("a".repeat(13),Array("application/vnd.openxmlformats-officedocument.wordprocessingml.document"),1234), true),
    Array("project", "nuevo_file_project", 103, 467, "ADD", "OK", Array("fichero.pdf",Array("application/pdf"),1234),                                                          true),
    Array("project", "nuevo_file_project", 103, 468, "ADD", "OK", Array("fichero.png",Array("application/pdf"),1234),                                                          true),
    Array("project", "nuevo_file_project", 103, 469, "ADD", "OK", Array("fic.h.e.ro.png",Array("application/pdf"),1234),                                                       true),
    Array("project", "nuevo_file_project", 103, 470, "ADD", "OK", Array("ficheroName",Array("application/pdf"),1234),                                                          true),
    Array("project", "nuevo_file_project", 103, 471, "ADD", "OK", Array("a".repeat(7),Array("application/pdf"),1234),                                                          true),
    Array("project", "nuevo_file_project", 103, 472, "ADD", "OK", Array("a".repeat(8),Array("application/pdf"),1234),                                                          true),
    Array("project", "nuevo_file_project", 103, 473, "ADD", "OK", Array("a".repeat(100),Array("application/pdf"),1234),                                                        true),
    Array("project", "nuevo_file_project", 103, 474, "ADD", "OK", Array("a".repeat(99),Array("application/pdf"),1234),                                                         true),
  
    
    //EDIT
    Array("project", "nuevo_file_project", 104, 475, "EDIT", "Empty", Array(), true),

    Array("project", "nuevo_file_project", 105, 476, "EDIT", "max_size_file", Array("filename",Array("application/pdf"),2003000), "project__nuevo_file_project__max_size_file_KO"),
    Array("project", "nuevo_file_project", 105, 477, "EDIT", "max_size_file", Array("filename",Array("application/pdf"),2000000), "project__nuevo_file_project__max_size_file_KO"),
    Array("project", "nuevo_file_project", 105, 478, "EDIT", "max_size_file", Array("filename",Array("application/pdf"),2000001), "project__nuevo_file_project__max_size_file_KO"),
    
    Array("project", "nuevo_file_project", 106, 479, "EDIT", "type_file", Array("filename",Array("image/jpeg"),1234),               "project__nuevo_file_project__type_file_KO"),
    Array("project", "nuevo_file_project", 106, 480, "EDIT", "type_file", Array("filename",Array("application/octet-stream"),1234), "project__nuevo_file_project__type_file_KO"),
    Array("project", "nuevo_file_project", 106, 481, "EDIT", "type_file", Array("filename",Array("text/plain"),1234),               "project__nuevo_file_project__type_file_KO"),
    Array("project", "nuevo_file_project", 106, 482, "EDIT", "type_file", Array("filename",Array("image/png"),1234),                "project__nuevo_file_project__type_file_KO"), 
       
    Array("project", "nuevo_file_project", 107, 483, "EDIT", "format_name_file", Array("archivo45",Array("application/pdf"),1234),                   "project__nuevo_file_project__format_name_file_KO"), 
    Array("project", "nuevo_file_project", 107, 484, "EDIT", "format_name_file", Array("Saludos\nEsto deberia petar",Array("application/pdf"),1234), "project__nuevo_file_project__format_name_file_KO"), 
    Array("project", "nuevo_file_project", 107, 485, "EDIT", "format_name_file", Array("Saludos\tEsto deberia petar",Array("application/pdf"),1234), "project__nuevo_file_project__format_name_file_KO"), 
    Array("project", "nuevo_file_project", 107, 486, "EDIT", "format_name_file", Array("archivoÑ",Array("application/pdf"),1234),                    "project__nuevo_file_project__format_name_file_KO"), 
    Array("project", "nuevo_file_project", 107, 487, "EDIT", "format_name_file", Array("archivoá",Array("application/pdf"),1234),                    "project__nuevo_file_project__format_name_file_KO"), 
    Array("project", "nuevo_file_project", 107, 488, "EDIT", "format_name_file", Array("archivo_pdf",Array("application/pdf"),1234),                 "project__nuevo_file_project__format_name_file_KO"), 
    Array("project", "nuevo_file_project", 107, 489, "EDIT", "format_name_file", Array("archivo a",Array("application/pdf"),1234),                   "project__nuevo_file_project__format_name_file_KO"), 
    Array("project", "nuevo_file_project", 107, 490, "EDIT", "format_name_file", Array("archivo/",Array("application/pdf"),1234),                    "project__nuevo_file_project__format_name_file_KO"), 
    
    Array("project", "nuevo_file_project", 108, 491, "EDIT", "min_size", Array("a".repeat(6),Array("application/pdf"),1234), "project__nuevo_file_project__min_size_KO"), 
    Array("project", "nuevo_file_project", 108, 492, "EDIT", "min_size", Array("a".repeat(4),Array("application/pdf"),1234), "project__nuevo_file_project__min_size_KO"), 
    
    Array("project", "nuevo_file_project", 109, 493, "EDIT", "max_size", Array("a".repeat(101),Array("application/pdf"),1234),   "project__nuevo_file_project__max_size_KO"), 
    Array("project", "nuevo_file_project", 109, 494, "EDIT", "max_size", Array("a".repeat(10134),Array("application/pdf"),1234), "project__nuevo_file_project__max_size_KO"), 

    Array("project", "nuevo_file_project", 110, 495, "EDIT", "OK", Array("a".repeat(14),Array("application/pdf"),1234),                                                         true),
    Array("project", "nuevo_file_project", 110, 496, "EDIT", "OK", Array("a".repeat(14),Array("application/pdf"),1000000),                                                      true),
    Array("project", "nuevo_file_project", 110, 497, "EDIT", "OK", Array("a".repeat(14),Array("application/pdf"),1999999),                                                      true),
    Array("project", "nuevo_file_project", 110, 498, "EDIT", "OK", Array("a".repeat(13),Array("application/pdf"),1234),                                                         true),
    Array("project", "nuevo_file_project", 110, 499, "EDIT", "OK", Array("a".repeat(13),Array("application/msword"),1234),                                                      true),
    Array("project", "nuevo_file_project", 110, 500, "EDIT", "OK", Array("a".repeat(13),Array("application/vnd.openxmlformats-officedocument.wordprocessingml.document"),1234), true),
    Array("project", "nuevo_file_project", 110, 501, "EDIT", "OK", Array("fichero.pdf",Array("application/pdf"),1234),                                                          true),
    Array("project", "nuevo_file_project", 110, 502, "EDIT", "OK", Array("fichero.png",Array("application/pdf"),1234),                                                          true),
    Array("project", "nuevo_file_project", 110, 503, "EDIT", "OK", Array("fic.h.e.ro.png",Array("application/pdf"),1234),                                                       true),
    Array("project", "nuevo_file_project", 110, 504, "EDIT", "OK", Array("ficheroName",Array("application/pdf"),1234),                                                          true),
    Array("project", "nuevo_file_project", 110, 505, "EDIT", "OK", Array("a".repeat(7),Array("application/pdf"),1234),                                                          true),
    Array("project", "nuevo_file_project", 110, 506, "EDIT", "OK", Array("a".repeat(8),Array("application/pdf"),1234),                                                          true),
    Array("project", "nuevo_file_project", 110, 507, "EDIT", "OK", Array("a".repeat(100),Array("application/pdf"),1234),                                                        true),
    Array("project", "nuevo_file_project", 110, 508, "EDIT", "OK", Array("a".repeat(99),Array("application/pdf"),1234),                                                         true)
);