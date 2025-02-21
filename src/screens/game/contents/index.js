import { View, Text, Image, TouchableOpacity } from 'react-native'
import gameContentIndexStyles from '../../../styles/gameContentIndex'

const GameContentIndex = ({ navigation }) => {
    return (
        <View style={gameContentIndexStyles.container}>
            <Image source={require('../../../../assets/question.png')} style={gameContentIndexStyles.image} />
            <Text style={gameContentIndexStyles.text}>A sua maior pontuação:</Text>
            <Text style={gameContentIndexStyles.points}>0</Text>
            <TouchableOpacity onPress={() => navigation.replace('Instrution', { where: 'GameContent' })} style={gameContentIndexStyles.button}>
                <Text style={gameContentIndexStyles.buttonText}>INICIAR</Text>
            </TouchableOpacity>
        </View>
    )
}   

export default GameContentIndex