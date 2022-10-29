//object literal 
// function mhs(nama) {
//     console.log(nama);
//     return nama;
// }

// mhs("syahrul saleh");

// var mhs2 = {
//     nama: "syahrul",
//     jurusan: "teknik informatika",
//     email: "syahrulsaleh39@gmail.com"
// }

// console.log(mhs2);


//object didalam function deklaration  
// function dataMahasiswa(nama, jurusan, email) {
//     var mhs = {};
//     mhs.nama = nama;
//     mhs.jurusan = jurusan;
//     mhs.email = email;
//     return mhs;
// }

// var tampilkan1 = dataMahasiswa("syahrul", "teknik informatika", "syahrulsaleh39@gmail.com");
// var tampilkan2 = dataMahasiswa("ricky", "teknik informatika", "rickymahendra22@gmail.com");




// object didalam function constructor
// function mahasiswa(namas, jurusans, angkatans, emails) {
//     this.nama = namas;
//     this.jurusan = jurusans;
//     this.angkatan = angkatans;
//     this.email = emails;
// }

// var tampil = new mahasiswa("syahrul", "teknik informatika", 2019, "syahrulsaleh39@gmail.com");



// cara buat object

// cara 1
// function mhs() {
//     console.log("syahrul");
// }

// mhs();



// cara 2
// var mhs = {};
// mhs.halo = function() {
//     console.log("ricky");
// }

// mhs.halo();

function mhs() {
    console.log("saya siapa");
}

new mhs();