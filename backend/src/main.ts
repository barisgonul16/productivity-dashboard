import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' }); // CORS'u aç (local + Vercel için)
  await app.listen(3000);
  console.log('Backend http://localhost:3000 çalışıyor!');
}
bootstrap();