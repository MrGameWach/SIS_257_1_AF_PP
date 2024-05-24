import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMedicamentoDto } from './dto/create-medicamento.dto';
import { UpdateMedicamentoDto } from './dto/update-medicamento.dto';
import { Medicamento } from './entities/medicamento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MedicamentosService {
  constructor(
    @InjectRepository(Medicamento) private medicamentosRepository: Repository<Medicamento>,
  ) { }
  async create(createMedicamentoDto: CreateMedicamentoDto): Promise<Medicamento> {
    const existe = await this.medicamentosRepository.findOneBy({
      nombre: createMedicamentoDto.nombre.trim(),
      precio: createMedicamentoDto.precio,
      cantidad: createMedicamentoDto.cantidad,
      tipo: createMedicamentoDto.tipo.trim(),
    });

    if (existe) {
      throw new ConflictException('El medicamento ya existe');
    }

    return this.medicamentosRepository.save({
      nombre: createMedicamentoDto.nombre.trim(),
      precio: createMedicamentoDto.precio,
      cantidad: createMedicamentoDto.cantidad,
      tipo: createMedicamentoDto.tipo.trim(),
    });
  }

  async findAll(): Promise<Medicamento[]> {
    return this.medicamentosRepository.find();
  }

  async findOne(id: number): Promise<Medicamento> {
    const medicamento = await this.medicamentosRepository.findOneBy({ id });
    if (!medicamento) {
      throw new NotFoundException(`El intérprete ${id} no existe`);
    }
    return medicamento;
  }

  async update(id: number, updateMedicamentoDto: UpdateMedicamentoDto): Promise<Medicamento> {
    const medicamento = await this.findOne(id);
    const medicamentoUpdate = Object.assign(medicamento, updateMedicamentoDto);
    return this.medicamentosRepository.save(medicamentoUpdate);
  }

  async remove(id: number) {
    const medicamento = await this.findOne(id);
    return this.medicamentosRepository.delete(medicamento.id);
  }
}
