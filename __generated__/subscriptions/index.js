const fs = require('fs');
const path = require('path');

module.exports.onBookingTimeout = fs.readFileSync(path.join(__dirname, 'onBookingTimeout.gql'), 'utf8');
module.exports.onCreateBooking = fs.readFileSync(path.join(__dirname, 'onCreateBooking.gql'), 'utf8');
module.exports.onPartnerCancelBooking = fs.readFileSync(path.join(__dirname, 'onPartnerCancelBooking.gql'), 'utf8');
