// api.js for the main implementation

// Import the Axios library for making HTTP requests
const axios = require('axios');

// GitHub personal access token
const oauthToken = "<YOUR-TOKEN>";

// Define a function to fetch user data from the GitHub API
async function getUserData(userName) {
  try {
    // Make a GET request to the GitHub API endpoint for user data
    const response = await axios.get(`https://api.github.com/user/${userName}`, {
      // Include the OAuth token in the request headers for authentication
      headers: {
        Authorization: `Bearer ${oauthToken}`,
      },
    });
    // Return the data obtained from the API response
    return response.data;
  } catch (error) {
    // If an error occurs during the request, throw the error
    throw error;
  }
}
// Export the function to make it accessible in other files
module.exports = {getUserData, oauthToken};






