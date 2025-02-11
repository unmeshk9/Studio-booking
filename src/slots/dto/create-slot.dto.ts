import { IsDateString, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateSlotDto {
  @IsDateString()
  startTime: Date;

  @IsDateString()
  endTime: Date;

  @IsNumber()
  price: number;

  @IsString()
  @IsOptional()
  description?: string;
} 