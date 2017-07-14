'use strict';

// Wit.ai parameters

  

const WIT_TOKEN = "LJPGGBE5BCKM7PNGM74YDIKJNQPNYPBS";
if (!WIT_TOKEN) {
  throw new Error('missing WIT_TOKEN');
}

// Messenger API parameters
const FB_PAGE_TOKEN ="EAAGh4OZAABi4BAPE6tu07VWlbPg3MZBF4GfJuZCZBl7aPFKEPNJaMT75ZB0fxqnMFF33Bs150YZCGvEuF7yAxkn8wZCs2qrO3v6rIAgZBlhVXirWiiBtZBZBhZCYnUpSw1a9jfFDHIeS4SD23rWpHKOGaWZCJs69tKselhBLFM5qYPEA7cqfJdiLAmoe";

var FB_VERIFY_TOKEN = "mynameiszakaiter";
if (!FB_VERIFY_TOKEN) {
  FB_VERIFY_TOKEN = "mynameiszakaiter";
}

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
};