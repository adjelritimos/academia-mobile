import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'
import commandSpecificationStyles from "../styles/commandSpecification"

const CommandSpecification = ({ route }) => {

    const { command } = route.params

    return (
        <ScrollView>
            <View style={commandSpecificationStyles.container}>
                <View style={commandSpecificationStyles.d_flex}>
                    <Text style={commandSpecificationStyles.title}>{command.name}</Text>
                    <TouchableOpacity style={commandSpecificationStyles.btn}>
                        <Icon name="volume-up" size={30} color="#0dcaf0" />
                    </TouchableOpacity>
                </View>

                <View style={commandSpecificationStyles.desciption}>
                    <Text style={commandSpecificationStyles.desciption_title}>Descrição: </Text>
                    <Text style={commandSpecificationStyles.desciption_text}> {command.description} </Text>
                </View>

                <Text style={commandSpecificationStyles.desciption_title_1}>Demonstração: </Text>
                <View style={commandSpecificationStyles.desciption}>
                    <Image source={require('./../../assets/logo.png')} style={commandSpecificationStyles.desciption_image} />
                </View>

            </View>
        </ScrollView>
    )
}
export default CommandSpecification