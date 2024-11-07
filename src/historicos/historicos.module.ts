import { Module } from '@nestjs/common';
import { HistoricosService } from './historicos.service';
import { HistoricosController } from './historicos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [HistoricosController],
  providers: [HistoricosService],
  imports: [PrismaModule],
})
export class HistoricosModule {}
