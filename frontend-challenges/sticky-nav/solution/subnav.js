window.addEventListener("DOMContentLoaded", () => {
  initSectionNav("section2")
})

function initSectionNav(sectionId) {
  let section = document.getElementById(sectionId)
  let nav = section.querySelector(".subnav")
  let links = [...nav.querySelectorAll("a")]
  let subSections = links.map(link => section.querySelector(
    link.getAttribute("href"))
  )

  links.forEach((link, index) => {
    link.addEventListener("click", (event) => {
      event.preventDefault()

      window.scrollTo({
        behavior: "smooth",
        top: window.scrollY
          + subSections[index].getBoundingClientRect().y
          - nav.getBoundingClientRect().height
     })
    })
  })


  // Option #1: onScroll
  // window.addEventListener("scroll", () => {
  //
  //   // y <= 0 && (y + height > 0)
  //   // y <= intersection && (y + height > intersection)
  //
  //   let active = -1
  //   let buffer = 4
  //   active = subSections.findIndex((subSection, index) => {
  //     let y = subSection.getBoundingClientRect().y
  //     let height = subSection.getBoundingClientRect().height
  //     let intersectionY = nav.getBoundingClientRect().height + buffer
  //
  //     if (y <= intersectionY && (y + height > intersectionY)) {
  //       return true
  //     }
  //   })
  //
  //   links.forEach(link => {link.classList.remove("active")})
  //   if (active >= 0) links[active].classList.add("active")
  // })



  // Option #2: Intersection Observer
  let navHeight = nav.getBoundingClientRect().height
  let screenHeight = document.documentElement.clientHeight
  let buffer = 4
  let options = {
    rootMargin: `
    -${navHeight + buffer}px 
    0px 
    -${screenHeight - navHeight - buffer}px 
    0px`,
  }

  let currentId = null
  let observer = new IntersectionObserver(
     (entries) => {
      entries.forEach(entry => {
        if (currentId != entry.target.id && entry.isIntersecting) {
           currentId = entry.target.id
           section.querySelector("a.active")?.classList.remove("active")
           section.querySelector(`a[href="#${currentId}"]`)
             .classList.add("active")
         } else if (currentId == entry.target.id && !entry.isIntersecting) {
           section.querySelector("a.active").classList.remove("active")
           currentId = null
         }
       })
     }, options
   )
  subSections.forEach((s) => {observer.observe(s)})
}
