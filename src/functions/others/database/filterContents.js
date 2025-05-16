const filter = (txt, list, result) => {

    if (list && list.length > 0) {
        const filter = list.filter((item) => item.content.toLowerCase().includes(txt.toLowerCase()))
        result(filter)
    }
}

export default filter