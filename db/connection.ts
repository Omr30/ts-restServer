import {Sequelize} from 'sequelize'

const db = new Sequelize('restApi', 'root', '1590', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: 'false'
})

export default db