import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; // - AppModule is the root module and is the main module of the application
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule); // - for express , we dont need to pass adapter unlike fastify as it is used by default
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  await app.listen(3000, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
