const { Pool } = require("pg")

const dbClient = new Pool({
    user: "postgres",
    password: "password",
    host: "localhost",
    port: 5432,
    database: "linesdb"
})
async function getAllLines() {
    const response = await dbClient.query("SELECT * FROM lines")
    console.log(response)
    return response.rows
}

async function getLine(number) {
    const response = await dbClient.query(
        "SELECT * FROM lines WHERE number = $1", 
        [number]
    )
    if (response.rowCount === 0) {
        return undefined
    } else {
        return response.rows[0]
    }
}

async function createLine(number, name, origin, end) {
    const response = await dbClient.query(
        "INSERT INTO lines (number, name, originstation, endstation) VALUES ($1, $2, $3, $4)", 
        [number, name, origin, end]
    )
    return {
        number,
        name,
        origin,
        end
    }
}

async function deleteLine(number) {
    try {
        await dbClient.query(
            "DELETE FROM lines WHERE number = $1",
            [number]
        )
        return true
    } catch {
        return false
    }
}

async function updateLine(number, name, origin, end) {
    await dbClient.query(
        "UPDATE lines SET name = $2, originstation = $3, endstation = $4 WHERE number = $1", 
        [number, name, origin, end]
    )
    return {
        number,
        name,
        origin,
        end
    }
}

module.exports = {
    getAllLines,
    getLine,
    createLine,
    deleteLine,
    updateLine
}