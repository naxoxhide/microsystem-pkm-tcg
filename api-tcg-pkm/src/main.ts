import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    //Para permitir que React pueda realizar peticiones a la API por CORS
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });
  const config = new DocumentBuilder()
    .setTitle('TCG Pokemon API')
    .setDescription('API para obtener información Sets de Pokemon TCG')
    .setVersion('1.0')
    .addTag('Pokemon')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
