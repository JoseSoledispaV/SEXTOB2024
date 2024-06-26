import { Test, TestingModule } from '@nestjs/testing';
import { GuiaController } from './guia.controller';
import { GuiaService } from './guia.service';

describe('GuiaController', () => {
  let controller: GuiaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GuiaController],
      providers: [GuiaService],
    }).compile();

    controller = module.get<GuiaController>(GuiaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
