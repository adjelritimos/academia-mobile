const filterLemma =(txt, list, result) => {
   
    console.log('\n\n\n',txt, '\n\n\n')

    if(!txt){
        result(list) 
        return
    }

    if (list.length > 0 && typeof txt === 'string') {
        const filter = list.filter((item) => item.question.toLowerCase().includes(txt.toLowerCase()))
        result(filter)
    }
}

export default filterLemma