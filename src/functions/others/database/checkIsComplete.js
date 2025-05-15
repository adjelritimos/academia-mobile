const checkIsComplete = async (index, modules) => {

    const number = index
   
    if (number === 0)
        return true

    else {
        const modulo = modules[number]
        return modulo ? modulo.isComplete === 1 : false
    }
}

export default checkIsComplete