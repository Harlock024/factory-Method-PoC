import { Vehiculo } from "./Vehiculo";

export class Moto extends Vehiculo {
  conducir(): void {
    console.log("Conduciendo moto...");
  }
}
