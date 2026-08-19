(function () {
  function loadMermaid(callback) {
    if (window.mermaid) {
      callback();
      return;
    }
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js';
    script.onload = callback;
    document.head.appendChild(script);
  }

  function renderMermaid() {
    var blocks = document.querySelectorAll('pre code.language-mermaid');
    if (!blocks.length) return;

    blocks.forEach(function (code) {
      var pre = code.parentElement;
      var container = document.createElement('div');
      container.className = 'mermaid';
      container.textContent = code.textContent;
      pre.replaceWith(container);
    });

    window.mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'strict',
      theme: document.documentElement.classList.contains('navy') ? 'dark' : 'default',
      flowchart: { useMaxWidth: true, htmlLabels: true }
    });

    window.mermaid.run({ querySelector: '.mermaid' });
  }

  document.addEventListener('DOMContentLoaded', function () {
    loadMermaid(renderMermaid);
  });
})();
