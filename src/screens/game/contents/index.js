import { View, Text, Image, TouchableOpacity } from 'react-native'
import gameContentIndexStyles from '../../../styles/gameContentIndex'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../contexts/app_context'

const GameContentIndex = ({ navigation }) => {

    const { points } = useContext(AuthContext)
    const [point, setPoint] = useState(0)


    useEffect(() => {
        setPoint(points.points)
    }, [point])

    return (
        <View style={gameContentIndexStyles.container}>
            <Image source={require('../../../../assets/question.png')} style={gameContentIndexStyles.image} />
            <Text style={gameContentIndexStyles.text}>A sua maior pontuação:</Text>
            <Text style={gameContentIndexStyles.points}>{point}</Text>
            <TouchableOpacity onPress={() => navigation.replace('Instrution', { where: 'GameContent' })} style={gameContentIndexStyles.button}>
                <Text style={gameContentIndexStyles.buttonText}>INICIAR</Text>
            </TouchableOpacity>
        </View>
    )
}

export default GameContentIndex