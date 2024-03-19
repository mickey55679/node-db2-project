const cars = [
  {
    vin: "1C3CDFBA6DD197561",
    make: "toyota",
    model: "prius",
    mileage: 215000,
    title: "clean",
    transmission: "manual",
  },
  {
    vin: "JM1BK143651274706",
    make: "toyota",
    model: "corolla",
    mileage: 115000,
    title: "salvage",
  },
  {
    vin: "3N1AB6AP0BL727208",
    make: "ford",
    model: "focus",
    mileage: 15000,
  },
];

// exports.seed = function(knex) {
//     return knex('cars')
//     .truncate()
//     .then(() => {
//    return knex('cars').insert(cars)
//     }) 
// }

exports.seed = async function(knex){
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}
