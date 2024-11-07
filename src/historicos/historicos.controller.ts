import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistoricosService } from './historicos.service';
import { CreateHistoricoDto } from './dto/create-historico.dto';
import { UpdateHistoricoDto } from './dto/update-historico.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('historicos')
@ApiTags('historicos')
export class HistoricosController {
  constructor(private readonly historicosService: HistoricosService) {}

  @Post()
  create(@Body() createHistoricoDto: CreateHistoricoDto) {
    return this.historicosService.create(createHistoricoDto);
  }

  @Get()
  findAll() {
    return this.historicosService.findAllAlive();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historicosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHistoricoDto: UpdateHistoricoDto) {
    return this.historicosService.update(+id, updateHistoricoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historicosService.remove(+id);
  }
}
