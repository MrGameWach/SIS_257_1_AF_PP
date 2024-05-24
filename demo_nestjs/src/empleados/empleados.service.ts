import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { Empleado } from './entities/empleado.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmpleadosService {
  constructor(@InjectRepository(Empleado) private empleadosRepository: Repository<Empleado>) {}
  
  async create(createEmpleadoDto: CreateEmpleadoDto):Promise<Empleado>{
    const existe = await this.empleadosRepository.findOneBy({
      
      nombre: createEmpleadoDto.nombre.trim(),
      apellido:createEmpleadoDto.apellido.trim(),
      cargo: createEmpleadoDto.cargo.trim(),
      fecha_contratacion:createEmpleadoDto.fecha_contratacion,
      salario: createEmpleadoDto.salario,
      
    });

    if (existe) {
      throw new ConflictException('El empleado ya existe');
    }

    return this.empleadosRepository.save({
      nombre: createEmpleadoDto.nombre.trim(),
      apellido:createEmpleadoDto.apellido.trim(),
      cargo: createEmpleadoDto.cargo.trim(),
      fecha_contratacion:createEmpleadoDto.fecha_contratacion,
      salario:createEmpleadoDto.salario,
      
    });
  }

  async findAll():Promise<Empleado[]> {
    return this.empleadosRepository.find();
  }

  async findOne(id: number) {
    const empleado = await this.empleadosRepository.findOneBy({ id });
    if (!empleado) {
      throw new NotFoundException(`El empleado ${id} no existe`);
    }
    return empleado;
  }

  async update(id: number, updateEmpleadoDto: UpdateEmpleadoDto):Promise<Empleado> {
    const empleado = await this.findOne(id);
    const empleadoUpdate = Object.assign(empleado, updateEmpleadoDto);
    return this.empleadosRepository.save(empleadoUpdate);
  }

  async remove(id: number) {
    const Empleado = await this.findOne(id);
    return this.empleadosRepository.delete(Empleado.id);
  }
}
