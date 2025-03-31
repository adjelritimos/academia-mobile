import * as FileSystem from 'expo-file-system'
import * as SQLite from 'expo-sqlite'
import { Asset } from 'expo-asset'
const dbName = 'academycals.db'



const getDatabaseUri = async () => {

  const dbUri = `${FileSystem.documentDirectory}SQLite/${dbName}`

  const fileExists = await FileSystem.getInfoAsync(dbUri)

  if (!fileExists.exists) {
    console.log('Copiando banco de dados para o diretório do app...')
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite', { intermediates: true })
    const asset = Asset.fromModule(require('./../../../../assets/academycal.db'))
    await asset.downloadAsync()
    await FileSystem.copyAsync({
      from: asset.localUri,
      to: dbUri,
    })

    console.log('Banco copiado com sucesso!')
  }

  return dbUri
}

const openDatabase = async () => {
  await getDatabaseUri()
  return SQLite.openDatabaseAsync(dbName)
}

export default openDatabase