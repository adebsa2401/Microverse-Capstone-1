// speakers data array
const SPEAKERS = [
  {
    photo: 'speaker_01.png',
    name: 'Yochai Benkler',
    role: 'Berkman Professor of Entrepreunarial Legal Studies at Havard Law School',
    description: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.',
  },
  {
    photo: 'speaker_02.png',
    name: 'Jeon Gil-nam',
    role: 'Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)',
    description: 'Developed Asia\'s first Internet protocol network SDN and led Korea\'s first private line Internet connection in 1990, ushering in a full-fledged Internet era.',
  },
  {
    photo: 'speaker_03.png',
    name: 'Noh So-young',
    role: 'Art Center Nabi Director, CC Korea Director',
    description: 'As the author of <Digital Art Art of Our Time>, he opened \'Art Center Nabi\', Korea\'s first digital art institution in 2000, and is currently serving.',
  },
  {
    photo: 'speaker_04.png',
    name: 'Julia Leda',
    role: 'Head of the Young Pirates of Europe',
    description: 'European integration and online youth participation in politics and democracy are major concerns, and a report has been published that will potentially affect the revision of the EU\'s copyright law in July.',
  },
  {
    photo: 'speaker_05.png',
    name: 'Layla Trettikov',
    role: 'Secretary General of the Wikimedia Foundation',
    description: 'Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages ​​every month to over 100 million people, nearly half of the world\'s population.',
  },
  {
    photo: 'speaker_06.png',
    name: 'Ryan Merkley',
    role: 'Creative Commons CEO, Former Mozilla Foundation COO',
    description: 'He led open source projects at the Mozilla Foundation and joined CC as CEO in 2014. He has been active in open movements such as open government and open source.',
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
