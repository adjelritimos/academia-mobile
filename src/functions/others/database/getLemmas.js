const getLemmas = async (db) => {

    let lemmas = []

    try {
        const allRows = await db.getAllAsync('SELECT * FROM lemmas;')
        for (const row of allRows) {
            lemmas.push(row)
        }
    } catch (error) {
        console.log(error)
    }
    
    return lemmas
}

export default getLemmas