import AsyncStorage from "@react-native-async-storage/async-storage"
import _ from "lodash"

const onlyFourAnswer = (elemnts, corret_answer) => {

    let answers = []
    answers.push(corret_answer)

    while (answers.length < 4) {
        const randomIndex = Math.floor(Math.random() * elemnts.length)
        if (randomIndex != 0 && !existElements(answers, elemnts[randomIndex].answer)) {
            answers.push(elemnts[randomIndex].answer)
        }
    }

    return answers

}

const existElements = (elements, element) => {
    return elements.includes(element)
}

const getQuestion = async () => {

    const _questions = await AsyncStorage.getItem('questions')
    const questions = JSON.parse(_questions)

    return questions
}

const getAnswers = async () => {
    const _answers = await AsyncStorage.getItem('answers')
    const answers = JSON.parse(_answers)

    return answers
}

const getQuestionAndAnswerCommands = async() => {

    const questions = await getQuestion()
    const answers = await getAnswers()

    const commandsQuestions = questions.filter(question => question.commandId !== null)
    
    const number = Math.floor(Math.random() * commandsQuestions.length)

    const randomQuestion = commandsQuestions[number]

    const answersOfQuestion = answers.filter(answer => answer.questionId === randomQuestion.id)
  
    randomQuestion.options = _.shuffle(onlyFourAnswer(answersOfQuestion, randomQuestion.correct_answer))

    return randomQuestion
}

export default getQuestionAndAnswerCommands
