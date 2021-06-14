const links = Array.from(document.querySelectorAll('nav a'))
const pages = Array.from(document.querySelectorAll('.page'))

// this is the function for the to listen for the scroll event

document.addEventListener('scroll', e => {
  pages.map((page, i) => {
  	// we get the current position of each page div
    const rect = page.getBoundingClientRect()

		// then check if it is the main div in view
    if (0 < rect.bottom && rect.bottom <= rect.height) {
    	// add the active class to the header, if it is
    	links[i].classList.add('active')
    } else {
    	// or remove it if not
    	links[i].classList.remove('active')
    }
  })
})