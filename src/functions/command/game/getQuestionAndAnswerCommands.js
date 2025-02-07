import _ from "lodash"

const onlyFourAnswer = (elemnts) => {
    let answers = []
    answers.push(elemnts[0])
    
    while (answers.length < 4) {
        const randomIndex = Math.floor(Math.random() * elemnts.length)
        if (randomIndex != 0 && !existElements(answers, elemnts[randomIndex])) {
            answers.push(elemnts[randomIndex])
        }
    }

    return answers

}

const existElements = (elements, element)=>{
    return elements.includes(element)
}

const getQuestionAndAnswerCommands = (number) => {

    const commands = [
        {
            id: 1,
            question: "Qual é o comando de posição de sentido?",
            answer: "Sentido",
            options: [
                "Sentido", 
                "Hão Firme", 
                "Descanse hêres", 
                "Sen Ôp", 
                "Vão Alto", 
                "Firmeza Absoluta", 
                "Sente Vento", 
                "Caminho Claro", 
                "Paz Eterna", 
                "Fique Firme", 
                "Sente a Vida", 
                "Firme Como Rocha", 
                "Voe Livre", 
                "Alma Forte", 
                "Vá Em Paz", 
                "Sente o Som", 
                "Paz Firme", 
                "Coração Aberto", 
                "Firme no Propósito", 
                "Firme Como Ferro", 
                "Alma Leve", 
                "Coração Aberto", 
                "Luz Afirmada", 
                "Caminho Luminado", 
                "Viva Alto", 
                "Fique Sólido", 
                "Caminho Vivo", 
                "Rumo Claro", 
                "Olhar Firme", 
                "Firme E Luminosa", 
                "Coração Claro", 
                "Siga Firme", 
                "Alma Firme", 
                "Rumo Forte", 
                "Descanse Bem", 
                "Voe Alto"
              ]
              
        },
        {
            id: 2,
            question: "Qual é o comando para manter a posição?",
            answer: "Hão Firme",
            options: [
                "Hão Firme", 
                "Avondate", 
                "Marcar Passos", 
                "Sentido", 
                "Vão Alto", 
                "Firmeza Absoluta", 
                "Sente Vento", 
                "Caminho Claro", 
                "Paz Eterna", 
                "Fique Firme", 
                "Sente a Vida", 
                "Firme Como Rocha", 
                "Voe Livre", 
                "Alma Forte", 
                "Vá Em Paz", 
                "Sente o Som", 
                "Paz Firme", 
                "Coração Aberto", 
                "Firme no Propósito", 
                "Firme Como Ferro", 
                "Alma Leve", 
                "Coração Aberto", 
                "Luz Afirmada", 
                "Caminho Luminado", 
                "Viva Alto", 
                "Fique Sólido", 
                "Caminho Vivo", 
                "Rumo Claro", 
                "Olhar Firme", 
                "Firme E Luminosa", 
                "Coração Claro", 
                "Siga Firme", 
                "Alma Firme", 
                "Rumo Forte", 
                "Descanse Bem", 
                "Voe Alto"
              ]
              
        },
        {
            id: 3,
            question: "Qual é o comando para descansar?",
            answer: "Descanse hêres",
            options: [
                "Descanse hêres", 
                "Hão Alto", 
                "Brô Arma", 
                "Apresentar Arma", 
                "Hão Lume", 
                "Vão Lume", 
                "Descanse Rumo", 
                "Brô Forte", 
                "Apresentar Lume", 
                "Sente Alto", 
                "Firmeza Viva", 
                "Brô Lume", 
                "Caminho Firme", 
                "Descanse Claro", 
                "Rumo Firme", 
                "Apresentar Lado", 
                "Firme Rumo", 
                "Sente Lume", 
                "Brô Claro", 
                "Hão Claro", 
                "Rumo Lume", 
                "Sente Firme", 
                "Firmeza Claro", 
                "Caminho Vivo", 
                "Brô Lento", 
                "Vão Firme"
              ]
              
        },
        {
            id: 4,
            question: "Qual é o comando para iniciar a marcha para frente?",
            answer: "Passo Em Frente Marche",
            options: [
                "Passo Em Frente Marche",
                "Passo Reta-Guarde Marche",
                "Direita Vol Marche",
                "Esquerda Vol Marche",
                "Passo Atras Marche",
                "Passo Lado-Esquerda Marche",
                "Passo Lado-Direita Marche",
                "Marcha Em Frente",
                "Passo Reta Marche",
                "Passo Frente-Esquerda Marche",
                "Passo Frente-Direita Marche",
                "Passo Recuo Marche",
                "Marcha Para Trás",
                "Passo Frontal Marche",
                "Passo Recuo-Guarde Marche",
                "Passo Lado Marche",
                "Passo Volta Marche",
                "Passo Curva Marche",
                "Marcha Lateral Direita",
                "Marcha Lateral Esquerda"
              ]
              
        },
        {
            id: 5,
            question: "Qual é o comando para realizar uma meia-volta?",
            answer: "Meia Volta Vol Hêres",
            options: [
                "Meia Volta Vol Hêres",
                "Direita Vol Hêres",
                "Esquerda Vol Hêres",
                "Direita Vol Marche",
                "Meia Volta Marche",
                "Esquerda Vol Marche",
                "Passo Direita Hêres",
                "Passo Esquerda Hêres",
                "Volta Completa Marche",
                "Volta Rápida Hêres",
                "Passo Volta Marche",
                "Volta Lateral Hêres",
                "Passo Meia Volta Marche",
                "Direita Volta Marche",
                "Esquerda Volta Marche",
                "Meia Volta Marche",
                "Passo Hêres Marche",
                "Volta Frente Hêres",
                "Marcha Recuo Hêres",
                "Passo Frente Marche"
              ]
              
        },
        {
            id: 6,
            question: "Qual é o comando para marcar passos?",
            answer: "Marcar Passos",
            options: [
                "Marcar Passos",
                "Hão Firme",
                "Passo Em Frente Marche",
                "Sentido",
                "Passo Reta Marche",
                "Caminho Claro",
                "Passo Lado Marche",
                "Passo Direita Marche",
                "Passo Esquerda Marche",
                "Avante Marche",
                "Passo Marcha Firme",
                "Passo Firmeza",
                "Passo Decisivo",
                "Passo Contínuo",
                "Passo Lento Marche",
                "Passo Rápido Marche",
                "Marcha A Frente",
                "Caminho Reto",
                "Passo De Volta",
                "Passo Consciente"
              ]
              
        },
        {
            id: 7,
            question: "Qual é o comando para dar um passo lateral direito?",
            answer: "Passo Lateral Direito Marche",
            options: [
                "Passo Lateral Direito Marche",
                "Passo Lateral Esquerdo Marche",
                "Passo Reta-Guarde Marche",
                "Passo Em Frente Marche",
                "Passo Lateral Direito Hêres",
                "Passo Lateral Esquerdo Hêres",
                "Passo Frente-Esquerda Marche",
                "Passo Frente-Direita Marche",
                "Passo Reta Marche",
                "Passo Avançar Marche",
                "Passo Lateral Marche",
                "Passo De Volta Marche",
                "Passo Recuo Marche",
                "Passo Lado-Direita Marche",
                "Passo Lado-Esquerda Marche",
                "Passo Frente Marche",
                "Passo Direita Vol Marche",
                "Passo Esquerda Vol Marche",
                "Passo Frente-Volta Marche",
                "Passo Lateral Recuo Marche"
              ]
              
        },
        {
            id: 8,
            question: "Qual é o comando para dar um passo lateral esquerdo?",
            answer: "Passo Lateral Esquerdo Marche",
            options: [
                "Passo Lateral Esquerdo Marche",
                "Passo Lateral Direito Marche",
                "Passo Reta-Guarde Marche",
                "Passo Em Frente Marche",
                "Passo Lateral Esquerdo Hêres",
                "Passo Lateral Direito Hêres",
                "Passo Reta Marche",
                "Passo Frente-Esquerda Marche",
                "Passo Frente-Direita Marche",
                "Passo Lado-Direita Marche",
                "Passo Lado-Esquerda Marche",
                "Passo Avançar Marche",
                "Passo Recuo Marche",
                "Passo Direita Vol Marche",
                "Passo Esquerda Vol Marche",
                "Passo Lateral Marche",
                "Passo Volta Frente Marche",
                "Passo Frontal Marche",
                "Passo Curva Marche",
                "Passo Frente Marche"
              ]
              
        },
        {
            id: 9,
            question: "Qual é o comando para dar um passo para trás?",
            answer: "Passo Reta-Guarde Marche",
            options: [
                "Passo Reta-Guarde Marche",
                "Passo Em Frente Marche",
                "Marcar Passos",
                "Brô Arma",
                "Passo Lateral Marche",
                "Passo Direita Marche",
                "Passo Esquerda Marche",
                "Passo Reta Marche",
                "Passo Frente Marche",
                "Passo Recuo Marche",
                "Passo Firme Marche",
                "Passo Lado-Esquerda Marche",
                "Passo Lado-Direita Marche",
                "Passo Avançar Marche",
                "Passo Volta Marche",
                "Passo Frente-Esquerda Marche",
                "Passo Frente-Direita Marche",
                "Passo Curva Marche",
                "Passo Lateral Recuo Marche",
                "Passo Firmeza Marche"
              ]
              
        },
        {
            id: 10,
            question: "Qual é o comando para apresentar arma?",
            answer: "Apresentar Arma",
            options: [
                "Apresentar Arma",
                "Brô Arma",
                "Hão Alto",
                "Direita Vol Hêres",
                "Esquerda Vol Hêres",
                "Apresentar Frontal",
                "Hão Firme",
                "Posição De Guarde",
                "Arma Em Riste",
                "Sentido Alvo",
                "Arma Em Posição",
                "Esquerda Volta Marche",
                "Direita Volta Marche",
                "Alvo Direita",
                "Alvo Esquerda",
                "Firme Como Rocha",
                "Frontal Marche",
                "Hão Pronto",
                "Posição Firme",
                "Avançar Marche"
              ]
              
        },
        {
            id: 11,
            question: "Qual é o comando para colocar a arma no ombro?",
            answer: "Brô Arma",
            options: [
                "Brô Arma",
                "Apresentar Arma",
                "Meia Volta Vol Hêres",
                "Passo Em Frente Marche",
                "Passo Reta-Guarde Marche",
                "Posição De Arma",
                "Passo Lateral Marche",
                "Direita Vol Hêres",
                "Esquerda Vol Hêres",
                "Hão Firme",
                "Passo Lado-Direita Marche",
                "Passo Lado-Esquerda Marche",
                "Posição De Defesa",
                "Apresentar Frontal",
                "Passo Reta Marche",
                "Marcha Firme",
                "Passo Frente-Direita Marche",
                "Passo Frente-Esquerda Marche",
                "Posição Avançar",
                "Posição De Alvo"
              ]
              
        },
        {
            id: 12,
            question: "Qual é o comando para virar à direita?",
            answer: "Direita Vol Hêres",
            options: [
                "Direita Vol Hêres",
                "Esquerda Vol Hêres",
                "Meia Volta Vol Hêres",
                "Direita Vol Marche",
                "Esquerda Vol Marche",
                "Meia Volta Marche",
                "Passo Lateral Direito Hêres",
                "Passo Lateral Esquerdo Hêres",
                "Passo Lateral Direito Marche",
                "Passo Lateral Esquerdo Marche",
                "Passo Recuo Hêres",
                "Passo Recuo Marche",
                "Passo Frontal Hêres",
                "Passo Frontal Marche",
                "Passo Direita Hêres",
                "Passo Esquerda Hêres",
                "Passo Direita Marche",
                "Passo Esquerda Marche",
                "Volta Completa Hêres",
                "Volta Completa Marche"
              ]
              
        },
        {
            id: 13,
            question: "Qual é o comando para virar à esquerda?",
            answer: "Esquerda Vol Hêres",
            options: [
                "Esquerda Vol Hêres",
                "Direita Vol Hêres",
                "Meia Volta Vol Hêres",
                "Esquerda Vol Marche",
                "Direita Vol Marche",
                "Meia Volta Marche",
                "Passo Lateral Esquerdo Hêres",
                "Passo Lateral Direito Hêres",
                "Passo Lateral Esquerdo Marche",
                "Passo Lateral Direito Marche",
                "Passo Direita Hêres",
                "Passo Esquerda Hêres",
                "Passo Direita Marche",
                "Passo Esquerda Marche",
                "Passo Frontal Hêres",
                "Passo Frontal Marche",
                "Passo Recuo Hêres",
                "Passo Recuo Marche",
                "Volta Rápida Hêres",
                "Volta Rápida Marche"
              ]
              
        },
        {
            id: 14,
            question: "Qual é o comando para parar a marcha?",
            answer: "Hão Alto",
            options: [
                "Hão Alto",
                "Hão Firme",
                "Descanse hêres",
                "Sentido",
                "Firmeza Total",
                "Hão Pronto",
                "Posição De Guarde",
                "Em Sentido",
                "Firme Como Rocha",
                "Pronto Para Ação",
                "Posição De Defesa",
                "Hão De Frente",
                "Hão Lateral",
                "Posição De Alvo",
                "Hão De Volta",
                "Em Alvo",
                "Em Guarde",
                "Pronto Para Marchar",
                "Alvo Pronto",
                "Hão Reto"
              ]
              
        },
        {
            id: 15,
            question: "Qual o limite de passos reta-guarda?",
            answer: "4",
            options: [
                "4",
                "1",
                "2",
                "ilimitado",
                "infinito",
                "5",
                "3",
                "zero",
                "máximo",
                "mínimo",
                "limitado",
                "7",
                "10",
                "8",
                "6",
                "9",
                "sem limite",
                "vários",
                "único",
                "mil"
              ]              
        }
    ]
    


    commands[number].options = _.shuffle(onlyFourAnswer(commands[number].options))

    return commands[number]
}

export default getQuestionAndAnswerCommands
