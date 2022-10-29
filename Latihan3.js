// menggunakan perulangan dan kondisi
var jumlahAngkot = 10;
for (var nomorAngkot = 1; nomorAngkot <= jumlahAngkot; nomorAngkot++) {
    if (nomorAngkot <= 6 && nomorAngkot != 5) {
        console.log("Angkot No. " + nomorAngkot + " beropperasi dengan baik")
    } else if (nomorAngkot == 5) {
        console.log("Angkot No. " + nomorAngkot + " sedang lembur")
    } else if (nomorAngkot == 8 || nomorAngkot == 10) {
        console.log("Angkot No. " + nomorAngkot + " sedang lembur")
    } else {
        console.log("Angkot No. " + nomorAngkot + " sedang tidak beropperasi")
    }
}


// menggunakan switch
var item = prompt("masukkan makanan : nasi, daging, susu, hamburger, softdrink");
switch (item) {
    case "nasi":
    case "daging":
    case "susu":
        alert("makanan sehat");
        break;
    case "hamburger":
    case "softdrink":
        alert("makanan tidak sehat");
        break;
    default:
        alert("masukkan yang ada di menu saja!!");
        break;
}