class estructura_analysis_preparation extends EntidadAbstracta {

    constructor() {
        super();
        this.entidad = 'analysis_preparation';

        this.def_html_analysis_preparation = {
            atributos: ["id_analysis_preparation", "name_analysis_preparation", "bib_analysis_preparation", "description_analysis_preparation", "file_analysis_preparation"],

            "id_analysis_preparation": {
                tag: "INPUT",
                type: "text",
                esPK: true,
                esAutoIncremental: true,
                esEspecial: false,
                size: 11
            },

            "name_analysis_preparation": {
                tag: "INPUT",
                type: "text",
                esPK: false,
                esAutoIncremental: false,
                esEspecial: false,
                size: 100
            },

            "bib_analysis_preparation": {
                tag: "TEXTAREA",
                esPK: false,
                esAutoIncremental: false,
                esEspecial: false,
                rows: 4,
                cols: 50
            },

            "description_analysis_preparation": {
                tag: "TEXTAREA",
                esPK: false,
                esAutoIncremental: false,
                esEspecial: false,
                rows: 50,
                cols: 100
            },

            "file_analysis_preparation": {
                tag: "INPUT",
                type: "file",
                esPK: false,
                esAutoIncremental: false,
                esEspecial: false,
                size: 100
            }
        };

        this.def_test_analysis_preparation = {
            "ADD": {
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
                        valor: `^[A-Za-z ñÑ !"'(),-.:;?^_{\|}~¿»¡«  áéíóúÁÉÍÓÚ]*$`,
                        codigo: "analysis_preparation__bib_analysis_preparation__format_KO",
                        especial: false
                    }
                },

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

            "EDIT": {
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
                        valor: `^[A-Za-z ñÑ !"'(),-.:;?^_{\|}~¿»¡«  áéíóúÁÉÍÓÚ]*$`,
                        codigo: "analysis_preparation__bib_analysis_preparation__format_KO",
                        especial: false
                    }
                },

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

            "SEARCH": {
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

                "bib_analysis_preparation": {
                    "max_size": {
                        valor: 200,
                        codigo: "analysis_preparation__bib_analysis_preparation__max_size_KO",
                        especial: false
                    },
                    "format": {
                        valor: `^[A-Za-z ñÑ !"'(),-.:;?^_{\|}~¿»¡«  áéíóúÁÉÍÓÚ]*$`,
                        codigo: "analysis_preparation__bib_analysis_preparation__format_KO",
                        especial: false
                    }
                },

                "file_analysis_preparation": {
                    "max_size": {
                        valor: 100,
                        codigo: "analysis_preparation__file_analysis_preparation__max_size_KO",
                        especial: false
                    },
                    "format": {
                        valor: `^[A-Za-z.]*$`,
                        codigo: "analysis_preparation__file_analysis_preparation__format_KO",
                        especial: false
                    }
                }
            }
        };
    }
}