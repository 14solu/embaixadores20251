const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
         enunciado: "O que é Inteligência Artificial (IA)?",
         alternativas: [
            "Um sistema que apenas armazena dados sem realizar análises.",
            "Um conjunto de tecnologias que permitem que máquinas imitem a inteligência humana. "
         ]
    },
    {
       enunciado: "Qual destas áreas está diretamente relacionada ao uso de IA?",
         alternativas: [
            "Impressão de documentos em papel.",
            "Reconhecimento de voz e imagem." 
                ]
    },
    {
       enunciado: "Qual é um exemplo de uso da IA no dia a dia?",
         alternativas: [
            "Usar uma régua para medir um objeto.",
            "Usar um assistente virtual como a Alexa ou o Google Assistente." 
                ]
    },
    {
       enunciado: "O que diferencia a IA de um programa tradicional?",
         alternativas: [
            "A IA segue sempre os mesmos comandos fixos sem adaptação.",
            " A IA é capaz de aprender e melhorar com o tempo.2"  
        ]
    },
    {
   enunciado: "Em qual das situações a IA é mais eficaz?",
         alternativas: [
            "Realizar tarefas manuais como pintar uma parede.",
            " Prever padrões de comportamento com base em grandes volumes de dados. "
                    ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPergunta.textContent = perguntaAtual.enunciado;
}

mostraPergunta();
