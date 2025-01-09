import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173', // Permitir solicitudes desde tu aplicación React
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
  });
  await app.listen(3000);
}
bootstrap();
