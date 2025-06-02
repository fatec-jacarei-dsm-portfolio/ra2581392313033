function showSubsection(id) {
  const sections = document.querySelectorAll('.project-subsection');
  sections.forEach(section => section.classList.remove('active'));

  const activeSection = document.getElementById(id);
  if (activeSection) {
    activeSection.classList.add('active');
  }

  // Atualiza os botões
  const buttons = document.querySelectorAll('#project-tabs button');
  buttons.forEach(button => {
    if (button.getAttribute('data-target') === id) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

// Espera o DOM estar carregado antes de ativar eventos
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll('#project-tabs button');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const target = this.getAttribute('data-target');
      showSubsection(target);
    });
  });

  // Inicializa com seção acadêmica
  showSubsection('academic');
});
