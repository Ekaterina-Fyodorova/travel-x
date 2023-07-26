function locationHover() {
	const locationLinks = document.querySelectorAll('.location__link');
	for (let locationLink of locationLinks) {
		locationLink.addEventListener('mouseover', function () {
			locationLink.parentElement.classList.add('location--hovered');
		});
		locationLink.addEventListener('mouseout', function () {
			locationLink.parentElement.classList.remove('location--hovered');
		})
	}
}

export default locationHover;
