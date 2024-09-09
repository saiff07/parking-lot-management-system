import { User } from '../../../models';
import bcrypt from 'bcrypt';
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

export default passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({
          where: { email },
          include: 'roles',
        });

        if (!user) {
          return done(null, false, {
            message: 'Invalid username or password.',
          });
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
          return done(null, false, {
            message: 'Invalid username or password.',
          });
        }
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    },
  ),
);



// Serialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});
