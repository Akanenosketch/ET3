class estructura_characteristic extends EntidadAbstracta {

	constructor() {
        super();
        this.entidad = 'characteristic';
		
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
    

		this.def_test_characteristic = {
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
                        valor: `selectValido`,
                        codigo: "characteristic__data_type_characteristic__valid_KO",
                        especial: true
                    }
                },

				"category_characteristic": {
                    "selectValido": {
                        valor: `selectValido`,
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
                        valor: `^[A-Za-z ñÑ !"'(),-.:;?^_{\|}~¿»¡«  áéíóúÁÉÍÓÚ]*$`,
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
                        valor: `selectValido`,
                        codigo: "characteristic__data_type_characteristic__valid_KO",
                        especial: true
                    }
                },

				"category_characteristic": {
                    "selectValido": {
                        valor: `selectValido`,
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
                        valor: `^[A-Za-z ñÑ !"'(),-.:;?^_{\|}~¿»¡«  áéíóúÁÉÍÓÚ]*$`,
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
                        valor: `selectValidoSEARCH`,
                        codigo: "characteristic__data_type_characteristic__valid_SEARCH_KO",
                        especial: true
                    }
                },

				"category_characteristic": {
                    "selectValidoSEARCH": {
                        valor: `selectValidoSEARCH`,
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
                        valor: `^[A-Za-z ñÑ !"'(),-.:;?^_{\|}~¿»¡«  áéíóúÁÉÍÓÚ]*$`,
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
                        valor: `^[A-Za-z.]*$`,
                        codigo: "characteristic__file_characteristic__format_KO",
                        especial: false
                    }
                }
            }
        };
		
    }

	
}