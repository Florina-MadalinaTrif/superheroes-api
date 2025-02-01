import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Superheroes-API (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST /superheroes/add - should create a superhero', async () => {
    const superheroData = {
      name: 'Spider-Man',
      superpower: 'Web-slinging',
      humilityScore: 8,
    };

    const response = await request(app.getHttpServer())
      .post('/superheroes/add')
      .send(superheroData)
      .expect(201);

    expect(response.body).toEqual(superheroData);
  });

  it('POST /superheroes/add - should fail if humilityScore is invalid', async () => {
    const invalidData = {
      name: 'Iron Man',
      superpower: 'Technology',
      humilityScore: 15,
    };

    const response = await request(app.getHttpServer())
      .post('/superheroes/add')
      .send(invalidData)
      .expect(400);

    expect(response.body.message).toContain(
      'humilityScore must not be greater than 10',
    );
  });});
