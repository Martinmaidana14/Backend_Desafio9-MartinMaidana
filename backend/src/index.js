
import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 4000

const whiteList = ['http://127.0.0.1:5500']

const corsOptions = {
    /*origin: (origin, callback) => {
        console.log(origin)
        if (!origin || whiteList.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error("No autorizado por politicas de cors"))
        }
    }*/
    origin: '*'
}

app.use(cors(corsOptions))

app.get('/saludo', (req, res) => {
    res.status(200).send({ mensaje: "Hola desde mi servidor!" })
})

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})