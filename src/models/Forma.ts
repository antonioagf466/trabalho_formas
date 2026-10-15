export abstract class Forma {
  public nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  public abstract CalcularArea(): number;
}