/**
 * Client-side Mermaid: converts ```mermaid fenced blocks (pre > code.language-mermaid)
 * into div.mermaid, then renders. Skipped in copy-button script in default.html.
 */
(function () {
	document.addEventListener('DOMContentLoaded', function () {
		if (typeof mermaid === 'undefined') return;

		mermaid.initialize({
			startOnLoad: false,
			theme: 'neutral',
			securityLevel: 'strict',
		});

		document.querySelectorAll('pre code.language-mermaid').forEach(function (code) {
			var pre = code.parentElement;
			if (!pre || pre.tagName !== 'PRE') return;
			var div = document.createElement('div');
			div.className = 'mermaid';
			div.setAttribute('role', 'img');
			div.setAttribute('aria-label', 'Diagram');
			div.textContent = code.textContent.trim();
			pre.replaceWith(div);
		});

		mermaid.run().catch(function (e) {
			console.warn('Mermaid render:', e);
		});
	});
})();
