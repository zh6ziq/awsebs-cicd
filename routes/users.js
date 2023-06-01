const express = require('express');
const router = express.Router();

const { CUSTOM_KEY } = process.env;

/* GET users listing. */
router.get('/', async (req, res) => {
  try {
    const customKey = CUSTOM_KEY;

    res.status(200).json({
      status: 'success',
      data: customKey,
    });
    
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong',
    });
  }
});

module.exports = router;
