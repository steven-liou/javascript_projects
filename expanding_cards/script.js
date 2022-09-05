const panels = document.querySelectorAll('.panel');

let activePanel;

panels.forEach((panel) => {
  panel.addEventListener('click', (e) => {
    updateActivePanel(panel);
  })
})

function updateActivePanel(panel) {
  if (activePanel) {
    activePanel.classList.remove('active');
  }
  panel.classList.add('active');
  activePanel = panel;
}
