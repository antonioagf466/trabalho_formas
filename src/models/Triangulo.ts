import { Forma } from "./Forma";
import { Validador } from "../utils/Validador";

export class Triangulo extends Forma {
  public base: number;
  public altura: number;

  constructor(base: number, altura: number) {
    super("Triângulo Retângulo");
    Validador.validarPositivo(base, "base");
    Validador.validarPositivo(altura, "altura");
    this.base = base;
    this.altura = altura;
  }

  public CalcularArea(): number {
    return (this.base * this.altura) / 2;
  }
}