const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
// const User = require('../../../models');
import { User } from '../../../models'

const jwtSecret = 'secret';

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecret,
};

export default passport.use(new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
    try {
        // Check if the user exists in the database
        const user = await User.findAll({ where: { id: jwtPayload.id } });

        if (user) {

            return done(null, jwtPayload);
        } else {

            return done(null, false);
        }
    } catch (error) {

        return done(error, false);
    }
}));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});