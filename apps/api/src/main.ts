import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { HttpExceptionFilter } from "./interceptors/http-exception.filter";
import { config } from "dotenv";

// Load environment variables
config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable validation pipes globally
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    })
  );

  // Enable exception filter globally
  app.useGlobalFilters(new HttpExceptionFilter());

  // add configmodule to the app
  
  // Enable CORS
  app.enableCors();
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
