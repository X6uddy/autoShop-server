const ApiError = require('../exeptions/api-error');
const TokenService = require('../service/token-service');

module.exports = function(roles) {
    return function (req, res, next) {
        try {
            const authHeader = req.headers.authorization;
            if(!authHeader) {
                return next(ApiError.UnathorizedError());
            }
    
            const accessToken = authHeader.split(' ')[1];
            if(!accessToken) {
                return next(ApiError.UnathorizedError());
            }
    
            const {roles: userRoles} = TokenService.validateAccessToken(accessToken);

            let hasRole = false;
            userRoles.forEach(role => {
                if(roles.includes(role)) {
                    hasRole = true;
                }
            });
            if(!hasRole) {
                return next(ApiError.AccessError())
            }
    
            
            next();
        } catch (e) {
            return next(ApiError.UnathorizedError());
        }
    }
}