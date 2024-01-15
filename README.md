
# Drata Mock Server for GitHub User APIs

Utilizing moxios mock server to simulate various GitHub APIs related to the user object.

To apply this in a practical scenario, you'd typically generate a token. However, in our current setup using a moxios mock server, you can proceed with running the tests, and they should pass. For a real-world project, you'd set the token as an environment variable (accessible on the server/machine running the code) or implement an OAuth login screen. The latter involves presenting users with a button to sign in to GitHub. Upon successful authentication, the response provides the bearer token, which can then be utilized in the application.

To use this in an actual scenario, follow the instructions provided below:
Generate a Personal Access Token on GitHub:
1. Go to your GitHub account.
2. Navigate to "Settings" (upper-right corner) → "Developer settings" → "Personal access tokens."
3. Click on "Generate token" and follow the instructions.
4. Ensure that you select the necessary scopes based on the permissions you need for your API requests.

Replace <YOUR-TOKEN> in the Code:
1. Once you have generated the personal access token, go to api.js file and replace <YOUR-TOKEN> with the actual token value.(on line 7)
For example, if your token is abc123, your header would look like Authorization: Bearer abc123.

## Testing Objectives

1. Create a Jest Testing Suite
2. Using a mock server for different Github APIs around the user object
3. In the test suite, build assumption tests on these users, their data, and their plan that they're on.
4. Build out green, error, and edge-case tests

## Acceptance Criteria

1. The code is delivered via GitHub
2. There’s documentation on how to run the testing suite and get needed API keys
3. The testing suite can be run locally
4. All tests pass

## Getting Started

These instructions will help you run the Jest tests on your local machine.

### Prerequisites

- Node.js and npm installed on your machine.

### Installing

1. Clone the repository to local machine.

```bash
git clone https://github.com/your-username/your-project.git
```

2. Navigate to the project directory.

```bash
cd your-project
```

3. Install dependencies.

```bash
npm install
```

### Running Tests

#### Mac

```bash
npx jest
```

or 

```
npm run test 
```

#### Windows

```bash
npx jest
```

or 

```
npm run test 
```

### Test Coverage

To generate a coverage report:

```bash
npx jest --coverage --coverageReporters=text
```

## Documents used

- [GitHub APIs around the user object](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28)
- [Jest Documentation](https://jestjs.io/)
- [Axios Documentation](https://github.com/axios/moxios)
- [Authenticating to the REST API](https://docs.github.com/en/rest/authentication/authenticating-to-the-rest-api?apiVersion=2022-11-28)
