const fs = require("fs"); // Import modul fs

async function updateJsonFile() {
  try {
    // 1. Membaca file .json
    const dataBuffer = fs.readFileSync("./dataUser.json", "utf-8");
    console.log(`Soal 1: ${dataBuffer}`);

    // 2. Merubah menjadi objek menggunakan .parse agar bisa dimanipulasi
    const dataObject = JSON.parse(dataBuffer);
    console.log(`Soal 2: ${dataObject}`);

    // 3. Merubah isi datanya 
    dataObject.pekerjaan = "Pengusaha";
    console.log(`Soal 3: ${dataObject}`);

    // 4. Merubah menjadi string
    const newData = JSON.stringify(dataObject, null, 2);

    // 5. Menyimpan kembali ke file .json
    fs.writeFileSync("./dataUser.json", newData, "utf-8");

    console.log("File berhasil diperbaharui!");
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
}

updateJsonFile();