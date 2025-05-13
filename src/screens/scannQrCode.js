import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native'
import * as Camera from 'expo-camera'

const QRCodeScannerScreen = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null)
    const [scannedData, setScannedData] = useState(null)

    
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync()
            setHasPermission(status === 'granted')
        })()
    }, [])

    const handleBarCodeScanned = ({ data }) => {
        if (!data || scannedData) return

        setScannedData(data)
        Alert.alert('QR Code Lido', data, [
            {
                text: 'OK',
                onPress: () => console.log('Dados:', data),
            },
        ])
    }



    return (
        <View style={styles.container}>

            <Camera style={styles.camera} onBarCodeScanned={handleBarCodeScanned} barCodeTypes={['qr']} />

            {
                scannedData &&
                (
                    <View style={styles.overlay}>
                        <Text style={styles.text}>QR Code Encontrado:</Text>
                        <Text style={styles.codeText}>{scannedData}</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => setScannedData(null)}
                        >
                            <Text style={styles.buttonText}>Escanear Novamente</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </View>
    )
}

export default QRCodeScannerScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    camera: {
        flex: 1
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: 20,
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 10
    },
    codeText: {
        color: '#00ff99',
        textAlign: 'center',
        marginBottom: 20
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    },
})