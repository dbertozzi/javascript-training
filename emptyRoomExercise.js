const { intersection } = require("lodash");
const { map, reduce } = require("./practiceUnderscore");

const newDevelopment = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dining room": true },
      { "billiard room": false },
      { library: true }
    ]
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": true },
      { library: false }
    ]
  },
  {
    name: "Colonel Mustard",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dining room": false },
      { "billiard room": true },
      { library: false }
    ]
  },
  {
    name: "Professor Plum",
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { "dining room": true },
      { "billiard room": false },
      { library: false }
    ]
  }
];

let emptyRooms = map(newDevelopment, (suspect, index, list) => {
  return reduce(
    suspect.rooms,
    (result, room) => {
      let name = Object.keys(room)[0];
      if (room[name] === false) result.push(name);
      return result;
    },
    []
  );
});

emptyRooms = intersection(...emptyRooms);
console.log(emptyRooms);
