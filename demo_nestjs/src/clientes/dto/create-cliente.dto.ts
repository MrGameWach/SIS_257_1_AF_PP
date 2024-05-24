import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
export class CreateClienteDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
    @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
    @MaxLength(100, { message: 'El campo nombre no debe ser mayor a 100 caracteres' })
    @MinLength(2, { message: 'El campo nombre no debe ser menor a 2 caracteres' })
    readonly nombre: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo apellido no debe ser vacío' })
    @IsString({ message: 'El campo apellido debe ser de tipo cadena' })
    @MaxLength(100, { message: 'El campo apellido no debe ser mayor a 50 caracteres' })
    @MinLength(5, { message: 'El campo apellido no debe ser menor a 5 caracteres' })
    readonly apellido: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo sexo no debe ser vacío' })
    @IsString({ message: 'El campo sexo debe ser de tipo cadena' })
    @MaxLength(50, { message: 'El campo sexo no debe ser mayor a 50 caracteres' })
    @MinLength(5, { message: 'El campo sexo no debe ser menor a 5 caracteres' })
    readonly sexo: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo direccion no debe ser vacío' })
    @IsString({ message: 'El campo direccion debe ser de tipo cadena' })
    @MaxLength(50, { message: 'El campo direccion no debe ser mayor a 50 caracteres' })
    @MinLength(5, { message: 'El campo direccion no debe ser menor a 5 caracteres' })
    readonly direccion: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo telefono no debe ser vacío' })
    @IsString({ message: 'El campo telefono debe ser de tipo cadena' })
    @MaxLength(50, { message: 'El campo telefono no debe ser mayor a 50 caracteres' })
    @MinLength(5, { message: 'El campo telefono no debe ser menor a 5 caracteres' })
    readonly telefono: string;
}
