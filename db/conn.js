const Sequelize  = require('sequelize')

const sequelize = new Sequelize('imagination', 'root','lucas123',  {
    host: 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log('Banco de dados conectado')
} catch (err) { 
    console.log(`Não conectado ${err}`)
}
module.exports = sequelize