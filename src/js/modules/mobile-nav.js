function mobileNav() {
	const KEY_ESC = 27;
	const navButton = document.querySelector('#modal-open');
	const mobileNav = document.querySelector('#mobile-nav');
	const mobileNavButton = mobileNav.querySelector('#modal-close');
	const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');

	function toggleMobileMenu () {
		mobileNav.classList.toggle('mobile-nav--open');
		mobileNavOverlay.classList.toggle('mobile-nav-overlay--open');
		document.body.classList.toggle('no-scroll');
	}

	navButton.onclick = toggleMobileMenu;
	mobileNavButton.onclick = toggleMobileMenu;
	mobileNavOverlay.onclick = toggleMobileMenu;

	document.onkeydown = (e) => {
		console.log('ECS');
		if (e.keyCode === KEY_ESC) toggleMobileMenu();
	}
}

export default mobileNav;