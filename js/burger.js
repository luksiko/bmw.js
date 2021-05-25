export default function burger() {
	const menuElm = document.querySelector('.menu');
	const hamburgerElm = document.querySelector('.humburger-menu');

	const toggleMenu = () => {
		menuElm.classList.toggle('menu-active');
		hamburgerElm.classList.toggle('humburger-menu-active');
		if (menuElm.classList.contains('menu-active')) {
			document.body.addEventListener('click', closeMenu);
			window.addEventListener('scroll', closeMenu);
		} else {
			document.body.removeEventListener('click', closeMenu);
			window.removeEventListener('scroll', closeMenu);
		}
	};
	const closeMenu = e => {
		const target = e.target;
		if (target !== menuElm && target !== hamburgerElm) {
			menuElm.classList.remove('menu-active');
			hamburgerElm.classList.remove('humburger-menu-active');
		}
	};
	menuElm.addEventListener('click', toggleMenu);
	hamburgerElm.addEventListener('click', toggleMenu);
}



