<img align="right" width="179" height="118" alt="ISDI CODER LOGO" src="/dist/assets/isdi_logo_hq.jpg">

# :zap: Challenge Week 11 Xmas

## Robots

Crear un frontend en React que permita al usuario gestionar un listado con sus robots.
Crea una home page inicial y un menu que navegue entre la home y los robots. La página inicial algún logo junto con el número de robots disponibles.
El estado y su lógica debe estar en un **_Custom Hook_**. Opcionalmente puedes llevar su instancia a un Contexto.
El usuario debe poder listar, crear, modificar y borrar robots (CRUD).
Cada robot debe mostrar un nombre, una imagen (la puedes conseguir en el API de https://robohash.org) y unas características:

-   Velocidad (0-10)
-   Resistencia (0-10)
-   Fecha de creación
-   Usuario que crea el robot

Los datos deben de tener persistencia en **_JSON-Server_**. Crea un servicio/repository para abstraer las interacciones con tu API. Utiliza para ello clases de TS.

## Requisitos

-   [x] Testea todo lo posible al terminar cada componente o elemento. Cuidado: te falta testing.
-   [x] Mejora el CSS. Estaría muy bien que lo hicieras con BEM y SASS.
-   [x] Cuida el valor semántico del HTML y valídalo.
-   [x] Incluye las Actions de Audit y testing/Sonar.
-   [x] Protege la rama main de Github y obliga que se cumplan las actions para poder mergear las PR. Trabaja con ramas cortas (unos pocos commits). Cuida especialmente los mensajes de los commits.
-   [x] Volviendo al testing: haz que se recoja en Sonar y trata de llegar al **\_100% de coverage**\_

## Extras

-   [x] Crea una página de favoritos para los robots que seleccione el usuario.
-   [x] Crea una página de detalle para los robots. Puedes añadir al modelo la información que se te ocurra para mostrarla en esta página.

## Resultado

https://patricia-challenge-w11-xmas.netlify.app/

https://sonarcloud.io/summary/overall?id=patifusa-20_202212-W11-xmas-patricia-rufino

## Tecnologías usadas

![Logos of used technologies](/dist/assets/tech_logos_v2.jpg)
