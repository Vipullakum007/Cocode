const express = require('express');
const router = express.Router();

router.get('room/:id', roomController.getRoomById);

module.exports = router;