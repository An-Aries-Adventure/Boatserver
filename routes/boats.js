const Boat = require('../models/boats'); 
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {

   try {

 const boat = new Boat({
    manufacturer: 'Erwin',
    model: '32',
    year: 1978,
    length: 32,
 });
 await boat.save();
return res.send(boat)
   }
   catch (ex){
return res.status(500).send(`Internal Server Error: ${ex}`);
   }
});








module.exports = router; 