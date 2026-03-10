// ### data/content.js
// ```javascript
import card1 from './assets/card1.jfif';
import card2 from './assets/card2.jfif';
import card3 from './assets/card3.jfif';
import card5 from './assets/card5.jfif';
import cardtab from './assets/cardtab.jfif';
import cardtab2 from './assets/cardtab2.jfif';

export const MenuData = [
  { id: 1, name: 'Home' },
  { id: 2, name: 'About' },
  { id: 3, name: 'Contact' }
];

export const cardData = [
  { id: 1, title: 'Card 1', image: card1 },
  { id: 2, title: 'Card 2', image: card2 },
  { id: 3, title: 'Card 3', image: card3 },
  { id: 4, title: 'Card 4', image: card5 }
];

export const serviceTabsData = [
  {
    id: 1,
    title: 'Our Services',
    description1: 'We specialize in creating beautiful, responsive, and user-friendly websites that help your business stand out in the digital world.',
    description2: 'Our team of expert designers and developers work together to deliver exceptional web solutions tailored to your unique needs. From concept to deployment, we ensure every detail is perfect.',
    image: cardtab,
    imageAlt: 'Web development services',
    bgColor: 'bg-indigo-200',
    imagePosition: 'Left'
  },
  {
    id: 2,
    title: 'Why Choose Us',
    description1: 'With years of experience in web development, we bring creativity and technical expertise to every project. Your success is our priority.',
    description2: "We don't just build websites – we create digital experiences that engage your audience and drive results. Our commitment to quality and customer satisfaction sets us apart from the competition.",
    image: cardtab2,
    imageAlt: 'Why choose our services',
    bgColor: 'bg-red-200',
    imagePosition: 'Right'
  }
];