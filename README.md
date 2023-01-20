# Prueba técnica ReactJS -> ConsultR
Germán Altairac, 2023

## Introducción
El objetivo fue la reproducción del contenido encontrado en el [material de referencia](https://projects.invisionapp.com/share/M8WXIZZE7PV#/screens), haciendo uso de ReactJS. No utilicé librerías externas ni componentes prearmados, incluyendo Redux. El unico paquete npm instalado fue un linter, por conveniencia.

## Instalación

Instalar las dependencias con ```npm install``` en la carpeta raíz, ejecutarlo vía ```npm start```.

## Consideraciones

1. La carga de las imágenes es lazy, dada la cantidad de elementos que había que visualizar. Para llevar a cabo esta feature opté por usar un hook personalizado, tomando conceptos de [este recurso online](https://frontend-digest.com/progressively-loading-images-in-react-107cb075417a).
2. Opté por incluir un skeleton en tiempo de carga del elemento, aunque gracias a la carga lazy minimicé el tiempo de respuesta y generalmente no se llega a visualizar la carga.
3. No ví que estuvieran indicadas las dimensiones de las cards, así que opté por setear valores fijos para garantizar la consistencia de comportamiento con el material de referencia.
4. La API contaba con más endpoints y traía mas información, pero entiendo que su uso ya estaría fuera del alcance.
5. Opté por incluir la barra de header que estaba en el ejemplo. No sé si era necesario agregarla.