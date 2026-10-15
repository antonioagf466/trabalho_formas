import { Forma } from "../models/Forma";

export class ExibidorDeFormas {
  public static exibir(forma: Forma): void {
    console.log(`${forma.nome}: área = ${forma.CalcularArea().toFixed(2)}`);
  }

  public static exibirTodas(formas: Forma[]): void {
    formas.forEach((forma) => this.exibir(forma));
  }
}