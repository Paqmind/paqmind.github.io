window.addEventListener("DOMContentLoaded", () => {
  let nav = document.querySelector(".nav")
  document.fonts.ready.then(() => {
    initNav(nav)
  })
})

function initNav(nav) {
  let links = [...nav.querySelectorAll("a")]
  let sections = links.map(link => document.querySelector(
    link.getAttribute("href"))
  )

  // scroll to the relevant section when clicking on the link in the navigation
  links.forEach((link, index) => {
    link.addEventListener("click", (event) => {
      event.preventDefault()

      let sectionY = sections[index].getBoundingClientRect().y
      let navHeight = nav.getBoundingClientRect().height

      window.scrollTo({
        behavior: "smooth",
        top: window.scrollY + sectionY - navHeight
      })
    })
  })

  // highlight an active navigation link
  // >>>>>> START HERE <<<<<<
}
