
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente) private clientesRepository: Repository<Cliente>,
  ) { }

  async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    const existe = await this.clientesRepository.findOneBy({
      nombre: createClienteDto.nombre.trim(),
      apellido: createClienteDto.apellido.trim(),
      sexo: createClienteDto.sexo.trim(),
      direccion: createClienteDto.direccion.trim(),
      telefono: createClienteDto.telefono.trim(),

    });

    if (existe) {
      throw new ConflictException('El cliente ya existe');
    }

    return this.clientesRepository.save({
      nombre: createClienteDto.nombre.trim(),
      apellido: createClienteDto.apellido.trim(),
      sexo: createClienteDto.sexo.trim(),
      direccion: createClienteDto.direccion.trim(),
      telefono: createClienteDto.telefono.trim(),
    });
  }

  async findAll(): Promise<Cliente[]> {
    return this.clientesRepository.find();
  }

  async findOne(id: number): Promise<Cliente> {
    const cliente = await this.clientesRepository.findOneBy({ id });
    if (!cliente) {
      throw new NotFoundException(`El cliente ${id} no existe`);
    }
    return cliente;
  }

  async update(id: number, updateClienteDto: UpdateClienteDto): Promise<Cliente> {
    const cliente = await this.findOne(id);
    const clienteUpdate = Object.assign(cliente, updateClienteDto);
    return this.clientesRepository.save(clienteUpdate);
  }

  async remove(id: number) {
    const cliente = await this.findOne(id);
    return this.clientesRepository.delete(cliente.id);
  }
}
