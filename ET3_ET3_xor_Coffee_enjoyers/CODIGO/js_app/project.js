class project extends EntidadAbstracta {

	constructor() {
		super();
		this.entidad = 'project';
		this.columnasamostrar = Array("id_project", "name_project", "start_date_project", "end_date_project", "file_project");
		this.datosespecialestabla = Array("start_date_project", "end_date_project", "file_project");
		this.inicializar();
	}


	//Creacion del formulario


	cargar_formulario_html() {
		// atributo creado para distinguir en comprobar_atributo() entre venir de ADD o EDIT
		let formulario = `
			<label id="label_id_project" class="label_id_project" for="id_project">id_project</label>
			<input type="text" id="id_project" name="id_project" size="11"></input>
			<span id="div_error_id_project"><a id="error_id_project"></a></span>
			
			<br>
			<br>

			<label id="label_name_project" class="label_name_project" for="name_project">name_project</label>
			<input type="text" id="name_project" name="name_project" size="100"></input>
			<span id="div_error_name_project"><a id="error_name_project"></a></span>
					
			<br>
			<br>

			<label id="label_start_date_project" class="label_start_date_project" for="start_date_project">start_date_project</label>
			<input type="text" id="start_date_project" name="start_date_project" size="10"></input>
			<span id="div_error_start_date_project" ><a id="error_start_date_project"></a></span>
					
			<br>
			<br>

			<label id="label_end_date_project" class="label_end_date_project" for="end_date_project">end_date_project</label>
			<input type="text" id="end_date_project" name="end_date_project" size="10"></input>
			<span id="div_error_end_date_project" ><a id="error_end_date_project"></a></span>
			
			<br>
			<br>

			<label id="label_responsable_project" class="label_responsable_project" for="responsable_project">responsable_project</label>
			<input type="text" id="responsable_project" name="responsable_project" size="60"></input>
			<span id="div_error_responsable_project"><a id="error_responsable_project"></a></span>
			
			<br>
			<br>
	
			<label id="label_organization_project" class="label_organization_project" for="organization_project">organization_project</label>
			<input type="text" id="organization_project" name="organization_project" size="100"></input>
			<span id="div_error_organization_project"><a id="error_organization_project"></a></span>
			
			<br>
			<br>

			<label id="label_code_project" class="label_code_project" for="code_project">code_project</label>
			<input type="text" id="code_project" name="code_project" size="50"></input>
			<span id="div_error_code_project"><a id="error_code_project"></a></span>
			
			<br>
			<br>

			<label id="label_acronym_project" class="label_acronym_project" for="acronym_project">acronym_project</label>
			<input type="text" id="acronym_project" name="acronym_project" size="15"></input>
			<span id="div_error_acronym_project"><a id="error_acronym_project"></a></span>
				
			<br>
			<br>

			<label id="label_id_sampling_methodology" class="label_id_sampling_methodology" for="id_sampling_methodology">id_sampling_methodology</label>
			<input type="text" id="id_sampling_methodology" name="id_sampling_methodology" size="11"></input>
			<span id="div_error_id_sampling_methodology" ><a id="error_id_sampling_methodology"></a></span>
						
			<br>
			<br>
			
			<label id="label_description_project" class="label_description_project" for="description_project">description_project</label>
			<textarea rows="5" cols="100" type="text" id="description_project" name="description_project"></textarea>
			<span id="div_error_description_project"><a id="error_description_project"></a></span>
			
			<br>
			<br>

			<label id="label_file_project" class="label_file_project" for="file_project">file_project</label>
			<input type="text" id="file_project" name="file_project" size="100"></input>
			<a id="link_file_project" href="http://193.147.87.202/ET2/filesuploaded/files_file_project/"><img src="./iconos/FILE.png" /></a>
			<span id="div_error_file_project"><a id="error_file_project"></a></span>
			
			<br>
			<br>

			<label id="label_nuevo_file_project" class="label_nuevo_file_project" for="nuevo_file_project">Nueva file_project</label>
			<input type="file" id="nuevo_file_project" name="nuevo_file_project"></input>
			<span id="div_error_nuevo_file_project"><a id="error_nuevo_file_project"></a></span>
			
		
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
		switch (month) {
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
				document.getElementById('label_file_project').remove();
				document.getElementById('file_project').remove();
				document.getElementById('link_file_project').remove();
				document.getElementById('div_error_file_project').remove();
				//Autoincremental
				document.getElementById('label_id_project').remove();
				document.getElementById('id_project').remove();
				document.getElementById('div_error_id_project').remove();
				break;
			case 'SEARCH':
				document.getElementById('label_nuevo_file_project').remove();
				document.getElementById('nuevo_file_project').remove();
				document.getElementById('div_error_nuevo_file_project').remove();
				document.getElementById('link_file_project').remove();
				break;
			case 'DELETE':
			case 'SHOWCURRENT':
				document.getElementById('label_nuevo_file_project').remove();
				document.getElementById('nuevo_file_project').remove();
				document.getElementById('div_error_nuevo_file_project').remove();
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
			inputs[i].className = "";
			if(inputs[i].type == "file") inputs[i].placeholder="";
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

	traducirForm(accion) {//hacer por si acaso antes de rellenar valores, textarea e innerInput hacen cosas raras
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