import { Test, TestingModule } from '@nestjs/testing';
import { FetchProduct } from './product.service';

describe('ProductService', () => {
  let service: FetchProduct;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FetchProduct],
    }).compile();

    service = module.get<FetchProduct>(FetchProduct);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
