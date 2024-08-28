import { CreadorVehiculo } from "./CreadorVehiculo";
import { Vehiculo } from "./Vehiculo";
import { Carro } from "./Carro";

export class CreadorCarro extends CreadorVehiculo {
  crearVehiculo(): Vehiculo {
    return new Carro();
  }
}
