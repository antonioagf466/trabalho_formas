import { Forma } from "./Forma";
import { Validador } from "../utils/Validador";

export class Circulo extends Forma {
  public raio: number;

  constructor(raio: number) {
    super("Círculo");
    Validador.validarPositivo(raio, "raio");
    this.raio = raio;
  }

  public CalcularArea(): number {
    return Math.PI * this.raio ** 2;
  }
}