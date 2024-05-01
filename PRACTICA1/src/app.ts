import { Pronosticos } from "./funciones/objetos";
import { eliminarPronosticoPorId } from "./funciones/Funciones";
  
  
  console.log(Pronosticos);
 // Ejemplo de uso:
const idEliminar = 2; // ID del pronóstico a eliminar
const pronosticosFiltrados = eliminarPronosticoPorId(Pronosticos, idEliminar, (elementoEliminado) => {
    if (elementoEliminado) {
        console.log("Elemento eliminado:");
        console.log(elementoEliminado);
    } else {
        console.log("No se encontró el elemento con el ID especificado.");
    }
});

console.log('Pronosticos actualizados',pronosticosFiltrados);
  
import { fetchCities } from './funciones/Funciones';
fetchCities('Tokyo')
    .then(cities => {
        console.log('Ciudades obtenidas:', cities);
    })
    .catch(error => {
        console.error('Se produjo un error:', error);
    });
