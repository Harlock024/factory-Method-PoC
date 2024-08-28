import { Vehiculo } from "./Vehiculo";

export class Carro extends Vehiculo {
  conducir(): void {
    console.log("Conduciendo carro...");
  }
}
