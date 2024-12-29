class constructor_validaciones {

    constructor(estructura, that) {
        this.def_test = estructura;
        this.that = that;
    }

    check(id, accion) {
        if (accion == "EDIT" && document.getElementById(id).tagName == "INPUT" && document.getElementById(id).type == "file" && document.getElementById(id).files.length == 0) return true;
        let strut = eval("this.def_test['" + accion + "']." + id);
        for (let test in strut) {
            if (strut[test].especial) {
                if (!this.that.validacionesespeciales(id, strut[test].valor)) {
                    this.that.mostrar_error_campo(id, strut[test].codigo);
                    return strut[test].codigo;
                }
            } else {
                if (eval('! this.that.validaciones.' + test + '("' + id + '",`' + strut[test].valor + '`)')) {
                    this.that.mostrar_error_campo(id, strut[test].codigo);
                    return strut[test].codigo;
                }
            }
        }
        this.that.mostrar_exito_campo(id);
        return true;
    }

    check_submit(accion) {
        let result = true;
        for (let id in this.def_test[accion]) {
            result = this.check(id, accion) == true && result;
        }
        return result;
    }
}