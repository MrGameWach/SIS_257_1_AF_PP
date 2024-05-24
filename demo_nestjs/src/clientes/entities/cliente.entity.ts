import { Venta } from 'src/ventas/entities/venta.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  @Entity('clientes')
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('varchar', { length: 100, nullable: false })
    nombre: string;
  
    @Column('varchar', { length: 100, nullable: false })
    apellido: string;

    @Column('varchar', { length: 50, nullable: true })
    sexo: string;

    @Column('varchar', { length: 50, nullable: true })
    direccion: string;

    @Column('varchar', { length: 50, nullable: true })
    telefono: string;
  
    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;
  
    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @OneToMany(() => Venta, venta => venta.cliente)
    ventas: Venta[];

}
