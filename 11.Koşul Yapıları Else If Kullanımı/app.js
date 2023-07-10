// Else If Yapısı

/*

-               -              -
 -              -             -
   -            -            -
    -           -           -
     -          -          -
      -         -         -
      1.Yol    2.Yol    3.Yol

*/


let secilenYol = prompt("Lütfen gitmek istediğiniz yolu seçiniz:");

if(secilenYol==""){
    alert("Seçilen Yol" + secilenYol + ". yoldur.");
}
else if (secilenYol==2){
    alert("Seçilen Yol" + secilenYol + ". yoldur.");
}
else if(secilenYol==3){
    alert("Seçilen Yol" + secilenYol + ". yoldur.");
}
else{
    alert("Lütfen Geçerli Bir Yol Seçiniz !");
}