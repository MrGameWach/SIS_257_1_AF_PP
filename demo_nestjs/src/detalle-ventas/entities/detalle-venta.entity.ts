import { Medicamento } from 'src/medicamentos/entities/medicamento.entity';
import { Venta } from 'src/ventas/entities/venta.entity';

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

@Entity('detalleVentas')
export class DetalleVenta {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    cantidad: number;

    @Column({ nullable: false })
    precio: number;

    @Column({ nullable: false })
    descuento: number;


    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;
    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @ManyToOne(() => Venta, venta => venta.detalleVenta)
    @JoinColumn({ name: 'id_venta', referencedColumnName: 'id' })
    venta: Venta;
    @OneToMany(() => Medicamento, medicamento => medicamento.detalleVenta)
    medicamentos: Medicamento[];

}
