//Bakery section
import bagelBaked from '../pictures/bakery/bagel-baked.png';
import bagelSesame from '../pictures/bakery/bagel-sesame.png';
import bread from '../pictures/bakery/bread.png';
import fourSeedsWheat from '../pictures/bakery/four-seed-wheat.png';
import frenchBagguette from '../pictures/bakery/french-bagguette.png';
import puffyPastry from '../pictures/bakery/puff-pastry.png';

const CustomerFavorites = [
  {
    id: 0,
    img: bagelBaked,
    title: 'Bagel Baked',
    price: 3,
    description: '',
    isNew: true,
    type: 'bakery'
  },
  {
    id: 1,
    img: bagelSesame,
    title: 'Bagel Sesame',
    price: 4,
    description: '',
    isNew: false,
    type: 'bakery'
  },
  {
    id: 2,
    img: bread,
    title: 'Bread',
    price: 2.50,
    description: '',
    isNew: false,
    type: 'bakery',
  },
  {
    id: 3,
    img: fourSeedsWheat,
    title: 'Four Seed Wheat',
    price: 4.50,
    description: '',
    isNew: true,
    type: 'bakery'
  },
  {
    id: 4,
    img: frenchBagguette,
    title: 'French Bagguette',
    price: 3.75,
    description: '',
    isNew: true,
    type: 'bakery'
  },
  {
    id: 5,
    img: puffyPastry,
    title: 'Puffy Pastry',
    price: 6.50,
    description: '',
    isNew: false,
    type: 'bakery'
  }
]

export default CustomerFavorites;