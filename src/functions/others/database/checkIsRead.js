const checkWasRead = (index, lessons) => {
    
    if ( index === 0){
        console.log("index === 0")
        return true
    }
       
    else {
        console.log("index !== 0")
        return lessons[ index - 1 ].wasRead === 1
    }

}

export default checkWasRead