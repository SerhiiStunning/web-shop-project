// Імпорт "Sequelize"
const {Sequelize} = require('sequelize')
// На виході експортується об'єкт який створюється з цього класу.
module.exports = new Sequelize(
    process.env.DB_NAME, // Назва БД
    process.env.DB_USER, // Користувач
    process.env.DB_PASSWORD, // Пароль
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)