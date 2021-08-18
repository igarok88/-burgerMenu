window.addEventListener("DOMContentLoaded", () => {
	const burger = document.querySelector(".header__burger");
	const headerMenu = document.querySelector(".header__menu");
	const body = document.querySelector("body");

	//получаем ширину скроллбара
	let div = document.createElement("div");
	div.style.overflowY = "scroll";
	div.style.width = "50px";
	div.style.height = "50px";
	// мы должны вставить элемент в документ, иначе размеры будут равны 0
	document.body.append(div);
	let scrollWidth = div.offsetWidth - div.clientWidth;
	div.remove();

	const docHeight = document.documentElement.scrollHeight;
	const winHeight = document.documentElement.clientHeight;

	burger.addEventListener("click", () => {
		burger.classList.toggle("active");
		headerMenu.classList.toggle("active");
		body.classList.toggle("lock");
		if (docHeight > winHeight && burger.className.includes("active")) {
			body.style.paddingRight = scrollWidth + "px";
		} else {
			body.style.paddingRight = 0;
		}
	});
});
