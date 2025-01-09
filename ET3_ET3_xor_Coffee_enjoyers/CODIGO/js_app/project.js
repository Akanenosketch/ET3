class project extends estructura_project {

	constructor() {
		super();
		this.columnasamostrar = Array("id_project", "name_project", "start_date_project", "end_date_project", "file_project");
		this.datosespecialestabla = Array("start_date_project", "end_date_project", "file_project");
		this.inicializar();
	}

	/*Metodos de personalizacion */

	mostrardatosespecialesForm(atributo, valoratributo) {
		if (atributo == 'start_date_project' || atributo == 'end_date_project') {
			document.getElementById(atributo).value = this.cambiardatosespecialestabla(atributo, valoratributo);
		}
	}

	//metodo para mostrar información especial de atributo en la tabla de muestra de tuplas
	cambiardatosespecialestabla(atributo, valoratributo,i) {
		if (atributo == 'file_project') {
			if (valoratributo == '') return `<a class="no_file_found"></a>`;
	
			let texto = valoratributo;
			texto += `<a id="link_file_project_`;
			texto += i; // Para evitar ids duplicados
			texto += `" href="http://193.147.87.202/ET2/filesuploaded/files_file_project/`;
			texto += valoratributo;
			texto += `" target="_blank">`; // Abre el archivo en una nueva pestaña.
			texto += `<img id="botonFILE`+i+`" src="./iconos/FILE.png"`
			texto += `onmouseover="changeImageOnHover(true,'FILE','`+i+`');"`
			texto +=`onmouseout="changeImageOnHover(false, 'FILE','`+i+`');"`
			texto += `/></a>`;
				return texto;
		}
	
		if (atributo == 'start_date_project' || atributo == 'end_date_project') {
			let fech = valoratributo.split('-');
			let fechaformateada = fech[2] + '/' + fech[1] + '/' + fech[0];
			return fechaformateada;
		}
	}
	

	validacionesespeciales(atributo, prueba) {
		if (atributo == 'nuevo_file_project') {
			if (prueba == 'empty') return document.getElementById(atributo).files.length != 0;
		}


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

	/*Metodos auxiliares de validaciones especiales*/
	fechaValida(fecha) {
		let fechaf = fecha.split("/");
		let year = parseInt(fechaf[2]);
		if (year == 0) return false; //En el calendario gregoriano no hay año 0
		let month = parseInt(fechaf[1]);
		if(month < 0 || month > 12) return false;
		let bisiesto = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) ? 29:28;
		let days = [31,bisiesto,31,30,31,30,31,31,30,31,30,31];
		let day = parseInt(fechaf[0]);
		return day > 0 && day <= days[month-1];
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
}