const sqlite = require('sqlite3'). verbose();
const bd = new sqlite.Database('./')

module.exports = bd;
