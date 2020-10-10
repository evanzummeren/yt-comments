require('dotenv').config()
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=9JAr-2AhzDc&maxResults=100&key=' + process.env.API_KEY)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });