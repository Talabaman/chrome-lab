const menuButton = document.querySelector('.menu');
if ( menuButton ) {
	const menuBody = document.querySelector('.menu__list');
	menuButton.addEventListener("click", function(e) {
		menuBody.classList.toggle('active');
	});
}
