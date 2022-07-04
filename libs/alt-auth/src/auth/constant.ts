import { SetMetadata } from '@nestjs/common';

export const jwtConstants = {
  secret: process.env.JWT_SECRET || 'awrawt awet ',
};

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export const SESSION_COOKIE_NAME = 'sid';
