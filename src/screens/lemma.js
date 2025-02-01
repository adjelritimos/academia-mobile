import { TextInput, Text, View, FlatList, TouchableOpacity } from "react-native"
import Collapsible from "react-native-collapsible"
import lemmaStyles from "../styles/lemma"
import { useState } from "react"
import getLemma from "../functions/lemma/getLemma"
import filterLemma from "../functions/lemma/filterLemma"

const Lemma = () => {

    const data = getLemma()
    const [dataCoy, setDataCoy] = useState(getLemma())
    const [activeId, setActiveId] = useState(null)

    const toggleAccordion = (id) => {
        setActiveId(activeId === id ? null : id)
    }


    return (
        <View style={lemmaStyles.container}>
            <TextInput onChange={(newText)=> filterLemma(newText.nativeEvent.text, data, setDataCoy) }  style={lemmaStyles.input} placeholder="busque por questão do lema" />
            <View style={lemmaStyles.list}>
                <FlatList style={{ width: '100%' }}
                    data={dataCoy}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={lemmaStyles.item} onPress={() => toggleAccordion(item.id)}>
                            <Text style={lemmaStyles.itemText}>{item.question}</Text>
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