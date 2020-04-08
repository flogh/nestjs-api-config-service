import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class ApiConfigService {
  constructor(private readonly configService: ConfigService) {}

  getHello(): string {
    console.log(this.configService);
    return this.configService.get<string>("hosty");
  }
}
