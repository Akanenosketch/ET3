class validacionesatomicas {

	constructor() { }

	min_size(id, minsize) {
		return this.evaluar_tam(id, minsize, false);
	}

	max_size(id, maxsize) {
		return this.evaluar_tam(id, maxsize, true);
	}

	format(id, expreg) {
		let valor = document.getElementById(id).value;
		return this.evaluar_regex(valor, expreg);
	}

	max_size_file(id, maxsize) {
		return document.getElementById(id).files[0].size < maxsize;
	}

	type_file(id, array_tipos) {
		return array_tipos.includes(document.getElementById(id).files[0].type);
	}

	format_name_file(id, expreg) {
		let valor = document.getElementById(id).files[0].name;
		return this.evaluar_regex(valor, expreg);
	}

	//Metodos auxiliares
	evaluar_regex(valor, expreg) {
		let expresionregular = new RegExp(expreg);
		return expresionregular.test(valor);
	}

	evaluar_tam(id, parametro, mayor) {
		let elemento = document.getElementById(id);
		switch (elemento.tagName) {
			case 'INPUT':
			case 'TEXTAREA':
				switch (elemento.type) {
					case "number":
					case "date":
					case "password":
					case "text":
					case 'textarea':
						let valorelemento = elemento.value;
						return mayor ? valorelemento.length <= parametro : valorelemento.length >= parametro;
					case 'file':
						let valorNameFile = elemento.files[0].name;
						return mayor ? valorNameFile.length <= parametro : valorNameFile.length >= parametro;
					default:
						break;
				}
				break;
			default:
				break;
		}
	}
}
