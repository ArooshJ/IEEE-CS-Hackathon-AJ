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
let events = [
  { day: '01', detail: 'Registration starts' },
  { day: '13', detail: 'Registration ends' },
  { day: '16', detail: 'Shortlisted teams annouced' },
  { day: '23', detail: 'Event concludes' },
  { day: '22', detail: 'Event starts' },
  { day: '20', detail: 'Problem statements released' },
];

function rearrangeEventsForMobile() {
  // Check if the screen width is below a certain threshold (e.g., 768 pixels)
  if (window.innerWidth <= 768) {
    // Rearrange the array as needed
    events = [
      { day: '01', detail: 'Registration starts' },
      { day: '13', detail: 'Registration ends' },
      { day: '16', detail: 'Shortlisted teams annouced' },
      { day: '20', detail: 'Problem Statements released' },
      { day: '22', detail: 'Event starts' },
      { day: '23', detail: 'Event Concludes' },
    ];
  }
  else{
    events = [
      { day: '01', detail: 'Registration starts' },
      { day: '13', detail: 'Registration ends' },
      { day: '16', detail: 'Shortlisted teams annouced' },
      { day: '23', detail: 'Event concludes' },
      { day: '22', detail: 'Event starts' },
      { day: '20', detail: 'Problem statements released' },
    ];
  }
}

// Call the function when the page loads

rearrangeEventsForMobile();

// You can also call the function on window resize if needed
window.addEventListener('resize', rearrangeEventsForMobile);

const colabs = [
  {logo : './assets/imgs/DJSCE_Logo.png', name: 'Dwarkadas Jivanlal Sanghavi College of Engineering - Mumbai', link: "https://www.djsce.ac.in/"},
  {logo : './assets/imgs/fcrcoe.png', name: 'Fr. Conceição Rodrigues College of Engineering (CRCE) - Mumbai', link:"http://www.frcrce.ac.in/"},
  {logo : './assets/imgs/Ramrao_Adik_Institute_of_Technology.png', name: 'Ramrao Adik Institute of Technology (RAIT) - Navi Mumbai',link:"https://dypatil.edu/schools/ramrao-adik-institute-of-technology?gad_source=1&gclid=Cj0KCQiArrCvBhCNARIsAOkAGcUODwqB0I7s-z18Mjbf9t5nqfg2xZnfYZkzaUBDfeyMutuuGyoONawaAuw7EALw_wcB"},
  
  {logo : './assets/imgs/ADCET.jpg', name: 'Annasaheb Dange College of Engineering and Technology (ADCET) - Sangli',link:"https://www.adcet.ac.in/"},
  {logo : './assets/imgs/sveri.png', name: 'SVERI\'s College of Engineering - Pandharpur',link:"https://coe.sveri.ac.in/"},
  {logo : './assets/imgs/AVCOE.png', name: 'Amrutvahini College of Engineering - Sangamner',link:"https://www.avcoe.org/"},
]
const orgs = [
  {logo : './assets/imgs/ieeebs.png', name: 'IEEE Bombay Section',link:"https://ieeebombay.org/"},
  {logo : './assets/imgs/ieeecsbs (2).png', name: 'IEEE Computer Society Bombay Section',link:"https://r10.ieee.org/bombay-cs/"},
  {logo : './assets/imgs/ieeecsnobg.png', name: 'IEEE CS SPIT',link:""},
  {logo : './assets/imgs/SPITnobg.png', name: 'Sardar Patel Institute of Technology, Mumbai',link:"https://www.spit.ac.in/"},
  {logo : './assets/imgs/IICnobg.png', name: 'IIC SPIT',link:"https://iic.spit.ac.in/"}
  
]

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
    // const vertRule = document.createElement('div');
    const header = document.createElement('div');

    indexNumber.classList.add('index');
    // vertRule.classList.add('vertical-rule');
    header.classList.add('segment');

    element.setAttribute('href',`#${group.name.toLowerCase()}`);
    element.classList.add('option');

    indexNumber.innerHTML = group.icon;
    header.textContent = group.name;

    element.append(indexNumber, header);
    navbar.appendChild(element);
  };
  return { create };
})();
navbar.create();


const collaborators = (function(){
  const create = () =>{
    for(let i = 0;i<colabs.length;i++){
      addInst(colabs[i],i);
    }
  }
  const addInst = (Institute, i)=>{
    const colab = document.querySelector('.collaborators')
    const colabLogo = document.createElement('img')
    const Name = document.createElement('div')
    const container = document.createElement('a')
   

    //colabLogo =classList.add('colabLogo')
    colabLogo.setAttribute('src', Institute.logo)
    container.setAttribute('href',Institute.link)

    // colabLogo.setAttribute('alt', 'Institute-Logo')
    Name.textContent = Institute.name
    container.classList.add('colabContainer')
    Name.classList.add('colabName')
    colabLogo.classList.add('colabLogo')
   
   container.appendChild(colabLogo)
   container.appendChild(Name)
   colab.appendChild(container)


  };
  return({create});
})();
collaborators.create();

const organizers = (function(){
  const create = () =>{
    for(let i = 0;i<orgs.length;i++){
      addInst(orgs[i],i);
    }
  }
  const addInst = (Institute, i)=>{
    const colab = document.querySelector('.logos')
    const colabLogo = document.createElement('img')
    const Name = document.createElement('div')
    const container = document.createElement('a')
   

    //colabLogo =classList.add('colabLogo')
    colabLogo.setAttribute('src', Institute.logo)
    container.setAttribute('href',Institute.link)
    // colabLogo.setAttribute('alt', 'Institute-Logo')
    Name.textContent = Institute.name
    container.classList.add('orgContainer')
    Name.classList.add('orgName')
    colabLogo.classList.add('orgLogo')
    
    if(Institute.name == 'IEEE Computer Society Bombay Section'){
       colabLogo.id = 'ieeecsbs';
    }
    if(Institute.name == 'IIC SPIT'){
       colabLogo.id = 'iicspit';
    }
    if(Institute.name == 'IEEE Bombay Section'){
       colabLogo.id = 'ieeebs';
    }
   
    container.appendChild(colabLogo)
    container.appendChild(Name)
   colab.appendChild(container)


  };
  return({create});
})();
organizers.create();

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
    const month = document.createElement('div');
    const detail = document.createElement('div');

    bubble.classList.add('bubble');
    date.classList.add('date');
    detail.classList.add('detail');
    month.classList.add('month');
     
    
    date.textContent = event.day;
    detail.textContent = event.detail;
    month.textContent = 'March'
   
    bubble.append(date, month, detail);
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

function openMobileMenu() {
  document.querySelector('.mobile-menu').style.display = 'flex';
}

// Function to close the mobile menu
function closeMobileMenu() {
  document.querySelector('.mobile-menu').style.display = 'none';
}

// Event listener for the mobile menu button
document.querySelector('.mobile-menu-button').addEventListener('click', openMobileMenu);

// Event listener for the close button in the mobile menu
document.querySelector('.close-mobile-menu').addEventListener('click', closeMobileMenu);


const targetDate = new Date('2024-03-22').getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = days.toString().padStart(2, '0');
  document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
  document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById('days').innerText = '00';
    document.getElementById('hours').innerText = '00';
    document.getElementById('minutes').innerText = '00';
    document.getElementById('seconds').innerText = '00';
  }
}, 1000);



//Particles
particlesJS.load('particles-js', 'particles.json', function () {
  console.log('callback - particles.js config loaded');
});
