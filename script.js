particlesJS(
  'particles-js',

  {
    particles: {
      number: {
        value: 110,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#ffffff',
      },
      shape: {
        type: ['circle', 'triangle', 'egde'],
        stroke: {
          width: 0,
          color: '#000000',
        },
        polygon: {
          nb_sides: 10,
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: true,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: {
          enable: true,
          mode: 'bubble',
        },
        onclick: {
          enable: false,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 200,
          size: 8,
          duration: 2,
          opacity: 7,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 1,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    config_demo: {
      hide_card: false,
      background_color: '#b61924',
      background_image: '',
      background_position: '50% 50%',
      background_repeat: 'no-repeat',
      background_size: 'cover',
    },
  }
);

const navbarElements = [
  { name: 'Home', icon: '<i class="fa-solid fa-house"></i>' },
  { name: 'About', icon: '<i class="fa-solid fa-circle-info"></i>' },
  { name: 'Domains', icon: '<i class="fa-solid fa-database"></i>' },
  { name: 'Prizes', icon: '<i class="fa-solid fa-medal"></i>' },
  { name: 'Timeline', icon: '<i class="fa-solid fa-timeline"></i>' },
  { name: 'Guidelines', icon: '<i class="fa-solid fa-scale-balanced"></i>' },
  { name: 'Sponsors', icon: '<i class="fa-solid fa-store"></i>' },
  { name: 'FAQs', icon: '<i class="fa-solid fa-circle-question"></i>' },
];
const events = [
  { day: '01', detail: 'Registration starts' },
  { day: '10', detail: 'Registration ends' },
  { day: '15', detail: 'Shortlisted teams annouced' },
  { day: '23', detail: 'Event concludes' },
  { day: '22', detail: 'Event starts' },
  { day: '20', detail: 'Problem statements released' },
];

const navbar = (function () {
  const create = () => {
    for (let i = 0; i < navbarElements.length; i++) {
      addElement(navbarElements[i], i + 1);
    }
  };
  const addElement = (group, index) => {
    const navbar = document.querySelector('.navbar');
    const element = document.createElement('a');
    const indexNumber = document.createElement('div');
    const vertRule = document.createElement('div');
    const header = document.createElement('div');

    indexNumber.classList.add('index');
    vertRule.classList.add('vertical-rule');
    header.classList.add('segment');

    element.setAttribute('href', `#${group.name.toLowerCase()}`);
    element.classList.add('option');

    indexNumber.innerHTML = group.icon;
    header.textContent = group.name;

    element.append(indexNumber, vertRule, header);
    navbar.appendChild(element);
  };
  return { create };
})();
navbar.create();

const timeline = (function () {
  const create = () => {
    for (let i = 0; i < events.length; i++) {
      addBubble(events[i], i);
    }
  };
  const addBubble = (event, i) => {
    const timelineGrid = document.querySelector('.timeline-grid');
    const bubble = document.createElement('div');
    const date = document.createElement('div');
    const detail = document.createElement('div');

    bubble.classList.add('bubble');
    date.classList.add('date');
    detail.classList.add('detail');

    date.textContent = event.day;
    detail.textContent = event.detail;

    bubble.append(date, detail);
    timelineGrid.appendChild(bubble);
  };
  return { create };
})();
timeline.create();

const faqHeaders = document.querySelectorAll('.faq .faq-header');
faqHeaders.forEach((faqHeader, i) => {
  faqHeader.addEventListener('click', () => {
    location.href = '#faqs-container';
    faqHeader.nextElementSibling.classList.toggle('active');
    faqHeader.parentElement.classList.toggle('active');
    const open = faqHeader.querySelector('.open');
    const close = faqHeader.querySelector('.close');
    open.classList.toggle('active');
    close.classList.toggle('active');
  });
});

//Particles
particlesJS.load('particles-js', 'particles.json', function () {
  console.log('callback - particles.js config loaded');
});
