const hasQuestions = (what, questions) => {

    try {

        let filtered = []

        if (what.includes('GameLemma')) {
            filtered = questions.filter(q => q.lemmaId !== null)
        } else if (what.includes('GameCommand')) {
            filtered = questions.filter(q => q.commandId !== null)
        } else if (what.includes('GameContent')) {
            filtered = questions.filter(q => q.contentId !== null)
        }

        return filtered.length > 0 ? false : true

    } catch (error) {
        console.log("Erro ao carregar perguntas:", error)
        return true
    }
}

export default hasQuestions