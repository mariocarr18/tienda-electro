import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVentaDto } from './dto/create-venta.dto';
import { Venta } from './schemas/venta.schema';

@Injectable()
export class VentasService {
  constructor(@InjectModel(Venta.name) private ventaModel: Model<Venta>) {}

  async create(createVentaDto: CreateVentaDto): Promise<Venta> {
    const createdVenta = new this.ventaModel(createVentaDto);
    return createdVenta.save();
  }

  async findAll(): Promise<Venta[]> {
    return this.ventaModel.find().exec();
  }

  async reporteCategorias(): Promise<any> {
    return this.ventaModel.aggregate([
      {
        $lookup: {
          from: 'productos', // Nombre de la colección de productos en MongoDB
          localField: 'producto', // Campo en la colección de ventas
          foreignField: '_id', // Campo en la colección de productos
          as: 'producto_info'
        }
      },
      { $unwind: '$producto_info' },
      {
        $group: {
          _id: '$producto_info.categoria',
          totalVentas: { $sum: '$precioTotal' },
          cantidad: { $sum: '$cantidad' }
        }
      }
    ]);
  }

}

