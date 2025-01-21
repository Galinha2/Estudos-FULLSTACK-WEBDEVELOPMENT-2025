let empregado = {
    nome: 'Henrique',
    idade: 25,
    linguas: ['inglês', 'Portugues']
};

function empregados (nome, idade, linguas) {
    this.nome = nome;
    this.idade = idade;
    this.linguas = linguas;
};

var Eduardo = new empregados('henrique', 25, ['ingles', 'portugues']);
console.log(Eduardo);