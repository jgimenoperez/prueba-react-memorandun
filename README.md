# Proyecto creado con npx create-react-app

## Poner el proyecto en marcha

Acceder a la carpeta del proyecto y ejecutar
### `npm install`
### `npm start`

Ejecuta la aplicación en modo de desarrollo.
Abre http://localhost:3000 para verla en tu navegador.

### Comentarios sobre el proyecto.
He utilizado create-react por comodidad ya que tenia mi equipo configurado con esta herramienta si no hubiera utilizado vite.

He utilizado css sin nigún tipo de framework o libreria por hacerlo lo mas simple posible.
En las pruebas entiendo que tiene que primar las bases.

Con mas tiempo añadiria navegación por menus entre las diferentes paginas.
Carga de una pelicula/serie a través de parametros.
Trataria de aumentar la legibilidad del codigo separando la logica en useHooks.
Mejoraria el diseño visual.
Realizar test unitarios con jest.
Añadiria controles sobre los filtros de tal manera que si no hay nada seleccionado mostraria unos valores por defecto.

### Comentarios sobre el proyecto.
El proyecto carga las peliculas y las series realizando un fetch directamente sobre el json.
Utilizo el mismo comoponente parametrizado ya que la funcionalidad es la misma para cargar tanto peliculas como series.
Se pueden filtrar los datos por año 
Se pueden mostrar un numero determinado de items.
No he creido conveniente usar REDUX ya que no considero que haya un estado global a mantener.



