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
				document.getElementById('muestradatostabla').removeAttribute('class');

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

	cargarClasesForm(accion) {
		if (accion == "SEARCH") {
			accion = "_SEARCH";
		} else {
			accion = "";
		}

		//obtener campos del formulario
		let campos = document.forms['IU_form'].elements;
		//recorrer todos los campos
		for (let i = 0; i < campos.length; i++) {
			//los elementos son los campos Y el boton de submit, y el boton aun no esta cargado al invocar este metodo
			document.getElementById(campos[i].id).className = "PH_" + campos[i].id + accion;
		}

	}

	arreglarTraducciones() { //modificar idioma para que esto no haga falta
		let inputs = document.getElementsByTagName('input');
		let textareas = document.getElementsByTagName('textarea');

		/*Para los inputs, la funcion de setLang les aplica 2 traducciones:
		-la de elementos con una clase en el array de Textos (innerHTML=traduccion)
		-la de inputs (placeholder=title=traduccion)
		Recorro los inputs del form para eliminar su innerHTML
		*/
		for (let i = 0; i < inputs.length; i++) {
			inputs[i].innerHTML = "";
			inputs[i].className = ""; //Eliminar class para que no se actualize mal la traduccion al haber un error
			if (inputs[i].type == "file") inputs[i].placeholder = "";
		}

		//Para los textarea, la funcion de setLang no les asigna placeholder ni title, que es lo que quiero, solo les asigna un innerHTML, que no quiero ya que se tomaria como valor
		for (let i = 0; i < textareas.length; i++) {
			textareas[i].placeholder = textareas[i].innerHTML;
			textareas[i].title = textareas[i].innerHTML;
			textareas[i].innerHTML = "";
			textareas[i].className = "";
		}
		//Elimino las clases para que no se recarguen las traducciones al saltar un error
	}

	traducirForm(accion) {
		switch (accion) {
			case 'ADD':
			case 'SEARCH':
			case 'EDIT':
				this.cargarClasesForm(accion);
				setLang();
		//		this.arreglarTraducciones();
				break;
			case 'DELETE':
			case 'SHOWCURRENT':
			default:
				setLang();
				return;
		}
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
}
