const nama = document.querySelector('input[name="nama"]');
const nim = document.querySelector('input[name="nim"]');
const gender = document.querySelectorAll('input[name="gender"]');
const prodi = document.querySelector("select#prodi");
const button = document.querySelector(".btn");
const password = document.querySelector('input[name="password"]');
const konfirmasiPassword = document.querySelector("#konfirmasiPassword");
const buttonRegister = document.querySelector("div.hero div.container a");

const validateName = document.querySelector("#validate-nama p");
const validateNim = document.querySelector("#validate-nim p");
const validateGender = document.querySelector("#validate-gender p");
const validateProdi = document.querySelector("#validate-prodi p");
const validatePassword = document.querySelector("#validate-conf-password p");

const fieldset = document.querySelector("fieldset");
buttonRegister.addEventListener("click", () => {
  window.scrollTo({
    top: 500,
    behavior: "smooth",
  });
});

button.addEventListener("click", function () {
  // Cek input nama
  var validasiAngka = /^[0-9]+$/;

  var validasiAngkaDua = /\D+/g;

  if (nama.value === "") {
    validateName.textContent = "Inputan Harus diisi";
    return;
  }
  if (nama.value.match(validasiAngka)) {
    validateName.textContent = "Jangan memasukkan angka diisian nama";
    return;
  }

  // Cek NIM
  console.log(nim.value + " " + nim.value.length);
  const cekAngka = /[0-9]$/g;
  if (nim.value === "") {
    validateNim.textContent = "masih kosong";
    return;
  }
  if (nim.value.match(cekAngka) && nim.value.length != 12) {
    validateNim.textContent = "angka harus berjumlah 12";
    return;
  }
  // cek isian gender
  if (!gender[0].checked & !gender[1].checked) {
    validateGender.textContent = "Pilih Woi";
    return;
  }

  // Cek pilihan Prodi
  if (prodi === "") {
    validateProdi.textContent = "pilih Woi";
    return;
  }

  // Cek isian konfirmasi password (konfirmasi password sudah sesuai atau belum)
  if (password.value !== konfirmasiPassword.value) {
    validatePassword.textContent = "passwordnya harus sama woi";
    return;
  }

  validateNim.textContent = "";
  validateGender.textContent = "";
  validateProdi.textContent = "";
  validatePassword.textContent = "";
  validateName.textContent = "";
  fieldset.innerHTML = "<h2>Berhasil Registerasi</h2>";
});
