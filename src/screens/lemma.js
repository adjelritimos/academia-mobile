import { TextInput, Text, View, FlatList, TouchableOpacity } from "react-native"
import Collapsible from "react-native-collapsible"
import lemmaStyles from "../styles/lemma"
import { useContext, useState } from "react"
import filterLemma from "../functions/lemma/filterLemma"
import Icon from 'react-native-vector-icons/FontAwesome'
import playSounds from "../functions/lemma/sounds/playSounds"
import { AuthContext } from "../contexts/app_context"
import getLemmaSound from "../functions/lemma/getLemmaSound"

const Lemma = () => {

    const { lemmas } = useContext(AuthContext)
    const [sound, setSound] = useState(null)
    const [dataCoy, setDataCoy] = useState(lemmas)
    const [activeId, setActiveId] = useState(null)

    const toggleAccordion = (id) => {
        setActiveId(activeId === id ? null : id)
    }


    return (
        <View style={lemmaStyles.container}>
            <TextInput onChangeText={(text) => filterLemma(text, lemmas, setDataCoy)} style={lemmaStyles.input} placeholder="busque por questão do lema" />
            <View style={lemmaStyles.list}>
                <FlatList style={{ width: '100%' }} data={dataCoy} keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={lemmaStyles.item} onPress={() => toggleAccordion(item.id)}>
                            <View style={lemmaStyles.d_flex}>
                                <Text style={lemmaStyles.itemText}>{item.question}</Text>
                                <TouchableOpacity onPress={() => playSounds(sound, setSound, item.sound)}>
                                    <Icon name="volume-up" size={30} color="#0dcaf0" />
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
        </View>
    )
}

export default Lemma