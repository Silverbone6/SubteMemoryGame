const express = require("express")
const { 
    getAllLines,
    getLine, 
    createLine, 
    deleteLine, 
    updateLine 
} = require("./db/api_stations")
const app = express()
const port = 3000

app.use(express.json())

app.get("/lines", async (req, res) => {
    const lines = await getAllLines()
    res.json(lines)
})

// GET. /lines/<num>
app.get("/lines/:num", async (req, res) => {
    const line = await getLine(req.params.num)

    if (line === undefined) {
        res.sendStatus(404)
    }
    
    res.send(line)
});

// POST. /lines
app.post("/lines", async (req, res) => {
    const number = req.body.number
    const name = req.body.name
    const origin = req.body.origin
    const end = req.body.end

    if (number === undefined) {
        return res.status(400).send("Number not provided")
    }
    if (await getLine(number) !== undefined) {
        return res.status(400).send("Line already exists")
    }
    if (name === undefined) {
        return res.status(400).send("Name not provided")
    }
    if (origin === undefined) {
        return res.status(400).send("Origin station not provided")
    }
    if (end === undefined) {
        return res.status(400).send("End station not provided")
    }

    const line = await createLine(number, name, origin, end)
    res.status(201).json(line)
})

// DELETE. /lines/<num>
app.delete("/lines/:num", async (req, res) => {
    const number = req.params.num
    const line = await getLine(number)

    if (line === undefined) {
        return res.status(404);
    }

    if (await deleteLine(number)) {
        return res.json(line)
    } else {
        return res.sendstatus(500)
    }

    
})

// PUT. /lines/<num>
app.put("/lines/:num", async (req, res) => {
    const line = await getLine(req.params.num)
    if (line === undefined) {
        return res.status(404);
    }
    if (req.body === undefined) {
        return res.status(400).send("Body not defined")
    }
    const number = req.params.num
    const name = req.body.name
    const origin = req.body.origin
    const end = req.body.end

    if (name === undefined) {
        return res.status(400).send("Name not provided")
    }
    if (origin === undefined) {
        return res.status(400).send("Origin station not provided")
    }
    if (end === undefined) {
        return res.status(400).send("End station not provided")
    }

    const updatedLine = await updateLine(number, name, origin, end)
    res.status(201).json(line)
})

app.listen(port, () => {
    console.log(`Server initiated at port ${port}`)
})