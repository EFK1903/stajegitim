// Dizinin Metotları
/*
push    : dizinin sonuna eleman ekler , ayrıca dizinin uzunluğunu döner
unshift : dizinin başına eleman ekler , eleman sayısını geriye döner

pop     : dizinin sonundan eleman siler , eleman sayısını döner
shift   : dizinin başından eleman siler , eleman sayısını döner

splice(index,incdex)  :eleman eklemek ve silmek için kullanılır.

toString: diziyi stringe çevirebiliriz.
join    : diziyi stringe çevirir . Farkı ise araya eleman ekleyebiliriz

concat  : dizileri birleştirmek için kullanılır.
slice(dilimlemek)   : diziyi istenilen yerden bölüp yeni bir dizi oluşturur.
length  : dizinin uzunluğunu verir.
reverse : dizinin elemanlarını ters çevirmek
split(bölmek)   : belirli bir ifadeye göre bölüp diziye çevirmek.
indexOf : elemanın index numarasını verir.
includes: verilen elemanı içeriyor mu ona bakar

*/

let arabalar = ["bmw","toyota","renault","mercedes","porsche"];
// let arabalar2 = ["hyundai","audi"];

//PUSH METOT

// console.log(arabalar.length);
// arabalar.push("opel");
// console.log(arabalar);

//UNSHIFT METOT
// arabalar.unshift("hyundai");
// console.log(arabalar);

//POP METOT
// let silinenEleman = arabalar.pop();
// console.log(arabalar);
// console.log(silinenEleman);

//SHIFT METOT
// let silinenEleman =arabalar.shift();
// console.log(arabalar);
// console.log(silinenEleman);

//SPLICE METOT
// console.log(arabalar);
// arabalar.splice(3,0,"hyundai");
// console.log(arabalar);

// arabalar.splice(1,2);
// console.log(arabalar);

// arabalar.splice(2,2,"hyundai");
// console.log(arabalar);


//TOSTRING METOT
// console.log(typeof arabalar);
// let stringArabalar = arabalar.toString();
// console.log(typeof stringArabalar);
// console.log(stringArabalar);


//JOIN METOT
// let stringArabalar = arabalar.join("?");
// console.log(stringArabalar);


//CONCAT METOT 
// let birlesmisDizi =  arabalar1.concat(arabalar2);
// console.log(birlesmisDizi);

//SLICE METOT
// console.log(arabalar);
// let ayriDizi = arabalar.slice(2);
// console.log(ayriDizi);


//LENGTH ÖZELLİK
// console.log(arabalar.length);

//REVERSE METOT
// console.log(arabalar);
// arabalar.reverse();
// console.log(arabalar);


//SPLIT METOT
// let isimler = "Enes,Ali,Veli";

//  let isimlerDizi = isimler.split(",");
//  console.log(typeof isimlerDizi);


//INDEXOF METOT

// let index = arabalar.indexOf("bmw");
// if(index==0){
//     console.log("belirtilen eleman vardır");
// }else{
//     console.log("elaman yoktur");
// }


//INCLUDES METOT

// let sonuc = arabalar.includes("renault232");
// if(sonuc){
//     console.log("eleman vardır");
// }else{
//     console.log("eleman yoktur");
// }