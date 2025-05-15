import _ from "lodash"

const onlyFourAnswer = (elemnts, correct_answer) => {

    let answers = []
    answers.push(correct_answer)

    while (answers.length <= 3) {
        
        const randomIndex = Math.floor(Math.random() * elemnts.length)
        if (randomIndex != 0 && !existElements(answers, elemnts[randomIndex])) {
            answers.push(elemnts[randomIndex].answer)
        }
    }

    return answers

}

const existElements = (elements, element) => {
    return elements.includes(element)
}

const getQuestionAndAnswer = (number, questions, answers) => {

    const question = questions[number]
    const answersOfQuestion = answers.filter(answer => answer.questionId === question.id)
    question.options = _.shuffle(onlyFourAnswer(answersOfQuestion, question.correct_answer))

    return question
}

export default getQuestionAndAnswer
