// ---- Mobile nav pill toggle (<600px) ----
const pillToggle = document.getElementById("pillToggle");
const navPanel = document.getElementById("navPanel");
const sidebar = document.getElementById("sidebar");

pillToggle.addEventListener("click", () => {
	const isOpen = navPanel.classList.toggle("open");
	sidebar.classList.toggle("open", isOpen);
	pillToggle.setAttribute("aria-expanded", isOpen);
});
