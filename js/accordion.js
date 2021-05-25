export default function accordion() {
	const featureLinkElms = document.querySelectorAll('.feature__link');
	const featureSubElms = document.querySelectorAll('.feature-sub');

	for (let i = 0; i < featureLinkElms.length; i++) {
		featureLinkElms[i].addEventListener('click', (e) => {

			const target = e.target;
			if (target.closest('.feature__link_active')) {
				featureSubElms[i].classList.add('hidden');
				featureLinkElms[i].classList.remove('feature__link_active');
			} else {
				featureSubElms.forEach(featureSubElem => {
					featureSubElem.classList.add('hidden');
				});
				featureLinkElms.forEach(featureLinkElem => {
					featureLinkElem.classList.remove('feature__link_active');
				});
				featureSubElms[i].classList.remove('hidden');
				featureLinkElms[i].classList.add('feature__link_active');
			}
		});
	}
	// featureLinkElems.forEach((btn, i) => {
	//     btn.addEventListener('click', (e) => {
	//         const target = e.target
	//         if (target.closest('.feature__link_active')) {
	//             // target.classList.remove('feature__link_active')
	//             btn.classList.remove('feature__link_active')
	//             // target.closest('.feature-sub').classList.add('hidden')
	//         } else {
	//             featureSubElems.forEach(featureSubElem => {
	//                 featureSubElem.classList.add('hidden')
	//             })
	//             featureLinkElems.forEach(featureLinkElem => {
	//                 featureLinkElem.classList.remove('feature__link_active')
	//             })
	//             featureSubElems[i].classList.remove('hidden')
	//             btn.classList.add('feature__link_active')
	//         }
	//     })
	// })
}
