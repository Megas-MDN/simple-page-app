const sections = document.getElementsByClassName('section');
const btn01 = document.getElementById('btn-01');
const btn02 = document.getElementById('btn-02');
const btn03 = document.getElementById('btn-03');
const btnHome = document.getElementById('btn-home');

btn01.addEventListener('click', () => showSection(0));
btn02.addEventListener('click', () => showSection(1));
btn03.addEventListener('click', () => showSection(2));
btnHome.addEventListener('click', () => hiddingSections());

const hiddingSections = () => {
  for (const section of sections) {
    section.classList.add('hidden');
  }
};

const showSection = (index) => {
  const section = sections[index];
  hiddingSections();
  section.classList.remove('hidden');
};

window.onload = () => {
  hiddingSections();
};
