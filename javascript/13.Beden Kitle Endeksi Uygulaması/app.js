// Beden Kitle Endeksi Uygulaması

let kilo = Number(prompt("Kilonuzu Giriniz"));

let boy = Number(prompt("Boyunuzu Metre Cinsinden Giriniz"));

let sonuc = kilo/(boy*2);

if(sonuc<18.5){
    console.log("İdeal Kilonun Altında" + sonuc);
}
else if(sonuc>=18.5 && sonuc<=24.9){
    console.log("İdeal Kiloda" + sonuc);
}
else if(sonuc>=25 && sonuc<=29.9){
    console.log("İdeal Kilonun Üstünde" + sonuc);
}
else if(sonuc>=30 && sonuc<=39.9){
    console.log("İdeal Kilonun Çok Üstünde (Obez)" + sonuc);
}
else if (sonuc>=40){
    console.log("İdeal Kilonun Çok Üstünde (Morbid Obez)" + sonuc);
}