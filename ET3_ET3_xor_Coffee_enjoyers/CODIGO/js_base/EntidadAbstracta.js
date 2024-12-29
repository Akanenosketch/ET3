class EntidadAbstracta extends DOM_class {

	//done
	constructor() {
		super();
	}

	//done NO
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
		this.constructor_validaciones = new constructor_validaciones(eval("this.def_test_" + this.entidad),this);
		this.colocador_valores = new colocador_valores(eval("this.def_html_" + this.entidad),this);

		this.cerrar_test()
		this.SEARCH();
	}


	createForm(accion, parametros) {
		//Recrear el formulario limpio
		this.cargar_formulario(accion);
		// poner titulo al formulario
		this.ponerTituloForm(accion);
		//Elimina campos no necesarios
		this.eliminarCamposForm(accion);
		//Muestra los valores actuales del formulario
		this.mostrarAtributosForm(accion, parametros);
		//Colocar Validaciones
		this.colocarvalidaciones(accion);
		//pone a readonly lo necesario
		this.ponernoactivo(accion);
		//Añadir boton para submit
		this.colocarboton(accion);
		//Poner onsubmit y action al formulario
		this.colocarOnSubmitForm(accion);
		this.colocarActionForm(accion);
		// pongo visible el formulario
		this.mostrarForm();
		setLang();
	}


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
		document.getElementById("IU_form").innerHTML = ''; //limpia el form
		this.constructor_form.crearForm();
		if (accion == "SEARCH") this.constructor_form.SearchPH(); //cambia las classes 
	}

	//done
	ponerTituloForm(accion) {
		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_' + this.entidad + '_' + accion;
	}

	//done
	eliminarCamposForm(accion) {
		if (eval(this.eliminarCamposForm_html)) { //si existe, en clase entidad
			this.eliminarCamposForm_html(accion);
		}
		else { //siempre existira
			this.eliminarCamposForm_dinamico(accion);
		}
	}

	//done
	eliminarCamposForm_dinamico(accion) {
		this.constructor_form.eliminarCampos(accion);
	}

	//done
	mostrarAtributosForm(accion, parametros) { //borrar el de clase entidad
		if (accion == "SHOWCURRENT" || accion == "DELETE" || accion == "EDIT") {
			this.colocador_valores.colocarValoresForm(parametros);
		}
	}


	//done
	colocarvalidaciones(accion) {
		if (accion != "DELETE" && accion != "SHOWCURRENT") {
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
				document.getElementById(campos[i].id).setAttribute(evento, 'validar.comprobar("' + campos[i].id + '","' + accion + '");');
			}
		}
	}

	//done
	comprobar(id,accion){
		return this.constructor_validaciones.check(id,accion);
	}

	//done
	ponernoactivo(accion) {
		this.constructor_form.ponernoactivoform(accion);
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


	//done
	colocarOnSubmitForm(accion) {
		switch (accion) {
			case 'EDIT':
			case 'ADD':
			case 'SEARCH':
				document.getElementById("IU_form").setAttribute('onsubmit', 'return validar.comprobar_submit("'+accion+'");');
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
	comprobar_submit(accion){
		return this.constructor_validaciones.check_submit(accion);
	}

	//done
	colocarActionForm(accion) {
		if (accion != "SHOWCURRENT") document.getElementById("IU_form").setAttribute('action', "javascript:validar." + accion + "();");
	}

	//done
	mostrarForm() {
		document.getElementById("div_IU_form").style.display = 'block';
	}


	/*Accesos al back */

	//done
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
