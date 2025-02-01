import { Controller, Get, Post, Body } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { SuperheroDto } from './superhero.dto';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post('add')
  create(@Body() createSuperheroDto: SuperheroDto) {
    return this.superheroesService.create(createSuperheroDto);
  }

  @Get('list')
  getAll() {
    return this.superheroesService.getAll();
  }
}