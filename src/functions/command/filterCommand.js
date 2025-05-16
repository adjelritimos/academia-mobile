const filterCommand =(txt, list, result) => {

    if (list && list.length > 0) {
        const filter = list.filter((item) => item.name.toLowerCase().includes(txt.toLowerCase()))
        result(filter)
    }
}

export default filterCommand