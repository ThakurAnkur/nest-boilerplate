import { Test, TestingModule } from '@nestjs/testing';
import { AltTestlibService } from './alt-testlib.service';

describe('AltTestlibService', () => {
  let service: AltTestlibService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AltTestlibService],
    }).compile();

    service = module.get<AltTestlibService>(AltTestlibService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
