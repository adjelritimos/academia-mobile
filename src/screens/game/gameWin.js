import { View, Text, Image, TouchableOpacity } from "react-native"
import gameWinStyles from "../../styles/gameWinStyles"


const GameWin = ({navigation}) => {

    return (
        <View style={gameWinStyles.container}>
            <Text style={gameWinStyles.title}>🎉 Parabéns! 🎉</Text>
            <Text style={gameWinStyles.message}>
                Você acertou todas as 10 questões! Você é um verdadeiro mestre!
            </Text>

            <Image 
                source={require("./../../../assets/win.gif")} 
                style={gameWinStyles.image} 
            />

            <TouchableOpacity 
                style={gameWinStyles.button} 
                onPress={() => navigation.replace("IndexGame")}
            >
                <Text style={gameWinStyles.buttonText}>Voltar ao Menu</Text>
            </TouchableOpacity>
        </View>
    )
}

export default GameWin
