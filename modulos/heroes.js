const fs = require("fs");

const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

module.exports = heroes;