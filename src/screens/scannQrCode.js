import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { CameraView, useCameraPermissions } from 'expo-camera'
import qrcodeStyles from '../styles/qrcode'
import Toast from 'react-native-toast-message'
import alertQrCode from '../functions/others/alertQrCode'
import error_message from '../functions/feedbaks/error_message'

const QRCodeScannerScreen = ({ navigation }) => {

  const [facing, setFacing] = useState('back')
  const [permission, requestPermission] = useCameraPermissions()
  const [scanned, setScanned] = useState(false)
  const [scannedData, setScannedData] = useState(null)

  useEffect(() => {
    requestPermission()
  }, [])

  const processAlert = async (value) => {
    await alertQrCode(navigation, setScannedData, setScanned, value)
  }

  const handleBarCodeScanned = ({ type, data }) => {
    if (scanned) return
    try {
      setScanned(true)
      const qr_data = JSON.parse(data)
      processAlert(qr_data)
    } catch (error) {
      error_message('falha ao ler o código QR, sai da tela e tente novamente')
    }
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
      <CameraView style={qrcodeStyles.camera} facing={facing} onBarcodeScanned={scanned ? undefined : handleBarCodeScanned} barcodeScannerSettings={{ barcodeTypes: ['qr'], }} />
      <Toast />
    </View>
  )
}

export default QRCodeScannerScreen