let textos_ES = {

    "SelectDefault": "Escoja",
    "textoInicio": "Bienvenidos, esto es la interfaz de la ET3 de nuestro grupo",
    /*TITULOS*/

    "base_de_datos": "Estructura",
    "API": "API",
    "pagina_principal": "Página Principal",

    //Idiomas
    "idiomaES": "Español",
    "idiomaEN": "Ingles",

    //paginacion
    "preposicionPag": "entradas de",

    //Textos datos generales
    'Nombre Grupo': 'Nombre Grupo',
    'Entrega': 'Entrega',
    'Horas Totales': 'Horas Totales',
    'Nombre Integrante': 'Nombre Integrante',
    'Horas': 'Horas',

    //textos titulos index
    'text_titulo_app': 'Interfaz ET3 IU',
    'text_titulo_app_est': 'Estructura ET3',
    'text_titulo_app_api': 'API ET3',
    'text_titulo_menu': 'Menú',
    'text_titulo_pie': 'Pie de Página',

    //Opciones de menu
    'text_project': 'Proyecto',
    'text_analysis_prep': 'Preparacion Análisis',
    'text_characteristic': 'Característica',

    //textos titulos pagina entidades
    'text_titulo_page_project': 'Gestión de Proyecto',
    'text_titulo_page_analysis_preparation': 'Gestión de Preparacion Análisis',
    'text_titulo_page_characteristic': 'Gestión de Característica',

    //Titulos de forms project 
    'text_contenido_titulo_form_project_ADD': 'Formulario Alta Proyecto',
    'text_contenido_titulo_form_project_SEARCH': 'Formulario Busqueda Proyecto',
    'text_contenido_titulo_form_project_EDIT': 'Formulario Modificación Proyecto',
    'text_contenido_titulo_form_project_SHOWCURRENT': 'Formulario Muestra Proyecto',
    'text_contenido_titulo_form_project_DELETE': 'Formulario Borrado Proyecto',

    //Titulos de forms analysis_preparation
    'text_contenido_titulo_form_analysis_preparation_ADD': 'Formulario Alta Preparacion Análisis',
    'text_contenido_titulo_form_analysis_preparation_SEARCH': 'Formulario Busqueda Preparacion Análisis',
    'text_contenido_titulo_form_analysis_preparation_EDIT': 'Formulario Modificación Preparacion Análisis',
    'text_contenido_titulo_form_analysis_preparation_SHOWCURRENT': 'Formulario Muestra Preparacion Análisis',
    'text_contenido_titulo_form_analysis_preparation_DELETE': 'Formulario Borrado Preparacion Análisis',

    //Titulos de los forms characteristic
    'text_contenido_titulo_form_characteristic_ADD': 'Formulario Alta Característica',
    'text_contenido_titulo_form_characteristic_SEARCH': 'Formulario Busqueda Característica',
    'text_contenido_titulo_form_characteristic_EDIT': 'Formulario Modificación Característica',
    'text_contenido_titulo_form_characteristic_SHOWCURRENT': 'Formulario Muestra Característica',
    'text_contenido_titulo_form_characteristic_DELETE': 'Formulario Borrado Característica',

    /*TRADUCCIONES PARA ESTRUCTURA.HTML*/

    'InfoTextStruct1': 'En está página se ofrece una explicación sobre las estructuras realizadas para las entidades empleadas para este proyecto.',
    'InfoTextStruct2': 'Para conocer más información sobre una estructura selecciona una de las entidades disponibles dentro del menú localizado en la parte superior izquierda.',

    //Titulos
    'text_title_page_default_structures': 'Estructuras Empleadas',
    'text_titulo_page_estructura_project': 'Estructura de Proyecto',
    'text_titulo_page_estructura_analysis_preparation': 'Estructura de Preparacion Análisis',
    'text_titulo_page_estructura_characteristic': 'Estructura de Característica',

    // Texto estructura project

    'struct1': 'Estructura empleada para la entidad project',
    'desc94': `
this.def_html_project = {
    atributos: ["id_project", "name_project", "start_date_project", "end_date_project", "responsable_project", "organization_project", "code_project", "acronym_project", "id_sampling_methodology", "description_project", "file_project"],

    /*<b>id_project</b> hace referencia a la ID de proyecto, el cual es un atributo autoincremental, lo cual no debe de ser introducido por el usuario en la operación de ADD.
      Es una clave primaria (PK), porque debe de ser único para todos los valores introducidos dentro de la entidad.
      Es un valor de tipo Texto (String) y su tamaño máximo es de 11 carácteres, todos de ellos numéricos.*/

    "id_project": {
        tag: "INPUT",
        type: "text",
        esPK: true,
        esAutoIncremental: true,
        esEspecial: false,
        size: 11
    },

    /*<b>name_project</b> hace referencia al nombre de proyecto, no es un atributo autoincremental y tampoco es clave primaria.
      Es un atributo de tipo Texto (String) y su tamaño máximo es de 100 caracteres*/

    "name_project": {
        tag: "INPUT",
        type: "text",
        esPK: false,
        esAutoIncremental: false,
        esEspecial: false,
        size: 100
    },

    /*<b>start_date_project</b> hace referencia a la fecha de inicio de proyecto, no es un atributo autoincremental y tampoco es clave primaria.
      Es un atributo de tipo Texto (String) y es una feche que debe de seguir un formato dd-mm-aaaa, debe de ser menor que la fecha de fin de proyecto.
      Es una atributo especial, por lo que, en consecuencia, tendrá un set de validaciones especiales.*/

    "start_date_project": {
        tag: "INPUT",
        type: "text",
        esPK: false,
        esAutoIncremental: false,
        esEspecial: true,
        size: 10
    },

    /*<b>end_date_project</b> hace referencia a la fecha de fin de proyecto, no es un atributo autoincremental y tampoco es clave primaria.
      Es un atributo de tipo Texto (String) y es una fecha que debe de seguir el formato dd-mm-aa, debe de ser mayor que la fecha de inicio de proyecto.
      Es una atributo especial, por lo que, en consecuencia, tendrá un set de validaciones especiales.*/

    "end_date_project": {
        tag: "INPUT",
        type: "text",
        esPK: false,
        esAutoIncremental: false,
        esEspecial: true,
        size: 10
    },

    /*<b>responsable_project</b> hace referencia al responsable de proyecto, no es un atributo autoincremental y tampoco es clave primaria.
      Es un atributo de tipo Texto (String) y su tamaño máximo es de 60 caracteres.*/

    "responsable_project": {
        tag: "INPUT",
        type: "text",
        esPK: false,
        esAutoIncremental: false,
        esEspecial: false,
        size: 60
    },

    /*<b>organization_project</b> hace referencia a la organización de proyecto, no es un atributo autoincremental y tampoco es clave primaria.
      Es un atributo de tipo Texto (String) y su tamaño máximo es de 100 caracteres.*/

    "organization_project": {
        tag: "INPUT",
        type: "text",
        esPK: false,
        esAutoIncremental: false,
        esEspecial: false,
        size: 100
    },

    /*<b>code_project</b> hace referencia al código de proyecto, no es un atributo autoincremental y tampoco es clave primaria.
      Es un atributo de tipo Texto (String) y su tamaño máximo es de 50 caracteres.*/

    "code_project": {
        tag: "INPUT",
        type: "text",
        esPK: false,
        esAutoIncremental: false,
        esEspecial: false,
        size: 50
    },

    /*<b>acronym_project</b> hace referencia al acrónimo de proyecto, no es un atributo autoincremental y tampoco es clave primaria.
      Es un atributo de tipo Texto (String) y su tamaño máximo es de 15 caracteres.*/

    "acronym_project": {
        tag: "INPUT",
        type: "text",
        esPK: false,
        esAutoIncremental: false,
        esEspecial: false,
        size: 15
    },

    /*<b>id_sampling_methodology</b> hace referencia al ID de metodología de muestreo, no es un atributo autoincremental y tampoco es clave primaria.
      Es un atributo de tipo Texto (String) y su tamaño máximo es de 15 caracteres numéricos.*/

    "id_sampling_methodology": {
        tag: "INPUT",
        type: "text",
        esPK: false,
        esAutoIncremental: false,
        esEspecial: false,
        size: 11
    },

    /*<b>description_project</b> hace referencia a la descripción de proyecto, no es un atributo autoincremental y tampoco es clave primaria.
      Es un atributo de tipo Texto (String) y su tamaño máximo es de 500 caracteres.*/

    "description_project": {
        tag: "TEXTAREA",
        esPK: false,
        esAutoIncremental: false,
        esEspecial: false,
        rows: 5,
        cols: 100
    },

    /*<b>file_project</b> hace referencia al archivo de proyecto, no es un atributo autoincremental y tampoco es clave primaria.
      Es un atributo de tipo archivo (file) y su tamaño máximo es de 2MBs, debe de tener un nombre de máximo 100 caracteres.
      Además, debe ser de uno de los siguientes formatos de archivos: pdf, doc (MSWord 2000-2003), docx (MSWord 2007-365)*/

    "file_project": {
        tag: "INPUT",
        type: "file",
        esPK: false,
        esAutoIncremental: false,
        esEspecial: false,
        size: 100
    }
};

<b>Estructura de pruebas para Project:</b>

this.def_test_project = {

    // Estructura para los test de adición de un nuevo proyecto.

    "ADD": {

        /* <b>name_project</b> debe de seguir los siguientes requisitos:
            - Tamaño mínimo de 15 caracteres.
            - Tamaño máximo de 100 caracteres.
            - Permitidos: caracteres alfabéticos y espacios.
            - No permitidos: acentos, ñ's y caracteres no mencionados.
         * /

        "name_project": {
            "min_size": {
                valor: 15,
                codigo: "project__name_project__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 100,
                codigo: "project__name_project__max_size_KO",
                especial: false
            },
            "format": {
                valor: "^[A-Za-z ]*$",
                codigo: "project__name_project__format_KO",
                especial: false
            }
        },

        /* <b>start_date_project</b> debe de seguir los siguientes requisitos:
            - Formato de dd-mm-aaaa (no sirve dd/mm/aaaa o similares).
            - Debe de ser una fecha váida dentro del calendario gregoriano.
            - La fecha no debe de ser superior a la fecha de fin de proyecto.
         * /

        "start_date_project": {
            "format": {
                valor: "^[0-9]{2}/[0-9]{2}/[0-9]{4}$",
                codigo: "project__start_date_project__format_KO",
                especial: false
            },
            "fechavalida": {
                valor: "fechavalida",
                codigo: "project__start_date_project__valid_KO",
                especial: true
            },
            "fechaSuperior": {
                valor: "fechaSuperior",
                codigo: "project__start_date_project__superior_KO",
                especial: true
            }
        },

        /* <b>end_date_project</b> debe de seguir los siguientes requisitos:
            - Formato de dd-mm-aaaa (no sirve dd/mm/aaaa o similares).
            - Debe de ser una fecha váida dentro del calendario gregoriano.
            - La fecha no debe de ser inferior a la fecha de inicio de proyecto.
         * /

        "end_date_project": {
            "format": {
                valor: "^[0-9]{2}/[0-9]{2}/[0-9]{4}$",
                codigo: "project__end_date_project__format_KO",
                especial: false
            },
            "fechavalida": {
                valor: "fechavalida",
                codigo: "project__end_date_project__valid_KO",
                especial: true
            },
            "fechaInferior": {
                valor: "fechaInferior",
                codigo: "project__end_date_project__inferior_KO",
                especial: true
            }
        },

        /* <b>responsable_project</b> debe de seguir los siguientes requisitos:
            - Tamaño mínimo de 6 caracteres.
            - Tamaño máximo de 60 caracteres.
            - Permitidos: caracteres alfabéticos, espacios, acentos y ñ's.
            - No permitidos: caracteres no mencionados.
         * /        

        "responsable_project": {
            "min_size": {
                valor: 6,
                codigo: "project__responsable_project__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 60,
                codigo: "project__responsable_project__max_size_KO",
                especial: false
            },
            "format": {
                valor: ^[A-Za-z áéíóúÁÉÍÓÚ ñÑ]*$,
                codigo: "project__responsable_project__format_KO",
                especial: false
            }
        },

        /* <b>organization_project</b> debe de seguir los siguientes requisitos:
            - Tamaño mínimo de 6 caracteres.
            - Tamaño máximo de 100 caracteres.
            - Permitidos: caracteres alfabéticos, espacios, acentos y ñ's.
            - No permitidos: caracteres no mencionados.
         * / 

        "organization_project": {
            "min_size": {
                valor: 6,
                codigo: "project__organization_project__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 100,
                codigo: "project__organization_project__max_size_KO",
                especial: false
            },
            "format": {
                valor: '^[A-Za-z áéíóúÁÉÍÓÚ ñÑ]*$',
                codigo: "project__organization_project__format_KO",
                especial: false
            }
        },

        /* <b>description_project</b> debe de seguir los siguientes requisitos:
            - Tamaño mínimo de 30 caracteres.
            - Tamaño máximo de 500 caracteres.
            - Permitidos: Todos.
         * / 

        "description_project": {
            "min_size": {
                valor: 30,
                codigo: "project__description_project__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 500,
                codigo: "project__description_project__max_size_KO",
                especial: false
            }
        },

        /* <b>code_project</b> debe de seguir los siguientes requisitos:
            - Tamaño mínimo de 6 caracteres.
            - Tamaño máximo de 50 caracteres.
            - Permitidos: caracteres alfabéticos, espacios, signos de puntuación y ñ's.
            - No permitidos: acentos y caracteres no mencionados.
         * / 

        "code_project": {
            "min_size": {
                valor: 6,
                codigo: "project__code_project__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 50,
                codigo: "project__code_project__max_size_KO",
                especial: false
            },
            "format": {
                valor: ^[A-Za-z ñÑ!"'(),-.:;?^_{\|}~¿»¡«]*$,
                codigo: "project__code_project__format_KO",
                especial: false
            }
        },

        /* <b>acronym_project</b> debe de seguir los siguientes requisitos:
            - Tamaño mínimo de 6 caracteres.
            - Tamaño máximo de 15 caracteres.
            - Permitidos: caracteres alfabéticos, signos de puntuación y ñ's.
            - No permitidos: espacios, acentos y caracteres no mencionados.
         * / 

        "acronym_project": {
            "min_size": {
                valor: 6,
                codigo: "project__acronym_project__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 15,
                codigo: "project__acronym_project__max_size_KO",
                especial: false
            },
            "format": {
                valor: ^[A-Za-zñÑ!"'(),-.:;?^_{\|}~¿»¡«]*$,
                codigo: "project__acronym_project__format_KO",
                especial: false
            }
        },

        /* <b>id_sampling_methodology</b> debe de seguir los siguientes requisitos:
            - Tamaño mínimo de 1 dígito.
            - Tamaño máximo de 100 dígitos.
            - Permitidos: números.
            - No permitidos: el resto de caracteres.
         * / 

        "id_sampling_methodology": {
            "min_size": {
                valor: 1,
                codigo: "project__id_sampling_methodology__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 11,
                codigo: "project__id_sampling_methodology__max_size_KO",
                especial: false
            },
            "format": {
                valor: "^[1-9][0-9]*$",
                codigo: "project__id_sampling_methodology__format_KO",
                especial: false
            }
        },
        
        /* <b>nuevo_file_project</b> debe de seguir los siguientes requisitos:
            - Tamaño mínimo de 7 caracteres en nombre de archivo.
            - Tamaño máximo de 100 caracteres en nombre de archivo.
            - No puedes dejar este campo vacío, debes de adjuntar un archivo.
            - Tamaño de archivo máximo de 2 GBs.
            - Formato permitidos: pdf, doc, docx.
            - Permitidos: caracteres alfabéticos y punto para indicar el formato.
            - No permitidos: espacios, acentos, ñ's y caracteres no mencionados.
         * / 

        "nuevo_file_project": {
            "empty": {
                valor: "empty",
                codigo: "project__nuevo_file_project__empty_KO",
                especial: true
            },
            "max_size_file": {
                valor: 2000000,
                codigo: "project__nuevo_file_project__max_size_file_KO",
                especial: false
            },
            "type_file": {
                valor: Array("application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"),
                codigo: "project__nuevo_file_project__type_file_KO",
                especial: false
            },
            "min_size": {
                valor: 7,
                codigo: "project__nuevo_file_project__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 100,
                codigo: "project__nuevo_file_project__max_size_KO",
                especial: false
            },
            "format_name_file": {
                valor: "^[A-Za-z.]*$",
                codigo: "project__nuevo_file_project__format_name_file_KO",
                especial: false
            }
        }
    },

    // Estructura para las pruebas de edición de un proyecto

    "EDIT": {

        /* <b>name_project</b> debe de seguir los siguientes requisitos:
            - Tamaño mínimo de 15 caracteres.
            - Tamaño máximo de 100 caracteres.
            - Permitidos: caracteres alfabéticos y espacios.
            - No permitidos: acentos, ñ's y caracteres no mencionados.
         * /
    
        "name_project": {
            "min_size": {
                valor: 15,
                codigo: "project__name_project__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 100,
                codigo: "project__name_project__max_size_KO",
                especial: false
            },
            "format": {
                valor: "^[A-Za-z ]*$",
                codigo: "project__name_project__format_KO",
                especial: false
            }
        },

        /* <b>start_date_project</b> debe de seguir los siguientes requisitos:
            - Formato de dd-mm-aaaa (no sirve dd/mm/aaaa o similares).
            - Debe de ser una fecha váida dentro del calendario gregoriano.
            - La fecha no debe de ser superior a la fecha de fin de proyecto.
         * /        

        "start_date_project": {
            "format": {
                valor: "^[0-9]{2}/[0-9]{2}/[0-9]{4}$",
                codigo: "project__start_date_project__format_KO",
                especial: false
            },
            "fechavalida": {
                valor: "fechavalida",
                codigo: "project__start_date_project__valid_KO",
                especial: true
            },
            "fechaSuperior": {
                valor: "fechaSuperior",
                codigo: "project__start_date_project__superior_KO",
                especial: true
            }
        },

        /* <b>end_date_project</b> debe de seguir los siguientes requisitos:
            - Formato de dd-mm-aaaa (no sirve dd/mm/aaaa o similares).
            - Debe de ser una fecha váida dentro del calendario gregoriano.
            - La fecha no debe de ser inferior a la fecha de inicio de proyecto.
         * /

        "end_date_project": {
            "format": {
                valor: "^[0-9]{2}/[0-9]{2}/[0-9]{4}$",
                codigo: "project__end_date_project__format_KO",
                especial: false
            },
            "fechavalida": {
                valor: "fechavalida",
                codigo: "project__end_date_project__valid_KO",
                especial: true
            },
            "fechaInferior": {
                valor: "fechaInferior",
                codigo: "project__end_date_project__inferior_KO",
                especial: true
            }
        },
        
        /* <b>responsable_project</b> debe de seguir los siguientes requisitos:
            - Tamaño mínimo de 6 caracteres.
            - Tamaño máximo de 60 caracteres.
            - Permitidos: caracteres alfabéticos, espacios, acentos y ñ's.
            - No permitidos: caracteres no mencionados.
         * /  

        "responsable_project": {
            "min_size": {
                valor: 6,
                codigo: "project__responsable_project__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 60,
                codigo: "project__responsable_project__max_size_KO",
                especial: false
            },
            "format": {
                valor: "^[A-Za-z áéíóúÁÉÍÓÚ ñÑ]*$",
                codigo: "project__responsable_project__format_KO",
                especial: false
            }
        },

        /* <b>organization_project</b> debe de seguir los siguientes requisitos:
            - Tamaño mínimo de 6 caracteres.
            - Tamaño máximo de 100 caracteres.
            - Permitidos: caracteres alfabéticos, espacios, acentos y ñ's.
            - No permitidos: caracteres no mencionados.
         * / 

        "organization_project": {
            "min_size": {
                valor: 6,
                codigo: "project__organization_project__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 100,
                codigo: "project__organization_project__max_size_KO",
                especial: false
            },
            "format": {
                valor: ^[A-Za-z áéíóúÁÉÍÓÚ ñÑ]*$,
                codigo: "project__organization_project__format_KO",
                especial: false
            }
        },

        /* <b>description_project</b> debe de seguir los siguientes requisitos:
            - Tamaño mínimo de 30 caracteres.
            - Tamaño máximo de 500 caracteres.
            - Permitidos: Todos.
         * / 

        "description_project": {
            "min_size": {
                valor: 30,
                codigo: "project__description_project__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 500,
                codigo: "project__description_project__max_size_KO",
                especial: false
            }
        },

        /* <b>code_project</b> debe de seguir los siguientes requisitos:
            - Tamaño mínimo de 6 caracteres.
            - Tamaño máximo de 50 caracteres.
            - Permitidos: caracteres alfabéticos, espacios, signos de puntuación y ñ's.
            - No permitidos: acentos y caracteres no mencionados.
         * / 

        "code_project": {
            "min_size": {
                valor: 6,
                codigo: "project__code_project__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 50,
                codigo: "project__code_project__max_size_KO",
                especial: false
            },
            "format": {
                valor: ^[A-Za-z ñÑ!"'(),-.:;?^_{\|}~¿»¡«]*$,
                codigo: "project__code_project__format_KO",
                especial: false
            }
        },

        /* <b>acronym_project</b> debe de seguir los siguientes requisitos:
            - Tamaño mínimo de 6 caracteres.
            - Tamaño máximo de 15 caracteres.
            - Permitidos: caracteres alfabéticos, signos de puntuación y ñ's.
            - No permitidos: espacios, acentos y caracteres no mencionados.
         * / 

        "acronym_project": {
            "min_size": {
                valor: 6,
                codigo: "project__acronym_project__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 15,
                codigo: "project__acronym_project__max_size_KO",
                especial: false
            },
            "format": {
                valor: ^[A-Za-zñÑ!"'(),-.:;?^_{\|}~¿»¡«]*$,
                codigo: "project__acronym_project__format_KO",
                especial: false
            }
        },

        /* <b>id_sampling_methodology</b> debe de seguir los siguientes requisitos:
            - Tamaño mínimo de 1 dígito.
            - Tamaño máximo de 100 dígitos.
            - Permitidos: números.
            - No permitidos: el resto de caracteres.
         * / 

        "id_sampling_methodology": {
            "min_size": {
                valor: 1,
                codigo: "project__id_sampling_methodology__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 11,
                codigo: "project__id_sampling_methodology__max_size_KO",
                especial: false
            },
            "format": {
                valor: "^[1-9][0-9]*$",
                codigo: "project__id_sampling_methodology__format_KO",
                especial: false
            }
        },

        /* <b>nuevo_file_project</b> debe de seguir los siguientes requisitos:
            - Tamaño mínimo de 7 caracteres en nombre de archivo.
            - Tamaño máximo de 100 caracteres en nombre de archivo.
            - No puedes dejar este campo vacío, debes de adjuntar un archivo.
            - Tamaño de archivo máximo de 2 GBs.
            - Formato permitidos: pdf, doc, docx.
            - Permitidos: caracteres alfabéticos y punto para indicar el formato.
            - No permitidos: espacios, acentos, ñ's y caracteres no mencionados.
         * / 

        "nuevo_file_project": {
            "max_size_file": {
                valor: 2000000,
                codigo: "project__nuevo_file_project__max_size_file_KO",
                especial: false
            },
            "type_file": {
                valor: Array("application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"),
                codigo: "project__nuevo_file_project__type_file_KO",
                especial: false
            },
            "min_size": {
                valor: 7,
                codigo: "project__nuevo_file_project__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 100,
                codigo: "project__nuevo_file_project__max_size_KO",
                especial: false
            },
            "format_name_file": {
                valor: "^[A-Za-z.]*$",
                codigo: "project__nuevo_file_project__format_name_file_KO",
                especial: false
            }
        }
    },

    // Estructura para los test de búsqueda de proyectos

    "SEARCH": {


        /* <b>id_project</b> debe de seguir los siguientes requisitos:
            - No hay tamaño mínimo.
            - Tamaño máximo de 11 dígitos.
            - Permitidos: números.
            - No permitidos: el resto de caracteres.
        * / 

        "id_project": {
            "max_size": {
                valor: 11,
                codigo: "project__id_project__max_size_KO",
                especial: false
            },
            "format": {
                valor: "^[0-9]*$",
                codigo: "project__id_project__format_KO",
                especial: false
            }
        },

        /* <b>name_project</b> debe de seguir los siguientes requisitos:
            - No hay tamaño mínimo.
            - Tamaño máximo de 100 caracteres.
            - Permitidos: caracteres alfabéticos y espacios.
            - No permitidos: acentos, ñ's y caracteres no mencionados.
         * /

        "name_project": {
            "max_size": {
                valor: 100,
                codigo: "project__name_project__max_size_KO",
                especial: false
            },
            "format": {
                valor: "^[A-Za-z ]*$",
                codigo: "project__name_project__format_KO",
                especial: false
            }
        },

        /* <b>start_date_project</b> debe de seguir los siguientes requisitos:
            - Formato de dd-mm-aaaa (no sirve dd/mm/aaaa o similares).
         * /

        "start_date_project": {
            "format": {
                valor: "^[0-9]{0,2}[/]{0,1}[0-9]{0,2}[/]{0,1}[0-9]{0,4}$",
                codigo: "project__start_date_project__format_SEARCH_KO",
                especial: false
            }
        },

        /* <b>end_date_project</b> debe de seguir los siguientes requisitos:
            - Formato de dd-mm-aaaa (no sirve dd/mm/aaaa o similares).
         * /

        "end_date_project": {
            "format": {
                valor: "^[0-9]{0,2}[/]{0,1}[0-9]{0,2}[/]{0,1}[0-9]{0,4}$",
                codigo: "project__end_date_project__format_SEARCH_KO",
                especial: false
            }
        },

        /* <b>responsable_project</b> debe de seguir los siguientes requisitos:
            - No hay tamaño mínimo.
            - Tamaño máximo de 60 caracteres.
            - Permitidos: caracteres alfabéticos, espacios, acentos y ñ's.
            - No permitidos: caracteres no mencionados.
         * /  

        "responsable_project": {
            "max_size": {
                valor: 60,
                codigo: "project__responsable_project__max_size_KO",
                especial: false
            },
            "format": {
                valor: "^[A-Za-z áéíóúÁÉÍÓÚ ñÑ]*$",
                codigo: "project__responsable_project__format_KO",
                especial: false
            }
        },

        /* <b>organization_project</b> debe de seguir los siguientes requisitos:
            - No hay tamaño mínimo.
            - Tamaño máximo de 100 caracteres.
            - Permitidos: caracteres alfabéticos, espacios, acentos y ñ's.
            - No permitidos: caracteres no mencionados.
         * / 

        "organization_project": {
            "max_size": {
                valor: 100,
                codigo: "project__organization_project__max_size_KO",
                especial: false
            },
            "format": {
                valor: ^[A-Za-z áéíóúÁÉÍÓÚ ñÑ]*$,
                codigo: "project__organization_project__format_KO",
                especial: false
            }
        },

        /* <b>description_project</b> debe de seguir los siguientes requisitos:
            - No hay tamaño mínimo.
            - Tamaño máximo de 500 caracteres.
            - Permitidos: Todos.
         * / 

        "description_project": {
            "max_size": {
                valor: 500,
                codigo: "project__description_project__max_size_KO",
                especial: false
            }
        },

        /* <b>code_project</b> debe de seguir los siguientes requisitos:
            - No hay tamaño mínino.
            - Tamaño máximo de 50 caracteres.
            - Permitidos: caracteres alfabéticos, espacios, signos de puntuación y ñ's.
            - No permitidos: acentos y caracteres no mencionados.
         * / 

        "code_project": {
            "max_size": {
                valor: 50,
                codigo: "project__code_project__max_size_KO",
                especial: false
            },
            "format": {
                valor: ^[A-Za-z ñÑ!"'(),-.:;?^_{\|}~¿»¡«]*$,
                codigo: "project__code_project__format_KO",
                especial: false
            }
        },

        /* <b>acronym_project</b> debe de seguir los siguientes requisitos:
            - No hay tamaño mínimo.
            - Tamaño máximo de 15 caracteres.
            - Permitidos: caracteres alfabéticos, signos de puntuación y ñ's.
            - No permitidos: espacios, acentos y caracteres no mencionados.
         * / 

        "acronym_project": {
            "max_size": {
                valor: 15,
                codigo: "project__acronym_project__max_size_KO",
                especial: false
            },
            "format": {
                valor: ^[A-Za-zñÑ!"'(),-.:;?^_{\|}~¿»¡«]*$,
                codigo: "project__acronym_project__format_KO",
                especial: false
            }
        },


        /* <b>id_sampling_methodology</b> debe de seguir los siguientes requisitos:
            - No hay tamaño mínimo.
            - Tamaño máximo de 100 dígitos.
            - Permitidos: números.
            - No permitidos: el resto de caracteres.
         * / 

        "id_sampling_methodology": {
            "max_size": {
                valor: 11,
                codigo: "project__id_sampling_methodology__max_size_KO",
                especial: false
            },
            "format": {
                valor: "^[0-9]*$",
                codigo: "project__id_sampling_methodology__format_KO",
                especial: false
            }
        },

        /* <b>file_project</b> debe de seguir los siguientes requisitos:
            - No hay tamaño mínimo.
            - Tamaño máximo de 100 caracteres en nombre de archivo.
            - Permitidos: caracteres alfabéticos y punto para indicar el formato.
            - No permitidos: espacios, acentos, ñ's y caracteres no mencionados.
         * / 

        "file_project": {
            "max_size": {
                valor: 100,
                codigo: "project__file_project__max_size_KO",
                especial: false
            },
            "format": {
                valor: ^[A-Za-z.]*$,
                codigo: "project__file_project__format_KO",
                especial: false
            }
        }
    }
};

<b>Ejemplo de uso: estructura vacía</b>

def_html_nombreentidad = {
    atributos: [],                         //lista de los atributos
    atributo: {                            //definicion de cada atributo
        tag: "",                           //el tag html (input,select,textarea)
        type: "",                          //el tipo de input optativo
        valores: [],                       //valores posibles si es select, optativo
        multiple: false,                   //si da opciones y es multiple, optativo
        esPK: true,                        //es PK en la tabla?
        esAutoIncremental: true,           //es autoincremental?
        esEspecial : true,                 //es para los especiales a la hora de ponerlo en la tabla
        size: "",                          //para el tamaño del input optativo
        rows : "",                         //para textarea optativo
        cols : "",                         //para textarea optativo
    }

};

def_test_nombreentidad = {                 //todo obligatorio
    accion: {                                   //ADD, EDIT o SEARCH, para SHOWCURRENT y DELETE no hay validaciones
        atributo: {                             //el atributo a probar
            prueba: {                           //el nombre de la prueba a realizar
                valor : "",                     //el maximo para un max_size o el regex para formato
                codigo: "",                     //el codigo de error
                especial : false                //indica si es prueba especial/estandar (al hacer test que invoque validaciones atomicas o metodo especifco)
            }   
        }                                       //la de empty de fichero cuenta como especial (IMPORTANTE)
    }
}
`,

    // Textos para la estructura de analysis_preparation

    'struct2': 'Estructura empleada para la entidad analysis preparation',
    'desc95': `
this.def_html_analysis_preparation = {
    atributos: ["id_analysis_preparation", "name_analysis_preparation", "bib_analysis_preparation", "description_analysis_preparation", "file_analysis_preparation"],

    /*<b>id_analysis_preparation</b> hace referencia al ID de análisis, el cual es un atributo autoincremental, lo cual no debe de ser introducido por el usuario en la operación de ADD.
      Es una clave primaria (PK), porque debe de ser único para todos los valores introducidos dentro de la entidad.
      Es un valor de tipo Texto (String) y su tamaño máximo es de 11 carácteres, todos de ellos numéricos.*/    

    "id_analysis_preparation": {
        tag: "INPUT",
        type: "text",
        esPK: true,
        esAutoIncremental: true,
        esEspecial: false,
        size: 11
    },

    /*<b>name_analysis_preparation</b> hace referencia al nombre de análisis, no es un atributo autoincremental y tampoco es clave primaria.
      Es un atributo de tipo Texto (String) y su tamaño máximo es de 100 caracteres*/

    "name_analysis_preparation": {
        tag: "INPUT",
        type: "text",
        esPK: false,
        esAutoIncremental: false,
        esEspecial: false,
        size: 100
    },

    /*<b>bib_analysis_preparation</b> hace referencia a la bibliografía de análisis, no es un atributo autoincremental y tampoco es clave primaria.
      Es un atributo de tipo Texto (String) y su tamaño máximo es de 200 caracteres*/

    "bib_analysis_preparation": {
        tag: "TEXTAREA",
        esPK: false,
        esAutoIncremental: false,
        esEspecial: false,
        rows: 4,
        cols: 50
    },

    /*<b>description_analysis_preparation</b> hace referencia a la descripción de análisis, no es un atributo autoincremental y tampoco es clave primaria.
      Es un atributo de tipo Texto (String) y su tamaño máximo es de 5000 caracteres*/

    "description_analysis_preparation": {
        tag: "TEXTAREA",
        esPK: false,
        esAutoIncremental: false,
        esEspecial: false,
        rows: 50,
        cols: 100
    },

    /*<b>file_analysis_preparation</b> hace referencia al archivo de análisis, no es un atributo autoincremental y tampoco es clave primaria.
      Es un atributo de tipo archivo (file) y su tamaño máximo es de 2MBs, debe de tener un nombre de máximo 100 caracteres.
      Además, debe ser de uno de los siguientes formatos de archivos: pdf, doc (MSWord 2000-2003), docx (MSWord 2007-365)*/

    "file_analysis_preparation": {
        tag: "INPUT",
        type: "file",
        esPK: false,
        esAutoIncremental: false,
        esEspecial: false,
        size: 100
    }
};

<b>Estructura de pruebas para Analysis Preparation:</b>

this.def_test_analysis_preparation = {
    
    // Estructura para los test de adición de un nuevo análisis.

    "ADD": {

        /* <b>name_analysis_preparation</b> debe de seguir los siguientes requisitos:
            - Tamaño mínimo de 8 caracteres.
            - Tamaño máximo de 100 caracteres.
            - Permitidos: caracteres alfabéticos y espacios.
            - No permitidos: acentos, ñ's y caracteres no mencionados.
         * /

        "name_analysis_preparation": {
            "min_size": {
                valor: 8,
                codigo: "analysis_preparation__name_analysis_preparation__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 100,
                codigo: "analysis_preparation__name_analysis_preparation__max_size_KO",
                especial: false
            },
            "format": {
                valor: "^[A-Za-z ]*$",
                codigo: "analysis_preparation__name_analysis_preparation__format_KO",
                especial: false
            }
        },

        /* <b>description_analysis_preparation</b> debe de seguir los siguientes requisitos:
            - Tamaño mínimo de 80 caracteres.
            - Tamaño máximo de 5000 caracteres.
            - Permitidos: caracteres alfabéticos y espacios.
            - No permitidos: acentos, ñ's y caracteres no mencionados.
         * /

        "description_analysis_preparation": {
            "min_size": {
                valor: 80,
                codigo: "analysis_preparation__description_analysis_preparation__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 5000,
                codigo: "analysis_preparation__description_analysis_preparation__max_size_KO",
                especial: false
            },
            "format": {
                valor: "^[A-Za-z ]*$",
                codigo: "analysis_preparation__description_analysis_preparation__format_KO",
                especial: false
            }
        },

        /* <b>bib_analysis_preparation</b> debe de seguir los siguientes requisitos:
            - Tamaño mínimo de 6 caracteres.
            - Tamaño máximo de 200 caracteres.
            - Permitidos: caracteres alfabéticos, acentos, ñ's, signos de puntuación y espacios.
            - No permitidos: caracteres no mencionados.
         * /

        "bib_analysis_preparation": {
            "min_size": {
                valor: 6,
                codigo: "analysis_preparation__bib_analysis_preparation__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 200,
                codigo: "analysis_preparation__bib_analysis_preparation__max_size_KO",
                especial: false
            },
            "format": {
                valor: ^[A-Za-z ñÑ !"'(),-.:;?^_{\|}~¿»¡«  áéíóúÁÉÍÓÚ]*$,
                codigo: "analysis_preparation__bib_analysis_preparation__format_KO",
                especial: false
            }
        },

        /* <b>nuevo_file_analysis_preparation</b> debe de seguir los siguientes requisitos:
            - Tamaño mínimo de 7 caracteres en nombre de archivo.
            - Tamaño máximo de 100 caracteres en nombre de archivo.
            - No puedes dejar este campo vacío, debes de adjuntar un archivo.
            - Tamaño de archivo máximo de 2 GBs.
            - Formato permitidos: pdf, doc, docx.
            - Permitidos: caracteres alfabéticos y punto para indicar el formato.
            - No permitidos: espacios, acentos, ñ's y caracteres no mencionados.
         * /

        "nuevo_file_analysis_preparation": {
            "empty": {
                valor: "empty",
                codigo: "analysis_preparation__nuevo_file_analysis_preparation__empty_KO",
                especial: true
            },
            "max_size_file": {
                valor: 2000000,
                codigo: "analysis_preparation__nuevo_file_analysis_preparation__max_size_file_KO",
                especial: false
            },
            "type_file": {
                valor: Array("application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"),
                codigo: "analysis_preparation__nuevo_file_analysis_preparation__type_file_KO",
                especial: false
            },
            "min_size": {
                valor: 7,
                codigo: "analysis_preparation__nuevo_file_analysis_preparation__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 100,
                codigo: "analysis_preparation__nuevo_file_analysis_preparation__max_size_KO",
                especial: false
            },
            "format_name_file": {
                valor: "^[A-Za-z.]*$",
                codigo: "analysis_preparation__nuevo_file_analysis_preparation__format_name_file_KO",
                especial: false
            }
        }
    },

    // Estructura para los test de edición de un análisis.

    "EDIT": {

        /* <b>name_analysis_preparation</b> debe de seguir los siguientes requisitos:
            - Tamaño mínimo de 8 caracteres.
            - Tamaño máximo de 100 caracteres.
            - Permitidos: caracteres alfabéticos y espacios.
            - No permitidos: acentos, ñ's y caracteres no mencionados.
         * /

        "name_analysis_preparation": {
            "min_size": {
                valor: 8,
                codigo: "analysis_preparation__name_analysis_preparation__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 100,
                codigo: "analysis_preparation__name_analysis_preparation__max_size_KO",
                especial: false
            },
            "format": {
                valor: "^[A-Za-z ]*$",
                codigo: "analysis_preparation__name_analysis_preparation__format_KO",
                especial: false
            }
        },

        /* <b>description_analysis_preparation</b> debe de seguir los siguientes requisitos:
            - Tamaño mínimo de 80 caracteres.
            - Tamaño máximo de 5000 caracteres.
            - Permitidos: caracteres alfabéticos y espacios.
            - No permitidos: acentos, ñ's y caracteres no mencionados.
         * /

        "description_analysis_preparation": {
            "min_size": {
                valor: 80,
                codigo: "analysis_preparation__description_analysis_preparation__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 5000,
                codigo: "analysis_preparation__description_analysis_preparation__max_size_KO",
                especial: false
            },
            "format": {
                valor: "^[A-Za-z ]*$",
                codigo: "analysis_preparation__description_analysis_preparation__format_KO",
                especial: false
            }
        },

        /* <b>bib_analysis_preparation</b> debe de seguir los siguientes requisitos:
            - Tamaño mínimo de 6 caracteres.
            - Tamaño máximo de 200 caracteres.
            - Permitidos: caracteres alfabéticos, acentos, ñ's, signos de puntuación y espacios.
            - No permitidos: caracteres no mencionados.
         * /

        "bib_analysis_preparation": {
            "min_size": {
                valor: 6,
                codigo: "analysis_preparation__bib_analysis_preparation__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 200,
                codigo: "analysis_preparation__bib_analysis_preparation__max_size_KO",
                especial: false
            },
            "format": {
                valor: ^[A-Za-z ñÑ !"'(),-.:;?^_{\|}~¿»¡«  áéíóúÁÉÍÓÚ]*$,
                codigo: "analysis_preparation__bib_analysis_preparation__format_KO",
                especial: false
            }
        },

        /* <b>nuevo_file_analysis_preparation</b> debe de seguir los siguientes requisitos:
            - Tamaño mínimo de 7 caracteres en nombre de archivo.
            - Tamaño máximo de 100 caracteres en nombre de archivo.
            - No puedes dejar este campo vacío, debes de adjuntar un archivo.
            - Tamaño de archivo máximo de 2 GBs.
            - Formato permitidos: pdf, doc, docx.
            - Permitidos: caracteres alfabéticos y punto para indicar el formato.
            - No permitidos: espacios, acentos, ñ's y caracteres no mencionados.
         * /        

        "nuevo_file_analysis_preparation": {
            "max_size_file": {
                valor: 2000000,
                codigo: "analysis_preparation__nuevo_file_analysis_preparation__max_size_file_KO",
                especial: false
            },
            "type_file": {
                valor: Array("application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"),
                codigo: "analysis_preparation__nuevo_file_analysis_preparation__type_file_KO",
                especial: false
            },
            "min_size": {
                valor: 7,
                codigo: "analysis_preparation__nuevo_file_analysis_preparation__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 100,
                codigo: "analysis_preparation__nuevo_file_analysis_preparation__max_size_KO",
                especial: false
            },
            "format_name_file": {
                valor: "^[A-Za-z.]*$",
                codigo: "analysis_preparation__nuevo_file_analysis_preparation__format_name_file_KO",
                especial: false
            }
        }
    },

    // Estructura para los test de búsqueda de un análisis.

    "SEARCH": {

        /* <b>id_analysis_preparation</b> debe de seguir los siguientes requisitos:
            - No hay tamaño mínimo.
            - Tamaño máximo de 100 caracteres.
            - Permitidos: números.
            - No permitidos: caracteres no mencionados.
         * /

        "id_analysis_preparation": {
            "max_size": {
                valor: 11,
                codigo: "analysis_preparation__id_analysis_preparation__max_size_KO",
                especial: false
            },
            "format": {
                valor: "^[0-9]*$",
                codigo: "analysis_preparation__id_analysis_preparation__format_KO",
                especial: false
            }
        },

        /* <b>name_analysis_preparation</b> debe de seguir los siguientes requisitos:
            - No hay tamaño mínimo.
            - Tamaño máximo de 100 caracteres.
            - Permitidos: caracteres alfabéticos y espacios.
            - No permitidos: acentos, ñ's y caracteres no mencionados.
         * /

        "name_analysis_preparation": {
            "max_size": {
                valor: 100,
                codigo: "analysis_preparation__name_analysis_preparation__max_size_KO",
                especial: false
            },
            "format": {
                valor: "^[A-Za-z ]*$",
                codigo: "analysis_preparation__name_analysis_preparation__format_KO",
                especial: false
            }
        },

        /* <b>description_analysis_preparation</b> debe de seguir los siguientes requisitos:
            - No hay tamaño mínimo.
            - Tamaño máximo de 5000 caracteres.
            - Permitidos: caracteres alfabéticos y espacios.
            - No permitidos: acentos, ñ's y caracteres no mencionados.
         * /

        "description_analysis_preparation": {
            "max_size": {
                valor: 5000,
                codigo: "analysis_preparation__description_analysis_preparation__max_size_KO",
                especial: false
            },
            "format": {
                valor: "^[A-Za-z ]*$",
                codigo: "analysis_preparation__description_analysis_preparation__format_KO",
                especial: false
            }
        },

        /* <b>bib_analysis_preparation</b> debe de seguir los siguientes requisitos:
            - No hay tamaño mínimo.
            - Tamaño máximo de 200 caracteres.
            - Permitidos: caracteres alfabéticos, acentos, ñ's, signos de puntuación y espacios.
            - No permitidos: caracteres no mencionados.
         * /

        "bib_analysis_preparation": {
            "max_size": {
                valor: 200,
                codigo: "analysis_preparation__bib_analysis_preparation__max_size_KO",
                especial: false
            },
            "format": {
                valor: ^[A-Za-z ñÑ !"'(),-.:;?^_{\|}~¿»¡«  áéíóúÁÉÍÓÚ]*$,
                codigo: "analysis_preparation__bib_analysis_preparation__format_KO",
                especial: false
            }
        },

        /* <b>nuevo_file_analysis_preparation</b> debe de seguir los siguientes requisitos:
            - No hay tamaño mínimo.
            - Tamaño máximo de 100 caracteres en nombre de archivo.
            - Permitidos: caracteres alfabéticos y punto para indicar el formato.
            - No permitidos: espacios, acentos, ñ's y caracteres no mencionados.
         * /

        "file_analysis_preparation": {
            "max_size": {
                valor: 100,
                codigo: "analysis_preparation__file_analysis_preparation__max_size_KO",
                especial: false
            },
            "format": {
                valor: ^[A-Za-z.]*$,
                codigo: "analysis_preparation__file_analysis_preparation__format_KO",
                especial: false
            }
        }
    }
};

<b>Ejemplo de uso: estructura vacía</b>

def_html_nombreentidad = {
    atributos: [],                         //lista de los atributos
    atributo: {                            //definicion de cada atributo
        tag: "",                           //el tag html (input,select,textarea)
        type: "",                          //el tipo de input optativo
        valores: [],                       //valores posibles si es select, optativo
        multiple: false,                   //si da opciones y es multiple, optativo
        esPK: true,                        //es PK en la tabla?
        esAutoIncremental: true,           //es autoincremental?
        esEspecial : true,                 //es para los especiales a la hora de ponerlo en la tabla
        size: "",                          //para el tamaño del input optativo
        rows : "",                         //para textarea optativo
        cols : "",                         //para textarea optativo
    }

};

def_test_nombreentidad = {                 //todo obligatorio
    accion: {                                   //ADD, EDIT o SEARCH, para SHOWCURRENT y DELETE no hay validaciones
        atributo: {                             //el atributo a probar
            prueba: {                           //el nombre de la prueba a realizar
                valor : "",                     //el maximo para un max_size o el regex para formato
                codigo: "",                     //el codigo de error
                especial : false                //indica si es prueba especial/estandar (al hacer test que invoque validaciones atomicas o metodo especifco)
            }   
        }                                       //la de empty de fichero cuenta como especial (IMPORTANTE)
    }
}
`,

    // Textos para la estructura de characteristic

    'struct3': 'Estructura empleada para la entidad characteristic',
    'desc96': `
this.def_html_characteristic = {
    atributos: ["id_characteristic", "name_characteristic", "data_type_characteristic","category_characteristic","description_characteristic",  "bibref_characteristic", "file_characteristic"],

    "id_characteristic": {
        tag: "INPUT",
        type: "text",
        esPK: true,
        esAutoIncremental: true,
        esEspecial: false,
        size: 11
    },

    "name_characteristic": {
        tag: "INPUT",
        type: "text",
        esPK: false,
        esAutoIncremental: false,
        esEspecial: false,
        size: 100
    },

    "data_type_characteristic": { 
        tag: "SELECT", 
        valores: ['number','text','set'], 
        multiple: false, 
        esPK: false,  
        esAutoIncremental: false,
        esEspecial : false
    },

    "category_characteristic": { 
        tag: "SELECT", 
        valores: ['soil_site','soil_chem','soil_bio'], 
        multiple: false, 
        esPK: false,  
        esAutoIncremental: false,
        esEspecial : false
    },

    "description_characteristic": {
        tag: "TEXTAREA",
        esPK: false,
        esAutoIncremental: false,
        esEspecial: false,
        rows: 50,
        cols: 100
    },

    "bibref_characteristic": {
        tag: "TEXTAREA",
        esPK: false,
        esAutoIncremental: false,
        esEspecial: false,
        rows: 4,
        cols: 50
    },

    "file_characteristic": {
        tag: "INPUT",
        type: "file",
        esPK: false,
        esAutoIncremental: false,
        esEspecial: false,
        size: 100
    }
};

<b>Estructura para los tests de Characteristic:</b>

this.def_test_characteristic = {

    // Estructura para los test de adición de una nueva característica.

    "ADD": {
        "name_characteristic": {
            "min_size": {
                valor: 8,
                codigo: "characteristic__name_characteristic__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 100,
                codigo: "characteristic__name_characteristic__max_size_KO",
                especial: false
            },
            "format": {
                valor: "^[A-Za-z ]*$",
                codigo: "characteristic__name_characteristic__format_KO",
                especial: false
            }
        },

        "description_characteristic": {
            "min_size": {
                valor: 80,
                codigo: "characteristic__description_characteristic__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 5000,
                codigo: "characteristic__description_characteristic__max_size_KO",
                especial: false
            },
            "format": {
                valor: "^[A-Za-z ]*$",
                codigo: "characteristic__description_characteristic__format_KO",
                especial: false
            }
        },

        "data_type_characteristic": {
            "selectValido": {
                valor: selectValido,
                codigo: "characteristic__data_type_characteristic__valid_KO",
                especial: true
            }
        },

        "category_characteristic": {
            "selectValido": {
                valor: selectValido,
                codigo: "characteristic__category_characteristic__valid_KO",
                especial: true
            }
        },

        "bibref_characteristic": {
            "min_size": {
                valor: 16,
                codigo: "characteristic__bibref_characteristic__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 200,
                codigo: "characteristic__bibref_characteristic__max_size_KO",
                especial: false
            },
            "format": {
                valor: ^[A-Za-z ñÑ !"'(),-.:;?^_{\|}~¿»¡«  áéíóúÁÉÍÓÚ]*$,
                codigo: "characteristic__bibref_characteristic__format_KO",
                especial: false
            }
        },

        "nuevo_file_characteristic": {
            "empty": {
                valor: "empty",
                codigo: "characteristic__nuevo_file_characteristic__empty_KO",
                especial: true
            },
            "max_size_file": {
                valor: 200000,
                codigo: "characteristic__nuevo_file_characteristic__max_size_file_KO",
                especial: false
            },
            "type_file": {
                valor: Array("application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"),
                codigo: "characteristic__nuevo_file_characteristic__type_file_KO",
                especial: false
            },
            "min_size": {
                valor: 7,
                codigo: "characteristic__nuevo_file_characteristic__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 100,
                codigo: "characteristic__nuevo_file_characteristic__max_size_KO",
                especial: false
            },
            "format_name_file": {
                valor: "^[A-Za-z.]*$",
                codigo: "characteristic__nuevo_file_characteristic__format_name_file_KO",
                especial: false
            }
        }
    },

    "EDIT": {
        "name_characteristic": {
            "min_size": {
                valor: 8,
                codigo: "characteristic__name_characteristic__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 100,
                codigo: "characteristic__name_characteristic__max_size_KO",
                especial: false
            },
            "format": {
                valor: "^[A-Za-z ]*$",
                codigo: "characteristic__name_characteristic__format_KO",
                especial: false
            }
        },

        "description_characteristic": {
            "min_size": {
                valor: 80,
                codigo: "characteristic__description_characteristic__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 5000,
                codigo: "characteristic__description_characteristic__max_size_KO",
                especial: false
            },
            "format": {
                valor: "^[A-Za-z ]*$",
                codigo: "characteristic__description_characteristic__format_KO",
                especial: false
            }
        },

        "data_type_characteristic": {
            "selectValido": {
                valor: selectValido,
                codigo: "characteristic__data_type_characteristic__valid_KO",
                especial: true
            }
        },

        "category_characteristic": {
            "selectValido": {
                valor: selectValido,
                codigo: "characteristic__category_characteristic__valid_KO",
                especial: true
            }
        },

        "bibref_characteristic": {
            "min_size": {
                valor: 16,
                codigo: "characteristic__bibref_characteristic__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 200,
                codigo: "characteristic__bibref_characteristic__max_size_KO",
                especial: false
            },
            "format": {
                valor: ^[A-Za-z ñÑ !"'(),-.:;?^_{\|}~¿»¡«  áéíóúÁÉÍÓÚ]*$,
                codigo: "characteristic__bibref_characteristic__format_KO",
                especial: false
            }
        },

        "nuevo_file_characteristic": {
            "max_size_file": {
                valor: 200000,
                codigo: "characteristic__nuevo_file_characteristic__max_size_file_KO",
                especial: false
            },
            "type_file": {
                valor: Array("application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"),
                codigo: "characteristic__nuevo_file_characteristic__type_file_KO",
                especial: false
            },
            "min_size": {
                valor: 7,
                codigo: "characteristic__nuevo_file_characteristic__min_size_KO",
                especial: false
            },
            "max_size": {
                valor: 100,
                codigo: "characteristic__nuevo_file_characteristic__max_size_KO",
                especial: false
            },
            "format_name_file": {
                valor: "^[A-Za-z.]*$",
                codigo: "characteristic__nuevo_file_characteristic__format_name_file_KO",
                especial: false
            }
        }
    },

    "SEARCH": {
        "id_characteristic": {
            "max_size": {
                valor: 11,
                codigo: "characteristic__id_characteristic__max_size_KO",
                especial: false
            },
            "format": {
                valor: "^[0-9]*$",
                codigo: "characteristic__id_characteristic__format_KO",
                especial: false
            }
        },

        "name_characteristic": {
            "max_size": {
                valor: 100,
                codigo: "characteristic__name_characteristic__max_size_KO",
                especial: false
            },
            "format": {
                valor: "^[A-Za-z ]*$",
                codigo: "characteristic__name_characteristic__format_KO",
                especial: false
            }
        },

        "description_characteristic": {
            "max_size": {
                valor: 5000,
                codigo: "characteristic__description_characteristic__max_size_KO",
                especial: false
            },
            "format": {
                valor: "^[A-Za-z ]*$",
                codigo: "characteristic__description_characteristic__format_KO",
                especial: false
            }
        },

        "data_type_characteristic": {
            "selectValidoSEARCH": {
                valor: selectValidoSEARCH,
                codigo: "characteristic__data_type_characteristic__valid_SEARCH_KO",
                especial: true
            }
        },

        "category_characteristic": {
            "selectValidoSEARCH": {
                valor: selectValidoSEARCH,
                codigo: "characteristic__category_characteristic__valid_SEARCH_KO",
                especial: true
            }
        },

        "bibref_characteristic": {
            "max_size": {
                valor: 200,
                codigo: "characteristic__bibref_characteristic__max_size_KO",
                especial: false
            },
            "format": {
                valor: ^[A-Za-z ñÑ !"'(),-.:;?^_{\|}~¿»¡«  áéíóúÁÉÍÓÚ]*$,
                codigo: "characteristic__bibref_characteristic__format_KO",
                especial: false
            }
        },

        "file_characteristic": {
            "max_size": {
                valor: 100,
                codigo: "characteristic__file_characteristic__max_size_KO",
                especial: false
            },
            "format": {
                valor: ^[A-Za-z.]*$,
                codigo: "characteristic__file_characteristic__format_KO",
                especial: false
            }
        }
    }
};

<b>Ejemplo de uso: estructura vacía</b>

def_html_nombreentidad = {
    atributos: [],                         //lista de los atributos
    atributo: {                            //definicion de cada atributo
        tag: "",                           //el tag html (input,select,textarea)
        type: "",                          //el tipo de input optativo
        valores: [],                       //valores posibles si es select, optativo
        multiple: false,                   //si da opciones y es multiple, optativo
        esPK: true,                        //es PK en la tabla?
        esAutoIncremental: true,           //es autoincremental?
        esEspecial : true,                 //es para los especiales a la hora de ponerlo en la tabla
        size: "",                          //para el tamaño del input optativo
        rows : "",                         //para textarea optativo
        cols : "",                         //para textarea optativo
    }

};

def_test_nombreentidad = {                 //todo obligatorio
    accion: {                                   //ADD, EDIT o SEARCH, para SHOWCURRENT y DELETE no hay validaciones
        atributo: {                             //el atributo a probar
            prueba: {                           //el nombre de la prueba a realizar
                valor : "",                     //el maximo para un max_size o el regex para formato
                codigo: "",                     //el codigo de error
                especial : false                //indica si es prueba especial/estandar (al hacer test que invoque validaciones atomicas o metodo especifco)
            }   
        }                                       //la de empty de fichero cuenta como especial (IMPORTANTE)
    }
}
`,

    /*TRADUCCIONES PARA API.HTML*/

    'InfoTextAPI1': 'En esta página se mostrarán todas las funciones que se han implementado para la realización de este trabajo.',
    'InfoTextAPI2': 'Para conocer sobre las funciones implementadas escoja una de las opciones dentro del menú localizado en la parte superior izquierda.',

    // Textos funciones test

    'func1': 'test_run()',
    'desc1': '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de preparar, verificar y ejecutar todos los test que han sido definidos.',
    'func2': 'prepararTest()',
    'desc2': '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Es llamada por <b>test_run()</b> para limpiar las tablas y crear los arrays necesarios para ejecutar los tests.',
    'func3': 'crearArrays()',
    'desc3': '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de crear los arrays para las definiciones de test, las pruebas y las pruebas específicas de archivos y especiales, esta función es llamada por <b>test_run()</b>.',
    'func4': 'verificar()',
    'desc4': '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de comprobar que todas las definiciones de test y de pruebas están definidas correctamente, esta función es llamada por <b>test_run()</b>',
    'func5': 'verificarDeftest()',
    'desc5': '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de de verificar que el formato de las definiciones de test son correctas, esta función es llamada por <b>verificar()</b>',
    'func6': 'verificarPruebas()',
    'desc6': '<b>Parámetros:</b> No usa parámetros.\n<b>Output:</b> Devuelve un valor booleano (filacorrecta) que indica si el formato de las pruebas es correcto o no.\n<b>Función:</b> Se encarga de comprobar que el formato de las pruebas definidas es correcto, esta función es llamada por <b>verificar()</b>.',
    'func7': 'verificarPruebas_file()',
    'desc7': '<b>Parámetros:</b> No usa parámetros.\n<b>Output:</b> Devuelve un valor booleano (filacorrecta) que indica si el formato de las pruebas de fichero es correcto o no.\n<b>Función:</b> Se encarga de comprobar que el formato de las pruebas de fichero definidas es correcto, esta función es llamada por <b>verificar()</b>.',
    'func8': 'verificarPruebas_esp()',
    'desc8': '<b>Parámetros:</b> No usa parámetros.\n<b>Output:</b> Devuelve un valor booleano (filacorrecta) que indica si el formato de las pruebas especiales es correcto o no.\n<b>Función:</b> Se encarga de comprobar que el formato de las pruebas especiales definidas es correcto, esta función es llamada por <b>verificar()</b>.',
    'func9': 'ejecutar_pruebas()',
    'desc9': '<b>Parámetros/<b>Output:</b></b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de comprobar que todas las pruebas definidas se ejecutan correctamente, esta función es llamada por <b>test_run()</b>',
    'func10': 'test_entidad()',
    'desc10': '<b>Parámetros:</b> No usa parámetros.\n<b>Output:</b> Devuelve un valor booleano (flag) que indica si las pruebas definidas se han ejecutado correctamente o no.\n<b>Función:</b> Se encarga de comprobar que las pruebas definidas se ejecutan correctamente, esta función es llamada por <b>ejecutar_pruebas()</b>.',
    'func11': 'test_entidad_files()',
    'desc11': '<b>Parámetros:</b> No usa parámetros.\n<b>Output:</b> Devuelve un valor booleano (flag) que indica si las pruebas de ficheros definidas se han ejecutado correctamente o no.\n<b>Función:</b> Se encarga de comprobar que las pruebas de ficheros definidas se ejecutan correctamente, esta función es llamada por <b>ejecutar_pruebas()</b>.',
    'func12': 'test_entidad_esp()',
    'desc12': '<b>Parámetros:</b> No usa parámetros.\n<b>Output:</b> Devuelve un valor booleano (flag) que indica si las pruebas para variables especiales definidas se han ejecutado correctamente o no.\n<b>Función:</b> Se encarga de comprobar que las pruebas para variables especiales definidas se ejecutan correctamente, esta función es llamada por <b>ejecutar_pruebas()</b>.',
    'func13': 'devolver_dev(num_def)',
    'desc13': '<b>Parámetros:</b>\n\tnum_def:\n\t\tTipo: Número.\n\t\tDescripción: Hace referencia al número de definición de test.\n<b>Output:</b> Devuelve un array (array_def) que contiene el test asociado a ese número de defincición.\n<b>Función:</b> Se encarga de devolver la definición de test asociada a un número de definición de test determinado.',
    'func14': 'check(id, accion)',
    'desc14': '<b>Parámetros:</b>\n\tid:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un atributo de una entidad\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referncia a las acciones que se pueden realizar ADD, SEARCH, DELETE, EDIT.\n<b>Output:</b> Devuelve un valor booleano, indicando que las pruebas han salido con éxito o no.\n<b>Función:</b> Se encarga de comprobar si las pruebas realizadas en un atributo han salido todas con éxito, en caso contrario se muestra un campo con el mensaje de error asociado.',
    'func15': 'check_submit(accion)',
    'desc15': '<b>Parámetros:</b>\n\taccion\n\t\tTipo: String.\n\t\tDescripción: Hace referncia a las acciones que se pueden realizar ADD, SEARCH, DELETE, EDIT.\n<b>Output:</b> Devuelve un booleano indicando que los tests se han realizado correctamente o no.\n<b>Función:</b> Se encarga de comprobar todos los atributos para ver si cumplen con los requisitos definidos en las definiciones de test.',
    'func16': 'colocarvalicaciones(accion)',
    'desc16': '<b>Parámetros:</b>\n\taccion\n\t\tTipo: String.\n\t\tDescripción: Hace referncia a las acciones que se pueden realizar ADD, SEARCH, DELETE, EDIT.\n<b>Output:</b> La ejecución de esta función no devuelve ningún output.\n<b>Función:</b> Se encarga de coloca todas las validaciones relacionadas con los tests.',
    'func17': 'ocultar_boton_test()',
    'desc17': '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de ocultar el botón que permite la ejecución de los test y pruebas definidas.',
    'func18': 'mostrar_boton_test()',
    'desc18': '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de poner en visible el botón que permite la ejecución de los test y pruebas definidas.',
    'func19': 'validacionesespeciales(atributo, prueba)',
    'desc19': '<b>Parámetros:</b>\n\tatributo:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia al nombre del atributo especial a analizar.\n\tprueba:\n\t\tTipo: String.\n\t\tDescripción: Nombre de la prueba a realizar.\n<b>Output:</b> Devuelve un valor booleano que viene de lo que devuelvan las correspondientes funciónes auxiliares.\n<b>Función:</b> Se encarga de realizar las pruebas a los campos considerados como especiales (i.e.: las fechas en project).',
    'func20': 'fechaValida(fecha)',
    'desc20': '<b>Parámetros:</b>\n\tfecha:\n\t\tTipo: String.\n\t\tDescripción: Fecha a validar (inicio o fin de proyecto)\n<b>Output:</b> Devuelve un valor booleano, indicando si la fecha es válida o no.\n<b>Función:</b> Se encarga de comprobar si la fehca introducida es una fcha válida, esta función es llamada por <b>validacionesespeciales()</b> dentro de la clase <b>project</b>.',
    'func21': 'fechasOrdenadas(fecha1, fecha2)',
    'desc21': '<b>Parámetros:</b>\n\tfecha1:\n\t\tTipo: String.\n\t\tDescripción: Fecha de inicio de proyecto\n\tfecha2:\n\t\tTipo: String.\n\t\tDescripción: Fecha de fin de proyecto.\n<b>Output:</b> Devuelve un valor booleano, indicando si las fechas están ordenadas o no.\n<b>Función:</b> Se encarga de comprobar si la fecha de inicio es menor que la de fin y que la fecha de fin sea mayor que la de inicio, esta función es llamada por <b>validacionesespeciales()</b> dentro de la clase <b>project</b>.',
    'func22': 'selectValido(atributo, valores)',
    'desc22': '<b>Parámetros:</b>\n\tatributo\n\t\tTipo: String.\n\t\tDescripción: Categoría o tipo de dato.\n\tvalores:\n\t\tTipo: Array.\n\t\tDescripción: Almacena los valores que son válidos (los que se pueden escoger).\n<b>Output:</b> Devuelve un valor booleano, indicando si el valor escogido está contenido en la lista de valores o no.\n<b>Función:</b> Se encarga de comprobar si el valor escogido o buscado está entre las opciones válidas, esta función es llamada por <b>validacionesespeciales()</b> dentro de la clase <b>characteristic</b>.',
    'func23': 'cerrar_test()',
    'desc23': '<b>Parámetros/Output:</b> No usa parámetros y su ejecución no devuelve ningun tipo de output.\n<b>Función:</b> Se encarga de limpiar la tabla de tests y ocultarlo.',


    // Test funciones Presentación de tablas

    'func24': 'SEARCH(empieza, filas)',
    'desc24': '<b>Parámetros:</b>\n\tempieza:\n\t\tTipo: Número.\n\t\tDescripción: Indica el número por donde empieza la paginación.\n\tfilas:\n\t\tTipo: número\n\t\tDescipción: Indica el número de tuples que habrá por página.<b>Output: </b>La ejecución de esta función no proporciona ningún tipo de output.<b>Función:</b> Se encarga de buscar tuplas dentro de una entidad en base a unos criterios especificados para, posteriormente, mostrarlos en la tabla.',
    'func25': 'ADD()',
    'desc25': '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de llamar al back e insertar una nueva tupla dentro de la tabla de la entidad en la que estemos trabajando.',
    'func26': 'EDIT()',
    'desc26': '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de llamar al back y editar la tupla editada dentro de la tabla de la entidad en la que estemos trabajando.',
    'func27': 'DELETE()',
    'desc27': '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de llamar al back y borrar una tupla existente dentro de la tabla de la entidad en la que estemos trabajando.',
    'func28': 'cambiardatosespecialestabla(atributo, valoratributo, i)',
    'desc28': '<b>Parámetros:</b>\n\atributo:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento perteneciente a una entidad.\n\tvaloratributo:\n\t\tTipo: String.\n\t\tDescipción: Valor que tiene el atributo atributp almacenado.\n\ti\n\t\tTipo: String.\n\t\tDescripción: Elemento auxiliar.\n<b>Output: </b>Proporciona un output en tipo string que hace referencia a un elemento html que cambia como se ven los datos especiales dentro de la tabla.\n<b>Función:</b> Se encarga de cambiar los datos/atributos asignados como datos especiales para que se puedan ver con el formato permitido en la tabla.',
    'func29': 'modificarcolumnasmostrar(atributo)',
    'desc29': '<b>Parámetros:</b>\n\tatributo:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento de un entidad.\n<b>Output: </b>La ejecución de esta función no proporciona ningún tipo de output.\n<b>Función: </b> Se emplea para mostrar o ocultar la columna asociada al atributo seleccionado en el select.',
    'func30': 'mostrarocultarcolumnas()',
    'desc30': '<b>Parámetros/Output:</b>No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de ocultar las columnas que no están marcadas para mostrar.',
    'func31': 'cambiarcolumnatabla(atributo)',
    'desc31': '<b>Parámetros:</b>\n\tatributo:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento de un entidad.\n<b>Output: </b>La ejecución de esta función no proporciona ningún tipo de output.\n<b>Función: </b> Se encarga de ocultar la tabla en base al atributo pasado en los parámetros, esta función es llamada por <b>mostrarocultarcolumna()</b>.',
    'func32': 'crearTablaDatos()',
    'desc32': '<b>Parámetros/Output:</b>No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de llamar a las funciones auxiliares necesarias para crear las tablas.',
    'func33': 'construirSelect()',
    'desc33': '<b>Parámetros/Output:</b>No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de crear el select de selección de columnas.',
    'func34': 'hacerTabla()',
    'desc34': '<b>Parámetros/Output:</b>No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de crear la propia tabla, esta función es llamada por <b>crearDatosTabla()</b>.',
    'func35': 'hacerPaginacion()',
    'desc35': '<b>Parámetros/Output:</b>No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de llamar a la función encargada de crear la paginación en el caso de que existan tuplas, en caso contrario se ocultan todos los elementos del HTML relacionados con la paginación..',
    'func36': 'levantarPaginacion()',
    'desc36': '<b>Parámetros/Output:</b>No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de propiamente crear la paginación, esta función es llamada por <b>hacerPaginacion()</b>.',
    'func37': 'crearboton(accion, parametros, i)',
    'desc37': '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia las acciones que se pueden realizar: DELETE, SHOWCURRENT, EDIT.\n\tparámetros:\n\t\tTipo: String.\n\t\tDescipción: Hace referencia a algún elemento de la estructura.\n\ti:\n\t\tTipo: Stirng.\n\t\tDescripción: Elemento auxiliar.\n<b>Output:</b> Devulve un HTMLTableCellElement con el svg de los iconos.\n<b>Función:</b> Se encarga de crear los botones y los iconos correspondientes para las acciones de DELETE, SHOWCURRENT y EDIT.',
    'func38': 'cerrar_tabla()',
    'desc38': '<b>Parámetros/Output:</b>No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se oculta la tabla y se oculta el boton de test.',

    //textos funciones de formularios

    'func39': 'crearForm()',
    'desc39': '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de llamar a la función auxiliar <b>crearFormAtributo()</b> para crear el formulario.',
    'func40': 'crearFormAtributo(atributo)',
    'desc40': '<b>Parámetros:</b>\n\tatributo:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento perteneciente a una entidad.\n<b>Output:</b> La ejecución de esta función no devuelve ningún output.\n<b>Función:</b> Se encarga de crear la parte del formulario asociada a un atributo, esta función es llamada por <b>crearForm()</b>.',
    'func41': 'crearInput(datos, atributo)',
    'desc41': '<b>Parámetros:</b>\n\tdatos:\n\t\tTipo: Array.\n\t\tDescripción: Es una lista con los diferentes tipos de input que se pueden usar dentro de un formulario.\n\tatributo\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento perteneciente a una entidad.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de crear el input para un determinado atributo, esta función es llamada por <b>crearFormAtributo()</b>.',
    'func42': 'crearTextarea(datos, atributo)',
    'desc42': '<b>Parámetros:</b>\n\tdatos:\n\t\tTipo: Array.\n\t\tDescripción: Es una lista con los diferentes tipos de input que se pueden usar dentro de un formulario.\n\tatributo\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento perteneciente a una entidad.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de crear el textarea para un determinado atributo, esta función es llamada por <b>crearFormAtributo()</b>.',
    'func43': 'crearSelect(datos, atributo)',
    'desc43': '<b>Parámetros:</b>\n\tdatos:\n\t\tTipo: Array.\n\t\tDescripción: Es una lista con los diferentes tipos de input que se pueden usar dentro de un formulario.\n\tatributo\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento perteneciente a una entidad.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de crear el select para un determinado atributo, esta función es llamada por <b>crearFormAtributo()</b>.',
    'func44': 'crearLabel(atributo)',
    'desc44': '<b>Parámetros:</b>\n\tatributo:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento perteneciente a una entidad.\n<b>Output:</b> Devuelve un HTMLLabelElement (label).\n<b>Función:</b> Se encarga de crear una etiqueta label que acompaña a cada uno de los inputs, esta función es llamada por <b>crearFormAtributo()</b>.',
    'func45': 'crearSpanError(atributo)',
    'desc45': '<b>Parámetros:</b>\n\tatributo:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento perteneciente a una entidad.\n<b>Output:</b> Devuelve un HTMLSpanElement (span).\n<b>Función:</b> Se encarga de crear una etiqueta span que se mostrará cuando las validaciones de input no salgan bien, esta función es llamada por <b>crearFormAtributo()</b>.',
    'func46': 'eliminarCampos(accion)',
    'desc46': '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las acciones que se pueden realizar ADD, SEARCH, DELETE, SHOWCURRENT, EDIT.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de eliminar los campos necesarios en base a la acción a realizar.',
    'func47': 'eliminarCampo(id)',
    'desc47': '<b>Parámetros:</b>\n\tid:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento HTML.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de eliminar el campo del id proporcionado, esta función es llamada por <b>eliminarCampos()</b>.',
    'func48': 'ponernoactivoform(accion)',
    'desc48': '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las acciones que se pueden realizar DELETE, SHOWCURRENT, EDIT.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de desactivar los campos, los cuales no son necesarios o no debe de ser editados.',
    'func49': 'requiereReadOnlyEDIT(id)',
    'desc49': '<b>Parámetros:</b>\n\tid:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento HTML.\n<b>Output:</b> Devuelve un valor booleano indicando si el campo debe de ser no editable dentro de un formulario de edición o no.\n<b>Función:</b> Se encarga de indicar qué campos deben de ser puestos en sólo lectura en los formularios de edición, esta función es llamada por <b>ponernoactivoform()</b>.',
    'func50': 'desactivarCampo(id)',
    'desc50': '<b>Parámetros:</b>\n\tid:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento HTML.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de poner en sólo lectura los atributos necesarios en los formularios de edición, esta función es llamada por <b>ponernoactivoform()</b>.',
    'func51': 'SearchPH()',
    'desc51': '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de buscar y de colocar los placeholders para los formularios de SEARCH.',
    'func52': 'colocarValoresForm(parametros)',
    'desc52': '<b>Parámetros:</b>\n\tparametros:\n\t\tTipo: Array.\n\t\tDescripción: Hace referencia a todas las características asignadas a un atributo en base a lo indicado en su estructura.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de llamar a la correspondiente función auxiliar par colocar todod slos valores para todos los atributos de una entidad.',
    'func53': 'colocarValor(atributo, valor)',
    'desc53': '<b>Parámetros:</b>\n\tatributo:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento perteneciente a una entidad.\n\tvalor:\n\t\tTipo: String(Puede tomar cualquier tipo)\n\t\tDescripción: Hace referencia al dato asignado a un atributo en específico.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de colocar el valor de un atributo en su correspondiente campo, teniendo en cuenta su tipo y la existencia de un valor o no.',
    'func54': 'mostrarvaloresespecialesform(atributo, valoratributo)',
    'desc54': '<b>Parámetros:</b>\n\tatributo:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento perteneciente a una entidad.\n\tvaloratributo:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia al valor asignado a un atributo.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de mostrar los valores especiales dentro del formulario.',
    'func55': 'inicializar()',
    'desc55': '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de incializar todo lo necesarios para la creación de formularios, tablas y test.',
    'func56': 'createForm(accion, parametros)',
    'desc56': '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las accione sque se pueden realizar ADD, EDIT, DELETE, SEARCH.\n\tparametros\n\t\tTipo: \n\t\tDescripción: .\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de llamar a todas las funciones auxiliares necesarias para crear el formulario.',
    'func57': 'cargar_formulario(accion)',
    'desc57': '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las acciones que se pueden realizar ADD, DELETE, EDIT, SEARCH.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de cargar el formulario y mostrará error en el caso de que no exista un formulario, esta función es llamada por <b>createForm()</b>.',
    'func58': 'cargar_formulario_dinamico(accion)',
    'desc58': '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las acciones que se pueden realizar ADD, DELETE, EDIT, SEARCH.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de cargar el formulario dinámico, esta función es llamada por <b>cargar_formulario()</b> si no existe formulario en clase entidad.',
    'func59': 'ponerTitulosForm(accion)',
    'desc59': '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las acciones que se pueden realizar ADD, DELETE, EDIT, SEARCH.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de ponerle el título al formulario teniendo en cuenta la acción que se está a realizar, esta función es llamada por <b>createForm()</b>.',
    'func60': 'eliminarCamposForm(accion)',
    'desc60': '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las acciones que se pueden realizar ADD, DELETE, EDIT, SEARCH.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de eliminar los campos no necesario teniendo en cuenta la acción que se está a realizar, esta función es llamada por <b>createForm()</b>.',
    'func61': 'mostrarAtributosForm(accion, parametros)',
    'desc61': '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las accione sque se pueden realizar ADD, EDIT, DELETE, SEARCH.\n\tparametros\n\t\tTipo: \n\t\tDescripción: .\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de mostrar los atributos necesarios dentro del formulario.',
    'func62': 'colocarvalidaciones(accion)',
    'desc62': '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las acciones que se pueden realizar ADD, DELETE, EDIT, SEARCH.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de colocar las validaciones en los correspondientes campos, esta función es llamada por <b>createForm()</b>.',
    'func63': 'comprobar(id, accion)',
    'desc63': '<b>Parámetros:</b>\n\tid:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento HTML.\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las accione sque se pueden realizar ADD, EDIT, DELETE, SEARCH.\n<b>Output:</b> Devuelve un valor booleano que es la respuesta de la función <b>check(id, accion)</b> indicando si lo introducido es válido o no.\n<b>Función:</b> Se encarga de comprobar si lo introducido dentro del campo con el id proporcionado cumple con lo que está permitido.',
    'func64': 'ponernoactivo(accion)',
    'desc64': '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las acciones que se pueden realizar ADD, DELETE, EDIT, SEARCH.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de poner en modo de lectura los campos correspondientes, esta función es llamada por <b>createForm()</b>.',
    'func65': 'colocarboton(accion)',
    'desc65': '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las acciones que se pueden realizar ADD, DELETE, EDIT, SEARCH.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de crear el botón de submit, esta función es llamada por <b>createForm()</b>.',
    'func66': 'colocarOnSubmitForm(accion)',
    'desc66': '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las acciones que se pueden realizar ADD, DELETE, EDIT, SEARCH.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de colocar el botón de submit en el formulario que se esté creando, esta función es llamada por <b>createForm()</b>.',
    'func67': 'comprobar_submit(accion)',
    'desc67': '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las acciones que se pueden realizar ADD, DELETE, EDIT, SEARCH.\n<b>Output:</b> Devuelve un valor booleano que corresponderá con la respuesta dada por la función <b>check_submit(accion)</b>, indicando que todo lo introducido en el formulario está correcto o no.\n<b>Función:</b> Se encarga de comprobar que todo lo introducido en el formulario cumple con los requisitos definidos en las correspondientes estructuras de las entidades.',
    'func68': 'colocarActionForm(accion)',
    'desc68': '<b>Parámetros:</b>\n\taccion:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las acciones que se pueden realizar ADD, DELETE, EDIT, SEARCH.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de establecer la acción del formulario para verificar todo lo que se tenga que verificar para la acción que se esté a realizar, esta función es llamada por <b>createForm()</b>.',
    'func69': 'mostrarform()',
    'desc69': '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Muestra el formulario una vez creado, esta función es llamada por <b>createForm()</b>.',
    'func70': 'actuarRespuesta(respuesta)',
    'desc70': '<b>Parámetros:</b>\n\trespuesta:\n\t\tTipo: String(?)\n\t\tDescripción: Hace referencia a la respuesta que proporciona el back.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función: </b>Se encarga de limpiar el formulario.',
    'func71': 'abrirModalError(errorMsg)',
    'desc71': '<b>Parámetros:</b>\n\terrorMsg:\n\t\tTipo: String.\n\t\tDescripción: Es el mensaje de error que se debe de mostrar en el modal.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función: </b>Se encarga de abrir un modal con el mensaje de error correspondiente.',
    'func72': 'cerrarModalError()',
    'desc72': '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de cerrar el modal una vez que el usuario lo ha visto.',
    'func73': 'cerrar_formulario()',
    'desc73': '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de cerrar el formulario una ver envíado al back o cuando el usuario lo cancela.',
    'func74': 'mostrar_error_campo(id, codigoerror)',
    'desc74': '<b>Parámetros:</b>\n\tid:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento HTML.\n\tcodigoerror:\n\t\tTipo: String.\n\t\tDescripción: Se refiere uno de los códigos de error que se pueden producir si no se ponen los valores correctamente.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de mostrar error y su correspondiente error en el campo del id proporcionado.',
    'func75': 'mostrar_exito_campo(id)',
    'desc75': '<b>Parámetros:</b>\n\tid:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento de HTML.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función: </b>Se encarga de mostrar que el dato intorducido en un campo es correcto.',

    //Textos para otras funciones
    'func76': 'evento(event)',
    'desc76': '<b>Parámetros:</b>\n\tevent:\n\t\tTipo: Objeto\n\t\tDescripción: Evento registrado a partir de la realización de una acción determinada.\n<b>Output:</b> La ejecución de esta función no proporciona ningún tipo de output.\n<b>Función:</b> Se encarga de cerrar el menú en el caso de que esté abierto y el click no fuera dentro del menú ni en el botón para abrirlo.',
    'func77': 'menu_work()',
    'desc77': '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de abrir y cerrar el menú, es llamada por la función <b>evento()</b> cuando hay que cerrar el menú.',
    'func78': 'toggleTheme()',
    'desc78': '<b>Parámetros/Output:</b> No usa parámetros y la ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de manejar los cambios de modo claro a modo oscuro.',
    'func79': 'changeImageOnHover(isMouseOver, action, i)',
    'desc79': '<b>Parámetros:</b>\n\tisMouseOver:\n\t\tTipo: Booleano.\n\t\tDescripción: Cambia cuando el ratón está encima de un objeto en específico.\n\taction:\n\t\tTipo: String.\n\t\tDescripción: Parte del nombre de la imagen en cuestión, que hace referencia a la acción que realizas al hacer click en el icono.\n\ti: \n\t\tTipo: String.\n\t\tDescripción: Elemento auxiliar.\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de cambiar el color de los iconos cuando se le pasa el ratón por encima.',
    'func80': 'showAPI(APIElement)',
    'desc80': '<b>Parámetros:</b>\n\tAPIElement:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las diferentes clasificaciones de las funciones.\n<b>Output:</b> La ejecución de esta función no proporciona ningún tipo de output.\n<b>Función:</b> Se encarga de mostrar todas las funciones relacionadas a la opción seleccionada en el menú.',
    'func81': 'showEstructura(entity)',
    'desc81': '<b>Parámetros:</b>\n\tentity:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a las entidades existentes en este proyecto (Analysis preparation, Project y Characteristic).\n<b>Output:</b> La ejecución de esta función no devuelve ningún tipo de output.\n<b>Función:</b> Se encarga de mostrar y explicar las estructuras empleadas para la realización de esta ET3.',
    'func82': 'setLang(lang)',
    'desc82': '<b>Parámetros:</b>\n\tlang:\n\t\tTipo: String.\n\t\tDescripción: Empleada para almacenar el lenguaje al que queremos traducir la página web.\n<b>Output:</b> La ejecución de esta función no proporciona ningún tipo de output.\n<b>Función:</b> Se encarga de cambiar el lenguaje entre castellado e inglés en toda web mediante el uso de cookies.',
    'func83': 'setCookie(name, value, days)',
    'desc83': '<b>Parámetros:</b>\n\tname:\n\t\tTipo: String.\n\t\tDescripción: Nombre que le queremos poner a la cookie.\n\tvalue:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a los idiomas disponibles (EN y ES).\n\tdays:\n\t\tTipo: Número.\n\t\tDescripción: Número de días los que queremos que aguante la cookie.\n<b>Output:</b> La ejecución de esta función no proporciona ningún tipo de output.\n<b>Función:</b> Se encarga de establecer el valor de la cookie al valor que nosotros queramos, esta función es llamada por <b>setLang(lang)</b>.',
    'func84': 'getCookie(name)',
    'desc84': '<b>Parámetros:</b>\n\tname:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia al nombre de la cookie.\n<b>Output:</b> Devuelve un valor nulo.\n<b>Función:</b> Se encarga de obtener el valor de la cookie en base a su nombre.',
    'func85': 'peticionBackGeneral(formulario, controlador, action, datosextra = null)',
    'desc85': '<b>Parámetros:</b>\n\tformulario\n\t\tTipo: Objeto formulario\n\t\tDescripción: El formulario creado.\n\tcontrolador:\n\t\tTipo: Any\n\t\tDescipción: Controlador\n\taction:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a la acción que se esté realizando\n\tdatosextra:\n\t\tTipo: Nulo\n\t\tDescripción: Datos extra.\n<b>Output:</b> Devuelve una nueva promesa con la resolución del dominio del servidor.\n<b>Función:</b> Se encarga de mandar las peticiones al back.',

    // Textos de funciones de validación

    'func86': 'min_size(id, minsize)',
    'desc86': '<b>Parámetros:</b>\n\tid:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento HTML.\n\tminsize:\n\t\tTipo: Número.\n\t\tDescripción: Hace referencia al tamaño mínimo que debe de tener el valor.\n<b>Output:</b> Devuelve un valor booleano corespondiente a la respuesta de <b>evaluar_tam()</b> indicando si cumple con el tamaño mínimo o no.\n<b>Función:</b>Se encarga de comprobar si el valor introducido cumple con el tamaño mínimo establecido en los requisitos de ese campo.',
    'func87': 'max_size(id, maxsize)',
    'desc87': '<b>Parámetros:</b>\n\tid:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento HTML.\n\tmaxsize:\n\t\tTipo: Número.\n\t\tDescripción: Hace referencia al tamaño máximo que puede tener el valor.\n<b>Output:</b> Devuelve un valor booleano corespondiente a la respuesta de <b>evaluar_tam()</b> indicando si cumple con el tamaño máximo o no.\n<b>Función:</b>Se encarga de comprobar si el valor introducido cumple con el tamaño máximo establecido en los requisitos de ese campo.',
    'func88': 'format(id, expreg)',
    'desc88': '<b>Parámetros:</b>\n\tid:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento HTML.\n\texpreg:\n\t\tTipo: String.\n\t\tDescripción: Expresión regular empleada para comprobar el formato del valor del elemento contenido en id.\n<b>Output:</b> Devuelve un valor booleando correspondiente al output de <b>evaluar_regex()</b>, indicando si el valor introducido en el campo id cumple con el formato indicado o no.\n<b>Función:</b> Se encarga de comprobar si el valor introducido en campo id cumple con el formato establecido o no.',
    'func89': 'max_size_file(id, maxsize)',
    'desc89': '<b>Parámetros:</b>\n\tid:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento HTML.\n\tmaxsize:\n\t\tTipo: Número.\n\t\tDescripción: Hace referencia al tamaño máximo para el archivo en cuestión.\n<b>Output:</b>Devuelve un valor booleano indicando si el archivo supera el tamaño permitido o no.\n<b>Función:</b> Se encarga de comprobar que el archivo adjuntado no sobrepase el tamaño máximo permitido.',
    'func90': 'type_file(id, array_tipos)',
    'desc90': '<b>Parámetros:</b>\n\tid:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento HTML.\n\tarray_tipos:\n\t\tTipo: Array.\n\t\tDescripción: Hace referencia a los tipos de archivos permitidos (doc, docx, pdf).\n<b>Output:</b> Devuelve un valor booleano confirmando si el tipo de archivo coincide con uno de los tipos de archivos permitidos.\n<b>Función:</b> Se encarga de verificar que el tipo de archivo del archivo adjuntado esté dentro de los tipos de archivo permitidos en la definición de la entidad.',
    'func91': 'format_name_file(id, expreg)',
    'desc91': '<b>Parámetros:</b>\n\tid:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento HTML.\n\texpreg:\n\t\tTipo: String.\n\t\tDescripción: Expresión regular empleada para comprobar el formato del valor del elemento contenido en id.\n<b>Output:</b>Devuleve un valor booleando correspondiente al output de <b>evaluar_regex()</b>, indicando si el valor introducido en el campo id cumpel con el formato indicado o no.\n<b>Función:</b> Se encarga de comprobar si el nombre del fichero adjuntado cumple con el formato establecido o no.',
    'func92': 'evaluar_regex(valor, expreg)',
    'desc92': '<b>Parámetros:</b>\n\tvalor:\n\t\tTipo: String.\n\t\tDescripción: Hace al valor introducido dentro de un campop de un formulario.\n\texpreg:\n\t\tTipo: String.\n\t\tDescripción: Expresión regular empleada para comprobar el formato del valor introducido.\n<b>Output:</b> Devuelve un valor booleano correspondiente a la respuesta de <b>expresionregular.test(valor)</b> indicando si cumple con el regex indicado o no.\n<b>Función:</b> Se encarga de comprobar que el valor introducido cumple con el formato indicado, esta función es llamada por <b>format()</b> y <b>format_name_file()</b>',
    'func93': 'evaluar_tam(id, parametro, mayor)',
    'desc93': '<b>Parámetros:</b>\n\tid:\n\t\tTipo: String.\n\t\tDescripción: Hace referencia a un elemento HTML.\n\tparametro:\n\t\tTipo: Número.\n\t\tDescripción: Hace referencia al tamaño máximo o mínimo.\n\tmayor:\n\t\tTipo: Booleano.\n\t\tDescripción: Indica si el valor debe de ser mayor/igual o menor al parametro indicado.\n<b>Output:</b> Devuelve un valor booleando indicando si el valor cumple con que sea mayor/igual o menor al parametro indicado.\n<b>Función:</b> Se encarga de comprobar si el valor introducido en el campo id, cumple con el requisisto de tamaño mínimo o de tamaño máximo, esta función es llamada por <b>min_size(id, minsize)</b> y <b>max_size(id, maxsize)</b>.',


    //Textos referencia a las clases

    'clase1': 'Funciones dentro de EntidadAbstracta.js',
    'clase2': 'Funciones dentro de Test_class.js',
    'clase3': 'Funciones dentro de DOM_class.js',
    'clase4': 'Funciones dentro de constructor_form.js',
    'clase5': 'Funciones dentro de constructor_validaciones.js',
    'clase6': 'Funciones dentro de colocador_valores.js',
    'clase7': 'Funciones dentro de project.js',
    'clase8': 'Funciones dentro de characteristic.js',
    'clase9': 'Funciones dentro de analysis_preparation.js',
    'clase10': 'Funciones dentro de varias clases (project.js/characteristic.js)',
    'clase11': 'Funciones dentro de varias clases (analysis_preparation.js/project.js/characteristic.js)',
    'clase12': 'Funciones dentro de otros archivos (index.html/estructuras.html/API.html)',
    'clase13': 'Funciones dentro de idioma.js',
    'clase14': 'Funciones dentro de Validaciones_Atomicas.js',
    'clase15': 'Funciones dentro de ExternalAccess.js ',
    'clase16': 'Funciones dentro de idioma.js',

    //Titulos
    'text_title_page_default_API': 'API Empleada',
    'text_title_page_test': 'Funciones empleadas para Test',
    'text_title_page_tabla': 'Funciones empleadas para Tabla de Presentación',
    'text_title_page_form': 'Funciones empleadas para Creación de Formularios',
    'text_title_page_other': 'Funciones empleadas para otras cosas',
    'text_title_page_validaciones': 'Funciones empleadas para Validaciones',

    //Opciones Menu
    'opt_funciones_test': 'Tests',
    'opt_funciones_tabla': 'Presentación de Tablas',
    'opt_funciones_form': 'Creación de Formularios',
    'opt_funciones_valid': 'Funciones de validaciones',
    'opt_funciones_other': 'Otras Funciones',

    /*TRADUCCIONES PARA TEST*/


    //Titulos tablas
    'res_estructura_tests': 'Tabla de Verificacion de Definiciones de Test',
    'res_estructura_pruebas': 'Tabla de Verificacion de Definiciones de Pruebas',
    'res_pruebas': 'Tabla de Verificacion de Ejecución de Pruebas',

    //Textos de resultado de verificaciones
    'DefTest_OK': 'La estructura de todas las definiciones de test es correcta',
    'DefTest_KO': 'La estructura de todas las definiciones de test NO es correcta',
    'DefPrueba_OK': 'La estructura de todas las definiciones de pruebas es correcta',
    'DefPrueba_KO': 'La estructura de todas las definiciones de pruebas NO es correcta',
    'pruebas_OK': 'La ejecucion de todas las pruebas es correcta',
    'pruebas_KO': 'La ejecucion de todas las pruebas NO es correcta',

    //Titulos de las tablas de tests
    'Entidad': 'Entidad',
    'NumDefTest': 'NumDefTest',
    'Datos': 'Datos',
    'NumPrueba': 'NumPrueba',
    'Campo': 'Campo',
    'Prueba': 'Prueba',
    'Accion': 'Accion',
    'Valor': 'Valor',
    'Respuesta Test': 'Respuesta Test',
    'Respuesta esperada': 'Respuesta esperada',
    'Resultado': 'Resultado',
    'CampoAux': 'Campo Aux.',
    'ValorAux': 'Valor Aux.',

    //Valores resultado tests
    'CORRECTO': 'CORRECTO',
    'CORRECTA': 'CORRECTA',
    'ERROR': 'ERROR',
    'INCORRECTO': 'INCORRECTO',


    /*ATRIBUTOS*/


    // atributos project
    'id_project': 'Identificador',
    'name_project': 'Nombre Proyecto',
    'start_date_project': 'Fecha de Inicio',
    'end_date_project': 'Fecha de Fin',
    'responsable_project': 'Responsable',
    'organization_project': 'Organización',
    'description_project': 'Descripción',
    'file_project': 'Archivo Proyecto',
    'code_project': 'Código Proyecto',
    'acronym_project': 'Acrónimo Proyecto',
    'id_sampling_methodology': 'Id Metodología de Muestreo',

    //atributos analysis_preparation
    'id_analysis_preparation': 'Identificador',
    'name_analysis_preparation': 'Nombre Análisis',
    'description_analysis_preparation': 'Descripción',
    'bib_analysis_preparation': 'Bibliografía',
    'file_analysis_preparation': 'Archivo Análisis',

    // atributos characteristic
    'id_characteristic': 'Identificador',
    'name_characteristic': 'Nombre Característica',
    'description_characteristic': 'Descripción',
    'data_type_characteristic': 'Tipo de dato',
    'category_characteristic': 'Categoría',
    'bibref_characteristic': 'Referencia Bibliográfica',
    'file_characteristic': 'Archivo Característica',


    /*LABELS*/ //Tienen que ir despues de los atributos, si hay fors en los labels se traduce con los códigos de los id de inputs, no importa mucho pq son iguales los textos de momento


    // labels project
    'label_id_project': 'Identificador',
    'label_name_project': 'Nombre Proyecto',
    'label_start_date_project': 'Fecha de Inicio',
    'label_end_date_project': 'Fecha de Fin',
    'label_responsable_project': 'Responsable',
    'label_organization_project': 'Organización',
    'label_description_project': 'Descripción',
    'label_file_project': 'Archivo Proyecto',
    'label_code_project': 'Código Proyecto',
    'label_acronym_project': 'Acrónimo Proyecto',
    'label_id_sampling_methodology': 'Id Metodología de Muestreo',
    'label_nuevo_file_project': 'Nuevo Archivo',

    //labels analysis_preparation
    'label_id_analysis_preparation': 'Identificador',
    'label_name_analysis_preparation': 'Nombre Análisis',
    'label_description_analysis_preparation': 'Descripción',
    'label_bib_analysis_preparation': 'Bibliografía',
    'label_file_analysis_preparation': 'Archivo Análisis',
    'label_nuevo_file_analysis_preparation': 'Nuevo Archivo',

    // labels characteristic
    'label_id_characteristic': 'Identificador',
    'label_name_characteristic': 'Nombre Característica',
    'label_description_characteristic': 'Descripción',
    'label_data_type_characteristic': 'Tipo de dato',
    'label_category_characteristic': 'Categoría',
    'label_bibref_characteristic': 'Referencia Bibliográfica',
    'label_file_characteristic': 'Archivo Característica',
    'label_nuevo_file_characteristic': 'Nuevo Archivo',


    /*PLACEHOLDERS*/


    //Placeholders atributos project

    'PH_id_project': '',
    'PH_name_project': '15-100 letras pudiendo incluir espacios',
    'PH_start_date_project': 'dd/mm/aaaa',
    'PH_end_date_project': 'dd/mm/aaaa',
    'PH_responsable_project': '6-60 letras pudiendo incluir ñ,acentos y espacios',
    'PH_organization_project': '6-100 letras pudiendo incluir ñ,acentos y espacios',
    'PH_description_project': '30-500 caracteres',
    'PH_file_project': '',
    'PH_code_project': '6-50 letras pudiendo incluir ñ,espacios y puntuacion',
    'PH_acronym_project': '6-15 letras pudiendo incluir ñ y puntuacion',
    'PH_id_sampling_methodology': '1-11 digitos',
    'PH_nuevo_file_project': 'Archivo .pdf, .doc o .docx de 2MB maximo; nombre de archivo 7-100 letras y puntos',

    //SEARCH
    'PH_id_project_SEARCH': 'Hasta 11 digitos',
    'PH_name_project_SEARCH': 'Hasta 100 letras pudiendo incluir espacios',
    'PH_start_date_project_SEARCH': 'dd/mm/aaaa o subcadenas',
    'PH_end_date_project_SEARCH': 'dd/mm/aaaa o subcadenas',
    'PH_responsable_project_SEARCH': 'Hasta 60 letras pudiendo incluir ñ,acentos y espacios',
    'PH_organization_project_SEARCH': 'Hasta 100 letras pudiendo incluir ñ,acentos y espacios',
    'PH_description_project_SEARCH': 'Hasta 500 caracteres',
    'PH_file_project_SEARCH': 'Hasta 100 letras pudiendo incluir puntos (extension de archivo optativa)',
    'PH_code_project_SEARCH': 'Hasta 50 letras pudiendo incluir ñ,espacios y puntuacion',
    'PH_acronym_project_SEARCH': 'Hasta 15 letras pudiendo incluir ñ y puntuacion',
    'PH_id_sampling_methodology_SEARCH': 'Hasta 11 digitos',

    //Placeholders atributos analysis_preparation
    'PH_id_analysis_preparation': '',
    'PH_name_analysis_preparation': '8-100 letras pudiendo incluir espacios',
    'PH_description_analysis_preparation': '80-5000 letras pudiendo incluir espacios',
    'PH_bib_analysis_preparation': '6-200 letras pudiendo incluir ñ, acentos, espacios y puntuacion',
    'PH_file_analysis_preparation': '',
    'PH_nuevo_file_analysis_preparation': 'Archivo .pdf, .doc o .docx de 2MB maximo; nombre de archivo 7-100 letras y puntos',

    //SEARCH
    'PH_id_analysis_preparation_SEARCH': 'Hasta 11 digitos',
    'PH_name_analysis_preparation_SEARCH': 'Hasta 100 letras pudiendo incluir espacios',
    'PH_description_analysis_preparation_SEARCH': 'Hasta 5000 letras pudiendo incluir espacios',
    'PH_bib_analysis_preparation_SEARCH': 'Hasta 200 letras pudiendo incluir ñ, acentos, espacios y puntuacion',
    'PH_file_analysis_preparation_SEARCH': 'Hasta 100 letras pudiendo incluir puntos (extension de archivo optativa)',

    //Placeholders atributos characteristic

    'PH_id_characteristic': '',
    'PH_name_characteristic': '8-100 letras pudiendo incluir espacios',
    //'PH_data_type_characteristic'   : '',
    //'PH_category_characteristic'    : '',
    'PH_description_characteristic': '80-5000 letras pudiendo incluir espacios',
    'PH_bibref_characteristic': '16-200 letras pudiendo incluir ñ, acentos, espacios y puntuacion',
    'PH_file_characteristic': '',
    'PH_nuevo_file_characteristic': 'Archivo .pdf, .doc o .docx de 200KB maximo; nombre de archivo 7-100 letras y puntos',

    //SEARCH
    'PH_id_characteristic_SEARCH': 'Hasta 11 digitos',
    'PH_name_characteristic_SEARCH': 'Hasta 100 letras pudiendo incluir espacios',
    //'PH_data_type_characteristic_SEARCH'   : '',
    //'PH_category_characteristic_SEARCH'    : '',
    'PH_bibref_characteristic_SEARCH': 'Hasta 200 letras pudiendo incluir ñ, acentos, espacios y puntuacion',
    'PH_description_characteristic_SEARCH': 'Hasta 5000 letras pudiendo incluir espacios',
    'PH_file_characteristic_SEARCH': 'Hasta 100 letras pudiendo incluir puntos (extension de archivo optativa)',


    /*MENSAJES DE ERROR*/


    /*project*/

    //Mensajes de OK
    'project__id_project__OK': 'El Identificador es correcto',
    'project__name_project__OK': 'El Nombre Proyecto es correcto',
    'project__start_date_project__OK': 'La Fecha de Inicio es correcta',
    'project__end_date_project__OK': 'La Fecha de Fin es correcta',
    'project__responsable_project__OK': 'El Responsable es correcto',
    'project__organization_project__OK': 'La Organización es correcta',
    'project__description_project__OK': 'La Descripción es correcta',
    'project__file_project__OK': 'El Archivo Proyecto es correcto',
    'project__code_project__OK': 'El Código Proyecto es correcto',
    'project__acronym_project__OK': 'El Acrónimo Proyecto es correcto',
    'project__id_sampling_methodology__OK': 'El Id Metodología de Muestreo es correcto',
    'project__nuevo_file_project__OK': 'El Nuevo Archivo es correcto',

    //Mensajes de error

    //id_project
    'project__id_project__max_size_KO': 'El Identificador supera el tamaño permitido, debe tener como mucho longitud 11.',
    'project__id_project__format_KO': 'El Identificador no cumple el formato correcto, debe estar compuesto unicamente por digitos ',

    //name_project
    'project__name_project__min_size_KO': 'El Nombre Proyecto es demasiado corto, debe tener al menos longitud 15.',
    'project__name_project__max_size_KO': 'El Nombre Proyecto supera el tamaño permitido, debe tener como mucho longitud 100.',
    'project__name_project__format_KO': 'El Nombre Proyecto no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.',

    //start_date_project
    'project__start_date_project__format_KO': 'El formato de la Fecha de Inicio es incorrecto, debe seguir un formato dd/mm/aaaa.',
    'project__start_date_project__valid_KO': 'El valor de la Fecha de Inicio es incorrecto, debe ser una fecha existente en el calendario gregoriano.',
    'project__start_date_project__superior_KO': 'La Fecha de Inicio no puede ser superior a la Fecha de Fin.',
    'project__start_date_project__format_SEARCH_KO': 'El formato de la Fecha de Inicio es incorrecto, debe ser al menos una parte de una fecha dd/mm/aaaa.',

    //end_date_project
    'project__end_date_project__format_KO': 'El formato de la Fecha de Fin es incorrecto, debe seguir un formato dd/mm/aaaa.',
    'project__end_date_project__valid_KO': 'El valor de la Fecha de Fin es incorrecto, debe ser una fecha existente en el calendario gregoriano.',
    'project__end_date_project__inferior_KO': 'La Fecha de Fin no puede ser inferior a la Fecha de Inicio',
    'project__end_date_project__format_SEARCH_KO': 'El formato de la Fecha de Fin del proyecto es incorrecto, debe ser al menos una parte de una fecha dd/mm/aaaa.',

    //responsable_project
    'project__responsable_project__min_size_KO': 'El Responsable es demasiado corto, debe tener al menos longitud 6.',
    'project__responsable_project__max_size_KO': 'El Responsable supera el tamaño permitido, debe tener como mucho longitud 60.',
    'project__responsable_project__format_KO': 'El Responsable no cumple el formato correcto, debe contener solo caracteres alfabéticos con acentos, ñ y espacios.',

    //organization_project
    'project__organization_project__min_size_KO': 'La Organización es demasiado corta, debe tener al menos longitud 6.',
    'project__organization_project__max_size_KO': 'La Organización supera el tamaño permitido, debe tener como mucho longitud 100.',
    'project__organization_project__format_KO': 'La Organización no cumple el formato correcto, debe contener solo caracteres alfabéticos con acentos, ñ y espacios.',

    //description_project
    'project__description_project__min_size_KO': 'La Descripción es demasiado corta, debe tener al menos longitud 30.',
    'project__description_project__max_size_KO': 'La Descripción supera el tamaño permitido, debe tener como mucho longitud 500.',
    'project__description_project__format_KO': 'La Descripción tiene caracteres invalidos, use caracteres latinos de europa occidental.',//Prueba hecha para que acepte cualquier caracter 

    //code_project
    'project__code_project__min_size_KO': 'El Código Proyecto es demasiado corto, debe tener al menos longitud 6.',
    'project__code_project__max_size_KO': 'El Código Proyecto supera el tamaño permitido, debe tener como mucho longitud 50.',
    'project__code_project__format_KO': 'El Código Proyecto no cumple el formato correcto, debe contener solo caracteres alfabéticos con ñ, espacios y signos de puntuación, sin acentos.',

    //acronym_project
    'project__acronym_project__min_size_KO': 'El Acrónimo Proyecto es demasiado corto, debe tener al menos longitud 6.',
    'project__acronym_project__max_size_KO': 'El Acrónimo Proyecto supera el tamaño permitido, debe tener como mucho longitud 15.',
    'project__acronym_project__format_KO': 'El Acrónimo Proyecto no cumple el formato correcto, debe contener solo caracteres alfabéticos con ñ y signos de puntuación, sin acentos ni espacios.',

    //id_sampling_methodology
    'project__id_sampling_methodology__min_size_KO': 'El Id Metodología de Muestreo no puede estar vacio, debe tener al menos longitud 1.',
    'project__id_sampling_methodology__max_size_KO': 'El Id Metodología de Muestreo supera el tamaño permitido, debe tener como mucho longitud 11.',
    'project__id_sampling_methodology__format_KO': 'El Id Metodología de Muestreo no cumple el formato correcto, debe estar compuesto unicamente por digitos',

    //file_project
    'project__file_project__max_size_KO': 'El nombre del Archivo Proyecto supera el tamaño permitido, debe tener como mucho longitud 100.',
    'project__file_project__format_KO': 'El nombre del Archivo Proyecto no cumple el formato correcto, debe contener solo letras y puntos sin acentos ni ñ ni espacios ni signos de puntuacion.',

    //nuevo_file_project
    'project__nuevo_file_project__empty_KO': 'El Nuevo Archivo no puede estar vacio, debe enviarse un archivo',
    'project__nuevo_file_project__max_size_file_KO': 'El Nuevo Archivo supera el tamaño permitido, debe pesar menos de 2 MB.',
    'project__nuevo_file_project__type_file_KO': 'El Nuevo Archivo no es del tipo correcto, debe ser .pdf,.doc o .docx',
    'project__nuevo_file_project__format_name_file_KO': 'El nombre del Nuevo Archivo no cumple el formato correcto, debe contener solo letras y puntos sin acentos ni ñ ni espacios ni signos de puntuacion.',
    'project__nuevo_file_project__min_size_KO': 'El nombre del Nuevo Archivo es demasiado corto, debe tener al menos longitud 7.',
    'project__nuevo_file_project__max_size_KO': 'El nombre del Nuevo Archivo supera el tamaño permitido, debe tener como mucho longitud 100.',


    /*analysis_preparation*/

    //Mensajes de OK
    'analysis_preparation__id_analysis_preparation__OK': 'El Identificador es correcto',
    'analysis_preparation__name_analysis_preparation__OK': 'El Nombre Análisis es correcto',
    'analysis_preparation__description_analysis_preparation__OK': 'La Descripción es correcta',
    'analysis_preparation__file_analysis_preparation__OK': 'El Archivo Análisis es correcto',
    'analysis_preparation__bib_analysis_preparation__OK': 'La Bibliografía es correcta',
    'analysis_preparation__nuevo_file_analysis_preparation__OK': 'El Nuevo Archivo es correcto',

    //Mensajes de error

    //id_analysis_preparation
    'analysis_preparation__id_analysis_preparation__max_size_KO': 'El Identificador supera el tamaño permitido, debe tener como mucho longitud 11.',
    'analysis_preparation__id_analysis_preparation__format_KO': 'El Identificador no cumple el formato correcto, debe estar compuesto unicamente por digitos ',

    //name_analysis_preparation
    'analysis_preparation__name_analysis_preparation__min_size_KO': 'El Nombre Análisis es demasiado corto, debe tener al menos longitud 8.',
    'analysis_preparation__name_analysis_preparation__max_size_KO': 'El Nombre Análisis supera el tamaño permitido, debe tener como mucho longitud 100.',
    'analysis_preparation__name_analysis_preparation__format_KO': 'El Nombre Análisis no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.',

    //description_analysis_preparation
    'analysis_preparation__description_analysis_preparation__min_size_KO': 'La Descripción es demasiado corta, debe tener al menos longitud 80.',
    'analysis_preparation__description_analysis_preparation__max_size_KO': 'La Descripción supera el tamaño permitido, debe tener como mucho longitud 5000.',
    'analysis_preparation__description_analysis_preparation__format_KO': 'La Descripción no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.',

    //bib_analysis_preparation
    'analysis_preparation__bib_analysis_preparation__min_size_KO': 'La Bibliografía es demasiado corta, debe tener al menos longitud 6.',
    'analysis_preparation__bib_analysis_preparation__max_size_KO': 'La Bibliografía supera el tamaño permitido, debe tener como mucho longitud 200.',
    'analysis_preparation__bib_analysis_preparation__format_KO': 'La Bibliografía no cumple el formato correcto, debe contener solo caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación.',

    //file_analysis_preparation
    'analysis_preparation__file_analysis_preparation__max_size_KO': 'El nombre del Archivo Análisis supera el tamaño permitido, debe tener como mucho longitud 100.',
    'analysis_preparation__file_analysis_preparation__format_KO': 'El nombre del Archivo Análisis no cumple el formato correcto, debe contener solo letras y puntos sin acentos ni ñ ni espacios ni signos de puntuacion.',

    //nuevo_file_analysis_preparation
    'analysis_preparation__nuevo_file_analysis_preparation__empty_KO': 'El Nuevo Archivo no puede estar vacio, debe enviarse un archivo',
    'analysis_preparation__nuevo_file_analysis_preparation__max_size_file_KO': 'El Nuevo Archivo supera el tamaño permitido, debe pesar menos de 2 MB.',
    'analysis_preparation__nuevo_file_analysis_preparation__type_file_KO': 'El Nuevo Archivo no es del tipo correcto, debe ser .pdf,.doc o .docx',
    'analysis_preparation__nuevo_file_analysis_preparation__format_name_file_KO': 'El nombre del Nuevo Archivo no cumple el formato correcto, debe contener solo letras y puntos sin acentos ni ñ ni espacios ni signos de puntuacion.',
    'analysis_preparation__nuevo_file_analysis_preparation__min_size_KO': 'El nombre del Nuevo Archivo es demasiado corto, debe tener al menos longitud 7.',
    'analysis_preparation__nuevo_file_analysis_preparation__max_size_KO': 'El nombre del Nuevo Archivo supera el tamaño permitido, debe tener como mucho longitud 100.',


    /*characteristic*/

    //Mensajes de OK
    'characteristic__id_characteristic__OK': 'El Identificador es correcto',
    'characteristic__name_characteristic__OK': 'El Nombre Caracteristica es correcto',
    'characteristic__description_characteristic__OK': 'La Descripción es correcta',
    'characteristic__data_type_characteristic__OK': 'El Tipo de dato es correcto',
    'characteristic__category_characteristic__OK': 'La Categoria es correcta',
    'characteristic__file_characteristic__OK': 'El Archivo Caracteristica es correcto',
    'characteristic__bibref_characteristic__OK': 'La Bibliografía es correcta',
    'characteristic__nuevo_file_characteristic__OK': 'El Nuevo Archivo es correcto',

    //Mensajes de error

    //id_characteristic
    'characteristic__id_characteristic__max_size_KO': 'El Identificador supera el tamaño permitido, debe tener como mucho longitud 11.',
    'characteristic__id_characteristic__format_KO': 'El Identificador no cumple el formato correcto, debe estar compuesto unicamente por digitos ',

    //name_characteristic
    'characteristic__name_characteristic__min_size_KO': 'El Nombre Caracteristica es demasiado corto, debe tener al menos longitud 8.',
    'characteristic__name_characteristic__max_size_KO': 'El Nombre Caracteristica supera el tamaño permitido, debe tener como mucho longitud 100.',
    'characteristic__name_characteristic__format_KO': 'El Nombre Caracteristica no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.',

    //description_characteristic
    'characteristic__description_characteristic__min_size_KO': 'La Descripción es demasiado corta, debe tener al menos longitud 80.',
    'characteristic__description_characteristic__max_size_KO': 'La Descripción supera el tamaño permitido, debe tener como mucho longitud 5000.',
    'characteristic__description_characteristic__format_KO': 'La Descripción no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.',

    //data_type_characteristic
    'characteristic__data_type_characteristic__valid_KO': 'La opcion seleccionada no es valida',
    "characteristic__data_type_characteristic__valid_SEARCH_KO": 'La opcion seleccionada no es valida',

    //category_characteristic
    'characteristic__category_characteristic__valid_KO': 'La opcion seleccionada no es valida',
    "characteristic__category_characteristic__valid_SEARCH_KO": 'La opcion seleccionada no es valida',

    //bibref_characteristic
    'characteristic__bibref_characteristic__min_size_KO': 'La Bibliografía es demasiado corta, debe tener al menos longitud 16.',
    'characteristic__bibref_characteristic__max_size_KO': 'La Bibliografía supera el tamaño permitido, debe tener como mucho longitud 200.',
    'characteristic__bibref_characteristic__format_KO': 'La Bibliografía no cumple el formato correcto, debe contener solo caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación.',

    //file_characteristic
    'characteristic__file_characteristic__max_size_KO': 'El nombre del Archivo Caracteristica supera el tamaño permitido, debe tener como mucho longitud 100.',
    'characteristic__file_characteristic__format_KO': 'El nombre del Archivo Caracteristica no cumple el formato correcto, debe contener solo letras y puntos sin acentos ni ñ ni espacios ni signos de puntuacion.',

    //nuevo_file_characteristic
    'characteristic__nuevo_file_characteristic__empty_KO': 'El Nuevo Archivo no puede estar vacio, debe enviarse un archivo',
    'characteristic__nuevo_file_characteristic__max_size_file_KO': 'El Nuevo Archivo supera el tamaño permitido, debe pesar menos de 200 KB.',
    'characteristic__nuevo_file_characteristic__type_file_KO': 'El Nuevo Archivo no es del tipo correcto, debe ser .pdf,.doc o .docx',
    'characteristic__nuevo_file_characteristic__format_name_file_KO': 'El nombre del Nuevo Archivo no cumple el formato correcto, debe contener solo letras y puntos sin acentos ni ñ ni espacios ni signos de puntuacion.',
    'characteristic__nuevo_file_characteristic__min_size_KO': 'El nombre del Nuevo Archivo es demasiado corto, debe tener al menos longitud 7.',
    'characteristic__nuevo_file_characteristic__max_size_KO': 'El nombre del Nuevo Archivo supera el tamaño permitido, debe tener como mucho longitud 100.',




    /*MENSAJES DE ERROR DEL BACK*/
    /*Todos menos file_project_es_nulo_KO, SQL_KO y RECORDSET_VACIO no pueden ocurrir con las comprobaciones activas, y file_project_es_nulo_KO solo puede ocurrir si hay tuplas ilegales (sin fichero, en contra de la definicion) en el back*/

    //project

    //atributo forzado a nulo en EDIT o DELETE
    'id_project_es_nulo_KO': 'Se ha producido un error grave,asegurese de que el campo Identificador no este vacio',

    //atributo forzado a nulo en ADD o EDIT
    'name_project_es_nulo_KO': 'Se ha producido un error grave,asegurese de que el campo Nombre Proyecto no este vacio',
    'start_date_project_es_nulo_KO': 'Se ha producido un error grave,asegurese de que el campo Fecha de Inicio no este vacio',
    'end_date_project_es_nulo_KO': 'Se ha producido un error grave,asegurese de que el campo Fecha de Fin no este vacio',//NOTA, las fechas se envian con offsets, saltan errores no relacionados con la ET2 si se fuerza a enviar 1 solo caracter,pero se envia 
    'responsable_project_es_nulo_KO': 'Se ha producido un error grave,asegurese de que el campo Responsable no este vacio',//NOTA, las fechas se envian con offsets, saltan errores no relacionados con la ET2 si se fuerza a enviar 1 solo caracter,pero se envia 
    'organization_project_es_nulo_KO': 'Se ha producido un error grave,asegurese de que el campo Organización no este vacio',
    'description_project_es_nulo_KO': 'Se ha producido un error grave,asegurese de que el campo Descripción no este vacio',
    'code_project_es_nulo_KO': 'Se ha producido un error grave,asegurese de que el campo Código Proyecto no este vacio',
    'acronym_project_es_nulo_KO': 'Se ha producido un error grave,asegurese de que el campo Acrónimo Proyecto no este vacio',
    'id_sampling_methodology_es_nulo_KO': 'Se ha producido un error grave,asegurese de que el campo Id Metodología de Muestreo no este vacio',

    //tipo incorrecto de fichero en ADD o EDIT
    'ERROR_UPLOAD_file_project_KO': 'Se ha producido un error grave,asegurese de que el archivo subido sea correcto',

    /*
    A pesar del nombre, no es un error al forzar el atributo a nulo en ADD o EDIT, el back acepta ficheros nulos en ambas entidades.
    Este error ocurre al intentar editar una tupla de project que este guardada sin file_project
    */
    'file_project_es_nulo_KO': 'Se ha producido un error critico, los datos que intenta editar no son editables',

    //analysis_preparation

    //atributo forzado a nulo en EDIT o DELETE
    'id_analysis_preparation_es_nulo_KO': 'Se ha producido un error grave,asegurese de que el campo Identificador no este vacio',

    //atributo forzado a nulo en ADD o EDIT
    'name_analysis_preparation_es_nulo_KO': 'Se ha producido un error grave,asegurese de que el campo Nombre Análisis no este vacio',
    'description_analysis_preparation_es_nulo_KO': 'Se ha producido un error grave,asegurese de que el campo Descripción no este vacio',
    'bib_analysis_preparation_es_nulo_KO': 'Se ha producido un error grave,asegurese de que el campo Bibliografía no este vacio',

    //tipo incorrecto de fichero en ADD o EDIT
    'ERROR_UPLOAD_file_analysis_preparation_KO': 'Se ha producido un error grave,asegurese de que el archivo subido sea correcto',

    //no se si existe este error, existe el equivalente en project pero no parece que exista para analysis_preparation, no salta en los testeos
    'file_analysis_preparation_es_nulo_KO': 'Se ha producido un error critico, los datos que intenta editar no son editables',

    //characteristic

    //atributo forzado a nulo en EDIT o DELETE
    'id_characteristic_es_nulo_KO': 'Se ha producido un error grave,asegurese de que el campo Identificador no este vacio',

    //atributo forzado a nulo en ADD o EDIT
    'name_characteristic_es_nulo_KO': 'Se ha producido un error grave,asegurese de que el campo Nombre Caracteristica no este vacio',
    'description_characteristic_es_nulo_KO': 'Se ha producido un error grave,asegurese de que el campo Descripción no este vacio',
    'bibref_characteristic_es_nulo_KO': 'Se ha producido un error grave,asegurese de que el campo Bibliografía no este vacio',
    'data_type_characteristic_es_nulo_KO': 'Se ha producido un error grave,asegurese de que el campo Tipo de Dato no este vacio',
    'category_characteristic_es_nulo_KO': 'Se ha producido un error grave,asegurese de que el campo Categoria no este vacio',

    //tipo incorrecto de fichero en ADD o EDIT
    'ERROR_UPLOAD_file_characteristic_KO': 'Se ha producido un error grave,asegurese de que el archivo subido sea correcto',

    //no se si existe este error, existe el equivalente en project pero no parece que exista para characteristic, no salta en los testeos
    'file_characteristic_es_nulo_KO': 'Se ha producido un error critico, los datos que intenta editar no son editables',



    /*OTROS*/

    //el administrador no te deja borrar la tupla
    "admin_no_te_lo_deja_borrar_KO": "Se ha producido un error, el administrador no te ha dado los permisos para borrar cosas",

    //no hay fichero, no deberia pasar
    "no_file_found": "no hay fichero",

    //Fallo de SQL, posible forzarlo con datos validos: En description_project se acepta cualquier ascii, poner ' dara error ya que el back intenta hacer INSERT/UPDATE [....] description_project=''', fallando; tambien al insertar una fecha no valida
    'SQL_KO': 'Se ha producido un error, revise que los datos son correctos',

    //SEARCH no encuentra tuplas
    'RECORDSET_VACIO': 'No se han encontrado datos'
}