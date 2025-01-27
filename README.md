# Instagram Scraper

Instagram Scraper is a Node.js application that allows users to scrape posts from public Instagram profiles. It is built using Express.js, body-parser, cors, and Puppeteer

## Table of Contents

- [Features](#features)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoint](#api-endpoint)
- [Contributing](#contributing)
- [License](#license)

## Features

- Fetch posts from public Instagram profiles.
- Uses Puppeteer to scrape data from Instagram.
- Express.js for handling server requests.
- CORS support for cross-origin requests.
- Body-parser for parsing JSON request bodies.

## Dependencies

The project relies on the following npm packages:

- [express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.
- [body-parser](https://www.npmjs.com/package/body-parser): Node.js body parsing middleware.
- [cors](https://www.npmjs.com/package/cors): Middleware for enabling CORS (Cross-Origin Resource Sharing).
- [puppeteer](https://www.npmjs.com/package/puppeteer): Headless Chrome Node.js API.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/namitkumarsingh97/instagram-scraper.git
   cd instagram-scraper
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. The server will be running on `http://localhost:5001`.

## API Endpoint

### Get Posts from Instagram Profile

- **URL**: `/api/getPosts`
- **Method**: `POST`
- **Content-Type**: `application/json`
- **Body Parameters**:
  - `profile` (string): The URL or username of the public Instagram profile.

#### Request Example

```json
{
  "profile": "diljitdosanjh"
}
```

## Contributing

- Contributions are welcome! Please open an issue or submit a pull request for any bugs or enhancements.

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes.
4. Commit your changes (git commit -m 'Add new feature').
5. Push to the branch (git push origin feature-branch).
6. Open a pull request.

## License

- This project is licensed under the ISC License. See the LICENSE file for details.
