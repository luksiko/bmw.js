export default function () {
	const tabsHandlerElms = document.querySelectorAll('[data-tabs-handler]');
	const tabsFieldElms = document.querySelectorAll('[data-tabs-field]');

	for (const tab of tabsHandlerElms) {
		tab.addEventListener('click', () => {
			tabsHandlerElms.forEach(item => {
				if (tab === item) {
					item.classList.add('design-list__item_active');
				} else {
					item.classList.remove('design-list__item_active');
				}
			});
			tabsFieldElms.forEach(item => {
				if (item.dataset.tabsField === tab.dataset.tabsHandler) {
					item.classList.remove('hidden');
				} else {
					item.classList.add('hidden');
				}
			});
		});
	}
}