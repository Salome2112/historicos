import { Injectable } from '@nestjs/common';
import { CreateHistoricoDto } from './dto/create-historico.dto';
import { UpdateHistoricoDto } from './dto/update-historico.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HistoricosService {
  constructor(private prisma: PrismaService) {}
  create(createHistoricoDto: CreateHistoricoDto) {
    return 'This action adds a new historico';
  }

  findAllAlive() {
    return this.prisma.historicos.findMany({
      where:{},
    })
  }
  findOne(id: number) {
    return this.prisma.historicos.findUnique({
      where:{id}
    });
   }

  update(id: number, updateHistoricoDto: UpdateHistoricoDto) {
    return  this.prisma.historicos.update({
      where: {id},
      data: updateHistoricoDto,
    })
  }

  remove(id: number) {
    return this.prisma.historicos.delete({
      where:{id}
    })
  }
}
