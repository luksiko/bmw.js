import { enableScroll, disableScroll } from './blockScrolled.js';

export default function modal() {
	const openModal = () => {
		modalElm.classList.remove('hidden');
		disableScroll();
	};
	const moreElms = document.querySelectorAll('.more');
	const modalElm = document.querySelector('.modal');

	const closeModal = () => {
		modalElm.classList.add('hidden');
		enableScroll();
	};

	moreElms.forEach(elm => {
		elm.addEventListener('click', openModal);
	});

	modalElm.addEventListener('click', e => {
		const target = e.target;
		if (target.classList.contains('overlay') || target.classList.contains('modal__close')) closeModal();
	});
}