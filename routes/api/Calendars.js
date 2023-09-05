const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
// const Post = require('../../models/Calendar');

// const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Calendar = require('../../models/Calendar');
// const User = require('../../models/User');
const checkObjectId = require('../../middleware/checkObjectId');

// @route    GET api/posts
// @desc     Get all posts
// @access   Private
router.get('/', async (req, res) => {
  try {
    const posts = await Calendar.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/posts/:id
// @desc     Get post by ID
// @access   Private
router.get('/:id', checkObjectId('id'), async (req, res) => {
  try {
    const Calendar = await Calendar.findById(req.params.id);

    if (!Calendar) {
      return res.status(404).json({ msg: 'Calendar not found' });
    }

    res.json(Calendar);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

module.exports = router;
