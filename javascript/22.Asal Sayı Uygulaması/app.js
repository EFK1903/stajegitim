// Asal Sayı Bulma Uygulaması


let sayi = Number(prompt("Lütfen Bir Sayı Giriniz: "));
let sonuc = true;
for(let i=2 ; i<=Math.floor(sayi/2) ; i++){
    if(sayi%i==0){
        //Asal Değildir.
        sonuc = false;
        break;
    }
}
if(sonuc){
    alert(sayi + " asaldır.");
}else{
    alert(sayi + " asal değildir!");
}