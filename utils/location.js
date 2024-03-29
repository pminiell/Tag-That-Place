const axios = require('axios');
const HttpError = require('../models/http-error');

async function getCoordsForAddress(address) {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=AIzaSyBYyEINKujz66-fdcAVHtkfKGFeAgwv6EQ`
  );
  const data = response.data;
  if (!data || data.status === 'ZERO_RESULTS') {
    const error = new HttpError(
      'Could not find the specified address (here)',
      422
    );
    throw error;
  }
  const coordinates = data.results[0].geometry.location;
  return coordinates;
}

module.exports = getCoordsForAddress;
