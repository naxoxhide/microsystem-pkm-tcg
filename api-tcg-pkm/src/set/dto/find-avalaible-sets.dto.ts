import {
  IsString,
  IsOptional,
  IsInt,
  IsDateString,
  IsUrl,
} from 'class-validator';

export class AvailableSetDto {
  @IsString()
  id: string; // Identificador único de la tarjeta

  @IsString()
  name: string; // Nombre de la tarjeta

  @IsString()
  series: string; // Serie a la que pertenece la tarjeta

  @IsOptional()
  @IsInt()
  printedTotal?: number; // Total impreso (puede ser opcional si no siempre está presente)

  @IsOptional()
  @IsInt()
  total?: number; // Total (puede ser opcional)

  @IsOptional()
  @IsString()
  ptcgoCode?: string; // Código de la tarjeta para PTCGO

  @IsOptional()
  @IsDateString()
  releaseDate?: string; // Fecha de lanzamiento (en formato YYYY-MM-DD)

  @IsOptional()
  @IsDateString()
  updatedAt?: string; // Fecha de última actualización (en formato ISO 8601 con zona horaria)

  @IsOptional()
  @IsUrl()
  symbolUrl?: string; // URL del símbolo de la tarjeta

  @IsOptional()
  @IsUrl()
  logoUrl?: string; // URL del logo de la tarjeta
}
