import { IsInt, IsNotEmpty, Min, Max } from 'class-validator';

export class SuperheroDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  superpower: string;

  @IsInt()
  @Min(1)
  @Max(10)
  humilityScore: number;
}