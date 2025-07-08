const generateButton = document.querySelector("#generate_button");
const copyButton = document.querySelector("#copy_button");

generateButton.addEventListener("click", function () {
  let namaPengirim = document.querySelector("#nama_pengirim").value;
  let namaPenerima = document.querySelector("#nama_penerima").value;
  let noTelp = document.querySelector("#input_telepon").value;
  let sebutan = document.querySelector("#input_sebutan").value;

  let templatePesan = document.querySelector("#input_pesan").value;
  let hasil = templatePesan
    .replace(/\[NamaPengirim\]/g, namaPengirim)
    .replace(/\[NamaPenerima\]/g, namaPenerima)
    .replace(/\[Sebutan\]/g, sebutan);

  let tujuan = document.querySelector("#telepon_tujuan");

  tujuan.innerText = `http://wa.me/+62${noTelp}`;
  tujuan.setAttribute("href", `http://wa.me/+62${noTelp}`);

  document.querySelector("#text_hasil").innerText = hasil;

  // Kosongkan input setelah submit
  document.querySelector("#nama_pengirim").value = "";
  document.querySelector("#nama_penerima").value = "";
  document.querySelector("#input_sebutan").value = "";
});

copyButton.addEventListener("click", function () {
  const hasilTeks = document.querySelector("#text_hasil").innerText;

  navigator.clipboard.writeText(hasilTeks);
});
