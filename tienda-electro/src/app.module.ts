import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductosModule } from './producto/producto.module';
import { VentasModule } from './ventas/ventas.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://my-mongo:27017/Tienda'),
    ProductosModule,
    VentasModule
  ],
})
export class AppModule {}
