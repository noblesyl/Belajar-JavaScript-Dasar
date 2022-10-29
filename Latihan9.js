var array = ["ayam", "sapi", "panda", "kuala", "monyet"];
console.log(array[2]);

var binatang = [];

binatang = ["kelinci", "harimau"];

console.log(binatang[1]);

var hari = ["senin", "selasa", "rabu"];
var mhs = ["syahrul", "ricky", "adit"];
var angka = [123, 321, 111];
var cobaFunction = function(n) {
    n = alert("selamat malam" + n);
    return n;
}

var gabungan = ["hari", 10, true, cobaFunction(" syahrul")];
console.log(gabungan[3]);

var array2 = ["sabtu", "kucing", 12, cobaFunction, [1, 2, 4]];
console.log(array2[4][2]);