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
export class CreateDetalleVentaDto {
    

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo precio no debe ser vacío' })
    @IsNumber({}, { message: 'El campo precio debe ser de tipo numérico' })
    readonly cantidad: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo precio no debe ser vacío' })
    @IsNumber({}, { message: 'El campo precio debe ser de tipo numérico' })
    readonly precio: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo precio no debe ser vacío' })
    @IsNumber({}, { message: 'El campo precio debe ser de tipo numérico' })
    readonly descuento: number;

    @ApiProperty()
    @IsDefined({ message: 'El campo idInterprete debe estar definido' })
    @IsNumber({}, { message: 'El campo idInterprete debe ser de tipo numérico' })
    readonly idMedicamento: number;

    @ApiProperty()
    @IsDefined({ message: 'El campo idInterprete debe estar definido' })
    @IsNumber({}, { message: 'El campo idInterprete debe ser de tipo numérico' })
    readonly idVenta: number;
}
