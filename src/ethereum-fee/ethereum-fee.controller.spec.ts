import { Test, TestingModule } from '@nestjs/testing';
import { EthereumFeeController } from './ethereum-fee.controller';

describe('EthereumFeeController', () => {
  let controller: EthereumFeeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EthereumFeeController],
    }).compile();

    controller = module.get<EthereumFeeController>(EthereumFeeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
