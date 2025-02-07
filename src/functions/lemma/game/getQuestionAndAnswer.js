import _ from "lodash"

const onlyFourAnswer = (elemnts) => {
    let answers = []
    while (answers.length < 3) {
        const randomIndex = Math.floor(Math.random() * elemnts.length)
        if (randomIndex != 0) {
            answers.push(elemnts[randomIndex])
        }
    }

    answers.push(elemnts[0])

    return answers

}

const getQuestionAndAnswer = (number) => {
    const lemma = [
        {
            id: 1,
            question: "Quem é Jesus?",
            answer: "Jesus é de Deus",
            options: [
                "Jesus é de Deus",
                "Jesus é apenas um profeta",
                "Jesus é um anjo",
                "Jesus é uma figura histórica sem importância",
                "Jesus é um espírito",
                "Jesus é um ser divino",
                "Jesus é o Filho de Deus",
                "Jesus é um mestre espiritual",
                "Jesus é uma representação divina",
                "Jesus é uma personalidade histórica importante"
            ]
        },
        {
            id: 2,
            question: "Porquê que ELE é Deus?",
            answer: "Porque ELE é o criador de todas as coisas e antes que tudo existisse ele já existiu",
            options: [
                "Porque ELE é o criador de todas as coisas e antes que tudo existisse ele já existiu",
                "Porque ELE é o filho de Maria",
                "Porque ELE foi escolhido por um deus superior",
                "Porque ELE possui grande poder",
                "Porque ELE é imortal",
                "Porque ELE é a personificação de Deus",
                "Porque ELE é o senhor de tudo",
                "Porque ELE tem autoridade sobre tudo",
                "Porque ELE é uma manifestação divina",
                "Porque ELE é o único ser verdadeiro"
            ]
        },
        {
            id: 3,
            question: "Quem somos nós?",
            answer: "Somos filhos de Deus",
            options: [
                "Somos filhos de Deus",
                "Somos filhos de Adão",
                "Somos seres humanos sem propósito",
                "Somos criaturas sem valor",
                "Somos almas em busca de salvação",
                "Somos criação divina",
                "Somos seres divinos em forma humana",
                "Somos filhos de uma entidade superior",
                "Somos criaturas de Deus",
                "Somos almas em evolução"
            ]
        },
        {
            id: 4,
            question: "Quem é a nossa autoridade?",
            answer: "A nossa autoridade é Cristo",
            options: [
                "A nossa autoridade é Cristo",
                "A nossa autoridade é o Estado",
                "A nossa autoridade é a igreja",
                "A nossa autoridade são os líderes mundiais",
                "A nossa autoridade é a Palavra de Deus",
                "A nossa autoridade é o Espírito Santo",
                "A nossa autoridade é a fé em Cristo",
                "A nossa autoridade é a lei divina",
                "A nossa autoridade é a graça de Deus",
                "A nossa autoridade é a palavra profética"
            ]
        },
        {
            id: 5,
            question: "Qual é o nosso adversário?",
            answer: "É o diabo",
            options: [
                "É o diabo",
                "São os nossos inimigos humanos",
                "É o pecado",
                "São as doenças",
                "É o mal",
                "São as forças do mal",
                "É o tentador",
                "São os espíritos malignos",
                "É Satanás",
                "É a oposição espiritual"
            ]
        },
        {
            id: 6,
            question: "Ele existe?",
            answer: "Sim",
            options: [
                "Sim",
                "Não",
                "Talvez",
                "Não sabemos",
                "Ele é uma figura simbólica",
                "Ele existe em nossa mente",
                "Ele é um mito",
                "Ele existe espiritualmente",
                "Ele existe no mundo físico",
                "Ele é uma presença invisível"
            ]
        },
        {
            id: 7,
            question: "E como sabemos que ele existe?",
            answer: "Porque a palavra nos diz e vemos a sua atuação do mal",
            options: [
                "Porque a palavra nos diz e vemos a sua atuação do mal",
                "Porque ele se manifesta fisicamente",
                "Porque ele nos fala diretamente",
                "Porque ele apareceu em sonhos",
                "Porque sua presença é sentida",
                "Porque ele é mencionado nas escrituras",
                "Porque ele se revela aos fiéis",
                "Porque ele está em todos os lugares",
                "Porque ele age no mundo físico",
                "Porque ele tem poder sobre o mal"
            ]
        },
        {
            id: 8,
            question: "Qual é o nome da nossa arma?",
            answer: "É a Bíblia Sagrada",
            options: [
                "É a Bíblia Sagrada",
                "É a oração",
                "É a espada de fogo",
                "É o poder do Espírito Santo",
                "É a palavra de Deus",
                "É a fé",
                "É o sangue de Cristo",
                "É a oração de intercessão",
                "É a proteção divina",
                "É o poder da palavra"
            ]
        },
        {
            id: 9,
            question: "Quantas monições tem a nossa arma?",
            answer: "Tem 66 monições",
            options: [
                "Tem 66 monições",
                "Tem 72 monições",
                "Tem 48 monições",
                "Tem 54 monições",
                "Tem 64 monições",
                "Tem 70 monições",
                "Tem 62 monições",
                "Tem 60 monições",
                "Tem 65 monições",
                "Tem 68 monições"
            ]
        },
        {
            id: 10,
            question: "Quais são os nomes dessas monições?",
            answer: "Os nomes dessas monições são: Gênesis, Êxodo, Levítico, Números, Deuteronômio, Josué, Juízes, Rute, 1 Samuel, 2 Samuel, 1 Reis, 2 Reis, 1 Crônicas, 2 Crônicas, Esdras, Neemias, Ester, Jó, Salmos, Provérbios, Eclesiastes, Cânticos, Isaías, Jeremias, Lamentações, Ezequiel, Daniel, Oséias, Joel, Amós, Obadias, Jonas, Miquéias, Naum, Habacuque, Sofonias, Ageu, Zacarias, Malaquias, Mateus, Marcos, Lucas, João, Atos dos Apóstolos, Romanos, 1 Coríntios, 2 Coríntios, Gálatas, Efésios, Filipenses, Colossenses, 1 Tessalonicenses, 2 Tessalonicenses, 1 Timóteo, 2 Timóteo, Tito, Filemom, Hebreus, Tiago, 1 Pedro, 2 Pedro, 1 João, 2 João, 3 João, Judas, Apocalipse.",
            options: [
                "Os nomes dessas monições são: Gênesis, Êxodo, Levítico, Números, Deuteronômio, Josué, Juízes, Rute, 1 Samuel, 2 Samuel, 1 Reis, 2 Reis, 1 Crônicas, 2 Crônicas, Esdras, Neemias, Ester, Jó, Salmos, Provérbios, Eclesiastes, Cânticos, Isaías, Jeremias, Lamentações, Ezequiel, Daniel, Oséias, Joel, Amós, Obadias, Jonas, Miquéias, Naum, Habacuque, Sofonias, Ageu, Zacarias, Malaquias, Mateus, Marcos, Lucas, João, Atos dos Apóstolos, Romanos, 1 Coríntios, 2 Coríntios, Gálatas, Efésios, Filipenses, Colossenses, 1 Tessalonicenses, 2 Tessalonicenses, 1 Timóteo, 2 Timóteo, Tito, Filemom, Hebreus, Tiago, 1 Pedro, 2 Pedro, 1 João, 2 João, 3 João, Judas, Apocalipse.",
                "Gênesis, Êxodo, Levítico, Números, Deuteronômio, Salmos...",
                "Gênesis, Apocalipse, Atos, Romanos, Hebreus...",
                "Gênesis, Levítico, Mateus, Marcos, Atos...",
                "Gênesis, Êxodo, Levítico, Números, Josué...",
                "Gênesis, Apocalipse, Mateus, Marcos, Lucas...",
                "Gênesis, Levítico, Samuel, João, Atos...",
                "Gênesis, Êxodo, Mateus, Romanos, Atos...",
                "Gênesis, Romanos, Marcos, Efésios, Lucas...",
                "Gênesis, Lucas, Atos, Hebreus, Apocalipse..."
            ]
        },
        {
            id: 11,
            question: "Quantos calibres tem a nossa arma?",
            answer: "Tem 11 calibres",
            options: [
                "Tem 11 calibres",
                "Tem 5 calibres",
                "Tem 7 calibres",
                "Tem 3 calibres",
                "Tem 9 calibres",
                "Tem 12 calibres",
                "Tem 13 calibres",
                "Tem 10 calibres",
                "Tem 8 calibres",
                "Tem 6 calibres"
            ]
        },
        {
            id: 12,
            question: "Quais são os nomes desses calibres",
            answer: "Pentateuco, Históricos, Poéticos, Profetas Maiores, Profetas Menores, Os Evangelhos, Históricos de Novo Testamento, Cartas Paulinas, Cartas Gerais, Cartas Anónimas e Revelações",
            options: [
                "Pentateuco, Históricos, Poéticos, Profetas Maiores, Profetas Menores, Os Evangelhos, Históricos de Novo Testamento, Cartas Paulinas, Cartas Gerais, Cartas Anónimas e Revelações",
                "Históricos, Poéticos, Apócrifos, Proféticos, Revelações",
                "Pentateuco, Apocalipse, Profetas Menores, Evangelhos",
                "Pentateuco, Históricos, Sabedoria, Profetas Menores",
                "Pentateuco, Evangelhos, Profetas Maiores, Cartas Gerais",
                "Históricos, Profetas Maiores, Apócrifos, Evangelhos",
                "Pentateuco, Profetas Menores, Revelações, Cartas Paulinas",
                "Pentateuco, Evangelhos, Cartas Anónimas, Profetas Maiores",
                "Históricos, Cartas Paulinas, Revelações, Apócrifos",
                "Pentateuco, Evangelhos, Apócrifos, Revelações"
            ]
        },
        {
            id: 13,
            question: "E como soldados devemos?",
            answer: "Viver a verdade, viver a ousadia e ter autoridade para vencer",
            options: [
                "Viver a verdade, viver a ousadia e ter autoridade para vencer",
                "Viver em paz e comodidade",
                "Viver em silêncio e esperando a vitória",
                "Viver em conflito com todos",
                "Viver com coragem e força",
                "Viver em confiança e poder",
                "Viver com zelo e determinação",
                "Viver com sabedoria e prudência",
                "Viver com paciência e fé",
                "Viver com autoridade e ousadia"
            ]
        },
        {
            id: 14,
            question: "Qual é o nosso grande mandamento?",
            answer: "Em Marcos 16:15, Jesus disse: 'Ide por todo mundo pregar o evangelho a toda criatura'",
            options: [
                "Em Marcos 16:15, Jesus disse: 'Ide por todo mundo pregar o evangelho a toda criatura'",
                "Em João 3:16, Jesus disse: 'Amarás o teu próximo como a ti mesmo'",
                "Em Mateus 28:19, Jesus disse: 'Ide e batizai todos os povos'",
                "Em Lucas 4:18, Jesus disse: 'Livrai os cativos'",
                "Em João 14:6, Jesus disse: 'Eu sou o caminho, a verdade e a vida'",
                "Em Mateus 22:37, Jesus disse: 'Amarás o Senhor teu Deus'",
                "Em Marcos 12:30, Jesus disse: 'Amarás o Senhor teu Deus com todo o coração'",
                "Em Lucas 6:27, Jesus disse: 'Amarás os teus inimigos'",
                "Em João 15:12, Jesus disse: 'Este é o meu mandamento: Que vos ameis uns aos outros'",
                "Em Mateus 5:14, Jesus disse: 'Vós sois a luz do mundo'"
            ]
        },
        {
            id: 15,
            question: "Quais são os sinais desse grande mandamento?",
            answer: "Em Marcos 16: 17-18, Jesus disse: 'Esses sinais hão de acompanhar os que creem: em meu nome expulsarão demônios; falarão novas línguas; pegarão nas serpentes; e, se beberem alguma coisa mortífera, não lhes fará dano algum; imporão as mãos sobre os enfermos, e estes ficarão curados.'",
            options: [
                "Em Marcos 16: 17-18, Jesus disse: 'Esses sinais hão de acompanhar os que creem: em meu nome expulsarão demônios; falarão novas línguas; pegarão nas serpentes; e, se beberem alguma coisa mortífera, não lhes fará dano algum; imporão as mãos sobre os enfermos, e estes ficarão curados.'",
                "Em Lucas 10:19, Jesus disse: 'Exorcizarão os mortos e farão milagres'",
                "Em Mateus 28:20, Jesus disse: 'Curarão os enfermos e expulsarão os demônios'",
                "Em João 14:12, Jesus disse: 'Falarão línguas estranhas e ressuscitarão os mortos'",
                "Em Marcos 9:38, Jesus disse: 'Expulsarão demônios em meu nome'",
                "Em Lucas 9:1, Jesus disse: 'Darei poder para curar enfermos e expulsar demônios'",
                "Em Atos 2:4, os apóstolos falaram em línguas e realizaram milagres",
                "Em Mateus 17:20, Jesus disse: 'Se tiverdes fé como um grão de mostarda, fareis milagres'",
                "Em João 7:38, Jesus disse: 'Quem crer em mim, rios de água viva fluirão de seu interior'",
                "Em Lucas 11:9, Jesus disse: 'Quem pedir receberá, quem buscar encontrará'"
            ]
        }
    ]


    lemma[number].options = _.shuffle(onlyFourAnswer(lemma[number].options))

    return lemma[number]
}

export default getQuestionAndAnswer
