import { TextInput, Text, View, FlatList, TouchableOpacity } from "react-native"
import Collapsible from "react-native-collapsible"
import lemmaStyles from "../styles/lemma"
import { useContext, useState } from "react"
import filterLemma from "../functions/lemma/filterLemma"
import { Ionicons } from "@expo/vector-icons"
import playSounds from "../functions/lemma/sounds/playSounds"
import { AuthContext } from "../contexts/app_context"
import instrutionStyles from "../styles/instrution"


const Lemma = () => {

    const { lemmas } = useContext(AuthContext)
    const [sound, setSound] = useState(null)
    const [dataCopy, setDataCopy] = useState(lemmas || [])
    const [activeId, setActiveId] = useState(null)

    const toggleAccordion = (id) => {
        setActiveId(activeId === id ? null : id)
    }

    return (
        <View style={lemmaStyles.container}>
            <TextInput onChangeText={(text) => filterLemma(text, lemmas, setDataCopy)} style={lemmaStyles.input} placeholder="busque por questão do lema" />
            {
                dataCopy.length > 0 ?
                    (
                        <View style={lemmaStyles.list}>
                            <FlatList style={{ width: '100%' }} data={dataCoy} keyExtractor={(item) => item.id}
                                renderItem={({ item }) => (
                                    <TouchableOpacity style={lemmaStyles.item} onPress={() => toggleAccordion(item.id)}>
                                        <View style={lemmaStyles.d_flex}>
                                            <Text style={lemmaStyles.itemText}>{item.question}</Text>
                                            <TouchableOpacity onPress={() => playSounds(sound, setSound, item.sound)}>
                                                <Ionicons name="volume-high" size={30} color="#0dcaf0" />
                                            </TouchableOpacity>
                                        </View>
                                        <Collapsible collapsed={activeId !== item.id}>
                                            <View style={lemmaStyles.content}>
                                                <Text style={lemmaStyles.contentText}>{item.answer}</Text>
                                            </View>
                                        </Collapsible>
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
                                <Text style={{textAlign: 'center'}} >Não há lemas, podes tentar fazer a buscas por ler o qrcode</Text>
                            </View>
                        </>
                    )
            }
        </View>
    )
}

export default Lemma