class analysis_preparation extends EntidadAbstracta { //Cambiar par que herede de estreuctura y estructura de Entidad?


	constructor() { //mantener,tal vez mover columnas y datos especiales a estructura
		super();
		this.entidad = 'analysis_preparation';
		this.columnasamostrar = Array("id_analysis_preparation", "name_analysis_preparation", "file_analysis_preparation");
		this.datosespecialestabla = Array("file_analysis_preparation"); //esto era muestra especial creo
		this.inicializar();
	}


	//Creacion del formulario

//mantener
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
	


	//CREATE FORMS, mover a entidad abstracta en 1


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

	eliminarCamposForm(accion) { //mover a entidad dinamico, que lea lo que eliminar de la struct (o directamente que no se cree? si se crea todo borrar, si se crean partes no)
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

	

	ponerEditAReadonly() { //poner en entidad y dinamicamente segun sean PK
		document.getElementById('file_analysis_preparation').setAttribute('readonly', true);
		document.getElementById('id_analysis_preparation').setAttribute('readonly', true);
		//las comprobaciones en onblur no son necesarias al ser readonly
		document.getElementById('file_analysis_preparation').removeAttribute('onblur');
		document.getElementById('id_analysis_preparation').removeAttribute('onblur');

	}

	mostrarAtributosForm(parametros) { //mantener
		this.rellenarvaloresform(parametros);
		// añado el nombre de fichero a la ruta de href que tengo en el hiperenlace del fichero
		document.getElementById('link_file_analysis_preparation').href += parametros.file_analysis_preparation;
	}

	

	

	
}