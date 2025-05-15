import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import api from '../server/api'
import saveDataToStorage from '../functions/others/database/saveData'


const SyncDataScreen = ({ navigation, route }) => {

    const [error, setError] = useState(false)
    const [syncing, setSyncing] = useState(true)
    const [data, setData] = useState(null)

    useEffect(() => {
        handleSyncData()
    }, [])


    const handleSyncData = async () => {

        setSyncing(true)

        try {

            const alldata = await api.get('/get/all/data/to/sync')

            if (alldata.status === 200) {
                setData(alldata.data)
                await saveDataToStorage(alldata.data)
                setSyncing(false)
                setError( false)
            }


        } catch (error) {
            console.error("Erro ao sincronizar:", error)
            setError(true)
            setData(null)
        } finally {
            setSyncing(false)
        }
    }

    return (
        <View style={styles.container}>


            <View style={styles.containerResponse}>

                {
                    syncing ?
                        (
                            <View style={styles.containerLoading}>
                                <ActivityIndicator size={70} color="#0dcaf0"/>
                                <Text style={styles.syncingText}>Aguarde enquanto a sincronização está sendo feita</Text>
                            </View>
                        )
                        :
                        (
                            <>
                                <Icon name={error ? "times-circle" : "check-circle"} style={{ alignSelf: 'center' }} size={100} color={error ? 'red' : 'green'} />
                                <Text style={styles.message}>
                                    {error ? " Ocorreu um problema ao sincronizar os dados. Clique para nova tentantiva ou tente novamente mais tarde." : "Dados sincronizados com sucesso!"}
                                </Text>

                                {
                                    error ?
                                        (
                                            <TouchableOpacity style={styles.btn} onPress={handleSyncData} disabled={syncing}>
                                                <Text style={styles.textBtn}>
                                                    {syncing ?
                                                        (
                                                            <View style={{ flexDirection: 'row', gap: 3, marginTop: 'auto', marginBottom: 'auto', width: '100%' }}>

                                                                <Text style={styles.textBtn}>Sincronizando...</Text>
                                                            </View>
                                                        )
                                                        :
                                                        "Sincronizar Dados"
                                                    }</Text>
                                            </TouchableOpacity>
                                        )
                                        :
                                        (
                                            <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
                                                <Text style={styles.textBtn}>OK</Text>
                                            </TouchableOpacity>
                                        )
                                }
                            </>
                        )
                }

            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    warning: {
        color: 'red',
        marginBottom: 20,
        textAlign: 'center',
    },
    margin: {
        marginRight: 'auto',
        marginBottom: 'auto',
    },
    syncingText: {
        marginTop: 15,
        textAlign: 'center',
        fontStyle: 'italic',
    },
    result: {
        marginTop: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
    },
    resultTitle: {
        fontWeight: 'bold',
        marginBottom: 5,
    },

    btn: {
        backgroundColor: '#0dcaf0',
        color: '#fff',
        borderRadius: 50,
        height: 60,
        justifyContent: 'center',
        width: '100%'
    },
    textBtn: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    containerResponse: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',
    },

    message: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
        paddingHorizontal: 20,
    },
    containerLoading: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default SyncDataScreen