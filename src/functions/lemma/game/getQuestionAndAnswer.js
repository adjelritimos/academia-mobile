import AsyncStorage from "@react-native-async-storage/async-storage"
import _ from "lodash"

const questions = await AsyncStorage.getItem('questions')
const questionss = JSON.parse(questions)

const answers = await AsyncStorage.getItem('answers')
const answerss = JSON.parse(answers)


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

const getQuestionAndAnswer = () => {

    const lemmasQuestions = questionss.filter(question => question.lemmaId !== null)

    const number = Math.floor(Math.random() * lemmasQuestions.length)

    const randomQuestion = lemmasQuestions[number]

    const answersOfQuestion = answerss.filter(answer => answer.questionId === randomQuestion.id)

    randomQuestion[number].options = _.shuffle(onlyFourAnswer(answersOfQuestion, randomQuestion.corret_answer))

    return randomQuestion
}

export default getQuestionAndAnswer
