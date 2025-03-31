const filter =(txt, list, result) => {

    if(!txt){
        result(list) 
        return
    }

    if (list.length > 0 && typeof txt === 'string') {
        const filter = list.filter((item) => item.title.toLowerCase().includes(txt.toLowerCase()))
        result(filter)
    }
}

export default filter