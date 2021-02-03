const express = require("express");
const { check } = require("express-validator");

const placesControllers = require("../controllers/places-controller");
const HttpError = require("../models/http-error");
const router = express.Router();

router.get("/:pid", placesControllers.getPlaceById);

router.delete("/:pid", placesControllers.deletePlace);

router.get("/users/:uid", placesControllers.getPlacesByUserId);

router.patch(
  "/:pid",
  [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
  placesControllers.updatePlace
);

router.post(
  "/",
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").not().isEmpty(),
  ],
  placesControllers.createPlace
);

module.exports = router;
