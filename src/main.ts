import { NestFactory } from '@nestjs/core';
import {ValidationPipe} from '@nestjs/common'
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist : true,
    forbidUnknownValues : true,
    transform : true,
    validateCustomDecorators: true,
    transformOptions:{
      enableImplicitConversion: true
    }
  }

  ))

  const configSwagger = new DocumentBuilder()
  .setTitle('Point of sale documentation')
  .setDescription('Dokumentasi API Untuk api point of sale')
  .setVersion('1.2')
  .build()

  const configCostumSwagger : SwaggerCustomOptions = {
    swaggerOptions : {docExpansion : "none"}

  }

  const doc = SwaggerModule.createDocument(app,configSwagger)
  SwaggerModule.setup('doc', app, doc, configCostumSwagger)
  await app.listen(3000);
}
bootstrap();
