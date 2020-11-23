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

// BMI
app.post("/bmi", (req, res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let tinggi = Number(req.body.tinggi) // mengambil nilai tinggi dari body
    let berat = Number(req.body.berat) // mengamil nilai berat dari body

    let BMI = berat / tinggi**2

    let status 
        if (BMI < 18.5) {
        status = "Kekurangan berat badan";
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        status = "Normal (Ideal)";
    } else if (BMI >= 25 && BMI <= 29.9) {
        status = "Kelebihan berat badan";
    } else {
        status = "Kegemukan Obesitas";
    }

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        tinggi: tinggi,
        berat: berat,
        bmi: BMI,
        status: status
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})
