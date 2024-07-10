function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("theme-light")

  const img = document.querySelector('#profile img')

  if (html.classList.contains('light')) {
    img.setAttribute("src", "../assets/fotominha.jpg")
  } else {
    img.setAttribute("src", "../assets/fotominha.jpg")
  }

}