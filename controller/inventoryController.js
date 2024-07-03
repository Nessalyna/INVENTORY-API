const pool = require('../config/db');

// Add a new inventory item
const addInventory = (req, res) => {
  const { product_name, product_number, product_type, product_cost } = req.body;
  const query = 'INSERT INTO inventory (product_name, product_number, product_type, product_cost) VALUES ($1, $2, $3, $4)';
  pool.query(query, [product_name, product_number, product_type, product_cost], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.status(201).json({ id: results.insertId, product_name, product_number, product_type, product_cost});
  });
};

// Get all inventory items
const getAllInventory = (req, res) => {
    const query = 'SELECT * FROM inventory';
    pool.query(query, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json(results.rows);
    });
  };

//delete an inventory item
const deleteInventory = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM inventory WHERE id = $1';
    pool.query(query, [id], (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (results.rowCount === 0) {
        return res.status(404).json({ error: 'Inventory item not found' });
      }
      res.status(204).json({message: 'Inventory Item deleted succesfully'});
    });
  };
  

  module.exports = {
    addInventory,
    getAllInventory,
    deleteInventory
  };
