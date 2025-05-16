const checkWasRead = (index, lessons) => {
    
    if ( index === 0){
        return true
    }
       
    else {
        return lessons[ index - 1 ]?.wasRead === 1
    }

}

export default checkWasRead