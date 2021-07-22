const express = require('express')
const app = express()
const appname = process.env.appname
app.get('/', (req, res) => {
    res.send(`${appname} - ok`)
})

app.listen(3000, () => {
    console.log(`Rodando ${appname} na porta 3000`)
})