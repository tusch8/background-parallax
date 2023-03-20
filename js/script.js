/**
 * background parallax
 */
const targets = document.querySelectorAll('.js-parallax');
const parallax = () => {
	let scroll = window.scrollY;
	let windowHeight = window.innerHeight;
	let offset;
	targets.forEach((target) => {
		offset = target.offsetTop;
		if (scroll > offset - windowHeight) {
			target.style.backgroundPositionY = (scroll - offset) * .2 + 'px';
		}
	})
}

window.addEventListener('scroll', parallax, {passive: true});
parallax();
