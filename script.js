(() => {
	// Resolve links from this script so they also work in subdirectories and GitHub Pages.
	const siteRoot = new URL('.', document.currentScript.src);
	const navigationItems = [
		['index.html', 'Home'],
		['games.html', 'Games'],
		['design.html', 'Design'],
		['experiences.html', 'Experience']
	];

	document.querySelectorAll('[data-navigation]').forEach((navigation) => {
		const content = document.createElement('div');
		content.className = 'nav-content';

		navigationItems.forEach(([path, label]) => {
			const link = document.createElement('a');
			link.href = new URL(path, siteRoot).href;
			link.textContent = label;

			if (path === navigation.dataset.navigation) {
				link.classList.add('active');
				if (link.pathname === window.location.pathname ||
					(path === 'index.html' && window.location.pathname === siteRoot.pathname)) {
					link.setAttribute('aria-current', 'page');
				}
			}

			content.append(link);
		});

		navigation.replaceChildren(content);
	});

	document.querySelectorAll('[data-contact]').forEach((footer) => {
		footer.innerHTML = `
		<div class="contact-content">
			<h2 class="contact-title">Contact</h2>

			<p class="contact-description">
				I’m open to Gameplay Engineer, Front-end Developer,
				Game Developer Intern, and Technical Designer Intern.
				Email is the fastest way to reach me.
			</p>

			<a class="contact-email" href="mailto:jjia@ufl.edu">
				jjia@ufl.edu
			</a>

			<p class="contact-copyright">
				©2026 Juncheng Jia
			</p>
		</div>`;
	});
})();
