# countries-test Claudio Gutiérrez. 
REST  API consume interface for seaching and filtering countries and seeing their details. 
The technologies used are ReactJS and SASS.
# How to Run 
Like almost every React App, the way to execute the code is by npm package manager. 
```
npm install 
npm start
```
#Arquitectura y generalidades. 
La aplicación tiene una estructura basada en componentes como suele verse en React.
Header - Que contiene el título de la página "Where in the world?", y el botón para cambiar los atributos de SCSS, activando así el Darkmode. 
Card y Cardlist - La estructura de presentación de los paises con su información relevante y su disposición en grid para la visualización general. 
Dropdown - función de filtrado por continentes. 
Searchbox - Input de tipo texto para el filtrado de paises exclusivamente por nombre. 
Se utilizan dos páginas fundamentales, el home y el detalle de cada país al hacer click.
La aplicación tiene limitaciones en el responsive en resoluciones mobile. 
Para ver la lista de países al montar el proyecto entramos por medio de localhost:3000/countries/ 
Desarrollada como technical test. 
