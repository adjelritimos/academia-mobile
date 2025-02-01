import _ from "lodash"

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
                "Jesus é uma figura histórica sem importância"
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
                "Porque ELE possui grande poder"
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
                "Somos criaturas sem valor"
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
                "A nossa autoridade são os líderes mundiais"
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
                "São as doenças"
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
                "Não sabemos"
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
                "Porque ele apareceu em sonhos"
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
                "É o poder do Espírito Santo"
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
                "Tem 54 monições"
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
                "Gênesis, Levítico, Mateus, Marcos, Atos..."
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
                "Tem 3 calibres"
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
                "Pentateuco, Históricos, Sabedoria, Profetas Menores"
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
                "Viver em conflito com todos"
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
                "Em Lucas 4:18, Jesus disse: 'Livrai os cativos'"
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
                "Em João 14:12, Jesus disse: 'Falarão línguas estranhas e ressuscitarão os mortos'"
            ] 
        },

        { 
            id: 15, 
            question: "Qual é o nosso alvo?", 
            answer: "Pregar a verdade, mas do que a verdade. Ganhar almas para Cristo, destruir o reino das trevas e resgatar os perdidos",
            options: [
                "Pregar a verdade, mas do que a verdade. Ganhar almas para Cristo, construir o reino das trevas e resgatar os perdidos", 
                "Em Lucas 10:19, Jesus disse: 'Exorcizarão os mortos e farão milagres'",
                "Pregar a verdade, mas do que a mentira. Ganhar almas para Cristo, destruir o reino das trevas e resgatar os perdidos",
                "Em João 14:12, Jesus disse: 'Falarão línguas estranhas e ressuscitarão os mortos'"
            ] 
        }
    ]

    lemma[number].options = _.shuffle(lemma[number].options)

    return lemma[number]
}

export default getQuestionAndAnswer
