module.exports = {
  ensureAuthenticated: function (req, res, next) {
    console.log('Checking authentication status');
    console.log('Is authenticated?', req.isAuthenticated());
    console.log('Passport session:', req.session.passport);

    if (req.isAuthenticated()) {
      console.log('User is authenticated. Proceeding.');
      return next();
    }

    console.log('User is not authenticated. Redirecting to login.');
    res.redirect('../login.html');
  },
};
