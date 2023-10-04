
const Sequelize = require('sequelize');
const UserModel = require('./users.js');
const FilmModel = require('./films.js');

const sequelize = new Sequelize('railway', 'postgres', 'LQg9eoaqGR8HFlQuA3q9', {
    host: 'containers-us-west-125.railway.app',
    port: '6180',
    dialect: 'postgres'
});


const User = UserModel(sequelize, Sequelize);
const Film = FilmModel(sequelize, Sequelize);

sequelize.sync({force: true})
    .then(()=>{
        console.log('Tablas sincronizadas');
    });


module.exports = {
    User,
    Film,
}

