import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const documentOption =new DocumentBuilder()
  .setTitle('RESET API')
  .setDescription('Api personajes historicos')
  .setVersion('0.1')
  .build();

  const document = SwaggerModule.createDocument(app, documentOption);
  SwaggerModule.setup('api',app,document);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
