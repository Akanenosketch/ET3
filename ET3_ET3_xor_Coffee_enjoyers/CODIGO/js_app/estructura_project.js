class estructura_project extends EntidadAbstracta {

	constructor() {
		super();
		this.entidad = 'project';

		this.def_html_project = {
			atributos: ["id_project", "name_project", "start_date_project", "end_date_project", "responsable_project", "organization_project", "code_project", "acronym_project", "id_sampling_methodology", "description_project", "file_project"],

			"id_project": {
				tag: "INPUT",
				type: "text",
				esPK: true,
				esAutoIncremental: true,
				esEspecial: false,
				size: 11
			},

			"name_project": {
				tag: "INPUT",
				type: "text",
				esPK: false,
				esAutoIncremental: false,
				esEspecial: false,
				size: 100
			},

			"start_date_project": {
				tag: "INPUT",
				type: "text",
				esPK: false,
				esAutoIncremental: false,
				esEspecial: true,
				size: 10
			},

			"end_date_project": {
				tag: "INPUT",
				type: "text",
				esPK: false,
				esAutoIncremental: false,
				esEspecial: true,
				size: 10
			},

			"responsable_project": {
				tag: "INPUT",
				type: "text",
				esPK: false,
				esAutoIncremental: false,
				esEspecial: false,
				size: 60
			},

			"organization_project": {
				tag: "INPUT",
				type: "text",
				esPK: false,
				esAutoIncremental: false,
				esEspecial: false,
				size: 100
			},

			"code_project": {
				tag: "INPUT",
				type: "text",
				esPK: false,
				esAutoIncremental: false,
				esEspecial: false,
				size: 50
			},

			"acronym_project": {
				tag: "INPUT",
				type: "text",
				esPK: false,
				esAutoIncremental: false,
				esEspecial: false,
				size: 15
			},

			"id_sampling_methodology": {
				tag: "INPUT",
				type: "text",
				esPK: false,
				esAutoIncremental: false,
				esEspecial: false,
				size: 11
			},

			"description_project": {
				tag: "TEXTAREA",
				esPK: false,
				esAutoIncremental: false,
				esEspecial: false,
				rows: 5,
				cols: 100
			},

			"file_project": {
				tag: "INPUT",
				type: "file",
				esPK: false,
				esAutoIncremental: false,
				esEspecial: false,
				size: 100
			}
		};

		this.def_test_project = {
			"ADD": {
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
						valor: `^[A-Za-z áéíóúÁÉÍÓÚ ñÑ]*$`,
						codigo: "project__organization_project__format_KO",
						especial: false
					}
				},

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
						valor: `^[A-Za-z ñÑ!"'(),-.:;?^_\`{\|}~¿»¡«]*$`,
						codigo: "project__code_project__format_KO",
						especial: false
					}
				},

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
						valor: `^[A-Za-zñÑ!"'(),-.:;?^_\`{\|}~¿»¡«]*$`,
						codigo: "project__acronym_project__format_KO",
						especial: false
					}
				},

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

			"EDIT": {
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
						valor: `^[A-Za-z áéíóúÁÉÍÓÚ ñÑ]*$`,
						codigo: "project__organization_project__format_KO",
						especial: false
					}
				},

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
						valor: `^[A-Za-z ñÑ!"'(),-.:;?^_\`{\|}~¿»¡«]*$`,
						codigo: "project__code_project__format_KO",
						especial: false
					}
				},

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
						valor: `^[A-Za-zñÑ!"'(),-.:;?^_\`{\|}~¿»¡«]*$`,
						codigo: "project__acronym_project__format_KO",
						especial: false
					}
				},

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

			"SEARCH": {
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

				"start_date_project": {
					"format": {
						valor: "^[0-9]{0,2}[/]{0,1}[0-9]{0,2}[/]{0,1}[0-9]{0,4}$",
						codigo: "project__start_date_project__format_SEARCH_KO",
						especial: false
					}
				},

				"end_date_project": {
					"format": {
						valor: "^[0-9]{0,2}[/]{0,1}[0-9]{0,2}[/]{0,1}[0-9]{0,4}$",
						codigo: "project__end_date_project__format_SEARCH_KO",
						especial: false
					}
				},

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

				"organization_project": {
					"max_size": {
						valor: 100,
						codigo: "project__organization_project__max_size_KO",
						especial: false
					},
					"format": {
						valor: `^[A-Za-z áéíóúÁÉÍÓÚ ñÑ]*$`,
						codigo: "project__organization_project__format_KO",
						especial: false
					}
				},

				"description_project": {
					"max_size": {
						valor: 500,
						codigo: "project__description_project__max_size_KO",
						especial: false
					}
				},

				"code_project": {
					"max_size": {
						valor: 50,
						codigo: "project__code_project__max_size_KO",
						especial: false
					},
					"format": {
						valor: `^[A-Za-z ñÑ!"'(),-.:;?^_\`{\|}~¿»¡«]*$`,
						codigo: "project__code_project__format_KO",
						especial: false
					}
				},

				"acronym_project": {
					"max_size": {
						valor: 15,
						codigo: "project__acronym_project__max_size_KO",
						especial: false
					},
					"format": {
						valor: `^[A-Za-zñÑ!"'(),-.:;?^_\`{\|}~¿»¡«]*$`,
						codigo: "project__acronym_project__format_KO",
						especial: false
					}
				},

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

				"file_project": {
					"max_size": {
						valor: 100,
						codigo: "project__file_project__max_size_KO",
						especial: false
					},
					"format": {
						valor: `^[A-Za-z.]*$`,
						codigo: "project__file_project__format_KO",
						especial: false
					}
				}
			}
		};
	}
}