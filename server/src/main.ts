import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';
import { v2 } from 'cloudinary';
async function bootstrap() {

  const app = await NestFactory.create(AppModule, {
    cors: true
  });

  v2.config({
    cloud_name: "dblpwxmnh",
    api_key: "132635623228588",
    api_secret: "zKL9yMEaoZfV2fghdY6X6-pxdvo"
  });

  admin.initializeApp({
    credential: admin.credential.cert('./instagram-key.json'),
    storageBucket: 'gs://instagram-81417.appspot.com'
  });

  await app.listen(3000);
}
bootstrap();
