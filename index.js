const express = require("express")

const app = express()


app.use('/api/winelist', require('./routes/api/wine'))

app.get('/', (req, res) => {
    res.json({ msg: "Home page"})
})

app.listen(5000, () => {
    console.log('App is listening on port 5000')
})