import { IsEmail, IsString, MinLength, MaxLength } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(3)
  @MaxLength(40)
  name!: string;

  @IsString()
  @MinLength(8)
  password!: string;
}
