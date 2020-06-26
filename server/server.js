const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log(`
  ********* FLOW TEST *********\n
  METHOD: ${req.method}\n
  URL: ${req.url}\n
  BODY: ${JSON.stringify(req.body)}\n`);
  return next();
});

/**
 * handle parsing request body
 */
app.use(express.json());

/**
 * route handler to respond with main app
 */
app.use('/build', express.static(path.join(__dirname, '../build')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('Wake up Neo... Knock, knock.'));

/**
 * configire express global error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
