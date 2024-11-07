import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HistoricosModule } from './historicos/historicos.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [HistoricosModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
