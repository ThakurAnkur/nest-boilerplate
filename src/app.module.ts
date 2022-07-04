import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AltTestlibModule } from '@app/alt-testlib';
import { AltAuthModule } from '@alt/alt-auth';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      database: 'boilerplate',
      autoLoadEntities: true,
      synchronize: true,
      debug: false,
    }),
    // UserModule,
    // AuthModule,
    AltTestlibModule,
    AltAuthModule,
  ],
  providers: [],
})
export class AppModule {}
