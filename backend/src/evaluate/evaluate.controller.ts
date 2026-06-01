import { Body, Controller, Post } from '@nestjs/common';
import { EvaluateService } from './evaluate.service';
import { EvaluateDto } from './dto/evaluate.dto';

@Controller('evaluate')
export class EvaluateController {
  constructor(
    private readonly evaluateService: EvaluateService,
  ) {}

  @Post()
  async evaluate(@Body() body: EvaluateDto) {
    return this.evaluateService.evaluate(body);
  }
}