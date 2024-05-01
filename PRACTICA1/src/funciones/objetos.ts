
const Apostador ={
    id: 1,
    Nombre: "Lilia",
    Identificacion: "123456789"
}

const EncuentroDeportivo = {
    id: 1,
    equipo1: "Equipo A",
    equipo2: "Equipo B",
    fecha: "30-04-2024",
    hora: "18:00"
  }

  const  Pronostico = {
    id: 1,
    idApostador: Apostador.id,
    idEncuentroDeportivo: EncuentroDeportivo.id,
    resultadoPropuesto: "Empate",
    valorApuesta: 100,
  }

  
interface IApostador {
    id: number;
    nombre: string;
    identificacion: string;
  }
  
  interface IEncuentroDeportivo {
    id: number;
    equipo1: string;
    equipo2: string;
    fecha: string;
    hora: string;
  }
  
  
  export interface IPronostico {
    id: number;
    idApostador: number;
    idEncuentroDeportivo: number;
    resultadoPropuesto: string;
    valorApuesta: number;
  }

  
export const Pronosticos:IPronostico[] = [
    {
      id: 1,
      idApostador: 1,
      idEncuentroDeportivo: 1,
      resultadoPropuesto: "Ganador Equipo A",
      valorApuesta: 150,
    },
    {
      id: 2,
      idApostador: 2,
      idEncuentroDeportivo: 1,
      resultadoPropuesto: "Empate",
      valorApuesta: 100,
    },
    {
      id: 3,
      idApostador: 3,
      idEncuentroDeportivo: 2,
      resultadoPropuesto: "Ganador Equipo B",
      valorApuesta: 200,
    },
  ];

  export interface ICity {
    id: number;
    wikiDataId: string;
    type: string;
    city: string;
    name: string;
    country: string;
    countryCode: string;
    region: string;
    regionCode: string;
    latitude: number;
    longitude: number;
}