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
    
    // Esconde todas as seções, exceto a correspondente ao link clicado
    sections.forEach(section => {
      if (section !== targetSection) {
        section.classList.add('oculto');
      }
    });
    
    // Verifica se a seção correspondente está oculta
    if (targetSection.classList.contains('oculto')) {
      targetSection.classList.remove('oculto'); // exibe a seção
    } else {
      targetSection.classList.add('oculto'); // oculta a seção
    }
  });
});
