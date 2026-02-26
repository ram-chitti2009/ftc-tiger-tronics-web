export function scrollToSection(id: string) {
  const element = document.getElementById(id)
  if (element) {
    const navbarHeight = 80
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - navbarHeight
    window.scrollTo({ top: offsetPosition, behavior: "smooth" })
  }
}
