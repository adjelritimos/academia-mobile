import { StyleSheet } from "react-native"

const qrcodeStyles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
  },

  camera: {
    flex: 1,
  },

  cameraInnerView: {
    flex: 1,
    backgroundColor: 'transparent',
  },

  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },

  codeText: {
    color: '#00ff99',
    textAlign: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 5,
  },

  button: {
    backgroundColor: '#0dcaf0',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: '80%',
    height: 70
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  }

})

export default qrcodeStyles