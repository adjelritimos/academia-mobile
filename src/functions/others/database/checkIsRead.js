const checkWasRead = (index, lessons) => index === 0 || lessons[index - 1]?.wasRead === 1

export default checkWasRead