// Seleciona todos os links da navegação
const links = document.querySelectorAll('nav ul li a');

// Seleciona todas as seções
const sections = document.querySelectorAll('section');

// Adiciona um evento de clique em cada link
links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // evita que a página seja recarregada
    const href = link.getAttribute('href'); // obtém o valor do atributo href do link
    const targetSection = document.querySelector(href); // seleciona a seção correspondente
    
    // Verifica se a seção correspondente já está visível
    if (targetSection.classList.contains('oculto')) {
      // Oculta todas as outras seções e exibe a seção correspondente
      sections.forEach(section => {
        if (section !== targetSection) {
          section.classList.add('oculto');
        } else {
          section.classList.remove('oculto');
        }
      });
    }
  });
});
