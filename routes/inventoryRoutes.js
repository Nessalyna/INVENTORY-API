const express = require('express');
const { addInventory,getAllInventory,deleteInventory, getInventory, updateInventory } = require('../controller/inventoryController');

const router = express.Router();

router.post('/inventory', addInventory);
router.get('/inventory', getAllInventory);
router.delete('/inventory/:id', deleteInventory);
router.get('/inventory/:id', getInventory);
router.put('/inventory/:id', updateInventory);


module.exports = router;    