const nomes = ["Fernanda", "Bruna", "lis", "Camila", "Carol", "Sophia", "Ayla"];

export function aleatorio ( Lista) {
  const posicao = Math.floor(Math.random()* Lista. length);
  return lista[ posicao];
}

export const nome = aleatorio(nomes)
