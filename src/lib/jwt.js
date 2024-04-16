import * as jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

export const signAuth = (payload) => jwt.sign(payload, SECRET, {expiresIn: "30days"});

export const verifyAuth = (token) => jwt.verify(token, SECRET);
