# ET3
 Un repositorio para la ET3


### Estructura (archivos con check se presume estan en su version final):

#### css

- [ ] IU.css 

#### iconos

- [x] Acciones: Add,delete,edit,search,showcurrent,test 

- [X] Para forms: back,file 

- [ ] Para el index: añadir al menos 2 mas para API y estructuras 

#### js_app

- [ ] estructura_analisis.js  
 
- [ ] analisis 

- [ ] estructura_project.js

- [ ] project 

- [ ] estructura_characteristic.js
 
- [ ] characteristic 

- [x] test_analisis 
 
- [ ] test_project 
 
- [ ] test_characteristic 

- [ ] Textos_ES 
 
- [ ] Textos_EN 
 
- [ ] 3 clases a mayores 
	
#### js_base

- [ ] EntidadAbstracta 

#### js_core

- [ ] DOM_class [ ]
 
- [x] ExternalAccess (NO TOCAR)

- [ ] Test_class [ ]
  
- [ ] Validaciones [ ]
 
#### Locale

- [X] idioma.js (posiblemente necesite actualizarse para radio y checkbox y select)

#### Otros

- [ ] index.html

- [x] ET3_Datos_NombreGrupo.js (falta poner las horas)

- [ ] estructuras.html 

- [ ] API.html 

### TODO LIST

- Preparar estructura def_html_nombreentidad

- Preparar estructura def_test_nombreentidad

- Poner placeholders en el indice para lo que meta de prueba nuevo rodeiro

- Reorganizar arbol de clases para meter lo nuevo

- Implementar createForm() en EntidadAbstracta

- Refactorizar entidades ET2, mover metodos a EntidadAbstracta

- Que se pueda meter cualquier tipo de input en los forms

- Completar Validaciones_Atomicas para cualquier input

- Revisar DOM_class

- Modificar idioma.js para textareas, radio,select, checkbox o lo que haga falta

- Hacer tests y pruebas para lo de la fecha

- Reescribir Test class para usar lo nuevo

- Rellenar estructura_nombreentidad.js para Analisis

- Rellenar estructura_nombreentidad.js para Proyecto

- Rellenar estructura_nombreentidad.js para Characteristic

- Crear clase para construir form dinamico

- Crear clase para colocar valores

- Crear clase para crear validaciones

- Añadir characteristic a index

- Crear API.html

- Poner API.html en index

- Crear estructuras.html

- Poner estructuras.html en index

- Desarrollar characteristic 

- Desarrollar characteristic tests

- Desarrollar characteristic pruebas

- Desarrollar characteristic traducciones

- Refactorizar index.html

- HACER CSS PARA MODAL Y DEMAS

- Mostrar tests con scroll y modal

- HACER CSS PARA COLORES Y PRESENTACION

- HACER CSS PARA QUE LA TABLA NO SE SALGA DE PANTALLA

- Organizar la muestra del array de datos

- Traducir el array de datos

-Rehacer lo necesario para que use la estructura



*Enunciado : https://docs.google.com/document/d/1Kl11WnqrlurwHtuUmPAz4m8kH6adguH33vzfODUaae8/edit?tab=t.0*


~~Siguiendo la arquitectura de directorios definida en la ET2, (js_core, js_base, locale, iconos, css, index.html), colocando Validaciones_Atomicas.js y Test_Class.js en js_core, EntidadAbstracta en js_base, idioma en locale.~~

Se solicita que en un fichero estructura_nombreentidad.js en js_app se definan dos estructuras de datos que permitan rellenarlas con la información necesaria para poder generar automaticamente las tablas de presentación de información, los formularios de acciones y las validaciones de los campos de formulario. Estas estructuras serían:

variable def_html_nombreentidad que defina para una tabla la información necesaria para definir los elementos html que representan dentro de un formulario los atributos de la tabla

variable def_test_nombreentidad que defina las validaciones por acción junto con los mensajes de respuesta de error de las validaciones 

Una vez que se establezca la estructura de datos, esta debe poder rellenarse con la información necesaria para cada tabla a gestionar en la interfaz.

Utilizar la clase test para que verifique el formato de test y pruebas y ejecute todas las pruebas de test de las definiciones de test definidas para cada atributo (incluidas las de fichero) y saque su resultado en un componente modal con scroll para ser visualizado por el usuario. La acción de test debe estar disponible como en la ET2 en la parte superior del index cuando se entra en la gestión de una entidad.

Debe utilizarse la clase validacionesatomicas para la implementación de los métodos estándar de validación de campo que se indican en la definición de la ET2.

Implementar un método createForm() en la clase EntidadAbstracta (y métodos accesorios si es necesario) que, a partir de los datos de las estructuras de datos, genere los formularios de ADD, SEARCH, EDIT, DELETE y SHOWCURRENT, compruebe la información introducida en los campos del formulario y si es correcta permita realizar la llamada a BACK. Este método debe permitir que si existe un método cargar_formulario_html() en la clase de la entidad se ejecute y cargue el contenido html del formulario y si no existe se cree dinámicamente el formulario a partir de la estructura de datos con la información html de cada campo del formulario.

Debe permitirse una modificación especial del valor de presentación de un atributo en la tabla de presentación mediante un método que se declare en la clase de la entidad. 

Debe permitirse una validación especial de valores de campos que no corresponda con las estándar definidas en la ET2 que se coloque en la clase de la entidad y que pueda ser invocada en las pruebas de la entidad.

Debe hacerse los ficheros de definición de test y de pruebas para los campos de los formularios correspondiente al nuevo código desarrollado.

En general, debe permitirse en la clase entidad la personalización de la misma para poder adecuar fuera del estándar el comportamiento de la entidad.

Debe existir una clase para la construcción del formulario a partir de la estructura de datos de definición html del formulario.

Debe existir una clase para la colocación de los valores de los atributos para las acciones de EDIT, DELETE y SHOWCURRENT

Debe existir una clase para la construcción de las validaciones de campo y submit en los formularios para las acciones.

~~En la página index.html, al abrirse, debe mostrarse (no estático en html) la información de un fichero ET3_Datos_NombreGrupo.js con una variable de tipo array con el nombre def_grupo_nombreGrupo con la siguiente información (este fichero debe estar a nivel de index.html) :~~

~~Entrega,~~
~~nombre de grupo,~~
~~integrantes,~~
~~horas dedicadas por integrante,~~
~~horas totales~~


En la página index.html debe existir un icono que lleve a una página estructuras.html en donde se describan las estructuras de datos realizadas y un ejemplo de su uso. Este fichero debe estar a nivel de index.html.

En la página index.html debe existir un icono que lleve a una página API.html en donde se describen las funciones desarrolladas indicando y describiendo para cada una de ellas los parámetros que utilizan y el output que devuelven a nivel de nombre, tipo de dato y descripción. Las funciones deben estar separadas en función de si se utilizan para los test, para la tabla de presentación o para la creación de los formularios. Este fichero debe estar a nivel de index.html.

Debe existir un fichero IU.css en el directorio /css que contenga todas las reglas de estilo aplicables en el interfaz. La interfaz de las páginas web debe poder visualizarse desde 1920x1080 píxeles hasta 960×540 píxeles de forma dinámica. A partir de 960×540 píxeles debe cambiar al formato móvil de una columna con la resolución 640×480 píxeles como tamaño mínimo. El formato de index.html debe tener un encabezado, un pie de página, un icono de menú debajo de la cabecera (para mostrar las entidades que se pueden seleccioinar) y una zona de trabajo. Se mostrará en un modal los resultados de test y se mostrarán la tabla y los formularios (modales) y los mensajes de acción (modales).


Objetivos

1) Debe funcionar para cualquier tabla de una base de datos. Toda la información necesaria debe estar en las estructuras de datos definidas.

2) Deben poder definirse definiciones de test y pruebas de test para todos los campos de la tabla incluyendo los campos de tipo file.

3) ~~La realización de los test debe realizarse en index.html~~

4) Debe utilizar los códigos definidos en textos_ES y textos_EN para la información de interfaz.

5) Las acciones deben estar representadas por iconos. 

6) ~~Los datos del grupo mostrados en la página index.html debe leerse el fichero ET3_Datos_NombreGrupo.js~~

7) Debe utilizarse todo lo desarrollado para implementar los test y la gestión y acceso a BACK de las tablas analysis_preparation, project y characteristic (definida al final del documento), los cuales deben ser accesibles desde index.html.
