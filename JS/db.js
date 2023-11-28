const Sequelize = require('sequelize');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { SequelizeSession } = require('connect-session-sequelize');

const sequelize = new Sequelize('lagoct', 'admin', 'Lcc2023!', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = sequelize.define('User', {
  username: { type: Sequelize.STRING, unique: true, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
});

const SequelizeStore = new SequelizeSession(session.Store);

app.use(
  session({
    secret: 'Lcc2023!',
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({ db: sequelize }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(function (username, password, done) {
    User.findOne({ where: { username: username } })
      .then((user) => {
        if (!user || !user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect username or password' });
        }
        return done(null, user);
      })
      .catch((err) => done(err));
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => done(null, user))
    .catch((err) => done(err));
});
