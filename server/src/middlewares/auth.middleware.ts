import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import * as admin from 'firebase-admin';
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: any, res: any, next: () => void) {

    if (!req.headers['authorization']) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    const authHeader = req.headers['authorization'];
    const bearerToken = authHeader.split(' ');
    const token = bearerToken[1];

    try {
      let userVerify = await admin.app().auth().verifyIdToken(token);
      req.payload = userVerify;
      next();
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }
}
