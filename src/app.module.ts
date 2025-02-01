import { Module } from '@nestjs/common';
import { SuperheroesService } from './superheroes/superheroes.service';
import { SuperheroesController } from './superheroes/superheroes.controller';

@Module({
  imports: [],
  controllers: [SuperheroesController],
  providers: [SuperheroesService],
})
export class AppModule {}
