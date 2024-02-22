const colors = ["#24d05a", "#eb4888", "#10a2f5", "#e9bc3f"];

(function () {
	setRandomLinkColor();
	setColorHoverListener();
	setBioEventListener();

	setInterval(() => {
		setRandomLinkColor();
	}, 5000);
})();

/* Colors */

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}

function setRandomLinkColor() {
	Array.from(document.getElementsByTagName("a")).forEach((e) => {
		e.style.textDecorationColor = getRandomColor();
	});
}

function setColorHoverListener() {
	Array.from(document.querySelectorAll("a, button")).forEach((e) => {
		e.addEventListener("mouseover", setRandomLinkColor);
	});
}

/* Bio Toggles */

function setBioEventListener() {
	Array.from(document.getElementsByTagName("button")).forEach((e) => {
		e.addEventListener("click", bioToggle);
	});
}

function bioToggle(e) {
	let bioType = e.target;
	let color = getRandomColor();
	off();
	bioType.style.cssText = `border-color: ${color}; color: ${color}; font-weight: bold;`;
	let bioTypeElement = document.getElementsByClassName(bioType.id)[0];
	if (bioTypeElement !== undefined) bioTypeElement.classList.add("show");
}

function off() {
	Array.from(document.getElementsByTagName("button")).forEach((butt) => {
		butt.style.borderColor = "#96979c";
		butt.style.color = "#96979c";
	});
	Array.from(document.getElementsByClassName("bio")).forEach((e) => {
		e.classList.remove("show");
	});
}
