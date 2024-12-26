let def_tests_characteristic = Array(
    //Formato test:Array(Entidad,Campo,Numero Test,Descripcion, Accion, Resultado esperado, Mensaje Respuesta)
    //codigo respuesta = entidad__campo__tipoTest_resultado


    //Campo = `id_analysis_preparation` int(11) NOT NULL AUTOINCREMENT, dígitos min 1 max 11
    //Autoincrementable = no se va a comprobar en el add, se comprobara en el edit aunque no hace falta ya que el usuario no puede modificar salvo mediante consola el valor (que ya deberia ser correcto) y se comprobara en el search

    //SEARCH
  

    //Campo = `name_analysis_preparation` varchar(100) NOT NULL UNIQUE,  alfabéticos y espacios sin acentos ni ñ, min 8 max 100

    //ADD


    //EDIT


    //SEARCH
 

    //Campo = `description_analysis_preparation` varchar(5000) NOT NULL,  alfabéticos y espacios sin acentos ni ñ, min 80 max 5000

    //ADD
 

    //EDIT
 

    //SEARCH
 

    //Campo = `bib_analysis_preparation` varchar(200) NOT NULL,  alfabéticos con acentos, ñ, espacios y signos de puntuación, min 6 max 200
   
    //ADD

    
    //EDIT

    
    //SEARCH


    //Campo = `file_analysis_preparation` varchar(100) NOT NULL,  alfabéticos sin acentos ni ñ ni espacios min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 2000000 bytes.
    //No se lee en el ADD, readonly en EDIT
 
    //SEARCH


    //Campo = `nuevo_file_analysis_preparation` varchar(100) NOT NULL,  alfabéticos sin acentos ni ñ ni espacios min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 2000000 bytes.
    //No se lee en el SEARCH

    //ADD

    
    //EDIT
);

let pruebas_characteristic = Array(
    
    //Formato test:Array(Entidad,Campo,Numero Test,Numero Prueba, Accion,Valor, Mensaje Respuesta)
    //Campo = `id_analysis_preparation` int(11) NOT NULL AUTOINCREMENT, dígitos min 1 max 11
    //Autoincrementable = no se va a comprobar en el add, se comprobara en el edit aunque no hace falta ya que el usuario no puede modificar salvo mediante consola el valor (que ya deberia ser correcto) y se comprobara en el search

    //SEARCH
    

    //Campo = `name_analysis_preparation` varchar(100) NOT NULL UNIQUE,  alfabéticos y espacios sin acentos ni ñ, min 8 max 100

    //ADD
        

    //EDIT
    

    //SEARCH
    

    //Campo = `description_analysis_preparation` varchar(5000) NOT NULL,  alfabéticos y espacios sin acentos ni ñ, min 80 max 5000

    //ADD
    
    //EDIT
    
    //SEARCH
    

    //Campo = `bib_analysis_preparation` varchar(200) NOT NULL,  alfabéticos con acentos, ñ, espacios y signos de puntuación, min 6 max 200
   
    //ADD
    

    //EDIT
        
    //SEARCH
    

    //Campo = `file_analysis_preparation` varchar(100) NOT NULL,  alfabéticos sin acentos ni ñ ni espacios min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 2000000 bytes.
    //No se lee en el ADD, readonly en EDIT
 
    //SEARCH
    
);

let pruebas_file_characteristic = Array(
    
    //Formato test:Array(Entidad,Campo,Numero Test,Numero Prueba, Accion,parametro a probar,Valor, Mensaje Respuesta)
    //Campo = `nuevo_file_analysis_preparation` varchar(100) NOT NULL,  alfabéticos sin acentos ni ñ ni espacios min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 2000000 bytes.
    //No se lee en el SEARCH

    //ADD
      
    
    //EDIT
    
);