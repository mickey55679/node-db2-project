const db = require('../../data/db-config')

const getAll = () => {
  return db('cars')
 
}

const getById = (id) => {
  return db('cars').where({ id }).first()
}
const getByVin = (vin) => {
  return db('cars').where('vin', vin).first()
}

const create = () => {
  
}

module.exports = {
  getAll,
  getById,
  create,
  getByVin
}