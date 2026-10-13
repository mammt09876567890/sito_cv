document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const buttons = document.querySelectorAll('.document-button');
  const panels = document.querySelectorAll('.document-panel');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.panel;

      buttons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle('active', isActive);
        item.setAttribute('aria-selected', String(isActive));
      });

      panels.forEach((panel) => {
        const isActive = panel.id === targetId;
        panel.hidden = !isActive;
        panel.classList.toggle('active', isActive);
      });
    });
  });
});
