import { Vehiculo } from "./Vehiculo";

//Creador Abstracto
export abstract class CreadorVehiculo {
  abstract crearVehiculo(): Vehiculo;

  conducirVehiculo(): void {
    const vehiculo = this.crearVehiculo();
    vehiculo.conducir();
  }
}
