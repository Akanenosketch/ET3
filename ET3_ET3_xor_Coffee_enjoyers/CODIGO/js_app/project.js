class project extends estructura_project {

	//done
	constructor() {
		super();
		this.columnasamostrar = Array("id_project", "name_project", "start_date_project", "end_date_project", "file_project");
		this.datosespecialestabla = Array("start_date_project", "end_date_project", "file_project");
		this.inicializar();
	}












//Ajustar a partir de aqui




	//COMPROBACIONES


	//  `id_project` int(11) NOT NULL AUTOINCREMENT,dígitos min 1 max 11 

	comprobar_id_project_SEARCH() {
		return this.check_atributo_SEARCH('id_project', 11, "^[1-9][0-9]*$");
	}

	//  `name_project` varchar(500) NOT NULL UNIQUE,alfabéticos y espacios sin acentos ni ñ, min 15 max 100
	comprobar_name_project() {
		return this.check_atributo('name_project', 15, 100, '^[A-Za-z ]*$');
	}

	comprobar_name_project_SEARCH() {
		return this.check_atributo_SEARCH('name_project', 100, '^[A-Za-z ]*$');
	}

	//  `start_date_project` date NOT NULL,fecha válida con formato dd/mm/aaaa
	comprobar_start_date_project() {
		if (!(this.validaciones.format('start_date_project', '^[0-9]{2}/[0-9]{2}/[0-9]{4}$'))) {
			this.mostrar_error_campo('start_date_project', 'project__start_date_project__format_KO');
			return 'project__start_date_project__format_KO';
		}
		if (!(this.validacionesespeciales('start_date_project', 'fechavalida'))) {
			this.mostrar_error_campo('start_date_project', 'project__start_date_project__valid_KO');
			return 'project__start_date_project__valid_KO';
		}
		if (!(this.validacionesespeciales('start_date_project', 'fechaSuperior'))) {
			this.mostrar_error_campo('start_date_project', 'project__start_date_project__superior_KO');
			return 'project__start_date_project__superior_KO';
		}
		this.mostrar_exito_campo('start_date_project');
		return true;
	}

	comprobar_start_date_project_SEARCH() {
		if (!(this.validaciones.format('start_date_project', '^[0-9]{0,2}[/]{0,1}[0-9]{0,2}[/]{0,1}[0-9]{0,4}$'))) {
			this.mostrar_error_campo('start_date_project', 'project__start_date_project__format_SEARCH_KO');
			return 'project__start_date_project__format_SEARCH_KO';
		}
		this.mostrar_exito_campo('start_date_project');
		return true;
	}

	//  `end_date_project` date NOT NULL,fecha válida con formato dd/mm/aaaa y superior a start_date_project
	comprobar_end_date_project() {
		if (!(this.validaciones.format('end_date_project', '^[0-9]{2}/[0-9]{2}/[0-9]{4}$'))) {
			this.mostrar_error_campo('end_date_project', 'project__end_date_project__format_KO');
			return 'project__end_date_project__format_KO';
		}
		if (!(this.validacionesespeciales('end_date_project', 'fechavalida'))) {
			this.mostrar_error_campo('end_date_project', 'project__end_date_project__valid_KO');
			return 'project__end_date_project__valid_KO';
		}
		if (!(this.validacionesespeciales('end_date_project', 'fechaInferior'))) {
			this.mostrar_error_campo('end_date_project', 'project__end_date_project__inferior_KO');
			return 'project__end_date_project__inferior_KO';
		}
		this.mostrar_exito_campo('end_date_project');
		return true;
	}

	comprobar_end_date_project_SEARCH() {
		if (!(this.validaciones.format('end_date_project', '^[0-9]{0,2}[/]{0,1}[0-9]{0,2}[/]{0,1}[0-9]{0,4}$'))) {
			this.mostrar_error_campo('end_date_project', 'project__end_date_project__format_SEARCH_KO');
			return 'project__end_date_project__format_SEARCH_KO';
		}
		this.mostrar_exito_campo('end_date_project');
		return true;
	}

	//  `responsable_project` varchar(60) NOT NULL,alfabéticos con acentos, ñ y espacios min 6 max 60
	comprobar_responsable_project() {
		return this.check_atributo('responsable_project', 6, 60, `^[A-Za-z áéíóúÁÉÍÓÚ ñÑ]*$`);
	}

	comprobar_responsable_project_SEARCH() {
		return this.check_atributo_SEARCH('responsable_project', 60, `^[A-Za-z áéíóúÁÉÍÓÚ ñÑ]*$`);
	}

	//  `organization_project` varchar(100) NOT NULL,alfabéticos con acentos, ñ y espacios min 6 max 100
	comprobar_organization_project() {
		return this.check_atributo('organization_project', 6, 100, `^[A-Za-z áéíóúÁÉÍÓÚ ñÑ]*$`);
	}

	comprobar_organization_project_SEARCH() {
		return this.check_atributo_SEARCH('organization_project', 100, `^[A-Za-z áéíóúÁÉÍÓÚ ñÑ]*$`);

	}

	//  `description_project` varchar(500) NOT NULL,Cualquier ascii min 30 max 500
	comprobar_description_project() {
		return this.check_atributo('description_project', 30, 500, `^[^]*$`);
	}

	comprobar_description_project_SEARCH() {
		return this.check_atributo_SEARCH('description_project', 500, `^[^]*$`);
	}

	//  `file_project` varchar(100) NOT NULL,alfabéticos sin acentos ni ñ ni espacios con punto min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 2000000 bytes.
	comprobar_nuevo_file_project() {
		let tipos = Array("application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");//ultimo tipo MIME es .docx
		return this.check_atributo_file('nuevo_file_project', this.accion, 2000000, tipos, 7, 100, '^[A-Za-z.]*$');
	}

	comprobar_file_project_SEARCH() {
		return this.check_atributo_SEARCH('file_project', 100, `^[A-Za-z.]*$`);
	}

	//  `code_project` varchar(50) NOT NULL UNIQUE,alfabéticos con ñ, espacios y signos de puntuación, sin acentos, min 6 max 50
	comprobar_code_project() {
		return this.check_atributo('code_project', 6, 50, `^[A-Za-z ñÑ!"'(),-.:;?^_\`{\|}~¿»¡«]*$`);
	}

	comprobar_code_project_SEARCH() {
		return this.check_atributo_SEARCH('code_project', 50, `^[A-Za-z ñÑ!"'(),-.:;?^_\`{\|}~¿»¡«]*$`);
	}

	//  `acronym_project` varchar(15) NOT NULL UNIQUE,alfabéticos con ñ y signos de puntuación, sin acentos ni espacios, min 6 max 15
	comprobar_acronym_project() {
		return this.check_atributo('acronym_project', 6, 15, `^[A-Za-zñÑ!"'(),-.:;?^_\`{\|}~¿»¡«]*$`);
	}

	comprobar_acronym_project_SEARCH() {
		return this.check_atributo_SEARCH('acronym_project', 15, `^[A-Za-zñÑ!"'(),-.:;?^_\`{\|}~¿»¡«]*$`);
	}

	//  `id_sampling_methodology` int(11) NOT NULL dígitos min 1 max 11 
	comprobar_id_sampling_methodology() {
		return this.check_atributo('id_sampling_methodology', 1, 11, "^[1-9][0-9]*$");
	}

	comprobar_id_sampling_methodology_SEARCH() {
		return this.check_atributo_SEARCH('id_sampling_methodology', 11, "^[1-9][0-9]*$");
	}


	comprobar_submit() {
		return this.check_submit("");
	}

	comprobar_submit_SEARCH() {
		return this.check_submit("SEARCH");
	}


	//metodos auxiliares	




	//metodo para mostrar información especial de atributo en la tabla de muestra de tuplas
	cambiardatosespecialestabla(atributo, valoratributo) {
		if (atributo == 'file_project') {
			if (valoratributo == '') return `<a class="no_file_found"></a>`;

			let texto = valoratributo;
			texto += `<a id="link_file_project`;
			texto += `_`;
			texto += valoratributo; //Para evitar ids duplicados
			texto += `" href="http://193.147.87.202/ET2/filesuploaded/files_file_project/`;
			texto += valoratributo;
			texto += `"><img src="./iconos/FILE.png" /></a>`;
			return texto;
		}
		if (atributo == 'start_date_project' || atributo == 'end_date_project') {
			let fech = valoratributo.split('-');
			let fechaformateada = fech[2] + '/' + fech[1] + '/' + fech[0];
			return fechaformateada;
		}
	}

	validacionesespeciales(atributo, prueba) {
		if (atributo == 'start_date_project') {
			if (prueba == 'fechavalida') return this.fechaValida(document.getElementById(atributo).value);

			if (prueba == "fechaSuperior") {
				let otroAtributo = "end_date_project";
				let fechaO = document.getElementById(otroAtributo).value;
				if (fechaO == "") return true; //la otra fecha no esta introducida
				return this.fechasOrdenadas(document.getElementById(atributo).value, fechaO);
			}
		}
		if (atributo == 'end_date_project') {
			if (prueba == 'fechavalida') return this.fechaValida(document.getElementById(atributo).value);

			if (prueba == "fechaInferior") {
				let otroAtributo = "start_date_project";
				let fechaO = document.getElementById(otroAtributo).value;
				if (fechaO == "") return true; //la otra fecha no esta introducida
				return this.fechasOrdenadas(fechaO, document.getElementById(atributo).value);
			}
		}
	}

	fechaValida(fecha) {
		let fechaf = fecha.split("/");
		let year = parseInt(fechaf[2]);
		if (year == 0) return false; //En el calendario gregoriano no hay año 0
		let month = fechaf[1];
		let lastDay = 0;
		switch (month) { //camnbiarle este switch por otra cosa (array de meses con dias puede estar mejor )
			case '02'://febrero
				//bisiesto
				if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
					lastDay = 29;
				} else lastDay = 28;
				break;
			//31 dias
			case '01':
			case '03':
			case '05':
			case '07':
			case '08':
			case '10':
			case '12':
				lastDay = 31;
				break;
			//30 dias
			case '04':
			case '06':
			case '09':
			case '11':
				lastDay = 30;
				break;
			default:
				return false; //mes no valido
		}
		let day = parseInt(fechaf[0]);
		return day > 0 && day <= lastDay;
	}

	fechasOrdenadas(fecha1, fecha2) {
		let fechaS1 = fecha1.split("/");
		let fechaS2 = fecha2.split("/");
		let year1 = parseInt(fechaS1[2]);
		let year2 = parseInt(fechaS2[2]);
		if (year1 != year2) return year1 < year2;

		let mes1 = parseInt(fechaS1[1]);
		let mes2 = parseInt(fechaS2[1]);
		if (mes1 != mes2) return mes1 < mes2;

		let dia1 = parseInt(fechaS1[0]);
		let dia2 = parseInt(fechaS2[0]);
		return dia1 < dia2;
	}

















	ponerEditAReadonly() {
		// desactivo los campos necesarios
		document.getElementById('file_project').setAttribute('readonly', true);
		document.getElementById('id_project').setAttribute('readonly', true);
		//Estos atributos son readonly, las comprobaciones en onblur no son necesarias
		document.getElementById('file_project').removeAttribute('onblur');
		document.getElementById('id_project').removeAttribute('onblur');
	}

	mostrarAtributosForm(parametros) {
		this.rellenarvaloresform(parametros);
		//Pongo las fechas correctas
		document.getElementById('start_date_project').value = this.cambiardatosespecialestabla('start_date_project', parametros.start_date_project);
		document.getElementById('end_date_project').value = this.cambiardatosespecialestabla('end_date_project', parametros.end_date_project);
		// añado el nombre de fichero a la ruta de href que tengo en el hiperenlace del fichero
		document.getElementById('link_file_project').href += parametros.file_project;
	}






}