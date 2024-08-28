# Factory Method - PoC


- **clase abstracta**

``` typescript
abstract class Vehiculo {
    abstract conducir(): void;
}

```


- **Productos concretos**

```typescript
class Carro extends Vehiculo {
    conducir(): void {
        console.log("Conduciendo un coche.");
    }
}

class Moto extends Vehiculo {
    conducir(): void {
        console.log("Conduciendo una moto.");
    }
}




```


- **Creadores concretos**

```typescript
class CreadorCoche extends CreadorVehiculo {
    crearVehiculo(): Vehiculo {
        return new Coche();
    }
}

class CreadorMoto extends CreadorVehiculo {
    crearVehiculo(): Vehiculo {
        return new Moto();
    }
}



```

- **Uso de Patron**


```typescript

const creadorCoche = new CreadorCoche();
creadorCoche.conducirVehiculo();

const creadorMoto = new CreadorMoto();
creadorMoto.conducirVehiculo();

``
