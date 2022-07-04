import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import configuration from './config/configuration';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { AltTestlibModule } from '@app/alt-testlib';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      database: 'boilerplate',
      entities: [User],
      autoLoadEntities: true,
      synchronize: true,
      debug: false,
    }),
    UserModule,
    AuthModule,
    AltTestlibModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
