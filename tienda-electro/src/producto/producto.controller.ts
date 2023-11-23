import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductosService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  async create(@Body() createProductoDto: CreateProductoDto) {
    return this.productosService.create(createProductoDto);
  }

  @Get()
  async findAll() {
    return this.productosService.findAll();
  }
}
