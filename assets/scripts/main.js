const generateButton = document.querySelector("#generate_button");
const copyButton = document.querySelector("#copy_button");
const resetButton = document.querySelector("#reset_button");

function getWaktu() {
  const now = new Date();
  const hours = now.getHours();
  if (hours >= 4 && hours <= 10) {
    return "pagi";
  }

  if (hours >= 11 && hours <= 15) {
    return "siang";
  }

  if (hours >= 16 && hours <= 23) {
    return "malam";
  }
}

generateButton.addEventListener("click", function () {
  let waktu = getWaktu();
  let namaPengirim = document.querySelector("#nama_pengirim").value;
  let namaPenerima = document.querySelector("#nama_penerima").value;
  let noTelp = document.querySelector("#input_telepon").value;
  let sebutan = document.querySelector("#input_sebutan").value;

  if (namaPenerima == "" && namaPenerima == "" && noTelp == "") {
    alert("Silahkan isi form secara lengkap");
    return;
  }

  let templatePesan = document.querySelector("#input_pesan").value;
  let hasil = templatePesan
    .replace(/\[Waktu\]/g, waktu)
    .replace(/\[NamaPengirim\]/g, namaPengirim)
    .replace(/\[NamaPenerima\]/g, namaPenerima)
    .replace(/\[Sebutan\]/g, sebutan);

  let tujuan = document.querySelector("#telepon_tujuan");

  tujuan.innerText = `http://wa.me/+62${noTelp}`;
  tujuan.setAttribute("href", `http://wa.me/+62${noTelp}`);
  tujuan.setAttribute("target", "_blank");

  document.querySelector("#text_hasil").innerText = hasil;
});

copyButton.addEventListener("click", function () {
  const hasilTeks = document.querySelector("#text_hasil").innerText;

  navigator.clipboard
    .writeText(hasilTeks)
    .then(() => {
      var myModal = new bootstrap.Modal(
        document.getElementById("modal-succes-copy")
      );
      myModal.show();
    })
    .catch((err) => {
      alert("Gagal menyalin teks: " + err);
    });
});

resetButton.addEventListener("click", function () {
  // Kosongkan input setelah submit
  document.querySelector("#nama_pengirim").value = "";
  document.querySelector("#nama_penerima").value = "";
  document.querySelector("#input_sebutan").value = "";
  document.querySelector("#input_telepon").value = "";
  document.querySelector("#telepon_tujuan").innerText = "";
});