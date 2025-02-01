import { View, Text, TouchableOpacity} from "react-native"
import indexGameStyles from "../styles/indexGame"

const IndexGame = ({navigation})=>{
    return (
        <View style={indexGameStyles.container}>
            <Text style={indexGameStyles.title}>O que você deseja praticar?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Instrution', {where: 'GameLemma'})} style={indexGameStyles.buttonLemma}>
                <Text style={indexGameStyles.text}>LEMA</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('Instrution', {where: 'GameCommand'})} style={indexGameStyles.buttonCommand} >
                <Text style={indexGameStyles.text}>COMANDO DE VOZ</Text>
            </TouchableOpacity>
        </View>
    )
}

export default IndexGame