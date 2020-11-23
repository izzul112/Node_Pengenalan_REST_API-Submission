const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({ extended: true }))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// Celcius

app.get("/convert/celcius/:suhu", (req, res) => {
    
    // Ambil data celcius dari body
    let suhu = Number(req.params.suhu)
    
    // Konversi ke Reamur 
    let reamur = suhu / 5 * 4

    // Konversi ke fahrenheit
    let fahrenheit = (suhu / 5 * 9) + 32

    // Konversi ke Kelvin
    let kelvin = suhu + 273

    let celcius = String(suhu)

    let result = {
        reamur: reamur,
        fahrenheit: fahrenheit,
        kelvin: kelvin
    }

    let response = {
        celcius: celcius,
        result: result
    }

    res.json(response)
})

// Reamur

app.get("/convert/reamur/:suhu", (req, res) => {
    
    // Ambil data reamur dari body
    let suhu = Number(req.params.suhu)
    
    // Konversi ke celcius 
    let celcius = suhu / 4 * 5

    // Konversi ke fahrenheit
    let fahrenheit = (suhu / 4 * 9) + 32

    // Konversi ke Kelvin
    let kelvin = (suhu / 4 * 5) + 273

    let reamur = String(suhu)

    let result = {
        cecius: celcius,
        fahrenheit: fahrenheit,
        kelvin: kelvin
    }

    let response = {
        reamur: reamur,
        result: result
    }

    res.json(response)
})

// Kelvin

app.get("/convert/kelvin/:suhu", (req, res) => {
    
    // Ambil data kelvin dari body
    let suhu = Number(req.params.suhu)
    
    // Konversi ke Reamur 
    let reamur = (suhu - 273) / 5 * 4

    // Konversi ke fahrenheit
    let fahrenheit = (suhu - 273) / 5 * 9 + 32

    // Konversi ke celcius
    let celcius = suhu - 273

    let kelvin = String(suhu)

    let result = {
        celcius: celcius,
        fahrenheit: fahrenheit,
        reamur: reamur
    }

    let response = {
        kelvin: kelvin,
        result: result
    }

    res.json(response)
})

// Fahrenheit

app.get("/convert/fahrenheit/:suhu", (req, res) => {
    
    // Ambil data kelvin dari body
    let suhu = Number(req.params.suhu)
    
    // Konversi ke Reamur 
    let reamur = (suhu - 32) / 9 * 4

    // Konversi ke fahrenheit
    let kelvin = (suhu - 32) / 9 * 5 + 273 

    // Konversi ke celcius
    let celcius = (suhu - 32) / 9 * 5

    let fahrenheit = String(suhu)

    let result = {
        celcius: celcius,
        reamur: reamur,
        kelvin: kelvin
    }

    let response = {
        fahrenheit: fahrenheit,
        result: result
    }

    res.json(response)
})

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})