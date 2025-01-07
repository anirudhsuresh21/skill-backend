import { Controller, Get } from '@nestjs/common';
import { AppwriteService } from 'src/appwrite/appwrite.service';
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

@Controller('appwrite-bucket')
export class AppwriteBucketController {
  private readonly bucketId = process.env.BUCKET_ID;
  constructor(private readonly appwriteService: AppwriteService) { }

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
