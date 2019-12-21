function satu(){
    setTimeout(()=>{
        console.log('selesai fungsi pertama')
    }, 3000)
}

function dua(){
    setTimeout(()=>{
        console.log('selesai fungsi kedua')
    }, 1500)
}

function tiga(){
    setTimeout(()=>{
        console.log('selesai fungsi tiga')
    }, 1000)
}

satu();
dua();
tiga();