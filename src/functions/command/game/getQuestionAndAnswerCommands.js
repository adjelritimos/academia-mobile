import _ from "lodash"

const getQuestionAndAnswerCommands = (number) => {

    const commands = [
        { id: 1, question: "Qual é o comando de posição de sentido?", answer: "Sentido", options: ["Sentido", "Hão Firme", "Descanse hêres", "Sen Ôp"] },
        { id: 2, question: "Qual é o comando para manter a posição?", answer: "Hão Firme", options: ["Hão Firme", "Avondate", "Marcar Passos", "Sentido"] },
        { id: 3, question: "Qual é o comando para descansar?", answer: "Descanse hêres", options: ["Descanse hêres", "Hão Alto", "Brô Arma", "Apresentar Arma"] },
        { id: 4, question: "Qual é o comando para iniciar a marcha para frente?", answer: "Passo Em Frente Marche", options: ["Passo Em Frente Marche", "Passo Reta-Guarde Marche", "Direita Vol Marche", "Esquerda Vol Marche"] },
        { id: 5, question: "Qual é o comando para realizar uma meia-volta?", answer: "Meia Volta Vol Hêres", options: ["Meia Volta Vol Hêres", "Direita Vol Hêres", "Esquerda Vol Hêres", "Direita Vol Marche"] },
        { id: 6, question: "Qual é o comando para marcar passos?", answer: "Marcar Passos", options: ["Marcar Passos", "Hão Firme", "Passo Em Frente Marche", "Sentido"] },
        { id: 7, question: "Qual é o comando para dar um passo lateral direito?", answer: "Passo Lateral Direito Marche", options: ["Passo Lateral Direito Marche", "Passo Lateral Esquerdo Marche", "Passo Reta-Guarde Marche", "Passo Em Frente Marche"] },
        { id: 8, question: "Qual é o comando para dar um passo lateral esquerdo?", answer: "Passo Lateral Esquerdo Marche", options: ["Passo Lateral Esquerdo Marche", "Passo Lateral Direito Marche", "Passo Reta-Guarde Marche", "Passo Em Frente Marche"] },
        { id: 9, question: "Qual é o comando para dar um passo para trás?", answer: "Passo Reta-Guarde Marche", options: ["Passo Reta-Guarde Marche", "Passo Em Frente Marche", "Marcar Passos", "Brô Arma"] },
        { id: 10, question: "Qual é o comando para apresentar arma?", answer: "Apresentar Arma", options: ["Apresentar Arma", "Brô Arma", "Hão Alto", "Direita Vol Hêres"] },
        { id: 11, question: "Qual é o comando para colocar a arma no ombro?", answer: "Brô Arma", options: ["Brô Arma", "Apresentar Arma", "Meia Volta Vol Hêres", "Passo Em Frente Marche"] },
        { id: 12, question: "Qual é o comando para virar à direita?", answer: "Direita Vol Hêres", options: ["Direita Vol Hêres", "Esquerda Vol Hêres", "Meia Volta Vol Hêres", "Direita Vol Marche"] },
        { id: 13, question: "Qual é o comando para virar à esquerda?", answer: "Esquerda Vol Hêres", options: ["Esquerda Vol Hêres", "Direita Vol Hêres", "Meia Volta Vol Hêres", "Esquerda Vol Marche"] },
        { id: 14, question: "Qual é o comando para parar a marcha?", answer: "Hão Alto", options: ["Hão Alto", "Hão Firme", "Descanse hêres", "Sentido"] },
        { id: 15, question: "Qual o limite de passos reta-guarda?", answer: "4", options: ["2", "1", "4", "ilimitado"] }
    ];
    commands[number].options = _.shuffle(commands[number].options)

    return commands[number]
}

export default getQuestionAndAnswerCommands
