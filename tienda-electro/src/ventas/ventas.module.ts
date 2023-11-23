import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VentasController } from './ventas.controller';
import { VentasService } from './ventas.service';
import { Venta, VentaSchema } from './schemas/venta.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Venta.name, schema: VentaSchema }])
  ],
  controllers: [VentasController],
  providers: [VentasService],
})
export class VentasModule {}
