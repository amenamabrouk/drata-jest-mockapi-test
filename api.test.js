// api.test.js for the Jest test suite.

// Import the getUserData function and Mxios/Axios library
const { getUserData, oauthToken} = require('./api');
const axios = require('axios');
const moxios = require('moxios')

// Describe the test suite for the getUserData function
describe('getUserData', () => {

    beforeEach(function () {
        //import and pass your custom axios instance to this method
        moxios.install()
      })
  
      afterEach(function () {
        // import and pass your custom axios instance to this method
        moxios.uninstall()
      })

  // Test case for successfully fetching data from GitHub API (200 OK)
  it('handles a successful response (200 OK)', async () => {
    const mockData = { login: 'testuser', id: 123 }
    // What to do when we get a call 
    moxios.wait(function () {
        let request = moxios.requests.mostRecent()
        console.log(request)
        expect(request.url).toEqual("https://api.github.com/user/testuser")
        expect(request.config.method).toEqual("get")
        expect(request.headers.Authorization).toEqual(`Bearer ${oauthToken}`)
        request.respondWith({
          status: 200,
          response: mockData 
        })
      })

    // Call the getUserData function with the mock OAuth token
    const userData = await getUserData("testuser");

    // Expect that the retrieved user data matches the mock data
    expect(userData).toEqual(mockData);
  });

  // Test case for handling a not found response (404)
  it('handles a not found response (404)', async () => {
    const errorResp = {
        status: 404,
        response: { message: 'user not found' }
      }
  
      moxios.wait(function () {
        let request = moxios.requests.mostRecent()
        expect(request.url).toEqual("https://api.github.com/user/bob")
        expect(request.config.method).toEqual("get")
        expect(request.headers.Authorization).toEqual(`Bearer ${oauthToken}`)
        request.reject(errorResp)
      })

    // Expect that calling getUserData with the mock token throws a specific error for 404
    try {
        const result = await getUserData('bob')
        
    }catch(error){
        expect(error).toEqual({"response": {"data": undefined, "message": "user not found"}, "status": 404})
    }
  });

  // Test case for handling a server error response (500)
  it('handles a server error response (500)', async () => {

    const errorResp = {
        status: 500,
        response: { message: 'server error' }
      }
  
      moxios.wait(function () {
        let request = moxios.requests.mostRecent()
        expect(request.url).toEqual("https://api.github.com/user/testuser")
        expect(request.config.method).toEqual("get")
        expect(request.headers.Authorization).toEqual(`Bearer ${oauthToken}`)
        request.reject(errorResp)
      })

    // Expect that calling getUserData with the mock token throws a specific error for 404
    try {
        const result = await getUserData('testuser')
        
    }catch(error ){
        expect(error).toEqual( {"response": {"data": undefined, "message": "server error"}, "status": 500})
    }
  });
});
