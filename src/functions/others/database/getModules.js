const getModules = async (db) => {

    let modules = []

    try {
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
