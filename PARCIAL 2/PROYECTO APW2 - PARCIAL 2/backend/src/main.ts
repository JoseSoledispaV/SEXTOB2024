import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );
  app.enableCors();

  await app.listen(3000,'192.168.100.14' );
  const server = await app.getHttpServer();
  const address = server.address();
  console.log(`Application is running on: http://${address.address}:${address.port}`);

}
bootstrap();
