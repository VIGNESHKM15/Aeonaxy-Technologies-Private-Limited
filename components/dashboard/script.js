document.querySelectorAll('.parent-link').forEach(link => {
  link.addEventListener('click', () => {
      link.parentElement.classList.toggle('active'); // Toggle 'active' class on parent element
  });
});