import { View, Text, FlatList, TouchableOpacity } from "react-native"
import gameCommandtyles from "../../styles/gameLemma"
import Collapsible from "react-native-collapsible"
import { useState } from "react"
import getQuestionAndAnswerCommands from "../../functions/command/game/getQuestionAndAnswerCommands"

const CommandGame = ( { navigation } ) => {

    const [command, setCommand] = useState(getQuestionAndAnswerCommands(Math.floor(Math.random() * 15)))
    const [isAnswer, setIsAnswer] = useState(false)
    const [showNextButton, setShowNextButton] = useState(true)

    const verifyAnswer = (answer) => {
        if (answer === command.answer && !isAnswer) {
            setShowNextButton(false)
            setIsAnswer(true)
        }
        else{
            navigation.navigate('GameOver', {from: 'GameCommand', imagePath: './../../../assets/lose.png'})
        }
    }


    const nextQuestion = () => {
        setShowNextButton(true)
        setIsAnswer(false)
        setCommand(getQuestionAndAnswerCommands(Math.floor(Math.random() * 16)))
    }

    return (
        <View style={gameCommandtyles.container}>
            
            <View style={gameCommandtyles.question}>
                <Text style={gameCommandtyles.questionText}>{command.question}</Text>
            </View>

            <View style={gameCommandtyles.list}>
                <FlatList style={{ width: '100%' }}
                    data={command.options}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => verifyAnswer(item)} style={gameCommandtyles.item}>
                            <Text style={gameCommandtyles.itemText}>{item}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

            <Collapsible collapsed={showNextButton}>
                <TouchableOpacity onPress={() => nextQuestion()} style={gameCommandtyles.nextButton}>
                    <Text style={gameCommandtyles.buttonText}>PRÓXIMA</Text>
                </TouchableOpacity>
            </Collapsible>
        </View>
    )
}

export default CommandGame