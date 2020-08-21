const nama = document.querySelector('input[name="nama"]');
const nim = document.querySelector('input[name="nim"]');
const gender = document.querySelectorAll('input[name="gender"]');
const prodi = document.querySelector("select").value;
const button = document.querySelector(".btn");
const password = document.querySelector('input[name="password"]').value;
const validateName = document.querySelector("#validate-nama p");
const validateNim = document.querySelector("#validate-nim p");
const konfirmasiPassword = document.querySelector(
  'input[name="konfirmasiPassword"]'
).value;

button.addEventListener("click", function () {
  // Cek input nama
  var validasiAngka = /^[0-9]+$/;
  var validasiAngkaDua = /\D+/g;
  if (nama.value === "") {
    validateName.textContent = "Inputan Harus diisi";
  } else if (nama.value.match(validasiAngkaDua)) {
    validateName.textContent = "Jangan memasukkan angka diisian nama";
  } else {
    validateName.textContent = "";
  }

  // Cek NIM
  console.log(nim.value + " " + nim.value.length);
  const cekAngka = /[0-9]$/g;
  if (nim.value === "") {
    validateNim.textContent = "masih kosong";
  } else if (nim.value.match(cekAngka) && nim.value.length != 12) {
    validateNim.textContent = "angka harus berjumlah 12";
  } else {
    validateNim.textContent = "Tidak valid";
  }

  // cek isian gender
  if (!gender[0].checked & !gender[1].checked) {
    alert("Pilih salah satu gender");
  }

  // Cek pilihan Prodi
  if (prodi == "") {
    alert("Pilih salah satu prodi");
  }

  // Cek isian konfirmasi password (konfirmasi password sudah sesuai atau belum)
  if (password != konfirmasiPassword) {
    alert("Konfirmasi password tidak sesuai dengan password asli");
  }
});
