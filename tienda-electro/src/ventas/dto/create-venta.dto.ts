export class CreateVentaDto {
    readonly producto: string;  
    readonly cantidad: number;
    readonly precioTotal: number;
    readonly fecha: Date;
  }