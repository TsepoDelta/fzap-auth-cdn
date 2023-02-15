const passwordInput = document.getElementById("password");
const passwordVisibilityToggle = document.getElementById("togglePassword");
passwordVisibilityToggle.addEventListener("click", () => {
  const type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.type = type;
  passwordVisibilityToggle.classList.toggle("bi-eye");
  passwordVisibilityToggle.classList.toggle("bi-eye-slash");
});
