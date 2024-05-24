import { ApiProperty } from '@nestjs/swagger';
import {
    IsDateString,
    IsDefined,
    IsNotEmpty,
    IsNumber,
    IsString,
    MaxLength,
    MinLength,
} from 'class-validator';
export class CreateVentaDto {
    @ApiProperty({ example: '2024-04-13' })
    @IsNotEmpty({ message: 'El campo fechaVenta no debe ser vacío' })
    @IsDateString({}, { message: 'El campo fechaVenta debe ser de tipo fecha' })
    readonly fecha_Venta: Date;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo precio no debe ser vacío' })
    @IsNumber({}, { message: 'El campo precio debe ser de tipo numérico' })
    readonly total_Venta: number;

    @ApiProperty()
    @IsDefined({ message: 'El campo idInterprete debe estar definido' })
    @IsNumber({}, { message: 'El campo idInterprete debe ser de tipo numérico' })
    readonly idCliente: number;

    @ApiProperty()
    @IsDefined({ message: 'El campo idInterprete debe estar definido' })
    @IsNumber({}, { message: 'El campo idInterprete debe ser de tipo numérico' })
    readonly idEmpleado: number;
    
}
