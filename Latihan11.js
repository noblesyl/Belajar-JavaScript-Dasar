// var nama = ['syahrul saleh', 'ricky', 'dian'];


// // forEach perulangan yang lebih simple
// nama.forEach(function mhs(a, j) {
//     return console.log("mahasiswa ke : " + (j + 1) + " " + a);
// });


// var mhs2 = function(e) {
//     console.log(e);
// }

// for (let i = 1; i <= 10; i++) {
//     mhs2("mahasiswa ke : " + i);

// }



// var angka = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(angka);

// angka.push(9, 10);
// console.log(angka);
// angka.pop();
// console.log(angka);
// angka.unshift(0);
// console.log(angka);
// angka.shift();

// var angka = [1, 7, 3, 4, 9, 6, 2, 8, 5];

// var angka2 = angka.map(function(a) {
//     return a + 2;
// })

// console.log(angka2.join(' - '));

// console.log(angka);

// angka.sort();
// console.log(angka);

// var mhs = ["syahrul", "ricky", "adit", "sinar"];
// mhs.push("syahrul");
// console.log(mhs);
// mhs.pop();
// console.log(mhs);
// mhs.unshift("yuli");
// console.log(mhs);
// mhs.shift();
// console.log(mhs);

// var angka = [1, 3, 5, 4, 6, 7, 8, 9, 2];


// forEach
// angka.forEach(function(e, i) {
//     console.log("mahasiswa ke : " + (i + 1) + " adalah : " + e)
// })

// Map
// var hitung = angka.map(function(e) {
//     return e + 2;
// })

// console.log(hitung);

// angka.sort();
// console.log(angka);

var angka = [1, 2, 3, 4, 5, 10, 14, 15, 11, 9, 6];

var hitung = angka.filter(function(e) {
    return e > 10;
})

console.log(hitung.join(" - "));