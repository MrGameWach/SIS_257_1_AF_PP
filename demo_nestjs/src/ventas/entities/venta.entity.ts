import { Cliente } from 'src/clientes/entities/cliente.entity';
import { DetalleVenta } from 'src/detalle-ventas/entities/detalle-venta.entity';
import { Empleado } from 'src/empleados/entities/empleado.entity';

import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany,
    JoinColumn,
} from 'typeorm';

@Entity('ventas')
export class Venta {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('date', { name: 'fecha_Venta' })
    fecha_Venta: Date;

    @Column({ nullable: false })
    total_Venta: number;


    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;
    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @ManyToOne(() => Empleado, empleado => empleado.ventas)
    @JoinColumn({ name: 'id_empleado', referencedColumnName: 'id' })
    empleado: Empleado;

    @ManyToOne(() => Cliente, cliente => cliente.ventas)
    @JoinColumn({ name: 'id_cliente', referencedColumnName: 'id' })
    cliente: Cliente;

    @OneToMany(() => DetalleVenta, detalleVenta => detalleVenta.venta)
    detalleVenta: DetalleVenta[];
    

    

}
