function smoothScroll(SPEED = 0.5) {
	const scrolled = event => {
		const target = event.target;
		if (target.matches('[href^="#"]')) {
			event.preventDefault();
			let start = 0;
			const pageY = window.pageYOffset;
			const id = target.getAttribute('href');
			if (id === '#') return;

			const coordinatesElem = document.querySelector(id).getBoundingClientRect().top;

			const step = time => {
				if (!start) start = time;
				const progress = time - start;
				const r = (coordinatesElem < 0 ?
					Math.max(pageY - progress / SPEED, pageY + coordinatesElem) :
					Math.min(pageY + progress / SPEED, pageY + coordinatesElem));
				window.scrollTo(0, r);
				if (r < pageY + coordinatesElem) requestAnimationFrame(step);
			};
			requestAnimationFrame(step);
		}
	};
	document.body.addEventListener('click', scrolled);
	/* // для новых браузеров
	const smoothScrollElms = document.querySelectorAll('a[href^="#"]:not(a[href="#"])')

	smoothScrollElms.forEach(link => {
		link.addEventListener('click', e => {
			e.preventDefault();
			// берем атрибут, обрезаем его # чтобы использовать его как id
			const id = link.getAttribute('href').substring(1)
			// новая функция scrollIntoView в браузерах
			document.getElementById(id).scrollIntoView({
				behavior: "smooth"
			})
		})
	})*/
}

export default smoothScroll;

