import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDetalleVentaDto } from './dto/create-detalle-venta.dto';
import { UpdateDetalleVentaDto } from './dto/update-detalle-venta.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DetalleVenta } from './entities/detalle-venta.entity';
import { Venta } from 'src/ventas/entities/venta.entity';
@Injectable()
export class DetalleVentasService {
  constructor(@InjectRepository(DetalleVenta) private detalleVentasRepository: Repository<DetalleVenta>) {}

  async create(createDetalleVentaDto: CreateDetalleVentaDto): Promise<DetalleVenta> {
    const existe = await this.detalleVentasRepository.findOneBy({
      cantidad: createDetalleVentaDto.cantidad,
      precio: createDetalleVentaDto.precio,
      descuento: createDetalleVentaDto.descuento,
      medicamentos: { id: createDetalleVentaDto.idMedicamento },
      venta: { id: createDetalleVentaDto.idVenta },
    });

    if (existe) {
      throw new ConflictException('El detalle venta ya existe');
    }

    return this.detalleVentasRepository.save({
      cantidad: createDetalleVentaDto.cantidad,
      precio: createDetalleVentaDto.precio,
      descuento: createDetalleVentaDto.descuento,
      medicamento: { id: createDetalleVentaDto.idMedicamento },
      venta: { id: createDetalleVentaDto.idVenta },
    });
  }

  async findAll(): Promise<DetalleVenta[]> {
    return this.detalleVentasRepository.find({ relations: ['venta'] });
  }

  async findOne(id: number): Promise<DetalleVenta> {
    const detalleVenta = await this.detalleVentasRepository.findOne({
      where: { id },
      relations: ['venta'],
    });
    if (!detalleVenta) {
      throw new NotFoundException(`El detalle venta ${id} no existe`);
    }
    return detalleVenta;
  }

  async update(id: number, updateDetalleVentaDto: UpdateDetalleVentaDto): Promise<DetalleVenta> {
    const detalleVenta = await this.findOne(id);
    const detalleVentaUpdate = Object.assign(detalleVenta, updateDetalleVentaDto);
    detalleVentaUpdate.venta = { id: updateDetalleVentaDto.idVenta } as Venta;
    return this.detalleVentasRepository.save(detalleVentaUpdate);
  }

  async remove(id: number) {
    const detalleVenta = await this.findOne(id);
    return this.detalleVentasRepository.delete(detalleVenta.id);
  }
}
