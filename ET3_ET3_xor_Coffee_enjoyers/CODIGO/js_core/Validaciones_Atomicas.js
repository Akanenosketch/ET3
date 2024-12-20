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

	max_size_file(objfile, maxsize) {
		return objfile.size < maxsize;
	}

	type_file(objfile, array_tipos) {
		return array_tipos.includes(objfile.type);
	}

	format_name_file(objfile, expreg) {
		let valor = objfile.name;
		return this.evaluar_regex(valor, expreg);
	}

	//Metodos auxiliares
	evaluar_regex(valor, expreg) {
		let expresionregular = new RegExp(expreg);
		return expresionregular.test(valor);
	}

	evaluar_tam(id, parametro, mayor) {
		let elemento = document.getElementById(id);
		switch (elemento.tagName) { //permitir comprobar no solo input y textarea por si acaso
			case 'INPUT':
			case 'TEXTAREA':
				switch (elemento.type) {
					case 'text':
					case 'number':
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
