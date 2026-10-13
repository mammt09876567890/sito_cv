document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const buttons = document.querySelectorAll('.document-button');
  const panels = document.querySelectorAll('.document-panel');
  const glassFrame = document.querySelector('.portrait-frame');
  const glassScene = document.querySelector('.glass-scene');

  if (glassFrame && glassScene && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    glassFrame.addEventListener('pointermove', (event) => {
      const bounds = glassFrame.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      glassScene.style.setProperty('--scene-y', `${x * 12}deg`);
      glassScene.style.setProperty('--scene-x', `${y * -12}deg`);
    });

    glassFrame.addEventListener('pointerleave', () => {
      glassScene.style.setProperty('--scene-y', '0deg');
      glassScene.style.setProperty('--scene-x', '0deg');
    });
  }

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
