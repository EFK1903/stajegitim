// Çoklu If Kullanımı

/*

Ad Ve TCKN 

Ad : Boş Bırakılamaz
TCKN : 11 Haneden Oluşmalıdır

*/

let ad = prompt("İsminizi Giriniz:");
let tckn = prompt("TCKN Giriniz:");

// kontrolEt(ad,tckn);

kontrolEt2(ad,tckn);

// function kontrolEt(ad , tckn){

//     if(ad!=""){
//         if(tckn.length ==11){
//             console.log("İsim ve TCKN Sorunsuz Girildi");
//         }
//         else{
//             console.log("Lütfen Tc'nizi 11 Haneli Olarak Giriniz!");
//         }
//     }else{
//         console.log("Lütfen İsim Alanını Boş Bırakmayınız!");
//     }
// }



function kontrolEt2(ad , tckn){
    if(ad==""){
        console.log("Lütfen İsim Alanını Boş Bırakmayınız!");
        return;
    }

    if(tckn.length!==11){
        console.log("Lütfen Tc'nizi 11 Haneli Olarak Giriniz!");
        return;
    }

    console.log("İsim Ve TCKN Sorunsuz Girildi!");
}