

const parallax = () => {
	const targets = document.querySelectorAll('.js-parallax');
	if (!targets.length) {
		return;
	}

	const scroll = () => {
		let scroll = window.scrollY;
		let windowHeight = window.innerHeight;
		let offset;
		targets.forEach((target) => {
			offset = target.offsetTop;
			if (scroll > offset - windowHeight) {
				target.style.backgroundPositionY = (scroll - offset) * .3 + 'px';
			}
		})
	}

	window.addEventListener('scroll', scroll);
	scroll();

}

parallax();
