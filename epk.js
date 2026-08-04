// Dastonia EPK — bio expand/collapse + footer year
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.bio-toggle');
  const longBio = document.getElementById('bio-long');

  if (!toggle || !longBio) return;

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    longBio.hidden = expanded;
    toggle.querySelector('.arrow').textContent = expanded ? '↓' : '↑';
    toggle.firstChild.textContent = expanded ? 'Read full bio ' : 'Show less ';
  });

  // "Download PDF" — opens the browser print dialog with a compact,
  // two-column one-page layout (see @media print in epk.css). The user
  // picks "Save as PDF" as the destination. Includes the same content as
  // the web EPK, always in sync since nothing is duplicated into a
  // separate static file.
  const downloadBtn = document.getElementById('download-pdf-btn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      window.print();
    });
  }
});