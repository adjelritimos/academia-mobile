import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import { Image } from 'expo-image'
import Icon from 'react-native-vector-icons/FontAwesome'
import commandSpecificationStyles from "../styles/commandSpecification"
import playSounds from "../functions/lemma/sounds/playSounds"
import { useState } from "react"

const CommandSpecification = ({ route }) => {

    const { command } = route.params
    const [sound, setSound] = useState(null)

    console.log(command.demonstration)

    return (
        <ScrollView>
            <View style={commandSpecificationStyles.container}>
                <View style={commandSpecificationStyles.d_flex}>
                    <Text style={commandSpecificationStyles.title}>{command.name}</Text>
                    <TouchableOpacity onPress={() => playSounds(sound, setSound, command.sound)} style={commandSpecificationStyles.btn}>
                        <Icon name="volume-up" size={30} color="#0dcaf0" />
                    </TouchableOpacity>
                </View>
                <Text style={commandSpecificationStyles.desciption_title}>Descrição: </Text>
                <View style={[commandSpecificationStyles.desciption, { padding: 10, marginTop: 2 }]}>
                    <Text style={commandSpecificationStyles.desciption_text}> {command.description} </Text>
                </View>

                <Text style={commandSpecificationStyles.desciption_title_1}>Demonstração: </Text>
                <View style={commandSpecificationStyles.desciption}>
                    <Image source={{ uri: command.demonstration }} style={commandSpecificationStyles.desciption_image} />
                </View>

            </View>
        </ScrollView>
    )
}
export default CommandSpecification