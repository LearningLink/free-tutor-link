const superagent = require('superagent');

const loginController = {};

const client_id = '77iojwzvr5axo9';
const client_secret = '2Ul4nGyuuFbylkm5';
const redirect_uri = 'http://localhost:3000/login/authCode';

loginController.sendToLinkedIn = (req, res) =>
  res.redirect(
    `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=r_liteprofile%20r_emailaddress`
  );

loginController.getAccessToken = (req, res, next) => {
  const { code } = req.query;
  console.log('we in here');
  superagent
    .post(
      `https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${code}&redirect_uri=${redirect_uri}&client_id=${client_id}&client_secret=${client_secret}`
    )
    .end((err, response) => {
      if (err) return next({ log: `Error in loginController.getAccessToken: ${err}` });
      res.locals.accessToken = response.body.access_token;
      console.log('res.locals.accessToken: ', res.locals.accessToken);
      console.log('cookie bout to set');
      res.cookie('accessToken', res.locals.accessToken, { httpOnly: true, secure: true });
      console.log('cookie set');
      return res.redirect('http://localhost:3000/');
    });
};

module.exports = loginController;
