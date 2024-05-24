import { Venta } from 'src/ventas/entities/venta.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('empleados')
export class Empleado {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 50, nullable: false })
    nombre: string;
    @Column('varchar', { length: 50, nullable: true })
    apellido: string;
    @Column('varchar', { length: 50, nullable: true })
    cargo: string;
    @Column('date', { name: 'fecha_contratacion' })
    fecha_contratacion: Date;
    @Column('decimal', { name: 'salario' })
    salario: number;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;
    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @OneToMany(() => Venta, venta => venta.empleado)
    ventas: Venta[];


}
