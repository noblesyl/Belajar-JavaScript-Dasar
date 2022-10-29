// var s = '';
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j <= i; j++) {
//         s += '*';
//     }
//     s += '\n';
// }

// console.log(s);

// var a = '';
// for (let d = 5; d > 0; d--) {
//     for (let h = 0; h < d; h++) {
//         a += '*';
//     }
//     a += '\n';
// }

// console.log(a);

var a = '';
for (var d = 5; d > 0; d--) {
    for (var h = 0; h < d; h++) {
        a += '#';
    }
    for (var j = 0; j < 5; j++) {
        for (var i = 0; i <= j; i++) {
            a += '*';

        }
    }
    a += '\n';
}

console.log(a);