// toggle More/Less button to display more/less speakers
document.getElementById('more').addEventListener('click', (event) => {
  event.target.querySelector('svg').classList.toggle('fa-chevron-down');
  event.target.querySelector('svg').classList.toggle('fa-chevron-up');

  const displayMore = event.target.querySelector('svg').classList.contains('fa-chevron-down');
  event.target.firstChild.data = displayMore ? 'More ' : 'Less ';

  Array.from(document.querySelectorAll('.speaker-card:nth-child(n+3)')).forEach((element) => {
    element.style.display = displayMore ? 'none' : 'flex';
  });
});
