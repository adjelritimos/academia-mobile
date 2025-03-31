const getAllLessons = async (db) => {

    let lessons = []

    try {
        const allRows = await db.getAllAsync(`SELECT * FROM lessons;`)
        console.log(allRows)
        for (const row of allRows) {
            lessons.push(row)
        }
    } catch (error) {
        console.log(error)
    }

    return lessons
}

export default getAllLessons
