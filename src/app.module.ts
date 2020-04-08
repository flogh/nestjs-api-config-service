import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { ApiConfigService } from './api-config/api-config.service';
import configuration from "./config/configuration";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: true,
      load: [configuration]
    })
  ],
  controllers: [AppController],
  providers: [AppService, ApiConfigService]
})
export class AppModule {}
