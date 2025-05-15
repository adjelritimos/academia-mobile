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
import TimeUp from "./src/screens/game/timeUp.js"
import GameWin from "./src/screens/game/gameWin.js"
import ContentIndex from "./src/screens/contents/ContentIndex.js"
import Content from "./src/screens/contents/content.js"
import GameContentIndex from "./src/screens/game/contents/index.js"
import QuestionContent from "./src/screens/game/contents/question.js"
import ButtonQuit from "./src/components/buttonQuit.js"
import ButtonQuitContent from "./src/components/buttonQuitContent.js"
import { AuthProvider } from "./src/contexts/app_context.js"
import Lessons from "./src/screens/contents/lessons.js"
import ButtonGoHome from "./src/components/buttonGoHome.js"
import ButtonGoScann from "./src/components/buttonGoScann.js"
import QRCodeScannerScreen from "./src/screens/scannQrCode.js"
import SyncDataScreen from "./src/screens/syncData.js"


const Stack = createStackNavigator()

const Routes = () => {

  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen options={({ navigation }) => ({ title: "Academia Evangelística", headerRight: () => (<ButtonGoScann navigation={ navigation }/>) })} name="Home" component={Home} />
        <Stack.Screen options={{ title: "Sincronização de dados" }} name="ScannQrCode" component={QRCodeScannerScreen} />
        <Stack.Screen options={{ title: "Sincronização de dados" }} name="SyncData" component={SyncDataScreen} />
        <Stack.Screen options={{ title: "Lema" }} name="Lemma" component={Lemma} />
        <Stack.Screen options={{ title: "Comando de voz" }} name="CommandVoice" component={CommandVoice} />
        <Stack.Screen options={{ title: "Especificação do Comando" }} name="CommandSpecification" component={CommandSpecification} />
        <Stack.Screen options={{ title: "Prática" }} name="IndexGame" component={IndexGame} />
        <Stack.Screen options={{ title: "Instruções" }} name="Instrution" component={Instrucion} />
        <Stack.Screen options={({ navigation }) => ({ title: "Jogo do Lema", headerLeft: () => (<ButtonQuit navigation={navigation} />) })} name="GameLemma" component={LemmaGame} />
        <Stack.Screen options={({ navigation }) => ({ title: "Jogo do comandos de voz", headerLeft: () => (<ButtonQuit navigation={navigation} />) })} name="GameCommand" component={CommandGame} />
        <Stack.Screen options={{ title: "Fim do Jogo", headerShown: false }} name="GameOver" component={GameOver} />
        <Stack.Screen options={{ title: "Fim do Jogo", headerShown: false }} name="TimeUp" component={TimeUp} />
        <Stack.Screen options={{ title: "VITÓRIA", headerShown: false }} name="GameWin" component={GameWin} />
        <Stack.Screen options={({ navigation }) => ({ title: "Módulos", headerLeft: () => (<ButtonGoHome navigation={navigation} />) })} name="ContentIndex" component={ContentIndex} />
        <Stack.Screen options={{ title: "Lições" }} name="Lessons" component={Lessons} />
        <Stack.Screen options={{ title: "Conteúdo" }} name="Content" component={Content} />
        <Stack.Screen options={{ title: "Conteúdos de prática" }} name="GameContentIndex" component={GameContentIndex} />
        <Stack.Screen options={({ navigation }) => ({ title: "Jogo sobre conteúdos", headerLeft: () => (<ButtonQuitContent navigation={navigation} />) })} name="GameContent" component={QuestionContent} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const App = () => {
  return (
    <AuthProvider >
      <Routes />
    </AuthProvider>
  )
}

export default App
