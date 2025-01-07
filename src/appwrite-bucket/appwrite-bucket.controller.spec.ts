import { Test, TestingModule } from '@nestjs/testing';
import { AppwriteBucketController } from './appwrite-bucket.controller';

describe('AppwriteBucketController', () => {
  let controller: AppwriteBucketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppwriteBucketController],
    }).compile();

    controller = module.get<AppwriteBucketController>(AppwriteBucketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
