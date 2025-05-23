import { View, Text, FlatList, TouchableOpacity, TextInput } from "react-native"
import commandStyles from "../styles/command"
import filterCommand from "../functions/command/filterCommand"
import { Ionicons } from "@expo/vector-icons"
import { useContext, useState } from "react"
import { AuthContext } from "../contexts/app_context"
import playSounds from "../functions/lemma/sounds/playSounds"
import instrutionStyles from "../styles/instrution"

const CommandVoice = ({ navigation }) => {

    const { commands } = useContext(AuthContext)
    const [commandsCopy, setCommands] = useState(commands)
    const [sound, setSound] = useState(null)

    return (
        <View style={commandStyles.container}>
            <TextInput onChangeText={(newText) => filterCommand(newText, commands, setCommands)} style={commandStyles.input} placeholder="busque o comando" />
            {
                commandsCopy.length > 0 ?
                    (
                        <View style={commandStyles.list}>
                            <FlatList style={{ width: '100%' }} data={commandsCopy} keyExtractor={(item) => item.id}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() => navigation.navigate('CommandSpecification', { command: item })} style={commandStyles.item}>
                                        <View style={commandStyles.d_flex}>
                                            <Text style={commandStyles.itemText}>{item.name}</Text>
                                            <TouchableOpacity onPress={() => playSounds(sound, setSound, item.sound)}>
                                                <Ionicons name="volume-high" size={30} color="#0dcaf0" />
                                            </TouchableOpacity>
                                        </View>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    )
                    :
                    (
                        <>
                            <View style={instrutionStyles.containerNoQuestion}>
                                <Ionicons name="file-tray-stacked-outline" size={200} color="#0dcaf0" />
                                <Text style={{ textAlign: 'center' }}>Não há vozes comandos, podes tentar a busca por ler o qrcode</Text>
                            </View>
                        </>
                    )
            }
        </View>
    )
}

export default CommandVoice