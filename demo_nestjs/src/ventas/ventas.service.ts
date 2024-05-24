import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { Repository } from 'typeorm';
import { Venta } from './entities/venta.entity';
import { Cliente } from 'src/clientes/entities/cliente.entity';

@Injectable()
export class VentasService {
  constructor(@InjectRepository(Venta) private ventasRepository: Repository<Venta>) {}

  async create(createVentaDto: CreateVentaDto): Promise<Venta> {
    const existe = await this.ventasRepository.findOneBy({
      total_Venta: createVentaDto.total_Venta,
      fecha_Venta:createVentaDto.fecha_Venta,
      cliente: { id: createVentaDto.idCliente },
      empleado: { id: createVentaDto.idEmpleado },

    });

    if (existe) {
      throw new ConflictException('El álbum ya existe');
    }

    return this.ventasRepository.save({
      total_Venta: createVentaDto.total_Venta,
      fecha_Venta:createVentaDto.fecha_Venta,
      cliente: { id: createVentaDto.idCliente },
      empleado: { id: createVentaDto.idEmpleado },
    });
  }

  async findAll(): Promise<Venta[]> {
    return this.ventasRepository.find({ relations: ['cliente'] });
  }

  async findOne(id: number): Promise<Venta> {
    const venta = await this.ventasRepository.findOne({
      where: { id },
      relations: ['cliente'],
    });
    if (!venta) {
      throw new NotFoundException(`La venta ${id} no existe`);
    }
    return venta;
  }

  async update(id: number, updateVentaDto: UpdateVentaDto): Promise<Venta> {
    const venta = await this.findOne(id);
    const ventaUpdate = Object.assign(venta, updateVentaDto);
    ventaUpdate.cliente = { id: updateVentaDto.idCliente } as Cliente;
    return this.ventasRepository.save(ventaUpdate);
  }

  async remove(id: number) {
    const venta = await this.findOne(id);
    return this.ventasRepository.delete(venta.id);
  }
}
