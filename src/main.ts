import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
const { SERVER_PORT = 3000 } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Enhanced Loan Application Processing Service')
    .setDescription('A microservice for managing loan applications featuring submission, status checks, and admin management.')
    .setVersion('1.0')
    .addTag('loan')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(SERVER_PORT);
}
bootstrap();
