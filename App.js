import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Home from "./src/screens/home.js"
import Lemma from "./src/screens/lemma.js"
import CommandVoice from "./src/screens/command.js"
import CommandSpecification from "./src/screens/commandSpecification.js"
import IndexGame from "./src/screens/IndexGame.js"
import Instrucion from "./src/screens/game/instruction.js"
import LemmaGame from "./src/screens/game/lemmaGame.js"
import CommandGame from "./src/screens/game/commandGame.js"
import GameOver from "./src/screens/game/gameOver.js"
import { TouchableOpacity, Alert } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import TimeUp from "./src/screens/game/timeUp.js"
import GameWin from "./src/screens/game/gameWin.js"
import ContentIndex from "./src/screens/contents/ContentIndex.js"
import Content from "./src/screens/contents/content.js"
import GameContentIndex from "./src/screens/game/contents/index.js"
import QuestionContent from "./src/screens/game/contents/question.js"
const Stack = createStackNavigator()

const App = ({ navigation }) => {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen options={{ title: "Academia Evangelística", headerLeft: () => null }} name="Home" component={Home} />
        <Stack.Screen options={{ title: "Lema" }} name="Lemma" component={Lemma} />
        <Stack.Screen options={{ title: "Comando de voz" }} name="CommandVoice" component={CommandVoice} />
        <Stack.Screen options={{ title: "Especificação do Comando" }} name="CommandSpecification" component={CommandSpecification} />
        <Stack.Screen options={({ navigation }) => ({
          title: "Prática",
          headerLeft: () => (
            <TouchableOpacity style={{marginStart: 10}} onPress={() => navigation.replace('Home')}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          )
        })} name="IndexGame" component={IndexGame} />
        <Stack.Screen options={{ title: "Instruções" }} name="Instrution" component={Instrucion} />
        <Stack.Screen options={({ navigation }) => ({
          title: "Jogo do Lema",
          headerLeft: () => (
            <TouchableOpacity onPress={() =>
              Alert.alert(
                "Desistir da prática",
                "Tem certeza de que deseja abandonar a sua prática dos lemas?",
                [
                  { text: "Cancelar", style: "cancel" },
                  { text: "Sim", onPress: () => navigation.replace('IndexGame') },
                ]
              )
            }
              style={{ marginLeft: 15, marginEnd: 15 }}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          )
        })} name="GameLemma" component={LemmaGame} />

        <Stack.Screen options={({ navigation }) => ({
          title: "Jogo do comandos de voz",
          headerLeft: () => (
            <TouchableOpacity onPress={() =>
              Alert.alert(
                "Desistir da prática",
                "Tem certeza de que deseja abandonar a sua prática dos comandos de voz?",
                [
                  { text: "Cancelar", style: "cancel" },
                  { text: "Sim", onPress: () => navigation.replace('IndexGame') },
                ]
              )
            }
              style={{ marginLeft: 15, marginEnd: 15 }}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          )
        })} name="GameCommand" component={CommandGame} />

        <Stack.Screen options={{ title: "Fim do Jogo", headerShown: false }} name="GameOver" component={GameOver} />
        <Stack.Screen options={{ title: "Fim do Jogo", headerShown: false }} name="TimeUp" component={TimeUp} />
        <Stack.Screen options={{ title: "VITÓRIA", headerShown: false }} name="GameWin" component={GameWin} />
        <Stack.Screen options={{ title: "Conteúdos" }} name="ContentIndex" component={ContentIndex} />
        <Stack.Screen options={{ title: "Conteúdo" }} name="Content" component={Content} />
        <Stack.Screen options={{ title: "Conteúdos de prática" }} name="GameContentIndex" component={GameContentIndex} />  
        <Stack.Screen options={{ title: "Questão dos conteúdos" }} name="GameContent" component={QuestionContent} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
