// auth.guard.ts
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Logger,
} from '@nestjs/common';
import { FirebaseApp } from 'src/firebase/firebase.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly firebaseApp: FirebaseApp) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];
    Logger.error(token);
    if (!token) {
      return false;
    }
    try {
      const decodedToken = await this.firebaseApp
        .getAuth()
        .verifyIdToken(token);
      Logger.log(decodedToken);
      request.user = decodedToken; // ユーザー情報をリクエストに追加
      return true;
    } catch (e) {
      Logger.error(e);
      return false;
    }
  }
}
