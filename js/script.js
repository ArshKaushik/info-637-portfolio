// ---- Render the case-study cards from data.js ----
const grid = document.getElementById("caseStudyGrid");

caseStudies.forEach((study, index) => {
	const card = document.createElement("article");
	card.className = "case-study-card" + (index === 0 ? " first" : "");
	card.tabIndex = 0;

	card.innerHTML = `
		<div class="card-image-well">
			<img src="${study.thumbnail}" alt="${study.title}" />
		</div>
		<div class="card-text">
			<h3 class="card-title">${study.title}</h3>
			<p class="card-subtitle">${study.subtitle}</p>
		</div>
   `;

	card.addEventListener("click", () => openModal(index));
	
	card.addEventListener("keydown", (event) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			openModal(index);
		}
	});
	grid.appendChild(card);
});

// ---- Modal open/close ----
const modalBackdrop = document.getElementById("modalBackdrop");
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");

function renderPointList(container, points) {
	
	const asCards = points.length > 0 && points.every((point) => point.asset);
	container.className = "point-list" + (asCards ? " cards" : "");
	container.innerHTML = "";

	points.forEach((point) => {
		if (asCards) {
			const card = document.createElement("div");
			card.className = "point-card";
			card.innerHTML = `
        	<p><span class="lead">${point.lead}</span>${point.body ? " " + point.body : ""}</p>
			<div class="point-image-well">
				<img src="${point.asset}" alt="" />
			</div>`;
			container.appendChild(card);
		} else {
			const p = document.createElement("p");
			p.innerHTML = `<span class="lead">${point.lead}</span>${point.body ? " " + point.body : ""}`;
			container.appendChild(p);
		}
	});
}

function openModal(index) {
	
	const study = caseStudies[index];

	document.getElementById("modalThumbnail").src = study.thumbnail;
	document.getElementById("modalThumbnail").alt = study.title;
	document.getElementById("modalTitle").textContent = study.title;
	document.getElementById("modalSubtitle").textContent = study.subtitle;

	const metaList = document.getElementById("modalMeta");
	metaList.innerHTML = "";
	study.meta.forEach((row, i) => {
		const rowEl = document.createElement("div");
		rowEl.className =
			"modal-meta-row" + (i < study.meta.length - 1 ? " divider" : "");
		rowEl.innerHTML = `<dt>${row.label}</dt><dd>${row.value}</dd>`;
		metaList.appendChild(rowEl);
	});

	document.getElementById("modalContext").innerHTML = study.context;
	document.getElementById("modalProblem").textContent = study.problem;
	document.getElementById("modalRealProblem").textContent = study.realProblem;
	document.getElementById("modalHardestCall").textContent = study.hardestCall;

	renderPointList(document.getElementById("modalWhatIDid"), study.whatIDid);
	renderPointList(document.getElementById("modalImpact"), study.impact);

	modalBackdrop.classList.add("open");
	document.body.style.overflow = "hidden";
	modal.scrollTop = 0;
	modalBackdrop.scrollTop = 0;
}

function closeModal() {
	modalBackdrop.classList.remove("open");
	// wait for the slide-out/fade-out transition to finish before unlocking scroll, so the page doesn't jump while the card is still animating away
	setTimeout(() => {
		document.body.style.overflow = "";
	}, 520);
}

modalClose.addEventListener("click", closeModal);

modalBackdrop.addEventListener("click", (event) => {
	if (
		event.target === modalBackdrop ||
		event.target.classList.contains("modal-center")
	) {
		closeModal();
	}
});

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape" && modalBackdrop.classList.contains("open")) {
		closeModal();
	}
});

// ---- Mobile nav pill toggle (<600px) ----
const pillToggle = document.getElementById("pillToggle");
const navPanel = document.getElementById("navPanel");
const sidebar = document.getElementById("sidebar");

pillToggle.addEventListener("click", () => {
	const isOpen = navPanel.classList.toggle("open");
	sidebar.classList.toggle("open", isOpen);
	pillToggle.setAttribute("aria-expanded", isOpen);
});
