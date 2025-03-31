import openDatabase from "./openDataBase"

const getModules = async () => {

    let modules = []

    try {
        const db = await openDatabase()
        const allRows = await db.getAllAsync('SELECT * FROM modules;')
        for (const row of allRows) {
            modules.push(row)
        }
    } catch (error) {
        console.log(error)
    }

    return modules
}

export default getModules
