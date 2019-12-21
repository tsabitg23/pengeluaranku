//function
function hitung(nilai1, nilai2){
    return nilai1 + nilai2;
}

let hitung = function(nilai1, nilai2){
    return nilai1 + nilai2;
}

let hitung = (nilai1, nilai2) => {
    return nilai1 + nilai2;
}

hitung = (nilai1=5, nilai2=3) => {
    let hitung = nilai1 + nilai2;
    return hitung;
}

// variable
let hasil = hitung(10);
let nama = "string";
let nilai_mtk = 100;
let apakah_cuaca_cerah = true;
let contoh_array = [70, 83, 100];
//console log untuk print nilai kedalam console
console.log(hasil);