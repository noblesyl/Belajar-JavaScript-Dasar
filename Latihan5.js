var ulang = true;
while (ulang) {
    var p = prompt(" Pilih : GAJAH, SEMUT, ORANG");
    var com = Math.random();


    if (com < 0.34) {
        com = "gajah";
    } else if (com >= 0.34 && com < 0.67) {
        com = "orang";
    } else {
        com = "semut";
    }


    var hasil = "";
    if (p == com) {
        hasil = "SERI";
    } else if (p == "orang") {
        if (com == "gajah") {
            hasil = "KALAH!";
        } else {
            hasil = "MENANG";
        }
    } else if (p == "gajah") {
        if (com == "orang") {
            hasil = "MENANG";
        } else {
            hasil = "KALAH!";
        }
    } else if (p == "semut") {
        if (com == "gajah") {
            hasil == "MENANG";
        } else {
            hasil = "KALAH!";
        }
    }
    alert("Pilihan kamu " + p + " Pilihan Komputer " + com + " hasilnya = " + hasil);
    ulang = confirm("Mau Ulang I ? ");

}

alert("TERIMAKASIH SUDAH BERMAIN")