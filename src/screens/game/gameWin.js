import { View, Text, Image, TouchableOpacity } from "react-native"
import gameWinStyles from "../../styles/gameWinStyles"


const GameWin = ({navigation}) => {

    return (
        <View style={gameWinStyles.container}>
            <Image 
                source={require("./../../../assets/win.png")} 
                style={gameWinStyles.image} 
            />

            <TouchableOpacity style={gameWinStyles.button} onPress={() => navigation.replace("IndexGame")}>
                <Text style={gameWinStyles.buttonText}>VOLTAR AO MENU</Text>
            </TouchableOpacity>
        </View>
    )
}

export default GameWin
