class analysis_preparation extends estructura_analysis_preparation {

	//done
	constructor() { 
		super();
		this.columnasamostrar = Array("id_analysis_preparation", "name_analysis_preparation", "file_analysis_preparation");
		this.datosespecialestabla = Array("file_analysis_preparation"); 
		this.inicializar();
	}








//Ajustar a partir de aqui







	//COMPROBACIONES, hacerlas dinamicas (como)


	//`id_analysis_preparation` int(11) NOT NULL AUTOINCREMENT,dígitos min 1 max 11 

	comprobar_id_analysis_preparation_SEARCH() {
		return this.check_atributo_SEARCH('id_analysis_preparation', 11, "^[1-9][0-9]*$");
	}

	//`name_analysis_preparation` varchar(100) NOT NULL UNIQUE,alfabéticos y espacios sin acentos ni ñ, min 8 max 100
	comprobar_name_analysis_preparation() {
		return this.check_atributo('name_analysis_preparation', 8, 100, '^[A-Za-z ]*$');
	}

	comprobar_name_analysis_preparation_SEARCH() {
		return this.check_atributo_SEARCH('name_analysis_preparation', 100, '^[A-Za-z ]*$');
	}

	//`description_analysis_preparation` varchar(5000) NOT NULL,alfabéticos y espacios sin acentos ni ñ, min 80 max 5000	
	comprobar_description_analysis_preparation() {
		return this.check_atributo('description_analysis_preparation', 80, 5000, '^[A-Za-z ]*$');
	}

	comprobar_description_analysis_preparation_SEARCH() {
		return this.check_atributo_SEARCH('description_analysis_preparation', 5000, '^[A-Za-z ]*$');
	}

	//`bib_analysis_preparation` varchar(200) NOT NULL, alfabéticos con acentos, ñ, espacios y signos de puntuación, min 6 max 200
	comprobar_bib_analysis_preparation() {
		return this.check_atributo('bib_analysis_preparation', 6, 200, `^[A-Za-z ñÑ !"'(),-.:;?^_\`{\|}~¿»¡«  áéíóúÁÉÍÓÚ]*$`);
	}

	comprobar_bib_analysis_preparation_SEARCH() {
		return this.check_atributo_SEARCH('bib_analysis_preparation', 200, `^[A-Za-z ñÑ !"'(),-.:;?^_\`{\|}~¿»¡«  áéíóúÁÉÍÓÚ]*$`);
	}

	//`file_analysis_preparation` varchar(100) NOT NULL alfabéticos con punto sin acentos ni ñ ni espacios min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 2000000 bytes.
	comprobar_nuevo_file_analysis_preparation() {
		let tipos = Array("application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");//ultimo tipo MIME es .docx
		return this.check_atributo_file('nuevo_file_analysis_preparation', this.accion, 2000000, tipos, 7, 100, '^[A-Za-z.]*$');
	}

	comprobar_file_analysis_preparation_SEARCH() {
		return this.check_atributo_SEARCH('file_analysis_preparation', 100, `^[A-Za-z.]*$`);
	}

	comprobar_submit() {
		return this.check_submit("");
	}

	comprobar_submit_SEARCH() {
		return this.check_submit("SEARCH");
	}


	//metodos auxiliares	


	//metodo para mostrar información especial de atributo en la tabla de muestra de tuplas
	cambiardatosespecialestabla(atributo, valoratributo) { //mantener aqui mejor
		if (atributo == 'file_analysis_preparation') {
			if (valoratributo == '') return `<a class="no_file_found"></a>`; //por definicion de la entidad, debe haber fichero
			let texto = valoratributo;
			texto += `<a id="link_file_analysis_preparation`;
			texto += `_`;
			texto += valoratributo; //Para evitar ids duplicados
			texto += `" href="http://193.147.87.202/ET2/filesuploaded/files_file_analysis_preparation/`;
			texto += valoratributo;
			texto += `"><img src="./iconos/FILE.png" /></a>`;
			return texto;
		}
	}

	



	ponerEditAReadonly() { //poner en entidad y dinamicamente segun sean PK
		document.getElementById('file_analysis_preparation').setAttribute('readonly', true);
		document.getElementById('id_analysis_preparation').setAttribute('readonly', true);
		//las comprobaciones en onblur no son necesarias al ser readonly
		document.getElementById('file_analysis_preparation').removeAttribute('onblur');
		document.getElementById('id_analysis_preparation').removeAttribute('onblur');

	}

	mostrarAtributosForm(accion,parametros) { //mantener
		this.rellenarvaloresform(parametros);
		// añado el nombre de fichero a la ruta de href que tengo en el hiperenlace del fichero
		//document.getElementById('link_file_analysis_preparation').href += parametros.file_analysis_preparation;
	}






}