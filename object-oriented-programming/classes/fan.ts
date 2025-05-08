/* Cuando se trata de ventiladores, a menudo presentan caracterisiticas distintivas como configuraciones 
de velocidad , tamaño , potencia medida en vatios o caballos de fuerza , tipo y color 

Para manejar y modificar adecuadamente las caracterisiticas de un ventilador , es util organizarlas 
en un sistema de clases. de esta manera , se obtiene una estructura clara para trabajar con las 
propiedades del ventilador , fscilitando la comprension , reutilizacion y mantenimiento del codigo 

Para abordar esta tarea, crearemos una clase que encapsule los diferentes atributos de un ventilador 
esta clase incluira un constructor para inicializar dichos y atributos y metodos como getters y setters 

Al implementar esta estructura de clase, podremos representar y gestionar de manera eficiente las caracteristicas de los ventiladores
en nuestro sistema

Esta clase esta diseñada para proporcionar todas las caracteristicas esenciales del ventilador desde el momento de su creacion*/


type FanSize = 'small' | 'medium' | 'big';
type FanColor = 'black' | 'white' | 'grey';
type FanSpeed = 0 | 1 | 2 | 3 | 4 | 5;

class Fan {
    private speed: FanSpeed;
    private size: FanSize;
    private color: FanColor;

    constructor(speed: FanSpeed, size: FanSize, color: FanColor) {
        this.speed = speed;
        this.size = size;
        this.color = color;
    }

    public setSpeed(speed: FanSpeed) {
        this.speed = speed;
    }

    public getSpeed(): FanSpeed {
        return this.speed;
    }

    public setSize(size: FanSize) {
        this.size = size;
    }

    public getSize(): FanSize {
        return this.size;
    }

    public setColor(color: FanColor) {
        this.color = color;
    }

    public getColor(): FanColor { 
        return this.color;
    }
}

const fan1 = new Fan(3, 'medium', 'black'); 
console.log(fan1.getSpeed());  

fan1.setColor('white');
console.log(fan1.getColor());  

