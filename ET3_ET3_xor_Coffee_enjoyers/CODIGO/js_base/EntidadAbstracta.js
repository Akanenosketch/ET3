class EntidadAbstracta extends DOM_class {

	//done
	constructor() {
		super();
	}

	//done
	inicializar() {
		if (eval(this.datosespecialestabla) == undefined) {
			this.datosespecialestabla = Array();
		}
		if (eval(this.columnasamostrar) == undefined) {
			this.columnasamostrar = Array();
		}
		this.access_functions = new ExternalAccess();
		this.validaciones = new validacionesatomicas();
		this.constructor_form = new constructor_form(eval("this.def_html_" + this.entidad));
		this.constructor_validaciones = new constructor_validaciones();
		this.colocador_valores = new colocador_valores();

		this.cerrar_test()
		this.SEARCH();
	}


	//version preliminar YA OPERATIVA
	createForm(accion, parametros) {
		//Recrear el formulario limpio
		this.accion = accion; //borrar luego es para los comprobar de ahora
		this.cargar_formulario(accion);
		// poner titulo al formulario
		this.ponerTituloForm(accion);
		//Elimina campos no necesarios
		this.eliminarCamposForm(accion); //en clase entidad, mirar para hacerlo dinamico
		//Muestra los valores actuales del formulario
		if (accion == "SHOWCURRENT" || accion == "DELETE" || accion == "EDIT") {
			this.mostrarAtributosForm(parametros); //wn clase entidad, definitivamente moverlo aqui de alguna forma

		}
		//Colocar Validaciones
		this.colocarvalidaciones(accion);
		if (accion == "EDIT") {
			this.ponerEditAReadonly(); //unificar con el de elete y show, que genere un array de cuales a readonly a partir de estructura (o todos si delet) y luego ponga el array
		}
		if (accion == "SHOWCURRENT" || accion == "DELETE") this.ponernoactivoform();
		//Añadir boton para submit
		this.colocarboton(accion);
		//Poner onsubmit y action al formulario
		this.colocarOnSubmitForm(accion);
		this.colocarActionForm(accion);
		// pongo visible el formulario
		this.mostrarForm();
		setLang();
	}





	/*
	Atributo en la estructura para los que sean de mostrado especial o algo = que la funcion invoque a una funcion de su clase 
	Para los de validaciones especiales si
	*/


	/* Metodos auxiliares de createForm */

	//done
	cargar_formulario(accion) {
		if (eval(this.cargar_formulario_html)) { //si existe, en clase entidad
			this.cargar_formulario_html();
		}
		else {
			if (eval(this.cargar_formulario_dinamico)) { //siempre existira
				this.cargar_formulario_dinamico(accion);
			}
			else {
				alert('no existe formulario');
			}
		}
	}

	//done
	cargar_formulario_dinamico(accion) {
		document.getElementById("IU_form").innerHTML = '';
		this.constructor_form.crearForm();
		if (accion == "SEARCH") this.constructor_form.SearchPH();
	}

	//done
	ponerTituloForm(accion) {
		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_' + this.entidad + '_' + accion;
	}


	//clase aparte y cambiar para los que no sean
	colocarvalidaciones(accion) {
		if (accion == "DELETE" || accion == "SHOWCURRENT") return "b";
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




	//hacer clase aparte, se invoca desde la entidad por los especiales
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


	//cambiar
	ponernoactivoform() {
		//obtener campos del formulario
		let campos = document.forms['IU_form'].elements; //generar este array campos a partir de lo dinamico para el edit
		//recorrer todos los campos
		for (let i = 0; i < campos.length; i++) {
			document.getElementById(campos[i].id).setAttribute('readonly', true);
		}
	}



	//done 
	colocarboton(accion) {
		if (accion != "SHOWCURRENT") {
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
	}


	//refactorizar seguramente
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

	//done
	colocarActionForm(accion) {
		if (accion != "SHOWCURRENT") document.getElementById("IU_form").setAttribute('action', "javascript:validar." + accion + "();");
	}

	//done
	mostrarForm() {
		document.getElementById("div_IU_form").style.display = 'block';
	}









	//borrar luego de hacerlo dinamico
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

	//borrar luego
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

	//borrar luego
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

	//borrar luego

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








	/*Accesos al back */

	//done?
	async SEARCH() {
		await this.access_functions.peticionBackGeneral('IU_form', this.entidad, 'SEARCH')
			.then((respuesta) => {
				//limpiar el formulario
				this.cargar_formulario();
				//poner el div del formulario no visible
				document.getElementById("div_IU_form").style.display = 'none';

				//quito los class de la muestra de filas
				document.getElementById('muestradatostabla').removeAttribute('class'); //Elimina la clase RECORDSET_VACIO 


				this.datos = respuesta['resource'];
				this.atributos = Object.keys(respuesta['criteriosbusqueda']);

				this.crearTablaDatos();

				setLang();
			});
	}

	//done
	async ADD() {
		await this.access_functions.peticionBackGeneral('IU_form', this.entidad, 'ADD')
			.then((respuesta) => {
				this.actuarRespuesta(respuesta);
			});
	}

	//done
	async DELETE() {
		await this.access_functions.peticionBackGeneral('IU_form', this.entidad, 'DELETE')
			.then((respuesta) => {
				this.actuarRespuesta(respuesta);
			});
	}

	//done
	async EDIT() {
		await this.access_functions.peticionBackGeneral('IU_form', this.entidad, 'EDIT')
			.then((respuesta) => {
				this.actuarRespuesta(respuesta);
			});
	}


	/* Metodos auxiliares llamadas al back*/

	//done
	actuarRespuesta(respuesta) {
		if (respuesta['ok']) {
			//limpiar el formulario, necesario para que mande un form vacio al search
			this.cargar_formulario();
			//poner el div del formulario no visible
			document.getElementById("div_IU_form").style.display = 'none';
			this.SEARCH();
		}
		else {
			// mostrar mensaje error accion usando modal
			this.abrirModalError(respuesta['code']);
		}
	}
}
