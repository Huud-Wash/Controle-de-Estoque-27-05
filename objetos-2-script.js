const Carro = {
  nome: String,
  marca: String,
  ano: Number,
  valor: Number,
};

const listaDeCarros = [];

function salvar() {
  // Cria o seu novo objeto Carro.

  const carro = Object.create(Carro);

  carro.ano = anoDigitado.value;
  carro.marca = marcaDigitado.value;
  carro.nome = nomeDigitado.value;
  carro.valor = valorDigitado.value;

  listaDeCarros.push(carro);
  console.log(listaDeCarros);
}

const pessoa = {
  nome: "Lu",
  idade: 17,
  peso: 50,
  altura: 1.6,
  anoNascimento: 2004,
  pais: { mae: "...", pai: "Não sei...." },
};

console.log(pessoa.pais.mae);
console.log(pessoa.pais.pai);

const pessoa2 = {
  nome: "Sayu",
  idade: 17,
  peso: 48,
  altura: 1.6,
  anoNascimento: 2004,
};

const produto = {
  id: 123,
  nome: "camiseta",
  qtd: 12,
  valor: 4.25,
  valorTotal: function () {
    return this.qtd * this.valor;
  },
};

const listaProdutos = [];

//console.log(produto.valorTotal());

// console.log(pessoa2.nome);
