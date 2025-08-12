import jwt, { JwtPayload, Secret, SignOptions } from 'jsonwebtoken';
import ms, { StringValue } from 'ms';
import { IJwtPayload } from './auth.interface';

export const createToken = (
    jwtPayload: IJwtPayload,
    secret: Secret,
    expiresIn: StringValue,
) => {
    const options: SignOptions = {
      expiresIn: ms(expiresIn),
    };
    return jwt.sign(jwtPayload, secret, options);
  };

export const verifyToken = <T = JwtPayload>(token: string, secret: Secret): T => {
    return jwt.verify(token, secret) as T;
};