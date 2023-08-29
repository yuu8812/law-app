import { AuthGuard } from './auth/guard/auth.guard';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import config from './mikro-orm.config';
import { ConfigModule } from '@nestjs/config';
import { FirebaseApp } from './firebase/firebase.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    // MikroOrmModule.forRoot(config),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AuthGuard, FirebaseApp],
})
export class AppModule {}
