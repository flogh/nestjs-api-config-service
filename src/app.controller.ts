import { Controller, Get } from "@nestjs/common";
import { ApiConfigService } from "./api-config/api-config.service";

@Controller()
export class AppController {
  constructor(private readonly apiConfigService: ApiConfigService) {}

  @Get()
  getHello(): string {
    this.apiConfigService.getHello();
    // return this.configService.get<string>("HOST");
    return this.apiConfigService.getHello();
  }
}
