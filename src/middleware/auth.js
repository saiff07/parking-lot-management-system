import passport from '../services/passport/passport_local';
import passportjwt from '../services/passport/passport_jwt';




export const passportLocal = passport.authenticate('local');
// export const passportJwt = passport.authenticate('jwt', { session: false })
export const passportJwt = passport.authenticate('jwt')