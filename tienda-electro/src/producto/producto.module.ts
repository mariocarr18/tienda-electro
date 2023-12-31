import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductosController } from './producto.controller';
import { ProductosService } from './producto.service';
import { Producto, ProductoSchema } from './schemas/producto.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Producto.name, schema: ProductoSchema }])
  ],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
