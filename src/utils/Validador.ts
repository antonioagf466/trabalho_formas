export class Validador {
  public static validarPositivo(valor: number, campo: string): void {
    if (!Number.isFinite(valor) || valor <= 0) {
      throw new Error(`O valor de "${campo}" deve ser um número maior que zero.`);
    }
  }
}