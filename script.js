document.addEventListener("DOMContentLoaded", () => {
  const cookieBox = document.getElementById("cookieBox");
  const acceptBtn = document.getElementById("acceptBtn");
  const closeBtn = document.getElementById("closeBtn");

  // Cek apakah user sudah setuju
  const isAccepted = localStorage.getItem("cookieAccepted");

  if (!isAccepted) {
    cookieBox.style.display = "block";
  }

  acceptBtn.addEventListener("click", () => {
    cookieBox.style.display = "none";
    localStorage.setItem("cookieAccepted", "true");
  });

  closeBtn.addEventListener("click", () => {
    cookieBox.style.display = "none";
    // Optional: kamu bisa simpan 'rejected' juga kalau mau
  });
});
