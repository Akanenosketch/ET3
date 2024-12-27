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
				esEspecial: true,
				size: 100
			}
		};
	}


} 
