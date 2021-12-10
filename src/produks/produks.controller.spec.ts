import { Test, TestingModule } from '@nestjs/testing';
import { ProduksController } from './produks.controller';
import { ProduksService } from './produks.service';

describe('ProduksController', () => {
  let controller: ProduksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProduksController],
      providers: [ProduksService],
    }).compile();

    controller = module.get<ProduksController>(ProduksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
