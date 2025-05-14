import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Alert, qrcodeStylesheet } from 'react-native'
import { CameraView, useCameraPermissions } from 'expo-camera'
import qrcodeStyles from '../styles/qrcode'

const QRCodeScannerScreen = ({ navigation }) => {
  const [facing, setFacing] = useState('back')
  const [permission, requestPermission] = useCameraPermissions()
  const [scanned, setScanned] = useState(false)
  const [scannedData, setScannedData] = useState(null)

  useEffect(() => {
    requestPermission()
  }, [])

  const handleBarCodeScanned = ({ type, data }) => {
    if (scanned) return

    setScanned(true)
    setScannedData(data)
    Alert.alert('QR Code Lido', data, [
      {
        text: 'OK',
        onPress: () => setScanned(false),
      },
    ])
  }

  if (!permission) {
    return <View style={qrcodeStyles.container}><Text>Carregando...</Text></View>
  }

  if (!permission.granted) {
    return (
      <View style={qrcodeStyles.container}>
        <Text style={{ textAlign: 'center' }}>Precisamos da sua permissão para acessar a câmera</Text>
        <TouchableOpacity onPress={requestPermission} style={qrcodeStyles.button}>
          <Text style={qrcodeStyles.buttonText}>Conceder Permissão</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={qrcodeStyles.container}>
      <CameraView style={qrcodeStyles.camera} facing={facing}  onBarcodeScanned={scanned ? undefined : handleBarCodeScanned} barcodeScannerSettings={{ barcodeTypes: ['qr'],}}>
        <View style={qrcodeStyles.cameraInnerView} />
      </CameraView>

      {scannedData && (
        <View style={qrcodeStyles.overlay}>
          <Text style={qrcodeStyles.text}>QR Code Encontrado:</Text>
          <Text style={qrcodeStyles.codeText}>{scannedData}</Text>
          <TouchableOpacity style={qrcodeStyles.button} onPress={() => { setScanned(false); setScannedData(null)}}>
            <Text style={qrcodeStyles.buttonText}>Escanear Novamente</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default QRCodeScannerScreen