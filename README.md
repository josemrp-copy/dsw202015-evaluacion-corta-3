# Aplicación de Patrones de Diseño

## Enunciado

### Contexto

En un sistema en funcionamiento disponemos de una clase IMPRESORA capaz de gestionar una impresora. Entre las características de esta clase, se encuentran las siguientes operaciones:

* **obtenerTrabajosEnCola**: obtiene la cantidad de trabajos (número entero positivo) encolados que deben ser impresos
* **pausarImpresion**: obtiene un estado (booleano) de encendido o apagado
* **estaImprimiendo**: permite conocer si se esta imprimiendo un trabajo, que anteriormente haya estado encolado.
* **obtenerTrabajoParaImprimir**: obtiene el trabajo proximo a ser impreso.

Se desea entonces, elaborar un Sistema de Impresion capaz de permitir que 1 o mas Impresoras puedan unirse, permitiendo procesar de forma ordenada la cola de impresión definida en cada Impresora hasta haber procesado la totalidad de trabajos. En el preciso instante que el sistema comience a procesar la impresion de cada trabajo, el resto de las impresoras deben pausar su trabajo, para evitar un colapso en las bandejas de impresion a donde se envia cada trabajo impreso en papel. 

### Requerimientos

1. Implementar una solución que adopte 1 o mas patrones de diseño para cumplir con las funcionalidades del sistema mencionado arriba. Indicar el o los patrones adoptados.
2. Modelar en un diagrama de clases y de secuencia los componentes necesarios para dar soporte al punto 1.
3. Presentar la implementacion, en el lenguaje de su preferencia, la implementación para el diseño expuesto en los puntos 1 y 2.
 

### Método de Entrega

1. URL del repositorio con los artefactos mencionados en la seccion de Requerimientos.
2. Adjuntar los diagramas de clases y secuencia en el repositorio.
3. La tarea debe ser entregada en equipos de maximo 3 personas, equipos de proyectos por facilidad.
