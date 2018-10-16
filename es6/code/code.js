
const is = p => v => o => o.hasOwnProperty(p) && o[p] == v;

let users = [{
    name: 'Qian',
    age: 27,
    pets: ['Bao'],
    title: 'Consultant'
  },
  {
    name: 'Zeynep',
    age: 19,
    pets: ['Civelek', 'Muazzam']
  },
  {
    name: 'Yael',
    age: 52,
    title: 'VP of Engineering'
  }
];
const titleIs = is('title');
// titleIs == v => o => o.hasOwnProperty('title') && o['title'] == v;

const isContractor = titleIs('VP of Engineering');
// isContractor == o => o.hasOwnProperty('title') && o['title'] == 'Contractor';

let contractors = users.filter(isContractor);
let developers = users.filter(titleIs('Developer'));

console.log(contractors);
console.log(developers);
// let user = {
//   name: 'Viola',
//   age: 50,
//   title: 'Actress',
//   pets: ['Zak']
// };
// isEmployed(user); // true
// isContractor(user); // false