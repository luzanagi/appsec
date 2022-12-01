export function sumar(a,b){
    return a + b
}

export function sum(a,b){
    return a + b
}

export function returnRedunt(a) {
    let b = 12;
    if (a) {
        return b;
    }
    return b;
}

export function pickNumber() {
    let i = 0;
    i = i++; // Noncompliant; i is still zero

    return i++; // Noncompliant; 0 returned
}
