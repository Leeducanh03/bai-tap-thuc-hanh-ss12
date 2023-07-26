let a = 0; // số f n-2
let b = 1; // số f n-1
for (i = 0; i < 20; i++) {
    if (i == 0) {
        // f0 = 0
        console.log(a);
    } else if (i == 1) {
        // f1 = 1 
        console.log(b);
    } else {
        let c = a + b
        a = b;
        b = c;
        console.log(c);
        // fn = fn - 1 + fn - 2
    }
}