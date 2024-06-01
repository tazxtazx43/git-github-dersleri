const sayi1 = document.getElementById('sayi1');
const sayi2 = document.getElementById('sayi2');

function topla() {
    let num1 = parseInt(sayi1.value);
    let num2 = parseInt(sayi2.value);
    sonuc.innerHTML = num1 + num2;
}
