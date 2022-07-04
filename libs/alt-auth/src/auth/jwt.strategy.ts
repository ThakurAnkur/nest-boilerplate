import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { jwtConstants, SESSION_COOKIE_NAME } from './constant';

const cookiesExtractor = (req: Request) => {
  const sessionToken = req.cookies?.[SESSION_COOKIE_NAME];
  return sessionToken;
};

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: cookiesExtractor,
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    return payload;
  }
}
