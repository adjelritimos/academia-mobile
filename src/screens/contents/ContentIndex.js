import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import contentIndexStyles from '../../styles/contentIndex'
import { Ionicons } from "@expo/vector-icons"
import { useContext, useState, useCallback } from 'react'
import { AuthContext } from '../../contexts/app_context'
import checkIsComplete from '../../functions/others/database/checkIsComplete'
import instrutionStyles from '../../styles/instrution'

const ContentIndex = ({ navigation }) => {

    const { modules } = useContext(AuthContext)
    const [completionStatus, setCompletionStatus] = useState({})


    const loadCompletionStatus = async () => {
        const status = {}
        for (const module of modules) {
            status[modules.indexOf(module)] = await checkIsComplete(modules.indexOf(module), modules)
        }

        setCompletionStatus(status)
    }

    useFocusEffect(
        useCallback(() => {
            if (modules) {
                loadCompletionStatus()
            }

            return () => {
                // Cleanup, se necessário
            }
        }, [modules])
    )



    return (
        <View style={[contentIndexStyles.container, { alignItems: 'center'}]}>

            <Text style={[contentIndexStyles.title, { alignSelf: 'flex-start'}]}>Conteúdos</Text>
            <View style={contentIndexStyles.line} />

            {
                modules.length > 0 ?
                    (
                        <FlatList style={contentIndexStyles.list} data={modules} renderItem={({ item }) => (
                            <TouchableOpacity disabled={!completionStatus[modules.indexOf(item)]} style={[contentIndexStyles.content, !completionStatus[modules.indexOf(item)] && contentIndexStyles.disabledContent]} onPress={() => navigation.navigate('Lessons', { moduleId: item.id })}>
                                <Text style={contentIndexStyles.contentTitle}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                        />
                    )
                    :
                    (
                         <>
                            <View style={instrutionStyles.containerNoQuestion}>
                                <Ionicons name="file-tray-stacked-outline" size={200} color="#0dcaf0" />
                                <Text>Não há módulos para ler</Text>
                            </View>
                        </>
                    )
            }

        </View>
    )
}

export default ContentIndex