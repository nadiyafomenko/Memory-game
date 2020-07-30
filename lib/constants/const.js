export const easySet = [
  require('../assets/img/nature.png').default,
  require('../assets/img/camping.png').default,
  require('../assets/img/refreshing.png').default,
  require('../assets/img/relaunch.png').default,
  require('../assets/img/training.png').default,
  require('../assets/img/upload.png').default
];

export const mediumSet = [
  ...easySet,
  require('../assets/img/breakfast.png').default,
  require('../assets/img/cabin.png').default,
  require('../assets/img/coffe.png').default,
  require('../assets/img/friends.png').default,
  require('../assets/img/girl.png').default,
  require('../assets/img/hacker.png').default
];

export const hardSet = [
  ...mediumSet,
  require('../assets/img/hologram.png').default,
  require('../assets/img/home.png').default,
  require('../assets/img/mello.png').default,
  require('../assets/img/music.png').default,
  require('../assets/img/park.png').default,
  require('../assets/img/tea.png').default
]

export default { 
  easySet, 
  mediumSet ,
  hardSet
};