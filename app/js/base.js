// ----------------------SLIDER-hero----------------------
var swiper = new Swiper(".proposal__slider", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

//----------------------TABS-JS----------------------
const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
	const header = document.querySelector(headerSelector),
				tab = document.querySelectorAll(tabSelector),
				content = document.querySelectorAll(contentSelector);

	function hideTabContent() {
		content.forEach(item => {
			item.style.display = "none";
		});

		tab.forEach(item => {
			item.classList.remove(activeClass);
		});
	}

	function showTabContent(i = 0) {
		content[i].style.display = "block";
		tab[i].classList.add(activeClass);
	}

	hideTabContent();
	showTabContent();

	header.addEventListener('click', (e) => {
		const target = e.target;
		if (target && 
			(target.classList.contains(tabSelector.replace(/\./, '')) || 
			target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
			tab.forEach((item, i) => {
				if (target == item || target.parentNode == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});
};
tabs('.tabs', '.tabs__item', '.tabs__wrap', 'active');

	//----------------------HAMBURGER-----------------------
	const hamburger = (hamburgerButton, hamburgerNav, hamburgerHeader) => {
		const button = document.querySelector(hamburgerButton),
					nav = document.querySelector(hamburgerNav),
					header = document.querySelector(hamburgerHeader);

		button.addEventListener('click', (e) => {
			button.classList.toggle('hamburger--active');
			nav.classList.toggle('nav--active');
			header.classList.toggle('header--menu');
		});

	};
	hamburger('.hamburger', '.nav', '.header-page');