import { MESSAGES, CODES } from '../../utils/constants';

export const roleBasedMiddleware = (roles) => {
    return (req, res, next) => {
        
        const hasMatchingRole = req.user.roles.some(userRole => roles.includes(userRole));
        console.log(req.user.roles)
        if (hasMatchingRole) {
            
            next();

        } else {
            return res.status(CODES.UNAUTHORIZED).send({
                success: true,
                message: MESSAGES.ACCESS_MESSAGE.FAILED,
            });
        }
    }
}

