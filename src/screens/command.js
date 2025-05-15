import { View, Text, FlatList, TouchableOpacity, TextInput } from "react-native"
import commandStyles from "../styles/command"
import getCommands from "../functions/command/getCommands"
import filterCommand from "../functions/command/filterCommand"
import Icon from 'react-native-vector-icons/FontAwesome'
import { useContext, useState } from "react"
import { AuthContext } from "../contexts/app_context"
import playSounds from "../functions/lemma/sounds/playSounds"

const CommandVoice = ({ navigation }) => {

    const { commands } = useContext(AuthContext)
    const [commandsCopy, setCommands] = useState(commands)
    const [sound, setSound] = useState(null)

    return (
        <View style={commandStyles.container}>
            <TextInput onChangeText={(newText) => filterCommand(newText, commands, setCommands)} style={commandStyles.input} placeholder="busque o comando" />
            <View style={commandStyles.list}>
                <FlatList style={{ width: '100%' }}
                    data={commandsCopy}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('CommandSpecification', { command: item })} style={commandStyles.item}>
                            <View style={commandStyles.d_flex}>
                                <Text style={commandStyles.itemText}>{item.name}</Text>
                                <TouchableOpacity onPress={() => playSounds(sound, setSound, item.sound)}>
                                    <Icon style={commandStyles.btnSound} name="volume-up" size={30} color="#0dcaf0" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}

export default CommandVoice