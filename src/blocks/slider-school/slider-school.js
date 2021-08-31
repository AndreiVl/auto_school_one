const sliderSchool = () => {
	let swiper = new Swiper('.slider-school-2', {
		slidesPerView: 2,
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination--school',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				slidesPerGroup: 1,
			},
			1199: {
				slidesPerView: 1,
				slidesPerGroup: 1,
			},
			1200: {
				slidesPerView: 3,
				slidesPerGroup: 3,
			}
		},
	});
};

export default sliderSchool;

