import { Injectable } from '@nestjs/common';
import { EvaluateDto } from './dto/evaluate.dto';

@Injectable()
export class EvaluateService {
  async evaluate(evaluateDto: EvaluateDto){
    console.log("Datos Recibidos:", evaluateDto)
    return {
      extractedText:
        'Las plantas usan la luz solar para producir alimento',
      score: 90,
      feedback: 'La respuesta contiene la idea principal de la fotosintesis.'
    };
  }
}