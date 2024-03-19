const express = require('express')
const Car = require('./cars-model')

const router = express.Router()

router.get('/', async (req, res, next) => {
try{
    const cars = await Car.getAll()
    res.json(cars)

} catch(err) {
    next(err)

}
})

router.get("/:id", async (req, res, next) => {
    const {id} = req.params
try{
    const car = await Car.getById(id);
    if(car) {
        res.json(car);
    } else {
        res.status(404).json({message: `Car with ${id} not found` })
    }
} catch(err){
    next(err)
}
});

router.post("/", async (req, res, next) => {
  res.json("posting new car");
});

module.exports = router