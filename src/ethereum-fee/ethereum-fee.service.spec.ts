import { Test, TestingModule } from '@nestjs/testing';
import { EthereumFeeService } from './ethereum-fee.service';

describe('EthereumFeeService', () => {
  let service: EthereumFeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EthereumFeeService],
    }).compile();

    service = module.get<EthereumFeeService>(EthereumFeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
