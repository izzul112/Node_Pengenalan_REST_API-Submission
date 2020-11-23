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


// KUBUS
app.post("/kubus", (req, res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let sisi = Number(req.body.sisi) // mengambil nilai sisi dari body

    let volume = sisi * sisi * sisi
    let luasPermukaan = 6 * sisi * sisi

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        sisi: sisi,
        volume: volume,
        luasPermukaan: luasPermukaan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})


// BALOK
app.post("/balok", (req, res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body
    let tinggi = Number(req.body.tinggi) // mengamil nilai tinggi dari body

    let volume = panjang * lebar * tinggi
    let luasPermukaan = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        volume: volume,
        luasPermukaan: luasPermukaan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})


// TABUNG
app.post("/tabung", (req, res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let jari_jari = Number(req.body.jari_jari) // mengambil nilai jari_jari dari body
    let tinggi = Number(req.body.tinggi) // mengamil nilai tinggi dari body

    let volume = 3.14 * jari_jari * jari_jari * tinggi
    let luasPermukaan = 2 * 3.14 * jari_jari * tinggi

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        jari_jari: jari_jari,
        tinggi: tinggi,
        volume: volume,
        luasPermukaan: luasPermukaan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})


// KERUCUT
app.post("/kerucut", (req, res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let jari_jari = Number(req.body.jari_jari) // mengambil nilai jari_jari dari body
    let tinggi = Number(req.body.tinggi) // mengamil nilai tinggi dari body
    let sisiMiring = Number(req.body.sisiMiring) // mengamil nilai sisiMiring dari body

    let volume = 1 / 3 * 3.14 * jari_jari * jari_jari * tinggi
    let luasPermukaan = 3.14 * jari_jari * (jari_jari + sisiMiring)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        jari_jari: jari_jari,
        tinggi: tinggi,
        sisiMiring: sisiMiring,
        volume: volume,
        luasPermukaan: luasPermukaan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})


// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})
