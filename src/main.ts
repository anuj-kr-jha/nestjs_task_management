import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; // - AppModule is the root module and is the main module of the application

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // - for express , we dont need to pass adapter unlike fastify as it is used by default
  await app.listen(3000);
}
bootstrap();
