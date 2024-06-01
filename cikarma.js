function cikar() {
    let num1 = parseInt(document.getElementById('sayi1').value);
    let num2 = parseInt(document.getElementById('sayi2').value);
    
    if (num1 < num2) {
        alert("Çıkarma işlemi için birinci sayının ikinci sayıdan büyük olması gerekiyor!");
    } else {
        document.getElementById('sonuc').innerHTML = num1 - num2;
    }
}
