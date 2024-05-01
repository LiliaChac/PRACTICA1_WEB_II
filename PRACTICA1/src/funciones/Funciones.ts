import { IPronostico } from "./objetos";
export function eliminarPronosticoPorId(pronosticos: IPronostico[], idEliminar: number, callback: (elementoEliminado: IPronostico | null) => void): IPronostico[] {
    let elementoEliminado: IPronostico | null = null;
    const pronosticosFiltrados = pronosticos.filter(pronostico => {
        if (pronostico.id === idEliminar) {
            elementoEliminado = pronostico;
            return false; // No incluir el elemento eliminado en el nuevo arreglo
        }
        return true; // Incluir otros elementos en el nuevo arreglo
    });

    callback(elementoEliminado); // Llamar al callback con el elemento eliminado

    return pronosticosFiltrados;
}

import { ICity } from './objetos';
export function fetchCities(cityName: string): Promise<ICity[]> {
    return fetch(`http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${cityName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al realizar la solicitud');
            }
            return response.json();
        })
        .then(data => {
            // Asumimos que la propiedad 'data' contiene la lista de ciudades
            const cities: ICity[] = data.data as ICity[];
            return cities;
        });
}

