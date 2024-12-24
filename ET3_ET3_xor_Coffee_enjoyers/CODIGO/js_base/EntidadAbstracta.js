class EntidadAbstracta extends DOM_class {

	constructor() {
		super();
	}

	inicializar() {

		if (eval(this.datosespecialestabla)) { }
		else {
			this.datosespecialestabla = Array();
		}

		this.access_functions = new ExternalAccess();
		this.validaciones = new validacionesatomicas();

		this.cerrar_test()
		this.SEARCH();


	}


	//Ahora mismo la traduccion de placeholders falla pq no tiene clases

	/*
	Atributo en la estructura para los que sean de mostrado especial o algo = que la funcion invoque a una funcion de su clase 
	Para los de validaciones especiales si
	*/

	crearTablaDatos() { //Mover a DOM class?

		document.getElementById("id_tabla_datos").style.display = 'block';

		//construir tabla
		this.hacertabla();
		//construir select
		this.construirSelect();

		//ocultar segun columnasamostrar
		if (this.datos != "") { this.mostrarocultarcolumnas() };

	}

	cargar_formulario() {

		if (eval(this.cargar_formulario_html)) {
			this.cargar_formulario_html();
		}
		else {
			if (eval(this.cargar_formulario_dinamico)) {
				this.cargar_formulario_dinamico();
			}
			else {
				alert('no existe formulario');
			}
		}

	}

	async SEARCH() {

		await this.access_functions.peticionBackGeneral('IU_form', this.entidad, 'SEARCH')
			.then((respuesta) => {

				//limpiar el formulario
				this.cargar_formulario_html();
				//quito los class de la muestra de filas
				document.getElementById('muestradatostabla').removeAttribute('class'); //QUE HACE ESTO?

				//poner el div del formulario no visible
				document.getElementById("div_IU_form").style.display = 'none';

				this.datos = respuesta['resource'];
				this.atributos = Object.keys(respuesta['criteriosbusqueda']);

				this.crearTablaDatos();

				setLang();

			});

	}

	async ADD() {

		await this.access_functions.peticionBackGeneral('IU_form', this.entidad, 'ADD')
			.then((respuesta) => {

				if (respuesta['ok']) {

					//limpiar el formulario
					this.cargar_formulario();

					//poner el div del formulario no visible
					document.getElementById("div_IU_form").style.display = 'none';

					this.SEARCH();

				}
				else {

					// mostrar mensaje error accion
					// alert('error : '+respuesta['code']);

					// Usando modal
					this.abrirModalError(respuesta['code']);
				}

			});

	}

	async DELETE() {

		await this.access_functions.peticionBackGeneral('IU_form', this.entidad, 'DELETE')
			.then((respuesta) => {

				if (respuesta['ok']) {

					//limpiar el formulario
					this.cargar_formulario();

					//poner el div del formulario no visible
					document.getElementById("div_IU_form").style.display = 'none';

					this.SEARCH();
				}
				else {

					// mostrar mensaje error accion
					// alert('error : '+respuesta['code']);

					// Usando modal
					this.abrirModalError(respuesta['code']);
				}

			});

	}

	async EDIT() {

		await this.access_functions.peticionBackGeneral('IU_form', this.entidad, 'EDIT')
			.then((respuesta) => {

				if (respuesta['ok']) {

					//limpiar el formulario
					this.cargar_formulario();

					//poner el div del formulario no visible
					document.getElementById("div_IU_form").style.display = 'none';

					this.SEARCH();

				}
				else {

					// mostrar mensaje error accion
					// alert('error : '+respuesta['code']);

					// Usando modal
					this.abrirModalError(respuesta['code']);
				}

			});

	}

	cambiacolumnastabla(atributo) { //Mover a dom class?

		document.querySelector("th[class='" + atributo + "']").style.display = 'none';

	}

	check_submit(accion) {
		let result = true;
		if (accion == "SEARCH") {
			accion = "_SEARCH";
		} else {
			accion = "";
		}
		//obtener campos del formulario
		let campos = document.forms['IU_form'].elements;
		//recorrer todos los campos
		for (let i = 0; i < campos.length; i++) {
			//	if (campos[i].type != "submit") { //los elementos son los campos Y el boton de submit
			if (eval('this.comprobar_' + campos[i].id + accion) != undefined) { //en edit hay a la vez file y nuevo_file, y no hay comprobar de file
				result = eval('this.comprobar_' + campos[i].id + accion + '()') == true && result;
			}
		}
		return result;
	}


	colocarboton(accion) {
		//Crea un div para el boton y lo appendea al form
		let divboton = document.createElement('div');
		divboton.id = 'div_boton';
		document.getElementById('IU_form').append(divboton);
		//crea el boton como tipo submit
		let boton = document.createElement('button');
		boton.id = 'submit_button';
		boton.type = 'submit';
		//Crea la imagen de la accion, la añade al boton, y añade el boton al div en el formulario
		let img = document.createElement('img');
		img.src = './iconos/' + accion + '.png';
		boton.append(img);
		document.getElementById('div_boton').append(boton);
	}

	rellenarvaloresform(parametros) {
		//obtener campos del formulario
		let campos = document.forms['IU_form'].elements;
		//recorrer todos los campos
		for (let i = 0; i < campos.length; i++) {
			if (document.getElementById(campos[i].id).type != 'file') {
				document.getElementById(campos[i].id).value = parametros[campos[i].id];
			}
		}
	}

	colocarvalidaciones(accion) {
		let evento;
		//obtener campos del formulario
		let campos = document.forms['IU_form'].elements;
		//recorrer todos los campos
		for (let i = 0; i < campos.length; i++) {
			if (document.getElementById(campos[i].id).tagName == 'TEXTAREA' || ((document.getElementById(campos[i].id).tagName == 'INPUT') && (document.getElementById(campos[i].id).type !== 'file'))) {
				evento = 'onblur';
			}
			else {
				evento = 'onchange';
			}
			if (accion == 'SEARCH') {
				document.getElementById(campos[i].id).setAttribute(evento, 'validar.comprobar_' + campos[i].id + '_' + accion + '();');
			}
			else {
				document.getElementById(campos[i].id).setAttribute(evento, 'validar.comprobar_' + campos[i].id + '();');
			}
		}
	}

	ponernoactivoform() {
		//obtener campos del formulario
		let campos = document.forms['IU_form'].elements;
		//recorrer todos los campos
		for (let i = 0; i < campos.length; i++) {
			document.getElementById(campos[i].id).setAttribute('readonly', true);
		}
	}

	ponerTituloForm(accion) {
		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_' + this.entidad + '_' + accion;
	}

	colocarOnSubmitForm(accion) {
		switch (accion) {
			case 'EDIT':
			case 'ADD':
				document.getElementById("IU_form").setAttribute('onsubmit', "return validar.comprobar_submit();");
				break;
			case 'SEARCH':
				document.getElementById("IU_form").setAttribute('onsubmit', "return validar.comprobar_submit_SEARCH();");
				break;
			case 'DELETE':
			case 'SHOWCURRENT':
				document.getElementById("IU_form").setAttribute('onsubmit', "return true;");
				break;
			default:
				break;
		}
	}

	colocarActionForm(accion) {
		if (accion != "SHOWCURRENT") document.getElementById("IU_form").setAttribute('action', "javascript:validar." + accion + "();");
	}

	mostrarForm() {
		document.getElementById("div_IU_form").style.display = 'block';
	}


	check_atributo(id, minsize, maxsize, regex) { //hacer estos distinto, segun estructura
		let codigoError = this.entidad + "__" + id;
		if (!(this.validaciones.min_size(id, minsize))) {
			this.mostrar_error_campo(id, codigoError + '__min_size_KO');
			return codigoError + '__min_size_KO';
		}
		if (!(this.validaciones.max_size(id, maxsize))) {
			this.mostrar_error_campo(id, codigoError + '__max_size_KO');
			return codigoError + '__max_size_KO';
		}
		if (!(this.validaciones.format(id, regex))) {
			this.mostrar_error_campo(id, codigoError + '__format_KO');
			return codigoError + '__format_KO';
		}
		this.mostrar_exito_campo(id);
		return true;
	}

	check_atributo_SEARCH(id, maxsize, regex) {
		if (!this.validaciones.max_size(id, 0)) { //si no esta vacia
			let codigoError = this.entidad + "__" + id;
			if (!(this.validaciones.max_size(id, maxsize))) {
				this.mostrar_error_campo(id, codigoError + '__max_size_KO');
				return codigoError + '__max_size_KO';
			}
			if (!(this.validaciones.format(id, regex))) {
				this.mostrar_error_campo(id, codigoError + '__format_KO');
				return codigoError + '__format_KO';
			}
		}
		this.mostrar_exito_campo(id);
		return true;
	}

	check_atributo_file(id, accion, max_size_file, types_file, min_size_name, max_size_name, regex) {
		let codigoError = this.entidad + "__" + id;
		if (document.getElementById(id).files.length == 0) {
			if (accion == 'EDIT') {
				return true;
			}
			if (accion == "ADD") {
				this.mostrar_error_campo(id, codigoError + '__empty_KO');
				return codigoError + '__empty_KO';
			}
		}
		let mifichero = document.getElementById(id).files[0];
		if (!(this.validaciones.max_size_file(mifichero, max_size_file))) {
			this.mostrar_error_campo(id, codigoError + '__max_size_file_KO');
			return codigoError + '__max_size_file_KO';
		}
		if (!(this.validaciones.type_file(mifichero, types_file))) {
			this.mostrar_error_campo(id, codigoError + '__type_file_KO');
			return codigoError + '__type_file_KO';
		}
		if (!this.validaciones.min_size(id, min_size_name)) {
			this.mostrar_error_campo(id, codigoError + '__min_size_KO');
			return codigoError + '__min_size_KO';
		}
		if (!this.validaciones.max_size(id, max_size_name)) {
			this.mostrar_error_campo(id, codigoError + '__max_size_KO');
			return codigoError + '__max_size_KO';
		}
		if (!(this.validaciones.format_name_file(mifichero, regex))) {
			this.mostrar_error_campo(id, codigoError + '__format_name_file_KO');
			return codigoError + '__format_name_file_KO';
		}
		this.mostrar_exito_campo(id);
		return true;
	}


	createForm_ADD() {
		//Recrear el formulario limpio
		if (eval(this.cargar_formulario_html)) {
			this.cargar_formulario_html();
			// atributo creado para distinguir en comprobar_atributo() entre venir de ADD o EDIT
			this.accion = 'ADD';
		}
		// poner titulo al formulario
		this.ponerTituloForm("ADD");
		//Elimina campos no necesarios
		this.eliminarCamposForm("ADD");
		//Colocar Validaciones
		this.colocarvalidaciones('ADD');
		//Añadir boton para submit
		this.colocarboton('ADD');
		//Poner onsubmit y action al formulario
		this.colocarOnSubmitForm("ADD");
		this.colocarActionForm("ADD");
		//Mostrar el formulario
		this.mostrarForm();
	}

	createForm_SEARCH() {
		//Recrear el formulario limpio
		if (eval(this.cargar_formulario_html)) this.cargar_formulario_html();
		// poner titulo al formulario
		this.ponerTituloForm("SEARCH");
		//Elimina campos no necesarios
		this.eliminarCamposForm("SEARCH");
		//Colocar Validaciones 		
		this.colocarvalidaciones('SEARCH');
		//Añadir boton para submit
		this.colocarboton('SEARCH');
		//Poner onsubmit y action al formulario
		this.colocarOnSubmitForm("SEARCH");
		this.colocarActionForm("SEARCH");
		//Mostrar el formulario
		this.mostrarForm();
	}

	createForm_EDIT(parametros) {
		//Recrear el formulario limpio
		if (eval(this.cargar_formulario_html)) {
			this.cargar_formulario_html();
			// atributo creado para distinguir en comprobar_atributo() entre venir de ADD o EDIT
			this.accion = 'EDIT';
		}
		// poner titulo al formulario
		this.ponerTituloForm("EDIT");
		// relleno los valores de los atributos
		this.mostrarAtributosForm(parametros);
		// coloco las validaciones
		this.colocarvalidaciones('EDIT');
		// desactivo los campos necesarios
		this.ponerEditAReadonly();
		// coloco el boton
		this.colocarboton('EDIT');
		// pongo valores a los onsubmit y action
		this.colocarOnSubmitForm("EDIT");
		this.colocarActionForm("EDIT");
		// pongo visible el formulario
		this.mostrarForm();
	}

	createForm_DELETE(parametros) {
		//Recrear el formulario limpio
		if (eval(this.cargar_formulario_html)) this.cargar_formulario_html();
		// poner titulo al formulario
		this.ponerTituloForm("DELETE");
		//Elimina campos no necesarios 
		this.eliminarCamposForm("DELETE");
		//Muestra los valores actuales del formulario
		this.mostrarAtributosForm(parametros);
		// pongo no activos todos los campos
		this.ponernoactivoform();
		// coloco el boton
		this.colocarboton('DELETE');
		// pongo valores a los onsubmit y action
		this.colocarOnSubmitForm("DELETE");
		this.colocarActionForm("DELETE");
		// pongo visible el formulario
		this.mostrarForm();
	}

	createForm_SHOWCURRENT(parametros) {
		//Recrear el formulario limpio
		if (eval(this.cargar_formulario_html)) this.cargar_formulario_html();
		// poner titulo al formulario
		this.ponerTituloForm("SHOWCURRENT");
		//Elimina campos no necesarios 
		this.eliminarCamposForm("SHOWCURRENT");
		//Muestra los valores actuales del formulario
		this.mostrarAtributosForm(parametros);
		// pongo no activos todos los campos
		this.ponernoactivoform();
		// pongo valores a los onsubmit y action
		this.colocarOnSubmitForm("SHOWCURRENT");
		this.colocarActionForm("SHOWCURRENT");
		// pongo visible el formulario
		this.mostrarForm();
	}


}
