// alert("selamat datang");

// for (let nama = 0; nama < 5; nama++) {
//     alert("syahrul saleh");
// }

alert("selamat datang");
var lagi = true;
while (lagi === true) {
    var angka = prompt("masukkan angka : ");
    if (angka % 2 == 0) {
        alert("bilangan genap");
    } else {
        alert("bilangan negatif");
    }

    lagi = confirm("lagi?");
}

alert("terimakasih");