const sliderReviews = () => {
	let swiper2 = new Swiper('.slider-reviews-2', {
		slidesPerView: 2,
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination--reviews',
			clickable: true,
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

export default sliderReviews;