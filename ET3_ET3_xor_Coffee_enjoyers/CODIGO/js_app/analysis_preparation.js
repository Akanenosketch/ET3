class analysis_preparation extends estructura_analysis_preparation {

	constructor() {
		super();
		this.columnasamostrar = Array("id_analysis_preparation", "name_analysis_preparation", "file_analysis_preparation");
		this.datosespecialestabla = Array("file_analysis_preparation");
		this.inicializar();
	}

	/*Metodos de personalizacion */

	//metodo para mostrar información especial de atributo en la tabla de muestra de tuplas
	/*cambiardatosespecialestabla(atributo, valoratributo) {
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
	}*/

	cambiardatosespecialestabla(atributo, valoratributo) {
		if (atributo === 'file_analysis_preparation') {
			if (valoratributo === '') return `<a class="no_file_found"></a>`; // Por definición de la entidad, debe haber fichero.
	
			let texto = valoratributo;
			texto += `<a id="link_file_analysis_preparation_`;
			texto += valoratributo; // Para evitar IDs duplicados.
			texto += `" href="http://193.147.87.202/ET2/filesuploaded/files_file_analysis_preparation/`;
			texto += valoratributo;
			texto += `" target="_blank">`; // Abre el archivo en una nueva pestaña.
			texto += `<img src="./iconos/FILE.png" /></a>`;
			return texto;
		}
	}
	

	validacionesespeciales(atributo, prueba) {
		if (atributo == 'nuevo_file_analysis_preparation') {
			if (prueba == 'empty') return document.getElementById(atributo).files.length != 0;
		}
	}
}