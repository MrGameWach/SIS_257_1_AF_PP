
import { DetalleVenta } from 'src/detalle-ventas/entities/detalle-venta.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,

} from 'typeorm';

@Entity('medicamentos')
export class Medicamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 100, nullable: false })
  nombre: string;

  @Column('float', { nullable: false })
  precio: number;

  @Column('integer', { nullable: false })
  cantidad: number;
  @Column('varchar', { length: 100, nullable: false })
  tipo: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;
  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @ManyToOne(() => DetalleVenta, detalleVenta => detalleVenta.medicamentos)
  @JoinColumn({ name: 'id_detalleVenta', referencedColumnName: 'id' })
  detalleVenta: DetalleVenta;
}