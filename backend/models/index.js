
const Sequelize = require('sequelize');
const UserModel = require('./user.js');

const sequelize = new Sequelize('railway', 'postgres', 'LQg9eoaqGR8HFlQuA3q9', {
    host: 'containers-us-west-125.railway.app',
    port: '6180',
    dialect: 'postgres'
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync({force: false})
    .then(()=>{
        console.log('Tablas sincronizadas');
    });


module.exports = {
    User,
}

