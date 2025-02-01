import { Injectable } from '@nestjs/common';
import { SuperheroDto } from './superhero.dto';

@Injectable()
export class SuperheroesService {
    private superheroes: SuperheroDto[] = [];

  create(superheroDto: SuperheroDto) {
    this.superheroes.push(superheroDto);
    return superheroDto;
  }

  getAll() {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
