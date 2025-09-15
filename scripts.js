

// 1. logica de programacao -> aprender como o computador pensa
// e como se comunicar com ele

// 2. Algoritmos -> conjunto de passos para resolver um problema
// { } 1 passo, 2 passo, 3 passo

// 3. Linguagem de programacao -> conjunto de regras e palavras
// reservadas que o computador entende
/*
ALgoritmo Café
SE a cafeteira estiver ligada na tomada seguir para o proximo passo
SE nao estiver ligada, ligar a cafeteira na tomada
SE o nivel de agua estiver baixo, encher o reservatorio de agua
SE nao estiver baixo, seguir para o proximo passo   

if (cafeteira.ligadaNaTomada() == true) {
    // seguir para o proximo passo
}   
else {
    cafeteira.ligarNaTomada()
}


console.log("Hello World");


// O QUE SÃO VARIAVEIS?; -> armazenar informacoes na memoria do computador
// 3 tipos de variaveis: var, let, const

var -> NAO USAR MAIS -> escopo global, pode ser redeclarada e alterada; 

let -> atual = , const = valor constante nao muda;

let numerodealunosdasalasete = 30 // number -> numero

let nome = "Joao" // string -> texto;
let idade = 25 // number -> numero;
let altura = 1.75 // number -> numero;
let estudante = true // boolean -> true ou false;

let alunos = ["Joao", "Maria", "Pedro", "Ana"] // array -> lista de informacoes;

let pessoa = {nome: "Joao", idade: 25, altura: 1.75, estudante: true} // object -> objeto com varias informacoes;
let numerodealunosdasalasete = 30 // number -> numero

O QUE SÃO STRINGS? -> texto
"Joao" -- aspas duplas
'Joao' -- aspas simples 
`Joao
25
1.75` // template string -> permite interpolacao de variaveis e expressoes dentro da string


O que é strong interpolation?
let nome = "Joao"
let idade = 25
let altura = 1.75
let estudante = true
console.log(`Meu nome é ${nome}, tenho ${idade} anos, minha altura é ${altura} e sou ${estudante}.`);

const name ="Rafael"
const age = 30
const address = "ruaencanto,n40",
}

Controlador de fluxo -> if, else if, else, switch, case, for, while, do while

- if (se)
- else if (senao se)
- else (senao)
- switch (escolha)
- case (caso)
- for (para)
- while (enquanto)
- do while (faça enquanto)

operadores de comparacao -> ==, ===, !=, !==, >, <, >=, <=
- maior que >
- menor que <
- maior ou igual a >=
- menor ou igual a <=

5 > 3 // true
5 < 3 // false
5 >= 5 // true
5 <= 3 // false


- == igual a
- === estritamente igual
- != diferente de
- !== estritamente diferente de



DOM -> Document Object Model

// Manipulacao do DOM -> selecionar elementos, criar elementos, alterar elementos, remover elementos
// Selecionar elementos -> getElementById, getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll
// Criar elementos -> createElement
// Alterar elementos -> innerHTML, textContent, style
// Remover elementos -> removeChild

document -> representa o documento HTML
getElementById -> seleciona um elemento pelo id
getElementsByClassName -> seleciona elementos pela classe
getElementsByTagName -> seleciona elementos pela tag
querySelector -> seleciona o primeiro elemento que corresponde ao seletor CSS
querySelectorAll -> seleciona todos os elementos que correspondem ao seletor CSS

document.getElementById('meuId') -> seleciona o elemento com id "meuId"
document.getElementsByClassName('minhaClasse') -> seleciona todos os elementos com a classe "minhaClasse"
document.getElementsByTagName('div') -> seleciona todos os elementos <div>
document.querySelector('.minhaClasse') -> seleciona APENAS UM e primeiro elemento com a classe "minhaClasse"
document.querySelectorAll('.minhaClasse') -> seleciona todos os elementos com a classe "minhaClasse"

Alterando e acessando elementos:

innerHTML -> altera o conteudo HTML de um elemento
textContent -> altera o conteudo de texto de um elemento
style -> altera o estilo CSS de um elemento

console.log(element.textContent) -> exibe o conteudo de texto do elemento no console
element.innerHTML = "<p>Novo conteudo</p>" -> altera o conteudo HTML do elemento
element.style.color = "red" -> altera a cor do texto do elemento para vermelho
*/

/* Array de alunos com suas informações */
let alunos = [
    { nome: "João", idade: 16, nota1: 6, nota2: 4, nota3: 4, nota4: 5 },
    { nome: "Maria", idade: 17, nota1: 6, nota2: 7, nota3: 7, nota4: 8 },
    { nome: "Pedro", idade: 15, nota1: 6, nota2: 5, nota3: 5, nota4: 6 },
    { nome: "Ana", idade: 16, nota1: 10, nota2: 10, nota3: 6 , nota4: 9 },
    { nome: "Carlos", idade: 17, nota1: 6, nota2: 6, nota3: 6, nota4: 6 },
    { nome: "Luana", idade: 15, nota1: 6, nota2: 6, nota3: 6, nota4: 6 }
];

// Função para calcular a média das notas
function calcularMedia(nota1, nota2, nota3, nota4) {
    return (nota1 + nota2 + nota3 + nota4) / 4;
}

// Função para determinar aprovação
function verificarAprovacao(media) {
    const notaDeReprovacao = 6;
    return media >= notaDeReprovacao ? "Aprovado" : "Reprovado";
}

// Função para criar e inserir os cards dos alunos no container
function renderizarAlunos() {
    const container = document.getElementById('alunos-container');

    alunos.forEach(aluno => {
        const media = calcularMedia(aluno.nota1, aluno.nota2, aluno.nota3, aluno.nota4);
        const status = verificarAprovacao(media);

        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <h2>${aluno.nome}</h2>
                    <p><strong>Idade:</strong> ${aluno.idade} anos</p>
                    <p><strong>Média:</strong> ${media.toFixed(2)}</p>
                    <p><strong>Status:</strong> ${status}</p>
                </div>
                <div class="card-back">
                    <h2>Histórico de Notas</h2>
                    <p><strong>Nota 1:</strong> ${aluno.nota1}</p>
                    <p><strong>Nota 2:</strong> ${aluno.nota2}</p>
                    <p><strong>Nota 3:</strong> ${aluno.nota3}</p>
                    <p><strong>Nota 4:</strong> ${aluno.nota4}</p>
                </div>
            </div>
        `;

        // Adicionar evento de clique para virar o card
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });

        container.appendChild(card);
    });
}

// Chamar a função para renderizar os alunos quando a página carregar
document.addEventListener('DOMContentLoaded', renderizarAlunos);
