import { ArrayMinSize, IsArray, IsDateString, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateDecisionDto {
  @IsString()
  @MinLength(5)
  title!: string;

  @IsString()
  @MinLength(10)
  description!: string;

  @IsString()
  categoryId!: string;

  @IsArray()
  @ArrayMinSize(2)
  options!: string[];

  @IsOptional()
  @IsArray()
  tags?: string[];

  @IsOptional()
  @IsDateString()
  expirationDate?: string;
}
