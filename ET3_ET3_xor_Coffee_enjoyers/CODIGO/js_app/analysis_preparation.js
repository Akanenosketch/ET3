class analysis_preparation extends estructura_analysis_preparation {

	//done
	constructor() {
		super();
		this.columnasamostrar = Array("id_analysis_preparation", "name_analysis_preparation", "file_analysis_preparation");
		this.datosespecialestabla = Array("file_analysis_preparation");
		this.inicializar();
	}


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

	validacionesespeciales(atributo, prueba) {
		if (atributo == 'nuevo_file_analysis_preparation') {
			if (prueba == 'empty') return document.getElementById(atributo).files.length != 0;

		}
	}
}