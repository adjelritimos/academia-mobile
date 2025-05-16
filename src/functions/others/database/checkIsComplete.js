const checkIsComplete = async (index, modules) => {      
    if (index === 0)
        return true
    else {
        return modules[index - 1]?.isComplete === 1
    }
}

export default checkIsComplete