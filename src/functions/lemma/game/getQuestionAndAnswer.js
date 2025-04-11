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

const existElements = (elements, element) => {
    return elements.includes(element)
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
                "Jesus é uma personalidade histórica importante",
                "Jesus é a manifestação de Deus na Terra",
                "Jesus é o Salvador da humanidade",
                "Jesus é a luz do mundo",
                "Jesus é o caminho para a salvação",
                "Jesus é a verdade e a vida",
                "Jesus é a encarnação do amor divino",
                "Jesus é o Messias prometido",
                "Jesus é a chave para a redenção",
                "Jesus é o Filho de Maria e José",
                "Jesus é o guia espiritual dos cristãos",
                "Jesus é a personificação da graça"
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
                "Porque ELE é o único ser verdadeiro",
                "Porque ELE é a luz do mundo",
                "Porque ELE é a fonte da sabedoria",
                "Porque ELE tem o poder de transformar tudo",
                "Porque ELE é a verdade encarnada",
                "Porque ELE é a chave para a salvação",
                "Porque ELE é a perfeição em forma humana",
                "Porque ELE é o caminho para a eternidade",
                "Porque ELE é a voz de Deus na Terra",
                "Porque ELE é a redenção dos pecadores",
                "Porque ELE é a manifestação da graça divina"
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
                "Somos almas em evolução",
                "Somos manifestações de uma força superior",
                "Somos seres destinados à perfeição",
                "Somos filhos da luz divina",
                "Somos reflexos da vontade divina",
                "Somos essência pura em busca de harmonia",
                "Somos frutos do amor divino",
                "Somos criados para transcender",
                "Somos seres de energia divina",
                "Somos parte de um grande plano celestial",
                "Somos guiados pela sabedoria universal",
                "Somos portadores da verdade divina"
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
                "A nossa autoridade é a palavra profética",
                "A nossa autoridade é a sabedoria divina",
                "A nossa autoridade é a verdade revelada",
                "A nossa autoridade é a justiça divina",
                "A nossa autoridade é a oração",
                "A nossa autoridade é o amor de Deus",
                "A nossa autoridade é a iluminação espiritual",
                "A nossa autoridade é o conhecimento divino",
                "A nossa autoridade é o poder da ressurreição",
                "A nossa autoridade é o testemunho de Cristo",
                "A nossa autoridade é o exemplo de Jesus"
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
                "É a oposição espiritual",
                "É a escuridão",
                "São as tentações do mundo",
                "É o caos",
                "São as forças destrutivas",
                "É a mentira",
                "São as trevas espirituais",
                "É o orgulho",
                "São as forças do egoísmo",
                "É a corrupção",
                "São os falsos profetas"
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
                "Ele é uma presença invisível",
                "Ele é uma ideia",
                "Ele é um arquétipo",
                "Ele é uma construção social",
                "Ele é um ser celestial",
                "Ele é uma essência imortal",
                "Ele é um reflexo de nossas crenças",
                "Ele está em nossos corações",
                "Ele é uma manifestação da fé",
                "Ele existe em nossa consciência",
                "Ele é uma presença espiritual"
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
                "Porque ele tem poder sobre o mal",
                "Porque ele se manifesta em visões",
                "Porque ele age nas situações adversas",
                "Porque ele é percebido por aqueles que buscam",
                "Porque ele trabalha através das pessoas",
                "Porque ele opera nas situações de sofrimento",
                "Porque ele influencia o coração dos homens",
                "Porque ele se revela nos momentos de crise",
                "Porque ele é identificado pelas suas obras",
                "Porque ele age nas escolhas erradas",
                "Porque ele age na tentação"
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
                "É o poder da palavra",
                "É o escudo da justiça",
                "É a força da verdade",
                "É a armadura de Deus",
                "É a luz divina",
                "É o amor de Cristo",
                "É o fogo purificador",
                "É a graça de Deus",
                "É a salvação de Deus",
                "É o poder da ressurreição",
                "É o testemunho de Cristo"
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
                "Tem 68 monições",
                "Tem 69 monições",
                "Tem 61 monições",
                "Tem 67 monições",
                "Tem 63 monições",
                "Tem 55 monições",
                "Tem 59 monições",
                "Tem 71 monições",
                "Tem 58 monições",
                "Tem 56 monições",
                "Tem 57 monições"
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
                "Gênesis, Lucas, Atos, Hebreus, Apocalipse...",
                "Gênesis, Levítico, Atos, 1 Timóteo, Apocalipse...",
                "Gênesis, 1 Reis, 2 Crônicas, Romanos, Lucas...",
                "Gênesis, 2 Tessalonicenses, Mateus, 1 João, Atos...",
                "Gênesis, Apocalipse, 1 Pedro, Tiago, Lucas...",
                "Gênesis, 2 Reis, 2 Timóteo, Marcos, Efésios...",
                "Gênesis, Salmos, Atos, Filipenses, Hebreus...",
                "Gênesis, 1 Coríntios, Apocalipse, 2 Tessalonicenses, Lucas...",
                "Gênesis, 1 João, Romanos, 2 Pedro, Apocalipse..."
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
                "Tem 6 calibres",
                "Tem 14 calibres",
                "Tem 4 calibres",
                "Tem 15 calibres",
                "Tem 2 calibres",
                "Tem 16 calibres",
                "Tem 17 calibres",
                "Tem 18 calibres",
                "Tem 20 calibres",
                "Tem 19 calibres",
                "Tem 21 calibres"
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
                "Pentateuco, Evangelhos, Apócrifos, Revelações",
                "Pentateuco, Sabedoria, Apócrifos, Cartas Paulinas",
                "Históricos, Profetas Maiores, Sabedoria, Revelações",
                "Evangelhos, Cartas Gerais, Apócrifos, Históricos",
                "Profetas Menores, Evangelhos, Revelações, Cartas Gerais",
                "Históricos, Profetas Menores, Sabedoria, Cartas Paulinas",
                "Pentateuco, Evangelhos, Profetas Maiores, Revelações",
                "Sabedoria, Apócrifos, Cartas Anónimas, Evangelhos",
                "Pentateuco, Revelações, Profetas Maiores, Históricos",
                "Evangelhos, Sabedoria, Profetas Menores, Revelações"
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
                "Viver com autoridade e ousadia",
                "Viver com amor e compaixão",
                "Viver com propósito e direção",
                "Viver com alegria e gratidão",
                "Viver com humildade e integridade",
                "Viver com esperança e otimismo",
                "Viver com fé e ação",
                "Viver com empatia e compreensão",
                "Viver com foco e disciplina",
                "Viver com coragem e persistência",
                "Viver com compaixão e generosidade"
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
                "Em Mateus 5:14, Jesus disse: 'Vós sois a luz do mundo'",
                "Em João 13:34, Jesus disse: 'Amai-vos uns aos outros como eu vos amei'",
                "Em Mateus 6:33, Jesus disse: 'Buscai em primeiro lugar o reino de Deus'",
                "Em Lucas 10:27, Jesus disse: 'Amarás ao Senhor teu Deus de todo o teu coração'",
                "Em João 8:12, Jesus disse: 'Eu sou a luz do mundo, quem me segue não andará em trevas'",
                "Em Mateus 7:7, Jesus disse: 'Pedi, e dar-se-vos-á'",
                "Em Marcos 9:23, Jesus disse: 'Tudo é possível ao que crê'",
                "Em João 10:10, Jesus disse: 'Eu vim para que tenham vida, e a tenham com abundância'",
                "Em Mateus 11:28, Jesus disse: 'Vinde a mim, todos os que estais cansados e sobrecarregados'",
                "Em Lucas 9:23, Jesus disse: 'Se alguém quer vir após mim, negue-se a si mesmo e tome a sua cruz'"
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
                "Em Lucas 11:9, Jesus disse: 'Quem pedir receberá, quem buscar encontrará'",
                "Em João 14:13, Jesus disse: 'Tudo o que pedirdes em meu nome, eu farei'",
                "Em Marcos 11:24, Jesus disse: 'Tudo o que pedirdes em oração, crede que o recebereis, e assim será'",
                "Em Lucas 17:6, Jesus disse: 'Se tivésseis fé como um grão de mostarda, diríeis à esta amoreira: Arranca-te e planta-te no mar, e ela vos obedeceria'",
                "Em Mateus 21:22, Jesus disse: 'E tudo o que pedirdes na oração, crendo, recebereis'",
                "Em João 15:7, Jesus disse: 'Se vós permanecerdes em mim, e as minhas palavras permanecerem em vós, pedireis o que quiserdes, e vos será feito'",
                "Em Atos 3:6, Pedro disse: 'Em nome de Jesus Cristo, levanta-te e anda'",
                "Em Lucas 10:17, Jesus disse: 'Os demônios se submetem a nós em teu nome'",
                "Em João 11:43-44, Jesus disse: 'Lázaro, sai para fora!' e Lázaro ressuscitou",
                "Em Marcos 6:13, os discípulos expulsaram muitos demônios e curaram os enfermos, ungindo-os com óleo"
            ]

        },

        {
            id: 16,
            answerAquestion: "Jesus é de Deus",
            answer: "Quem é Jesus?",
            options: [
                "Quem é Jesus?",
                "Qual é a identidade de Jesus?",
                "Quem é o Filho de Deus?",
                "Quem é o Salvador?",
                "Quem é o Messias?",
                "Quem é o Caminho, a Verdade e a Vida?",
                "Quem é o Cristo?"
            ]
        },
        {
            id: 17,
            question: "Porque ELE é o criador de todas as coisas e antes que tudo existisse ele já existiu",
            answer: "Porquê que ELE é Deus?",
            options: [
                "Porquê que ELE é Deus?",
                "Por que Jesus é divino?",
                "Como sabemos que Jesus é Deus?",
                "Por que Cristo é eterno?",
                "Por que Ele é o Criador?",
                "Por que Ele é o Alfa e o Ômega?"
            ]
        },
        {
            id: 18,
            question: "Somos filhos de Deus",
            answer: "Quem somos nós?",
            options: [
                "Quem somos nós?",
                "Qual é nossa identidade espiritual?",
                "Qual é nossa relação com Deus?",
                "Como a Bíblia nos define?",
                "Qual é nossa origem divina?"
            ]
        },
        {
            id: 19,
            question: "A nossa autoridade é Cristo",
            answer: "Quem é a nossa autoridade?",
            options: [
                "Quem é a nossa autoridade?",
                "Quem deve guiar nossas vidas?",
                "A quem devemos obedecer?",
                "Quem tem o poder supremo?",
                "Quem representa Deus na Terra?"
            ]
        },
        {
            id: 20,
            question: "É o diabo",
            answer: "Qual é o nosso adversário?",
            options: [
                "Qual é o nosso adversário?",
                "Quem se opõe a Deus?",
                "Quem tenta os seres humanos?",
                "Quem é o inimigo espiritual?",
                "Quem representa o mal?"
            ]
        },
        {
            id: 21,
            question: "Sim",
            answer: "Ele existe?",
            options: [
                "Ele existe?",
                "O diabo é real?",
                "Há evidências da existência do mal?",
                "Podemos confirmar a existência do maligno?",
                "A Bíblia fala sobre um inimigo?"
            ]
        },
        {
            id: 22,
            question: "Porque a palavra nos diz e vemos a sua atuação do mal",
            answer: "E como sabemos que ele existe?",
            options: [
                "E como sabemos que ele existe?",
                "Como a Bíblia prova a existência do diabo?",
                "Quais são as evidências do maligno?",
                "Como percebemos a ação do inimigo?",
                "O que revela a presença do mal?"
            ]
        },
        {
            id: 23,
            question: "É a Bíblia Sagrada",
            answer: "Qual é o nome da nossa arma?",
            options: [
                "Qual é o nome da nossa arma?",
                "O que usamos para combater o mal?",
                "Qual é nossa ferramenta espiritual?",
                "O que nos protege do inimigo?",
                "Qual livro é nossa espada?"
            ]
        },
        {
            id: 24,
            question: "Tem 66 monições",
            answer: "Quantas monições tem a nossa arma?",
            options: [
                "Quantas monições tem a nossa arma?",
                "Quantos livros tem a Bíblia?",
                "Qual é o número de livros sagrados?",
                "Quantas partes formam a Bíblia?",
                "Quantos textos compõem a Palavra?"
            ]
        },
        {
            id: 25,
            question: "Os nomes dessas monições são: Gênesis, Êxodo, Levítico, Números, Deuteronômio, Josué, Juízes, Rute, 1 Samuel, 2 Samuel, 1 Reis, 2 Reis, 1 Crônicas, 2 Crônicas, Esdras, Neemias, Ester, Jó, Salmos, Provérbios, Eclesiastes, Cânticos, Isaías, Jeremias, Lamentações, Ezequiel, Daniel, Oséias, Joel, Amós, Obadias, Jonas, Miquéias, Naum, Habacuque, Sofonias, Ageu, Zacarias, Malaquias, Mateus, Marcos, Lucas, João, Atos dos Apóstolos, Romanos, 1 Coríntios, 2 Coríntios, Gálatas, Efésios, Filipenses, Colossenses, 1 Tessalonicenses, 2 Tessalonicenses, 1 Timóteo, 2 Timóteo, Tito, Filemom, Hebreus, Tiago, 1 Pedro, 2 Pedro, 1 João, 2 João, 3 João, Judas, Apocalipse.",
            answer: "Quais são os nomes dessas monições?",
            options: [
                "Quais são os nomes dessas monições?",
                "Quais livros compõem a Bíblia?",
                "Quais são os livros do Antigo e Novo Testamento?",
                "Quais são os textos sagrados?",
                "Quais são as partes da Bíblia?"
            ]
        },
        {
            id: 26,
            question: "Tem 11 calibres",
            answer: "Quantos calibres tem a nossa arma?",
            options: [
                "Quantos calibres tem a nossa arma?",
                "Quantas divisões tem a Bíblia?",
                "Em quantas partes se agrupam os livros sagrados?",
                "Quantas categorias tem a Palavra?",
                "Quantas seções tem a Bíblia?"
            ]
        },
        {
            id: 27,
            question: "Pentateuco, Históricos, Poéticos, Profetas Maiores, Profetas Menores, Os Evangelhos, Históricos de Novo Testamento, Cartas Paulinas, Cartas Gerais, Cartas Anónimas e Revelações",
            answer: "Quais são os nomes desses calibres?",
            options: [
                "Quais são os nomes desses calibres?",
                "Quais são as divisões da Bíblia?",
                "Como se classificam os livros sagrados?",
                "Quais são os grupos de textos bíblicos?",
                "Quais são as categorias da Palavra?"
            ]
        },
        {
            id: 28,
            question: "Viver a verdade, viver a ousadia e ter autoridade para vencer",
            answer: "E como soldados devemos?",
            options: [
                "E como soldados devemos?",
                "Qual é nosso dever como cristãos?",
                "Como devemos agir na fé?",
                "Qual é nosso papel espiritual?",
                "Como vencer as batalhas espirituais?"
            ]
        },
        {
            id: 29,
            question: "Em Marcos 16:15, Jesus disse: 'Ide por todo mundo pregar o evangelho a toda criatura'",
            answer: "Qual é o nosso grande mandamento?",
            options: [
                "Qual é o nosso grande mandamento?",
                "Qual é a missão dada por Jesus?",
                "O que Cristo ordenou aos discípulos?",
                "Qual é nossa principal tarefa?",
                "O que devemos anunciar ao mundo?"
            ]
        },
        {
            id: 30,
            question: "Em Marcos 16: 17-18, Jesus disse: 'Esses sinais hão de acompanhar os que creem: em meu nome expulsarão demônios; falarão novas línguas; pegarão nas serpentes; e, se beberem alguma coisa mortífera, não lhes fará dano algum; imporão as mãos sobre os enfermos, e estes ficarão curados.'",
            answer: "Quais são os sinais desse grande mandamento?",
            options: [
                "Quais são os sinais desse grande mandamento?",
                "O que acompanha os que creem?",
                "Quais são as marcas dos fiéis?",
                "Como se manifesta o poder divino?",
                "Quais são as promessas de Jesus?"
            ]
        }
    ]


    lemma[number].options = _.shuffle(onlyFourAnswer(lemma[number].options))

    return lemma[number]
}

export default getQuestionAndAnswer
