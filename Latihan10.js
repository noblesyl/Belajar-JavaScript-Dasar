var kota = ["makassar", "soppeng", "maros", "pangkep"];

for (let i = 0; i < kota.length; i++) {
    console.log("ini kota ke : " + (i + 1) + " " + kota[i]);

}

var mhs = function() {
    console.log("mahasiswa");
}

function mhs2() {
    console.log("mahasiswa syahrul");
}

mhs2();

mhs();

var hari = ["senin", "selasa", "rabu", "kamis"];

// menambahkan di belakang array
hari.push("jumat", "sabtu");
console.log(hari[4]);

// mengurangi di belakang array
// hari.pop();
// console.log(hari);

// // menambahkan di depan array
// hari.unshift("minggu");
// console.log(hari);

// // mengurangi di depan array
// hari.shift();
// console.log(hari);

// // menambahkan di tengah array
// hari.splice(2, 0, "syahrul", "saleh");
// console.log(hari);


// var mhs = ["syahrul", "ricky", "adit", "haedir"];
// mhs.splice(1, 2, "tanah");
// console.log(mhs);

// var mhs2 = mhs.slice(1, 2);
// console.log(mhs2);

















// var mhsNama = function(nama) {
//     alert("nama mahasiswa : " + nama);
// }

// // var mhsJurusan = function(jurusaan) {
// //     prompt("masukkan jurusan mhs : " + jurusaan);
// // }
// mhsNama("syahrul");