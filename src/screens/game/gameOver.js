import React from 'react';
import { View,Image,  Text, TouchableOpacity } from 'react-native'
import gameOverStyles from '../../styles/gameOverStyles'


const GameOver = ({ route,navigation }) => {

  const {from, imagePath} = route.params
  const img = imagePath

  return (
    <View style={gameOverStyles.container}>
     <View style={gameOverStyles.section}>
     <Text style={gameOverStyles.gameOverText}>Derrotado</Text>
      <Image source={require('./../../../assets/lose.png')} style={gameOverStyles.gameOverImage} />
      <TouchableOpacity style={gameOverStyles.button} onPress={()=> navigation.navigate(from)}>
        <Text style={gameOverStyles.buttonText}>Reiniciar Jogo</Text>
      </TouchableOpacity>
     </View>
    </View>
  );
}

export default GameOver
