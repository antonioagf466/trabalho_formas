import { Forma } from "./models/Forma";
import { Quadrado } from "./models/Quadrado";
import { Retangulo } from "./models/Retangulo";
import { Triangulo } from "./models/Triangulo";
import { Circulo } from "./models/Circulo";
import { ExibidorDeFormas } from "./services/ExibidorDeFormas";

const formas: Forma[] = [
  new Quadrado(4),
  new Retangulo(5, 3),
  new Triangulo(6, 4),
  new Circulo(2),
];

ExibidorDeFormas.exibirTodas(formas);