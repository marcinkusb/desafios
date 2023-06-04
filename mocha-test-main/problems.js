

// Desafio

// criar lista de objetos pessoas
var pessoas = [
  { nome: 'José Antonio', email: 'joseantonio@gmail.com', idade: 12 },
  { nome: 'Carlos', email:'carlos@gmail.com', idade:10 },
  { nome: 'Maria', email: 'maria@gmail.com', idade:18 },
  { nome: 'Josefa', email:'josefa@gmail.com', idade:13 },
  { nome: 'Marta', email:'marta@gmail.com', idade:14 },
  { nome: 'Marcos', email:'marcos@gmail.com', idade:5 },
  { nome: 'Madalena', email:'madalena@gmail.com', idade:15 },
  { nome: 'Antonia', email:'antonia@gmail.com', idade:17 },
  { nome: 'Miguel', email:'miguel@gmail.com', idade:30 },

];

// criar listas por faixas etárias
var criancas = [];
var adolescentes = [];
var adultos = [];

// função para separar objetos da lista pessoas em listas de faixas etárias
function separarPorFaixaEtaria(pessoas){
if (pessoas.idade <12){
  criancas.push(pessoas);
} else if (pessoas.idade >17){
  adultos.push(pessoas);
} else{
  adolescentes.push(pessoas)
}
}

// execução da função para separar as pessoas por faixa etária
pessoas.forEach(separarPorFaixaEtaria);

// impressão no console das pessoas de cada faixa etária e do total por grupo
console.log('Total de pessoas');
console.log(pessoas.length);
console.log('--- Lista de crianças ---');
console.log('Total de crianças');
console.log(criancas.length);
console.log(criancas);
console.log('--- Lista de adolescentes --- ');
console.log('Total de adolescentes');
console.log(adolescentes.length);
console.log(adolescentes);
console.log('--- Lista de adultos --- ');
console.log('Total de adultos');
console.log(adultos.length);
console.log(adultos);


function retornaTotalPessoasLista(pessoas){
return pessoas.length;
}

console.log(retornaTotalPessoasLista(pessoas))

