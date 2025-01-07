import { Controller, Get } from '@nestjs/common';
import { AppwriteService } from 'src/appwrite/appwrite.service';

@Controller('appwrite-bucket')
export class AppwriteBucketController {
  private readonly bucketId = '677b64a8001ae0277459';
  constructor(private readonly appwriteService: AppwriteService) {}

  @Get()
  async getBucket() {
    const result = this.appwriteService.listBucketFiles(this.bucketId);
    const image = (await result).files[0].$id;
    const imgUrl = this.appwriteService.getFile(this.bucketId, image);
    return {
      message: 'Bucket retrieved successfully',
      data: imgUrl,
      data2: await result,
    };
  }
}
