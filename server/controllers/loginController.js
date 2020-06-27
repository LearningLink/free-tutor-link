const request = require('superagent');
const db = require('../db.js');

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

  request
    .post(
      `https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${code}&redirect_uri=${redirect_uri}&client_id=${client_id}&client_secret=${client_secret}`
    )
    .then((accessRes) => {
      res.locals.accessToken = accessRes.body.access_token;
      res.cookie('accessToken', res.locals.accessToken, { httpOnly: true, secure: true });
      console.log('lev1', res.locals.accessToken);
      return request
        .get(
          'https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))'
        )
        .set('Authorization', `Bearer ${res.locals.accessToken}`);
    })
    .then((userRes) => {
      const firstName = userRes.body.firstName.localized.en_US;
      const lastName = userRes.body.lastName.localized.en_US;
      const { id } = userRes.body;
      const imgUrl =
        userRes.body.profilePicture['displayImage~'].elements[0].identifiers[0].identifier;
      res.locals.newUser = {
        name: `${firstName} ${lastName}`,
        userid: id,
        imgUrl,
      };
      return request
        .get('https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))')
        .set('Authorization', `Bearer ${res.locals.accessToken}`);
    })
    .then((emailRes) => {
      const email = emailRes.body.elements[0]['handle~'].emailAddress;
      res.locals.newUser.email = email;
      console.log('newUser info: ', res.locals.newUser);
      // add user to database
      return res.redirect('http://localhost:3000/');
    })
    .catch((err) => {
      return next({
        log: `Error in loginController.getAccessToken: ${err}`,
      });
    });
};

module.exports = loginController;
