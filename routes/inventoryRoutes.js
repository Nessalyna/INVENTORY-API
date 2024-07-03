const express = require('express');
const { addInventory,getAllInventory,deleteInventory } = require('../controller/inventoryController');

const router = express.Router();

router.post('/inventory', addInventory);
router.get('/inventory', getAllInventory);
router.delete('/inventory/:id', deleteInventory);


module.exports = router;    