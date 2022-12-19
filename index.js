const express = require('express')
const app = express()

app.use(express.static(__dirname + 'public'));

app.get('/about', (req, res) =>{
    res.sendFile(__dirname + '/main_page.html')
})

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/main_page.html')
})

app.get("*", (req, res) => {
    res.sendFile(__dirname + '/error404_page.html')
})

app.listen(3000, () => {
    console.log("Start Server ar Port [3000]")
})