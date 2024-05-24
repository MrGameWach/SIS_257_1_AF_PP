import { ApiProperty } from '@nestjs/swagger';
import { 
    IsDateString,
    IsDefined,
    IsNotEmpty,
    IsNumber,
    IsString,
    MaxLength,
    MinLength,} from 'class-validator';

export class CreateEmpleadoDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
    @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
    @MaxLength(50, { message: 'El campo nombre no debe ser mayor a 50 caracteres' })
    @MinLength(4, { message: 'El campo nombre no debe ser menor a 4 caracteres' })
    readonly nombre: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo apellido no debe ser vacío' })
    @IsString({ message: 'El campo apellido debe ser de tipo cadena' })
    @MaxLength(50, { message: 'El campo apellido no debe ser mayor a 50 caracteres' })
    @MinLength(5, { message: 'El campo apellido no debe ser menor a 5 caracteres' })
    readonly apellido: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo cargo no debe ser vacío' })
    @IsString({ message: 'El campo cargo debe ser de tipo cadena' })
    @MaxLength(50, { message: 'El campo cargo no debe ser mayor a 50 caracteres' })
    @MinLength(5, { message: 'El campo cargo no debe ser menor a 5 caracteres' })
    readonly cargo: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo fecha_contratacion no debe ser vacío' })
    @IsDateString({}, { message: 'El campo fecha_contratacion debe ser de tipo fecha' })
    readonly fecha_contratacion: Date;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo salario no debe ser vacío' })
    @IsNumber({}, { message: 'El campo salario debe ser de tipo numérico' })
    readonly salario: number;
}
