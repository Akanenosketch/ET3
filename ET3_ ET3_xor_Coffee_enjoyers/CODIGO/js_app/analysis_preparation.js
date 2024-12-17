class analysis_preparation extends EntidadAbstracta {

	constructor() {
		super();
		this.entidad = 'analysis_preparation';
		this.columnasamostrar = Array("id_analysis_preparation", "name_analysis_preparation", "file_analysis_preparation");
		this.datosespecialestabla = Array("file_analysis_preparation");
		this.inicializar();
	}


	//Creacion del formulario


	cargar_formulario_html() {
		// atributo creado para distinguir en comprobar_atributo() entre venir de ADD o EDIT
		let formulario = `
			<label id="label_id_analysis_preparation" class="label_id_analysis_preparation" for="id_analysis_preparation">id_analysis_preparation</label>
			<input type='text' id='id_analysis_preparation' name='id_analysis_preparation' size="11"></input>
			<span id="div_error_id_analysis_preparation"><a id="error_id_analysis_preparation"></a></span>
			
			<br>
			<br>

			<label id="label_name_analysis_preparation" class="label_name_analysis_preparation" for="name_analysis_preparation">name_analysis_preparation</label>
			<input type='text' id='name_analysis_preparation' name='name_analysis_preparation' size="100"></input>
			<span id="div_error_name_analysis_preparation"><a id="error_name_analysis_preparation"></a></span>
					
			<br>
			<br>
			
			<label id="label_bib_analysis_preparation" class="label_bib_analysis_preparation" for="bib_analysis_preparation">bib_analysis_preparation</label>
			<textarea type='text' id='bib_analysis_preparation' name='bib_analysis_preparation' cols="50" rows="4"></textarea>
			<span id="div_error_bib_analysis_preparation"><a id="error_bib_analysis_preparation"></a></span>
			
			<br>
			<br>

			<label id="label_description_analysis_preparation" class="label_description_analysis_preparation" for="description_analysis_preparation">description_analysis_preparation</label>
			<textarea rows="50" cols="100" type='text' id='description_analysis_preparation' name='description_analysis_preparation'></textarea>
			<span id="div_error_description_analysis_preparation"><a id="error_description_analysis_preparation"></a></span>
			
			<br>
			<br>

			<label id="label_file_analysis_preparation" class="label_file_analysis_preparation" for="file_analysis_preparation">file_analysis_preparation</label>
			<input type='text' id='file_analysis_preparation' name='file_analysis_preparation' size="100"></input>
			<span id="div_error_file_analysis_preparation"><a id="error_file_analysis_preparation"></a></span>			
			<a id="link_file_analysis_preparation" href="http://193.147.87.202/ET2/filesuploaded/files_file_analysis_preparation/"><img src="./iconos/FILE.png" /></a>
				
			<br>
			<br>

			<label id="label_nuevo_file_analysis_preparation" class="label_nuevo_file_analysis_preparation" for="nuevo_file_analysis_preparation">Nueva file_analysis_preparation</label>
			<input type='file' id='nuevo_file_analysis_preparation' name='nuevo_file_analysis_preparation'></input>
			<span id="div_error_nuevo_file_analysis_preparation"><a id="error_nuevo_file_analysis_preparation"></a></span>

		
			<br>
			<br>
			<br>
		`;
		document.getElementById("IU_form").innerHTML = formulario;
	}


	//CREATE FORMS


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
		this.traducirForm("ADD");
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
		this.traducirForm("SEARCH");
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
		this.traducirForm("EDIT");
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
		this.traducirForm("DELETE");
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
		this.traducirForm("SHOWCURRENT");
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


	//COMPROBACIONES


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
	//metodo para mostrar información especial de atributo en la tabla de muestra de tuplas
	cambiardatosespecialestabla(atributo, valoratributo) {
		if (atributo == 'file_analysis_preparation') {
			if (valoratributo == '') return  `<a class="no_file_found"></a>`; //por definicion de la entidad, debe haber fichero
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

	eliminarCamposForm(accion) {
		switch (accion) {
			case 'ADD':
				//Ficheros
				document.getElementById('label_file_analysis_preparation').remove();
				document.getElementById('file_analysis_preparation').remove();
				document.getElementById('link_file_analysis_preparation').remove();
				document.getElementById('div_error_file_analysis_preparation').remove();

				//Autoincremental
				document.getElementById('label_id_analysis_preparation').remove();
				document.getElementById('id_analysis_preparation').remove();
				document.getElementById('div_error_id_analysis_preparation').remove();
				break;
			case 'SEARCH':
				document.getElementById('label_nuevo_file_analysis_preparation').remove();
				document.getElementById('nuevo_file_analysis_preparation').remove();
				document.getElementById('div_error_nuevo_file_analysis_preparation').remove();
				document.getElementById('link_file_analysis_preparation').remove();
				break;
			case 'DELETE':
			case 'SHOWCURRENT':
				document.getElementById('label_nuevo_file_analysis_preparation').remove();
				document.getElementById('nuevo_file_analysis_preparation').remove();
				document.getElementById('div_error_nuevo_file_analysis_preparation').remove();
				break;
			case 'EDIT':
			default:
				break;
		}
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

	arreglarTraducciones() {
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
				this.arreglarTraducciones();
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

	ponerEditAReadonly() {
		document.getElementById('file_analysis_preparation').setAttribute('readonly', true);
		document.getElementById('id_analysis_preparation').setAttribute('readonly', true);
		//las comprobaciones en onblur no son necesarias al ser readonly
		document.getElementById('file_analysis_preparation').removeAttribute('onblur');
		document.getElementById('id_analysis_preparation').removeAttribute('onblur');

	}

	mostrarAtributosForm(parametros) {
		this.rellenarvaloresform(parametros);
		// añado el nombre de fichero a la ruta de href que tengo en el hiperenlace del fichero
		document.getElementById('link_file_analysis_preparation').href += parametros.file_analysis_preparation;
	}

	check_atributo(id, minsize, maxsize, regex) {
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