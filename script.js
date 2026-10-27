// Animasi scroll (AOS)
if (typeof AOS !== "undefined") {
  AOS.init({ duration: 800, once: true, offset: 80 });
}

// Navbar berubah saat scroll + tombol ke atas
const navbar = document.getElementById("navbar");
const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {
  if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 50);
  if (toTop) toTop.classList.toggle("show", window.scrollY > 400);
});

if (toTop) {
  toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Tutup menu mobile setelah link diklik
document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("menuNav");
    if (menu && menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

// Form kontak -> kirim ke WhatsApp
const formKontak = document.getElementById("formKontak");
if (formKontak) {
  formKontak.addEventListener("submit", (e) => {
    e.preventDefault();

    const nama = document.getElementById("nama");
    const subjek = document.getElementById("subjek");
    const pesan = document.getElementById("pesan");

    // tandai kolom yang kosong
    [nama, subjek, pesan].forEach(el => {
      el.classList.toggle("is-invalid", !el.value.trim());
    });
    if (!nama.value.trim() || !subjek.value || !pesan.value.trim()) return;

    const teks =
      "Halo Salsabilla, saya " + nama.value.trim() + ".\n" +
      "Keperluan: " + subjek.value + "\n\n" +
      pesan.value.trim();

    window.open("https://wa.me/6285893188590?text=" + encodeURIComponent(teks), "_blank");
    formKontak.reset();
    [nama, subjek, pesan].forEach(el => el.classList.remove("is-invalid"));
  });
}