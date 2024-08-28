import { CreadorVehiculo } from "./CreadorVehiculo";
import { Vehiculo } from "./Vehiculo";
import { Moto } from "./Moto";

export class CreadorMoto extends CreadorVehiculo {
  crearVehiculo(): Vehiculo {
    return new Moto();
  }
}
