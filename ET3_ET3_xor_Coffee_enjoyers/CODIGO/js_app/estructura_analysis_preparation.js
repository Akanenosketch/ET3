class estructura_analysis_preparation extends EntidadAbstracta {

    constructor() {
        super();
        this.entidad = 'analysis_preparation';
		
        this.def_html_analysis_preparation = {
            atributos: ["id_analysis_preparation", "name_analysis_preparation", "bib_analysis_preparation", "description_analysis_preparation", "file_analysis_preparation"],
    
            "id_analysis_preparation": {
                tag: "INPUT",
                type: "text",
                esPK: true,
                esAutoIncremental: true,
                esEspecial: false,
                size: 11
            },
    
            "name_analysis_preparation": {
                tag: "INPUT",
                type: "text",
                esPK: false,
                esAutoIncremental: false,
                esEspecial: false,
                size: 100
            },
    
            "bib_analysis_preparation": {
                tag: "TEXTAREA",
                esPK: false,
                esAutoIncremental: false,
                esEspecial: false,
                rows: 4,
                cols: 50
            },
    
            "description_analysis_preparation": {
                tag: "TEXTAREA",
                esPK: false,
                esAutoIncremental: false,
                esEspecial: false,
                rows: 50,
                cols: 100
            },
    
            "file_analysis_preparation": {
                tag: "INPUT",
                type: "file",
                esPK: false,
                esAutoIncremental: false,
                esEspecial: true,
                size: 100
            }
        };
    
    }



}