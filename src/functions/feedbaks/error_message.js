import Toast from "react-native-toast-message"

const error_message = (message) => {
    Toast.show({
      type: 'error',
      text1: 'Falha na leitura',
      text2: message,
      position: 'bottom'
    })
  }

export default error_message