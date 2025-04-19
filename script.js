
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: "smooth" });
}

document.getElementById('languageToggle').addEventListener('click', () => {
  const currentText = document.getElementById('languageToggle').textContent;
  document.getElementById('languageToggle').textContent =
    currentText.includes('ENGLISH')
      ? '🌐 ESPAÑOL / INGLES (ENGLISH)'
      : '🌐 ENGLISH / ESPAÑOL';
});
