const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
    students:store.colection('students'),
    colleges:store.colection('colleges')
}