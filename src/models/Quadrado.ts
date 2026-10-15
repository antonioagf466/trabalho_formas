import { Forma } from "./Forma";
import { Validador } from "../utils/Validador";

export class Quadrado extends Forma {
  public lado: number;

  constructor(lado: number) {
    super("Quadrado");
    Validador.validarPositivo(lado, "lado");
    this.lado = lado;
  }

  public CalcularArea(): number {
    return this.lado ** 2;
  }
}