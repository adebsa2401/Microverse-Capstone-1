// speakers data array
const SPEAKERS = [
  {
    photo: 'speaker_01.png',
    name: 'Yochai Benkler',
    role: 'Berkman Professor of Entrepreunarial Legal Studies at Havard Law School',
    description: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.',
  },
  {
    photo: 'speaker_01.png',
    name: 'Yochai Benkler',
    role: 'Berkman Professor of Entrepreunarial Legal Studies at Havard Law School',
    description: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.',
  },
  {
    photo: 'speaker_01.png',
    name: 'Yochai Benkler',
    role: 'Berkman Professor of Entrepreunarial Legal Studies at Havard Law School',
    description: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.',
  },
  {
    photo: 'speaker_01.png',
    name: 'Yochai Benkler',
    role: 'Berkman Professor of Entrepreunarial Legal Studies at Havard Law School',
    description: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.',
  },
  {
    photo: 'speaker_01.png',
    name: 'Yochai Benkler',
    role: 'Berkman Professor of Entrepreunarial Legal Studies at Havard Law School',
    description: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.',
  },
  {
    photo: 'speaker_01.png',
    name: 'Yochai Benkler',
    role: 'Berkman Professor of Entrepreunarial Legal Studies at Havard Law School',
    description: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.',
  },
];

function getSpeakerCard(speaker) {
  const card = document.createElement('div');

  card.innerHTML = `
    <div class="speaker-card">
      <img src="assets/images/speakers/${speaker.photo}" alt="speaker-img"/>
      <div class="speaker-info">
        <h3 class="speaker-name">${speaker.name}</h3>
        <p class="speaker-role">
          ${speaker.role}
        </p>
        <hr/>
        <p class="speaker-description">
          ${speaker.description}
        </p>
      </div>
    </div>
  `.trim();

  return card.firstChild;
}

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

// load dynamically the speakers list
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('speakers-list').append(...SPEAKERS.map(getSpeakerCard));
});
