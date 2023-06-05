const CLASSNAMES = {
  ACTIVE: 'active',
  SCROLLING_ACTIVE: 'scrolling-active',
  NAV_LINK: 'nav-link',
  NAV_BRAND: 'navbar-brand'
}

const IDS = {
  NAV_GLASS: 'nav-glass'
}

const navLinksElements = document.getElementsByClassName(CLASSNAMES.NAV_LINK)
const navBrand = document.getElementsByClassName(CLASSNAMES.NAV_BRAND)
const sectionsElements = document.getElementsByTagName('section')

const navbar = document.getElementById(IDS.NAV_GLASS)
const navLinks = Array.from(navLinksElements)
navLinks.push(navBrand[0])
const sections = Array.from(sectionsElements)

const firstSection = sections[0]
const navBarTotalHeight = 128
let activeLinkIndex = 0

function handleScroll () {
  const currentPos = window.scrollY
  const top = firstSection.offsetTop

  if (currentPos === top) {
    navbar.classList.remove(CLASSNAMES.SCROLLING_ACTIVE)
    return
  }

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    if (currentPos + navBarTotalHeight >= sectionTop && currentPos < sectionTop + sectionHeight) {
      activeLinkIndex = index
      navbar.classList.add(CLASSNAMES.SCROLLING_ACTIVE)
    }
  })

  navLinks.forEach((navLink, index) =>
    index === activeLinkIndex
      ? navLink.classList.add(CLASSNAMES.ACTIVE)
      : navLink.classList.remove(CLASSNAMES.ACTIVE)
  )
}

const handleNavLinkClick = (event) => {
  event.preventDefault()

  const target = event.target
  const targetHref = target.getAttribute('href')
  const targetElement = document.getElementById(targetHref.replace('#', ''))

  targetElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}


navLinks.forEach(navLink => navLink.addEventListener('click', handleNavLinkClick))
window.addEventListener('scroll', handleScroll)