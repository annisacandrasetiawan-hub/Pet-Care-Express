document.addEventListener('DOMContentLoaded', function () {
  const btnCalculate = document.getElementById('btn-calculate');

  btnCalculate.addEventListener('click', function () {
    // 1. Ambil nilai input dari elemen formulir
    const packagePrice = parseFloat(document.getElementById('package').value);
    const quantity = parseInt(document.getElementById('quantity').value, 10);
    const promoCode = document.getElementById('promo').value.trim().toUpperCase();

    // Validasi input angka dasar
    if (isNaN(quantity) || quantity <= 0) {
      alert('Silakan masukkan jumlah hari atau jumlah hewan yang valid.');
      return;
    }

    // 2. Logika Perhitungan (SE 1 & SE 2)
    const subtotal = packagePrice * quantity;
    let discount = 0;

    // Diskon 10% jika kode promo sesuai "CARINGPET" atau memesan 3 item/hari atau lebih
    if (promoCode === 'CARINGPET' || quantity >= 3) {
      discount = subtotal * 0.10; // Potongan 10%
    }

    const total = subtotal - discount;

    // 3. Format Mata Uang Rupiah
    const formatRupiah = (number) => {
      return 'Rp ' + number.toLocaleString('id-ID');
    };

    // 4. Tampilkan Hasil Ke Layar Web
    document.getElementById('res-subtotal').innerText = formatRupiah(subtotal);
    document.getElementById('res-discount').innerText = formatRupiah(discount);
    document.getElementById('res-total').innerText = formatRupiah(total);

    // Tampilkan kotak hasil yang sebelumnya tersembunyi
    const resultBox = document.getElementById('result-box');
    resultBox.classList.remove('hidden');
  });
});
