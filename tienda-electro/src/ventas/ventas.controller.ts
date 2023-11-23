import { Controller, Get, Post, Body } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { CreateVentaDto } from './dto/create-venta.dto';

@Controller('ventas')
export class VentasController {
  constructor(private readonly ventasService: VentasService) {}

  @Post()
  async create(@Body() createVentaDto: CreateVentaDto) {
    return this.ventasService.create(createVentaDto);
  }

  @Get()
  async findAll() {
    return this.ventasService.findAll();
  }
  @Get('/reporte/categorias')
  async reporteCategorias() {
    return this.ventasService.reporteCategorias();
  }
}

