const express = require('express');
const { check } = require('express-validator');
const fileUpload = require('../middleware/file-upload');
const placesControllers = require('../controllers/places-controller');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.get('/:pid', placesControllers.getPlaceById);

router.get('/users/:uid', placesControllers.getPlacesByUserId);

router.use(checkAuth);

router.patch('/:pid', placesControllers.updatePlace);

router.post(
  '/',
  fileUpload.single('image'),
  [
    check('title').not().isEmpty(),
    check('description').isLength({ min: 5 }),
    check('address').not().isEmpty(),
  ],
  placesControllers.createPlace
);

router.delete('/:pid', placesControllers.deletePlace);

module.exports = router;
