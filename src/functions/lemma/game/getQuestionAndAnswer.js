import _ from "lodash"
import getQuestions from "../../others/load_data/getQuestions"

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

    const questions = getQuestions()

    lemma[number].options = _.shuffle(onlyFourAnswer(lemma[number].options))

    return lemma[number]
}

export default getQuestionAndAnswer
