import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Producto } from '../../producto/schemas/producto.schema';

@Schema()
export class Venta extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Producto' })
  producto: Producto | string;

  @Prop({ required: true })
  cantidad: number;

  @Prop({ required: true })
  precioTotal: number;

  @Prop({ required: true })
  fecha: Date;
}

export const VentaSchema = SchemaFactory.createForClass(Venta);
