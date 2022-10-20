// open the mobile menu while clicking the hamburger menu
document.getElementById('hamburger-menu').addEventListener('click', () => {
  document.querySelector('.mobile-menu').style.display = 'flex';
});

// close the mobile menu while clicking any link inside
Array.from(document.querySelectorAll('.mobile-menu a')).forEach((element) => {
  element.addEventListener('click', () => {
    document.querySelector('.mobile-menu').style.display = 'none';
  });
});
