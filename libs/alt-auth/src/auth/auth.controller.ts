import { Controller, Get, UseGuards, Post, Request, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CookieOptions, Response } from 'express';
import { AuthService } from './auth.service';
import { Public, SESSION_COOKIE_NAME } from './constant';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly configServices: ConfigService,
  ) {}
  @Public()
  @Get()
  getHello(): string {
    return 'HELLO WORLD';
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req, @Res({ passthrough: true }) res: Response) {
    const token = await this.authService.login(req.user);
    const cookiesOpts: CookieOptions = {
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
      path: '/',
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    };
    res.cookie(SESSION_COOKIE_NAME, token.access_token, cookiesOpts);
    return token;
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  // @Sse('sse')
  // sse(): Observable<MessageEvent> {
  //   return interval(1000).pipe(map((_) => ({ data: { hello: 'world' } })));
  // }
}
