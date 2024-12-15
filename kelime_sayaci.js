// Kelime Sayacı
// Bir string alın ve kelimeleri bir array'e ayır.
// Her kelimenin kaç kez geçtiğini hesapla ve bir obje olarak sakla.

const metin = prompt("Kullanıcı metnini girebilir.");
const kelimeler = metin.split(" ");
const kelimeSayilari = {};

for (let index = 0; index < kelimeler.length; index++) {
    const kelime = kelimeler[index];

    if(kelimeSayilari[kelime]){
        kelimeSayilari[kelime] +=1;
    }
    else{
        kelimeSayilari[kelime] = 1;
    }
}
console.log(kelimeSayilari);