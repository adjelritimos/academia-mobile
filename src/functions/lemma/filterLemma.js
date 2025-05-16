const filterLemma =(txt, list, result) => {

    if (list && list.length > 0) {
        const filter = list.filter((item) => item.question.toLowerCase().includes(txt.toLowerCase()))
        result(filter)
    }
}

export default filterLemma