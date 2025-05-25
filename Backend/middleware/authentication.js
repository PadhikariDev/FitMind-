
import { validateToken } from "../services/authentication.js"

function checkForAuthenticationCookie(cookieName) {
    return (req, res, next) => {
        const cookieTokenValue = req.cookies[cookieName];
        if (!cookieTokenValue) {
            return next();

        };
        try {
            const userPayload = validateToken(cookieTokenValue);
            req.User = userPayload;
        } catch (error) {
            console.error("Invalid Token:", error);
        }
        return next();
    }
}
export default checkForAuthenticationCookie;