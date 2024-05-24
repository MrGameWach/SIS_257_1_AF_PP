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

export class CreateMedicamentoDto {

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo nombre no debe ser mayor a 100 caracteres' })
  @MinLength(2, { message: 'El campo nombre no debe ser menor a 2 caracteres' })
  readonly nombre: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo precio no debe ser vacío' })
  @IsNumber({}, { message: 'El campo precio debe ser de tipo numérico' })
  readonly precio: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo cantidad no debe ser vacío' })
  @IsNumber({}, { message: 'El campo cantidad debe ser de tipo numérico' })
  readonly cantidad: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo tipo no debe ser vacío' })
  @IsString({ message: 'El campo tipo debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo tipo no debe ser mayor a 100 caracteres' })
  @MinLength(2, { message: 'El campo tipo no debe ser menor a 2 caracteres' })
  readonly tipo: string;
  @ApiProperty()
  @IsDefined({ message: 'El campo idDetalleVenta debe estar definido' })
  @IsNumber({}, { message: 'El campo idDetalleVenta debe ser de tipo numérico' })
  readonly idDetalleVenta: number;


 
}
