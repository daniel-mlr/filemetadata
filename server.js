'use strict'
// dependencies
process.env.CWD = process.cwd()
const express = require ('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const multer = require('multer')

const app = module.exports = express()
const upload = multer({dest: 'uploads/'})

app.use(bodyParser.json())
app.use(cors())
app.use(express.static(process.env.CWD + '/public'))

app.post('/upload', upload.single('file'), (req, res, next) =>  {
    return res.json({ size: req.file.size })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
