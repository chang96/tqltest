import rateLimit from "express-rate-limit";

export const rateLimiter = rateLimit({
  windowMs:3 * 1000,
  max: 3,
  message: "You have exceeded the 3 requests in 3 seconds limit!", 
  standardHeaders: true,
  legacyHeaders: false,
});
