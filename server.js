'use strict'
// dependencies
const express = require ('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const multer = require('multer')

const app = module.exports = express()
const upload = multer({dest: 'uploads/'})

app.use(bodyParser.json())
app.use(cors())

app.post('/upload', upload.single('file'), (req, res, next) =>  {
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
