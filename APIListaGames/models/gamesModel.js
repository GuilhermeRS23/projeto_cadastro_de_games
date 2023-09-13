const Sequelize = require('sequelize');
const database = require('../database/database');

const Game = database.define('game', {
    id_game: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    genero: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    dev: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    release: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    plataforma: {
        type: Sequelize.STRING,
        allowNull: false
    },
    link: {
        type: Sequelize.STRING,
        allowNull: false
    }

}, { database, modelname: 'game', tableName: 'games' })

module.exports = Game;