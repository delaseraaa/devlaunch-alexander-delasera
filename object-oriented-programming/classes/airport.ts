/* El objetivo es crear una clase Airport que modele las caracteristicas y operaciones de un aeropuerto de forma mas avanzada
cada aeropuerto tiene:

Un nombre.
Una ubicacion.
Una pista de aterrizaje 
Un nivel de trafico aereo (bajo, medio, alto)
La clase debe incluir:

un metodo changeTrafficLevel que permita cambiar el nivel de trafico aereoo.
un metodo emergencyLanding que cierre la pista de aterrizaje y marque el nivel de trafico como alto.
un metodo displayInfo que muestre el nombre del aeropuerto, la ubicacion y el estado actual de la pista y el nivel de trafico

Crea una instancia de la clase Airport y demuetra el uso de estos metodos con distintas */

type TrafficLevel = 'low' | 'medium' | 'high';

class Airport {
    private _name: string;
    private _location: string;
    private _runAwayStatus: boolean;
    private _trafficLevel: TrafficLevel;

    constructor(name: string, location: string, runAwayStatus: boolean, trafficLevel: TrafficLevel) {
        this._name = name;
        this._location = location;
        this._runAwayStatus = runAwayStatus;
        this._trafficLevel = trafficLevel;
    }

    get runAwayStatus(): boolean {
        return this._runAwayStatus;
    }

    set runAwayStatus(status: boolean) {
        this._runAwayStatus = status;
    }

    get trafficLevel(): TrafficLevel {
        return this._trafficLevel;
    }

    set trafficLevel(level: TrafficLevel) {
        this._trafficLevel = level;
    }

    changeTrafficLevel(level: TrafficLevel): void {
        this.trafficLevel = level;
        console.log(`Nuevo nivel de tráfico: ${this.trafficLevel}`);
    }

    emergencyLanding(): void {
        this.runAwayStatus = false;
        this.trafficLevel = 'high';
        console.log(`Aterrizaje de emergencia en el aeropuerto ${this._name}. La pista está cerrada y el nivel es ${this.trafficLevel}`);
    }

    displayInfo(): void {
        console.log(`Nombre: ${this._name}`);
        console.log(`Ubicación: ${this._location}`);
        console.log(`Estado de pista: ${this.runAwayStatus}`);
        console.log(`Nivel de tráfico: ${this.trafficLevel}`);
    }
}


const myAirport = new Airport('Aeropuerto Internacional ABC', 'Ciudad XYZ', true, 'low');


myAirport.displayInfo();
myAirport.changeTrafficLevel('medium');
myAirport.displayInfo();
myAirport.emergencyLanding();
myAirport.displayInfo();
