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

// Decimal
app.post("/decimal", (req, res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let decimal = Number(req.body.decimal) // mengambil nilai sisi dari body

    bin = decimal.toString(2);
    okt = decimal.toString(8);
    dec = decimal.toString(10);
    hex = decimal.toString(16).toUpperCase();

    let biner = bin
    let oktal = okt
    let hexa = hex

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        decimal: decimal,
        biner: biner,
        oktal: oktal,
        hexadecimal : hexa
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// Biner
app.post("/biner", (req, res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let biner = Number(req.body.biner) // mengambil nilai sisi dari body


    dec = parseInt(biner, 2);

    okt = dec.toString(8);
    hex = dec.toString(16).toUpperCase();


    let oktal = okt
    let decimal = dec
    let hexa = hex

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        biner: biner,  
        oktal: oktal,
        decimal: decimal,
        hexadecimal : hexa
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// Oktal
app.post("/oktal", (req, res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let oktal = Number(req.body.oktal) // mengambil nilai sisi dari body


    dec = parseInt(oktal, 8);

    bin = dec.toString(2);
    // dec = okt.toString(10);
    hex = dec.toString(16).toUpperCase();


    let biner = bin
    let decimal = dec
    let hexa = hex

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        oktal: oktal,
        biner: biner,
        decimal: decimal,
        hexadecimal : hexa
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// Hexa
app.post("/hexa", (req, res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let hexa = req.body.hexa // mengambil nilai sisi dari body


    dec = parseInt(hexa, 16);

    bin = dec.toString(2);
    okt = dec.toString(8);

    let biner = bin
    let oktal = okt
    let decimal = dec
    // let hexa = hex

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        hexadecimal : hexa,
        biner: biner,
        oktal: oktal,
        decimal: decimal,
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})